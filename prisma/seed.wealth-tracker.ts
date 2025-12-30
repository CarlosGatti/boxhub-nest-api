import { AssetType, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const commonAssets = [
  // ETFs
  { type: AssetType.ETF, ticker: 'VTI', name: 'Vanguard Total Stock Market ETF', currency: 'USD' },
  { type: AssetType.ETF, ticker: 'VOO', name: 'Vanguard S&P 500 ETF', currency: 'USD' },
  { type: AssetType.ETF, ticker: 'SCHD', name: 'Schwab US Dividend Equity ETF', currency: 'USD' },
  { type: AssetType.ETF, ticker: 'VXUS', name: 'Vanguard Total International Stock ETF', currency: 'USD' },
  { type: AssetType.ETF, ticker: 'BND', name: 'Vanguard Total Bond Market ETF', currency: 'USD' },
  { type: AssetType.ETF, ticker: 'VT', name: 'Vanguard Total World Stock ETF', currency: 'USD' },
  
  // Popular Stocks
  { type: AssetType.STOCK, ticker: 'AAPL', name: 'Apple Inc.', currency: 'USD', exchange: 'NASDAQ' },
  { type: AssetType.STOCK, ticker: 'MSFT', name: 'Microsoft Corporation', currency: 'USD', exchange: 'NASDAQ' },
  { type: AssetType.STOCK, ticker: 'GOOGL', name: 'Alphabet Inc.', currency: 'USD', exchange: 'NASDAQ' },
  { type: AssetType.STOCK, ticker: 'AMZN', name: 'Amazon.com Inc.', currency: 'USD', exchange: 'NASDAQ' },
  { type: AssetType.STOCK, ticker: 'TSLA', name: 'Tesla Inc.', currency: 'USD', exchange: 'NASDAQ' },
  { type: AssetType.STOCK, ticker: 'META', name: 'Meta Platforms Inc.', currency: 'USD', exchange: 'NASDAQ' },
  { type: AssetType.STOCK, ticker: 'NVDA', name: 'NVIDIA Corporation', currency: 'USD', exchange: 'NASDAQ' },
  
  // Crypto (placeholder - you may want to add more)
  { type: AssetType.CRYPTO, ticker: 'BTC', name: 'Bitcoin', currency: 'USD' },
  { type: AssetType.CRYPTO, ticker: 'ETH', name: 'Ethereum', currency: 'USD' },
];

async function main() {
  console.log('🌱 Seeding Wealth Tracker assets...');

  for (const asset of commonAssets) {
    try {
      await prisma.asset.upsert({
        where: {
          unique_asset_ticker: {
            type: asset.type,
            ticker: asset.ticker!,
          },
        },
        update: {},
        create: {
          type: asset.type,
          ticker: asset.ticker,
          name: asset.name,
          currency: asset.currency,
          exchange: asset.exchange || null,
        },
      });
      console.log(`✅ Seeded: ${asset.ticker} - ${asset.name}`);
    } catch (error) {
      console.error(`❌ Error seeding ${asset.ticker}:`, error);
    }
  }

  console.log('✨ Seeding completed!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
