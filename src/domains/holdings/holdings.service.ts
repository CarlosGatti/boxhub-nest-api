import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';

import { CreateHoldingDto } from './dto/create-holding.dto';
import { Decimal } from '@prisma/client/runtime/library';
import { PrismaService } from '../../core/prisma/prisma.service';
import { UpdateHoldingDto } from './dto/update-holding.dto';

@Injectable()
export class HoldingsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(portfolioId: number, userId: number, createHoldingDto: CreateHoldingDto) {
    // Verify portfolio ownership
    const portfolio = await this.prisma.portfolio.findUnique({
      where: { id: portfolioId },
    });

    if (!portfolio) {
      throw new NotFoundException(`Portfolio with ID ${portfolioId} not found`);
    }

    if (portfolio.userId !== userId) {
      throw new ForbiddenException('You do not have access to this portfolio');
    }

    return this.prisma.holding.create({
      data: {
        portfolioId,
        assetId: createHoldingDto.assetId,
        quantity: new Decimal(createHoldingDto.quantity),
        averageCost: new Decimal(createHoldingDto.averageCost),
        notes: createHoldingDto.notes || null,
      },
      include: {
        asset: true,
      },
    });
  }

  async findAll(portfolioId: number, userId: number) {
    // Verify portfolio ownership
    const portfolio = await this.prisma.portfolio.findUnique({
      where: { id: portfolioId },
    });

    if (!portfolio) {
      throw new NotFoundException(`Portfolio with ID ${portfolioId} not found`);
    }

    if (portfolio.userId !== userId) {
      throw new ForbiddenException('You do not have access to this portfolio');
    }

    return this.prisma.holding.findMany({
      where: { portfolioId },
      include: {
        asset: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number, userId: number) {
    const holding = await this.prisma.holding.findUnique({
      where: { id },
      include: {
        portfolio: true,
        asset: true,
      },
    });

    if (!holding) {
      throw new NotFoundException(`Holding with ID ${id} not found`);
    }

    if (holding.portfolio.userId !== userId) {
      throw new ForbiddenException('You do not have access to this holding');
    }

    return holding;
  }

  async update(id: number, userId: number, updateHoldingDto: UpdateHoldingDto) {
    // Verify ownership
    await this.findOne(id, userId);

    const updateData: any = {};
    if (updateHoldingDto.quantity !== undefined) {
      updateData.quantity = new Decimal(updateHoldingDto.quantity);
    }
    if (updateHoldingDto.averageCost !== undefined) {
      updateData.averageCost = new Decimal(updateHoldingDto.averageCost);
    }
    if (updateHoldingDto.notes !== undefined) {
      updateData.notes = updateHoldingDto.notes;
    }

    return this.prisma.holding.update({
      where: { id },
      data: updateData,
      include: {
        asset: true,
      },
    });
  }

  async remove(id: number, userId: number) {
    // Verify ownership
    await this.findOne(id, userId);

    return this.prisma.holding.delete({
      where: { id },
    });
  }
}
