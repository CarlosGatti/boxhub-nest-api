import { Injectable, NotFoundException } from '@nestjs/common';

import { Decimal } from '@prisma/client/runtime/library';
import { IPriceProvider } from './interfaces/price-provider.interface';
import { MockPriceProvider } from './providers/mock.provider';
import { PrismaService } from '../prisma.service';
import { YahooPriceProvider } from './providers/yahoo.provider';

@Injectable()
export class PricingService {
  private provider: IPriceProvider;

  constructor(
    private readonly prisma: PrismaService,
    private readonly mockProvider: MockPriceProvider,
    private readonly yahooProvider: YahooPriceProvider,
  ) {
    // Initialize provider based on env var
    const providerName = process.env.PRICE_PROVIDER || 'mock';
    this.provider = providerName === 'yahoo' ? this.yahooProvider : this.mockProvider;
  }

  async getQuote(ticker: string) {
    const quote = await this.provider.getQuote(ticker);

    return {
      ...quote,
      cachedAt: new Date(),
    };
  }

  async syncPricesForAsset(assetId: number) {
    const asset = await this.prisma.asset.findUnique({
      where: { id: assetId },
    });

    if (!asset) {
      throw new NotFoundException(`Asset with ID ${assetId} not found`);
    }

    if (!asset.ticker) {
      throw new Error(`Asset ${assetId} does not have a ticker`);
    }

    const quote = await this.provider.getQuote(asset.ticker);

    // Upsert price point
    await this.prisma.pricePoint.upsert({
      where: {
        assetId_asOf: {
          assetId,
          asOf: quote.asOf,
        },
      },
      create: {
        assetId,
        price: new Decimal(quote.price),
        currency: quote.currency,
        asOf: quote.asOf,
        source: quote.source,
      },
      update: {
        price: new Decimal(quote.price),
        currency: quote.currency,
        source: quote.source,
      },
    });

    return quote;
  }

  async syncAllPrices() {
    // Get all unique tickers from holdings
    const holdings = await this.prisma.holding.findMany({
      include: {
        asset: true,
      },
    });

    const tickerMap = new Map<number, string>();
    for (const holding of holdings) {
      if (holding.asset.ticker) {
        tickerMap.set(holding.asset.id, holding.asset.ticker);
      }
    }

    const results = [];
    for (const [assetId, ticker] of tickerMap.entries()) {
      try {
        const quote = await this.syncPricesForAsset(assetId);
        results.push({ assetId, ticker, success: true, quote });
      } catch (error) {
        results.push({ assetId, ticker, success: false, error: error.message });
      }
    }

    return results;
  }

  async getAssetPrices(assetId: number, range?: '1D' | '1M' | '1Y') {
    const asset = await this.prisma.asset.findUnique({
      where: { id: assetId },
    });

    if (!asset) {
      throw new NotFoundException(`Asset with ID ${assetId} not found`);
    }

    let startDate: Date | undefined;
    if (range) {
      const now = new Date();
      startDate = new Date();
      if (range === '1D') {
        startDate.setDate(now.getDate() - 1);
      } else if (range === '1M') {
        startDate.setMonth(now.getMonth() - 1);
      } else if (range === '1Y') {
        startDate.setFullYear(now.getFullYear() - 1);
      }
    }

    const where: any = { assetId };
    if (startDate) {
      where.asOf = { gte: startDate };
    }

    return this.prisma.pricePoint.findMany({
      where,
      orderBy: { asOf: 'asc' },
    });
  }

  async getLatestPrice(assetId: number) {
    return this.prisma.pricePoint.findFirst({
      where: { assetId },
      orderBy: { asOf: 'desc' },
    });
  }
}
