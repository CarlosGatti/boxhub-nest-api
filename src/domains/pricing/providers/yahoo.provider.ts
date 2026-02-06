import { IPriceProvider, Quote } from '../interfaces/price-provider.interface';

import { Injectable } from '@nestjs/common';

@Injectable()
export class YahooPriceProvider implements IPriceProvider {
  // TODO: Implement Yahoo Finance API integration
  // For now, this is a skeleton that throws an error
  // You can integrate with:
  // - yahoo-finance2 npm package
  // - yfinance Python library via API wrapper
  // - Direct Yahoo Finance API (if available)

  async getQuote(ticker: string): Promise<Quote> {
    // TODO: Implement actual Yahoo Finance API call
    // Example using yahoo-finance2:
    // const yahooFinance = require('yahoo-finance2').default;
    // const quote = await yahooFinance.quote(ticker);
    // return {
    //   price: quote.regularMarketPrice,
    //   currency: quote.currency || 'USD',
    //   asOf: new Date(quote.regularMarketTime),
    //   source: 'yahoo',
    // };

    throw new Error('Yahoo provider not yet implemented. Please use mock provider for now.');
  }

  async getBatchQuotes(tickers: string[]): Promise<Map<string, Quote>> {
    // TODO: Implement batch quote fetching
    // This is more efficient than individual calls
    const quotes = new Map<string, Quote>();

    for (const ticker of tickers) {
      try {
        const quote = await this.getQuote(ticker);
        quotes.set(ticker.toUpperCase(), quote);
      } catch (error) {
        console.error(`Failed to fetch quote for ${ticker}:`, error);
      }
    }

    return quotes;
  }
}
