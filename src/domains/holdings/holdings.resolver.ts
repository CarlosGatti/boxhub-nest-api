import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { Holding } from '@generated/holding/holding.model';
import { JwtAuthGuard } from 'src/core/auth/guards/jwt-auth.guard';
import { CurrentUser } from '../user/current-user.decorator';
import { User } from '@generated/user/user.model';
import { HoldingsService } from './holdings.service';
import { CreateHoldingInput } from './dto/create-holding.input';
import { UpdateHoldingInput } from './dto/update-holding.input';

@Resolver(() => Holding)
export class HoldingsResolver {
  constructor(private readonly holdingsService: HoldingsService) {}

  @UseGuards(JwtAuthGuard)
  @Query(() => [Holding], { name: 'holdings' })
  async findAll(
    @Args('portfolioId', { type: () => Int }) portfolioId: number,
    @CurrentUser() user: User,
  ) {
    return this.holdingsService.findAll(portfolioId, user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => Holding, { name: 'holding', nullable: true })
  async findOne(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser() user: User,
  ) {
    return this.holdingsService.findOne(id, user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Holding)
  async createHolding(
    @Args('portfolioId', { type: () => Int }) portfolioId: number,
    @Args('data') data: CreateHoldingInput,
    @CurrentUser() user: User,
  ) {
    return this.holdingsService.create(portfolioId, user.id, {
      assetId: data.assetId,
      quantity: data.quantity,
      averageCost: data.averageCost,
      notes: data.notes,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Holding)
  async updateHolding(
    @Args('id', { type: () => Int }) id: number,
    @Args('data') data: UpdateHoldingInput,
    @CurrentUser() user: User,
  ) {
    return this.holdingsService.update(id, user.id, {
      quantity: data.quantity,
      averageCost: data.averageCost,
      notes: data.notes,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Boolean)
  async deleteHolding(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser() user: User,
  ) {
    await this.holdingsService.remove(id, user.id);
    return true;
  }
}

