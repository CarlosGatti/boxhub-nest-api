import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../user/current-user.decorator';
import { User } from '../../@generated/user/user.model';
import { CashflowService } from './cashflow.service';
import { CashflowCategory } from '../../@generated/cashflow-category/cashflow-category.model';
import { CashflowEntry } from '../../@generated/cashflow-entry/cashflow-entry.model';
import { RecurringCashflow } from '../../@generated/recurring-cashflow/recurring-cashflow.model';
import { CreateCashflowCategoryInput } from './dto/create-cashflow-category.input';
import { CreateCashflowEntryInput } from './dto/create-cashflow-entry.input';
import { CreateRecurringCashflowInput } from './dto/create-recurring-cashflow.input';
import { CashflowSummary } from './types/cashflow-summary.type';

@Resolver()
export class CashflowResolver {
  constructor(private readonly cashflowService: CashflowService) {}

  // Categories
  @UseGuards(JwtAuthGuard)
  @Query(() => [CashflowCategory], { name: 'cashflowCategories' })
  async getCategories(@CurrentUser() user: User) {
    return this.cashflowService.findAllCategories(user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => CashflowCategory)
  async createCashflowCategory(
    @Args('data') data: CreateCashflowCategoryInput,
    @CurrentUser() user: User,
  ) {
    return this.cashflowService.createCategory(user.id, data);
  }

  // Entries
  @UseGuards(JwtAuthGuard)
  @Query(() => [CashflowEntry], { name: 'cashflowEntries' })
  async getEntries(
    @CurrentUser() user: User,
    @Args('from', { type: () => Date, nullable: true }) from?: Date,
    @Args('to', { type: () => Date, nullable: true }) to?: Date,
  ) {
    return this.cashflowService.findEntries(user.id, from, to);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => CashflowEntry)
  async createCashflowEntry(
    @Args('data') data: CreateCashflowEntryInput,
    @CurrentUser() user: User,
  ) {
    return this.cashflowService.createEntry(user.id, data);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Boolean)
  async deleteCashflowEntry(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser() user: User,
  ) {
    await this.cashflowService.deleteEntry(id, user.id);
    return true;
  }

  // Recurring
  @UseGuards(JwtAuthGuard)
  @Query(() => [RecurringCashflow], { name: 'cashflowRecurring' })
  async getRecurring(@CurrentUser() user: User) {
    return this.cashflowService.findRecurring(user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => RecurringCashflow)
  async createRecurringCashflow(
    @Args('data') data: CreateRecurringCashflowInput,
    @CurrentUser() user: User,
  ) {
    return this.cashflowService.createRecurring(user.id, data);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Boolean)
  async deleteRecurringCashflow(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser() user: User,
  ) {
    await this.cashflowService.deleteRecurring(id, user.id);
    return true;
  }

  // Summary
  @UseGuards(JwtAuthGuard)
  @Query(() => CashflowSummary, { name: 'cashflowSummary' })
  async getSummary(
    @Args('month', { type: () => String }) month: string,
    @Args('year', { type: () => Int }) year: number,
    @CurrentUser() user: User,
  ) {
    return this.cashflowService.getSummary(user.id, month, year);
  }
}

