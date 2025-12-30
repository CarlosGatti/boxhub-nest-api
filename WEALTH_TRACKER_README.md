# Wealth Tracker Module - Backend API

## Overview

The Wealth Tracker module provides a secure backend API for tracking long-term investments (stocks/ETFs, optional crypto) and net worth. Users manually maintain holdings; the system fetches delayed market prices via pluggable providers.

## Environment Variables

Add the following to your `.env` file:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
SHADOW_DATABASE_URL="postgresql://user:password@localhost:5432/shadow_dbname"

# JWT Configuration
JWT_ACCESS_SECRET="your-access-token-secret-change-in-production"
JWT_REFRESH_SECRET="your-refresh-token-secret-change-in-production"
JWT_ACCESS_EXPIRES_IN="15m"
JWT_REFRESH_EXPIRES_IN="30d"

# Price Provider
PRICE_PROVIDER="mock"  # Options: "mock" or "yahoo"

# Admin Sync Key (optional, for /prices/sync endpoint)
ADMIN_SYNC_KEY="your-admin-key-here"
```

## Database Setup

1. **Run migrations:**
   ```bash
   npx prisma migrate dev
   ```

2. **Seed common assets (optional):**
   ```bash
   npx ts-node prisma/seed.wealth-tracker.ts
   ```

3. **Generate Prisma client:**
   ```bash
   npx prisma generate
   ```

## API Endpoints

### Authentication

- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login and get access/refresh tokens
- `POST /auth/refresh` - Refresh access token using refresh token
- `POST /auth/logout` - Logout and invalidate refresh token
- `GET /auth/me` - Get current user info (requires auth)

### Portfolios

- `GET /portfolios` - List all user portfolios
- `POST /portfolios` - Create a new portfolio
- `GET /portfolios/:id` - Get portfolio details
- `PATCH /portfolios/:id` - Update portfolio
- `DELETE /portfolios/:id` - Delete portfolio

### Assets

- `GET /assets/search?q=VTI` - Search assets by ticker/name
- `POST /assets` - Create a custom asset
- `GET /assets/:id` - Get asset details

### Holdings

- `GET /portfolios/:portfolioId/holdings` - List holdings in a portfolio
- `POST /portfolios/:portfolioId/holdings` - Add a holding
- `GET /holdings/:id` - Get holding details
- `PATCH /holdings/:id` - Update holding (quantity, avgCost)
- `DELETE /holdings/:id` - Delete holding

### Pricing & Quotes

- `GET /quotes?ticker=VTI` - Get latest quote for a ticker
- `GET /assets/:id/prices?range=1D|1M|1Y` - Get price history for an asset
- `POST /prices/sync` - Sync prices for all holdings (requires admin key header: `X-Admin-Key`)

### Metrics

- `GET /portfolios/:id/summary` - Get portfolio summary (market value, cost basis, gain/loss)
- `GET /portfolios/:id/allocation` - Get portfolio allocation (by type and by asset)
- `GET /networth/summary` - Get aggregate net worth across all portfolios

## Authentication Flow

1. **Register:** `POST /auth/register` with `{ email, password, firstName, lastName }`
2. **Login:** `POST /auth/login` with `{ email, password }` → returns `{ accessToken, refreshToken, user }`
3. **Use Access Token:** Include `Authorization: Bearer <accessToken>` header for protected routes
4. **Refresh:** When access token expires, use `POST /auth/refresh` with `{ refreshToken }` to get new access token
5. **Logout:** `POST /auth/logout` with `{ refreshToken }` to invalidate refresh token

## Example Usage

### Create Portfolio and Add Holdings

```bash
# 1. Register/Login
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"password123"}'

# 2. Create Portfolio
curl -X POST http://localhost:3000/portfolios \
  -H "Authorization: Bearer <accessToken>" \
  -H "Content-Type: application/json" \
  -d '{"name":"My Portfolio","baseCurrency":"USD"}'

# 3. Search for Asset
curl -X GET "http://localhost:3000/assets/search?q=VTI" \
  -H "Authorization: Bearer <accessToken>"

# 4. Add Holding
curl -X POST http://localhost:3000/portfolios/1/holdings \
  -H "Authorization: Bearer <accessToken>" \
  -H "Content-Type: application/json" \
  -d '{"assetId":1,"quantity":10,"averageCost":250.50}'

# 5. Sync Prices
curl -X POST http://localhost:3000/prices/sync \
  -H "X-Admin-Key: your-admin-key"

# 6. Get Portfolio Summary
curl -X GET http://localhost:3000/portfolios/1/summary \
  -H "Authorization: Bearer <accessToken>"
```

## Price Providers

### Mock Provider (Default)

Returns static mock prices for common tickers. Configured via `PRICE_PROVIDER=mock`.

### Yahoo Provider (Skeleton)

A skeleton implementation for Yahoo Finance integration. Currently throws an error. To implement:
1. Install `yahoo-finance2` or similar package
2. Implement the `getQuote` and `getBatchQuotes` methods in `yahoo.provider.ts`
3. Set `PRICE_PROVIDER=yahoo`

## Security

- All endpoints except `/auth/register`, `/auth/login`, and `/prices/sync` require JWT authentication
- Portfolio and holding operations are scoped to the authenticated user (IDOR prevention)
- Refresh tokens are hashed before storage in the database
- Passwords are hashed using bcrypt

## Local Development

1. **Start PostgreSQL** (via Docker or local installation)
2. **Set up environment variables** in `.env`
3. **Run migrations:** `npx prisma migrate dev`
4. **Seed assets (optional):** `npx ts-node prisma/seed.wealth-tracker.ts`
5. **Start the server:** `npm run start:dev`

## Testing

The module includes proper error handling and validation. Test endpoints using:
- Postman
- curl
- Your frontend application

## Notes

- Decimal precision: Holdings use `Decimal(20, 8)` for quantity and averageCost
- Price points are stored with timestamps for historical tracking
- The `/prices/sync` endpoint can be protected with `ADMIN_SYNC_KEY` environment variable
- All timestamps are stored in UTC
