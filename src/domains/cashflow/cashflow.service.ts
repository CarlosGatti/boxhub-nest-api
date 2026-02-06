import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service';
import { CreateCashflowCategoryInput } from './dto/create-cashflow-category.input';
import { CreateCashflowEntryInput } from './dto/create-cashflow-entry.input';
import { CreateRecurringCashflowInput } from './dto/create-recurring-cashflow.input';
import { CashflowSummary } from './types/cashflow-summary.type';
import { CashflowType } from '@generated/prisma/cashflow-type.enum';
import { Decimal } from '@prisma/client/runtime/library';

@Injectable()
export class CashflowService {
  constructor(private readonly prisma: PrismaService) {}

  // Categories
  async createCategory(userId: number, data: CreateCashflowCategoryInput) {
    return this.prisma.cashflowCategory.create({
      data: {
        userId,
        name: data.name,
        type: data.type,
        description: data.description,
        color: data.color,
        icon: data.icon,
      },
    });
  }

  async findAllCategories(userId: number) {
    return this.prisma.cashflowCategory.findMany({
      where: { userId },
      orderBy: { name: 'asc' },
    });
  }

  // Entries
  async createEntry(userId: number, data: CreateCashflowEntryInput) {
    // Verify category belongs to user
    const category = await this.prisma.cashflowCategory.findUnique({
      where: { id: data.categoryId },
    });

    if (!category) {
      throw new NotFoundException(`Category with ID ${data.categoryId} not found`);
    }

    if (category.userId !== userId) {
      throw new ForbiddenException('You do not have access to this category');
    }

    if (category.type !== data.type) {
      throw new BadRequestException(
        `Category type ${category.type} cannot be used for ${data.type}`,
      );
    }

    return this.prisma.cashflowEntry.create({
      data: {
        userId,
        categoryId: data.categoryId,
        type: data.type,
        amount: new Decimal(data.amount),
        source: data.source,
        description: data.description,
        date: data.date || new Date(),
        notes: data.notes,
      },
      include: {
        category: true,
      },
    });
  }

  async findEntries(userId: number, from?: Date, to?: Date) {
    const where: any = { userId };

    if (from || to) {
      where.date = {};
      if (from) where.date.gte = from;
      if (to) where.date.lte = to;
    }

    return this.prisma.cashflowEntry.findMany({
      where,
      include: {
        category: true,
      },
      orderBy: { date: 'desc' },
    });
  }

  async deleteEntry(id: number, userId: number) {
    const entry = await this.prisma.cashflowEntry.findUnique({
      where: { id },
    });

    if (!entry) {
      throw new NotFoundException(`Entry with ID ${id} not found`);
    }

    if (entry.userId !== userId) {
      throw new ForbiddenException('You do not have access to this entry');
    }

    return this.prisma.cashflowEntry.delete({
      where: { id },
    });
  }

  // Recurring
  async createRecurring(userId: number, data: CreateRecurringCashflowInput) {
    // Verify category belongs to user
    const category = await this.prisma.cashflowCategory.findUnique({
      where: { id: data.categoryId },
    });

    if (!category) {
      throw new NotFoundException(`Category with ID ${data.categoryId} not found`);
    }

    if (category.userId !== userId) {
      throw new ForbiddenException('You do not have access to this category');
    }

    if (category.type !== data.type) {
      throw new BadRequestException(
        `Category type ${category.type} cannot be used for ${data.type}`,
      );
    }

    return this.prisma.recurringCashflow.create({
      data: {
        userId,
        categoryId: data.categoryId,
        type: data.type,
        amount: new Decimal(data.amount),
        source: data.source,
        description: data.description,
        frequency: data.frequency,
        startDate: data.startDate,
        endDate: data.endDate,
        nextDueDate: data.nextDueDate,
        notes: data.notes,
        isActive: true,
      },
      include: {
        category: true,
      },
    });
  }

  async findRecurring(userId: number) {
    return this.prisma.recurringCashflow.findMany({
      where: { userId },
      include: {
        category: true,
      },
      orderBy: { nextDueDate: 'asc' },
    });
  }

  async deleteRecurring(id: number, userId: number) {
    const recurring = await this.prisma.recurringCashflow.findUnique({
      where: { id },
    });

    if (!recurring) {
      throw new NotFoundException(`Recurring cashflow with ID ${id} not found`);
    }

    if (recurring.userId !== userId) {
      throw new ForbiddenException('You do not have access to this recurring cashflow');
    }

    return this.prisma.recurringCashflow.delete({
      where: { id },
    });
  }

  // Summary
  async getSummary(userId: number, month: string, year: number): Promise<CashflowSummary> {
    const monthNum = this.getMonthNumber(month);
    if (monthNum === -1) {
      throw new NotFoundException(`Invalid month: ${month}`);
    }

    const startDate = new Date(year, monthNum, 1);
    const endDate = new Date(year, monthNum + 1, 0, 23, 59, 59, 999);

    // Get actual entries for the month
    const entries = await this.prisma.cashflowEntry.findMany({
      where: {
        userId,
        date: {
          gte: startDate,
          lte: endDate,
        },
      },
    });

    // Calculate totals
    let totalIncome = new Decimal(0);
    let totalExpenses = new Decimal(0);

    entries.forEach((entry) => {
      if (entry.type === CashflowType.INCOME) {
        totalIncome = totalIncome.add(entry.amount);
      } else {
        totalExpenses = totalExpenses.add(entry.amount);
      }
    });

    // Get active recurring cashflows for prediction
    const recurring = await this.prisma.recurringCashflow.findMany({
      where: {
        userId,
        isActive: true,
        startDate: { lte: endDate },
        OR: [
          { endDate: null },
          { endDate: { gte: startDate } },
        ],
      },
    });

    // Calculate predicted amounts based on recurring cashflows
    let predictedIncome = new Decimal(0);
    let predictedExpenses = new Decimal(0);

    recurring.forEach((item) => {
      if (this.shouldIncludeRecurring(item, startDate, endDate)) {
        const count = this.getOccurrenceCount(item.frequency, startDate, endDate);
        const total = item.amount.mul(count);

        if (item.type === CashflowType.INCOME) {
          predictedIncome = predictedIncome.add(total);
        } else {
          predictedExpenses = predictedExpenses.add(total);
        }
      }
    });

    const netCashflow = totalIncome.sub(totalExpenses);
    const predictedNetCashflow = predictedIncome.sub(predictedExpenses);

    return {
      totalIncome: totalIncome.toNumber(),
      totalExpenses: totalExpenses.toNumber(),
      netCashflow: netCashflow.toNumber(),
      predictedIncome: predictedIncome.toNumber(),
      predictedExpenses: predictedExpenses.toNumber(),
      predictedNetCashflow: predictedNetCashflow.toNumber(),
      month,
      year,
    };
  }

  private getMonthNumber(month: string): number {
    const months: { [key: string]: number } = {
      january: 0,
      february: 1,
      march: 2,
      april: 3,
      may: 4,
      june: 5,
      july: 6,
      august: 7,
      september: 8,
      october: 9,
      november: 10,
      december: 11,
    };
    return months[month.toLowerCase()] ?? -1;
  }

  private shouldIncludeRecurring(
    recurring: any,
    startDate: Date,
    endDate: Date,
  ): boolean {
    if (recurring.startDate > endDate) return false;
    if (recurring.endDate && recurring.endDate < startDate) return false;
    return true;
  }

  private getOccurrenceCount(
    frequency: string | keyof typeof import('@generated/prisma/recurrence-frequency.enum').RecurrenceFrequency,
    startDate: Date,
    endDate: Date,
  ): number {
    const daysDiff = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;

    switch (frequency) {
      case 'DAILY':
        return daysDiff;
      case 'WEEKLY':
        return Math.ceil(daysDiff / 7);
      case 'MONTHLY':
        return 1; // Once per month
      case 'QUARTERLY':
        return Math.floor(daysDiff / 90);
      case 'YEARLY':
        return Math.floor(daysDiff / 365);
      default:
        return 0;
    }
  }
}

