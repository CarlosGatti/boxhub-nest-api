import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';

import { Decimal } from '@prisma/client/runtime/library';
import { PricingService } from '../pricing/pricing.service';
import { PrismaService } from '../../core/prisma/prisma.service';

export interface Position {
  asset: {
    id: number;
    ticker: string | null;
    name: string;
    type: string;
  };
  quantity: number;
  averageCost: number;
  lastPrice: number | null;
  marketValue: number;
  gainLoss: number;
  gainLossPct: number;
}

export interface PortfolioSummary {
  totalMarketValue: number;
  totalCostBasis: number;
  totalGainLoss: number;
  totalGainLossPct: number;
  positions: Position[];
}

export interface AllocationItem {
  type?: string;
  ticker?: string;
  name?: string;
  value: number;
  pct: number;
}

export interface PortfolioAllocation {
  byType: AllocationItem[];
  byAsset: AllocationItem[];
}

@Injectable()
export class MetricsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly pricingService: PricingService,
  ) {}

  async getPortfolioSummary(portfolioId: number, userId: number): Promise<PortfolioSummary> {
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

    // Get all holdings with assets
    const holdings = await this.prisma.holding.findMany({
      where: { portfolioId },
      include: {
        asset: true,
      },
    });

    const positions: Position[] = [];
    let totalMarketValue = 0;
    let totalCostBasis = 0;

    for (const holding of holdings) {
      const quantity = parseFloat(holding.quantity.toString());
      const averageCost = parseFloat(holding.averageCost.toString());
      const costBasis = quantity * averageCost;

      // Get latest price
      const latestPrice = await this.pricingService.getLatestPrice(holding.assetId);
      const lastPrice = latestPrice ? parseFloat(latestPrice.price.toString()) : null;
      const marketValue = lastPrice ? quantity * lastPrice : 0;

      const gainLoss = marketValue - costBasis;
      const gainLossPct = costBasis > 0 ? (gainLoss / costBasis) * 100 : 0;

      positions.push({
        asset: {
          id: holding.asset.id,
          ticker: holding.asset.ticker,
          name: holding.asset.name,
          type: holding.asset.type,
        },
        quantity,
        averageCost,
        lastPrice,
        marketValue,
        gainLoss,
        gainLossPct,
      });

      totalMarketValue += marketValue;
      totalCostBasis += costBasis;
    }

    const totalGainLoss = totalMarketValue - totalCostBasis;
    const totalGainLossPct = totalCostBasis > 0 ? (totalGainLoss / totalCostBasis) * 100 : 0;

    return {
      totalMarketValue,
      totalCostBasis,
      totalGainLoss,
      totalGainLossPct,
      positions,
    };
  }

  async getPortfolioAllocation(portfolioId: number, userId: number): Promise<PortfolioAllocation> {
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

    // Get all holdings with assets
    const holdings = await this.prisma.holding.findMany({
      where: { portfolioId },
      include: {
        asset: true,
      },
    });

    // Calculate market values
    const assetValues = new Map<number, number>();
    const typeValues = new Map<string, number>();
    let totalValue = 0;

    for (const holding of holdings) {
      const quantity = parseFloat(holding.quantity.toString());
      const latestPrice = await this.pricingService.getLatestPrice(holding.assetId);
      const price = latestPrice ? parseFloat(latestPrice.price.toString()) : 0;
      const value = quantity * price;

      assetValues.set(holding.assetId, value);
      const currentTypeValue = typeValues.get(holding.asset.type) || 0;
      typeValues.set(holding.asset.type, currentTypeValue + value);
      totalValue += value;
    }

    // Build allocation by type
    const byType: AllocationItem[] = Array.from(typeValues.entries()).map(([type, value]) => ({
      type,
      value,
      pct: totalValue > 0 ? (value / totalValue) * 100 : 0,
    }));

    // Build allocation by asset
    const byAsset: AllocationItem[] = [];
    for (const holding of holdings) {
      const value = assetValues.get(holding.asset.id) || 0;
      byAsset.push({
        ticker: holding.asset.ticker || undefined,
        name: holding.asset.name,
        type: holding.asset.type,
        value,
        pct: totalValue > 0 ? (value / totalValue) * 100 : 0,
      });
    }

    // Sort by value descending
    byType.sort((a, b) => b.value - a.value);
    byAsset.sort((a, b) => b.value - a.value);

    return {
      byType,
      byAsset,
    };
  }

  async getNetWorthSummary(userId: number) {
    // Get all user portfolios
    const portfolios = await this.prisma.portfolio.findMany({
      where: { userId },
      include: {
        holdings: {
          include: {
            asset: true,
          },
        },
      },
    });

    let totalNetWorth = 0;
    const portfolioSummaries = [];

    for (const portfolio of portfolios) {
      const summary = await this.getPortfolioSummary(portfolio.id, userId);
      totalNetWorth += summary.totalMarketValue;
      portfolioSummaries.push({
        portfolioId: portfolio.id,
        portfolioName: portfolio.name,
        marketValue: summary.totalMarketValue,
        costBasis: summary.totalCostBasis,
        gainLoss: summary.totalGainLoss,
        gainLossPct: summary.totalGainLossPct,
      });
    }

    return {
      totalNetWorth,
      portfolioCount: portfolios.length,
      portfolios: portfolioSummaries,
    };
  }
}
