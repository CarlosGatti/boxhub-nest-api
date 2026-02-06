import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/core/auth/guards/jwt-auth.guard';
import { CurrentUser } from '../user/current-user.decorator';
import { User } from '@generated/user/user.model';
import { MetricsService } from './metrics.service';
import { Field, ObjectType, Float } from '@nestjs/graphql';

@ObjectType()
export class Position {
  @Field(() => Int)
  assetId: number;

  @Field(() => String, { nullable: true })
  ticker: string | null;

  @Field(() => String)
  name: string;

  @Field(() => String)
  type: string;

  @Field(() => Float)
  quantity: number;

  @Field(() => Float)
  averageCost: number;

  @Field(() => Float, { nullable: true })
  lastPrice: number | null;

  @Field(() => Float)
  marketValue: number;

  @Field(() => Float)
  gainLoss: number;

  @Field(() => Float)
  gainLossPct: number;
}

@ObjectType()
export class PortfolioSummary {
  @Field(() => Float)
  totalMarketValue: number;

  @Field(() => Float)
  totalCostBasis: number;

  @Field(() => Float)
  totalGainLoss: number;

  @Field(() => Float)
  totalGainLossPct: number;

  @Field(() => [Position])
  positions: Position[];
}

@ObjectType()
export class AllocationItem {
  @Field(() => String, { nullable: true })
  type: string | null;

  @Field(() => String, { nullable: true })
  ticker: string | null;

  @Field(() => String, { nullable: true })
  name: string | null;

  @Field(() => Float)
  value: number;

  @Field(() => Float)
  pct: number;
}

@ObjectType()
export class PortfolioAllocation {
  @Field(() => [AllocationItem])
  byType: AllocationItem[];

  @Field(() => [AllocationItem])
  byAsset: AllocationItem[];
}

@ObjectType()
export class PortfolioSummaryItem {
  @Field(() => Int)
  portfolioId: number;

  @Field(() => String)
  portfolioName: string;

  @Field(() => Float)
  marketValue: number;

  @Field(() => Float)
  costBasis: number;

  @Field(() => Float)
  gainLoss: number;

  @Field(() => Float)
  gainLossPct: number;
}

@ObjectType()
export class NetWorthSummary {
  @Field(() => Float)
  totalNetWorth: number;

  @Field(() => Int)
  portfolioCount: number;

  @Field(() => [PortfolioSummaryItem])
  portfolios: PortfolioSummaryItem[];
}

@Resolver()
export class MetricsResolver {
  constructor(private readonly metricsService: MetricsService) {}

  @UseGuards(JwtAuthGuard)
  @Query(() => PortfolioSummary, { name: 'portfolioSummary' })
  async getPortfolioSummary(
    @Args('portfolioId', { type: () => Int }) portfolioId: number,
    @CurrentUser() user: User,
  ) {
    const summary = await this.metricsService.getPortfolioSummary(portfolioId, user.id);
    return {
      ...summary,
      positions: summary.positions.map((p) => ({
        assetId: p.asset.id,
        ticker: p.asset.ticker,
        name: p.asset.name,
        type: p.asset.type,
        quantity: p.quantity,
        averageCost: p.averageCost,
        lastPrice: p.lastPrice,
        marketValue: p.marketValue,
        gainLoss: p.gainLoss,
        gainLossPct: p.gainLossPct,
      })),
    };
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => PortfolioAllocation, { name: 'portfolioAllocation' })
  async getPortfolioAllocation(
    @Args('portfolioId', { type: () => Int }) portfolioId: number,
    @CurrentUser() user: User,
  ) {
    const allocation = await this.metricsService.getPortfolioAllocation(portfolioId, user.id);
    return {
      byType: allocation.byType.map((item) => ({
        type: item.type || null,
        ticker: null,
        name: null,
        value: item.value,
        pct: item.pct,
      })),
      byAsset: allocation.byAsset.map((item) => ({
        type: item.type || null,
        ticker: item.ticker || null,
        name: item.name || null,
        value: item.value,
        pct: item.pct,
      })),
    };
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => NetWorthSummary, { name: 'netWorthSummary' })
  async getNetWorthSummary(@CurrentUser() user: User) {
    return this.metricsService.getNetWorthSummary(user.id);
  }
}

