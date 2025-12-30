import { IPriceProvider, Quote } from '../interfaces/price-provider.interface';

import { Injectable } from '@nestjs/common';

@Injectable()
export class MockPriceProvider implements IPriceProvider {
  // Mock prices for common tickers
  private readonly mockPrices: Record<string, number> = {
    VTI: 250.50,
    VOO: 450.75,
    SCHD: 80.25,
    VXUS: 65.30,
    AAPL: 175.00,
    MSFT: 380.50,
    GOOGL: 140.25,
    TSLA: 250.00,
    BTC: 45000.00,
    ETH: 2800.00,
  };

  async getQuote(ticker: string): Promise<Quote> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 100));

    const price = this.mockPrices[ticker.toUpperCase()] || 100.00;

    return {
      price,
      currency: 'USD',
      asOf: new Date(),
      source: 'mock',
    };
  }

  async getBatchQuotes(tickers: string[]): Promise<Map<string, Quote>> {
    const quotes = new Map<string, Quote>();

    for (const ticker of tickers) {
      const quote = await this.getQuote(ticker);
      quotes.set(ticker.toUpperCase(), quote);
    }

    return quotes;
  }
}
