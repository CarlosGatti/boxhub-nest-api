export interface Quote {
  price: number;
  currency: string;
  asOf: Date;
  source: string;
}

export interface IPriceProvider {
  getQuote(ticker: string): Promise<Quote>;
  getBatchQuotes(tickers: string[]): Promise<Map<string, Quote>>;
}
