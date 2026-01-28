# TJ Discount Barcode - Backend Setup

## 📋 Overview

Backend endpoints for generating and verifying tokenized discount barcode URLs for Trader Joe's crew discounts.

## 🔧 Environment Variables

Add to your `.env` file:

```bash
# TJ Pass Secret (minimum 32 characters)
TJ_PASS_SECRET="your_long_random_secret_string_here_minimum_32_characters"

# Optional: Base URL for generated links (defaults to https://carlosgatti.com)
BASE_URL="https://carlosgatti.com"
# or
NEXT_PUBLIC_BASE_URL="https://carlosgatti.com"
```

**Important:** Generate a secure random string for `TJ_PASS_SECRET`:
```bash
# Using openssl
openssl rand -base64 32

# Or using node
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

## 🚀 API Endpoints

### POST `/api/tj/mint`

Generate a tokenized URL for a discount ID.

**Request Body:**
```json
{
  "name": "John Doe",        // Optional
  "discountId": "123456789"  // Required: 6-20 digits
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "url": "https://carlosgatti.com/tj/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Error Responses:**
- `400 Bad Request`: Invalid discountId format (must be 6-20 digits)
- `500 Internal Server Error`: Server error or missing TJ_PASS_SECRET

### GET `/api/tj/verify?token=<token>`

Verify a token and return the discount ID and name.

**Query Parameters:**
- `token` (required): The JWT token (URL encoded)

**Response:**
```json
{
  "name": "John Doe",
  "discountId": "123456789"
}
```

**Error Responses:**
- `400 Bad Request`: Missing token or invalid payload
- `401 Unauthorized`: Invalid or expired token

## 🔐 Security Notes

- Tokens are signed using HMAC-SHA256 (HS256)
- Tokens expire after 365 days
- No database storage - stateless tokens
- If a token is leaked, it cannot be revoked without adding a revocation list
- Use only with the owner's own discount ID

## 📝 Frontend Integration

The frontend (Next.js) should:

1. **Call `/api/tj/mint`** to generate tokens (admin/internal tool)
2. **Call `/api/tj/verify?token=...`** to verify tokens before displaying barcode
3. **Render Code128 barcode** using `jsbarcode` library
4. **Display discount ID** prominently for manual entry

Example frontend route: `/tj/[token]/page.tsx`

## 🧪 Testing

### Test Mint Endpoint

```bash
curl -X POST http://localhost:3000/api/tj/mint \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "discountId": "123456789"
  }'
```

### Test Verify Endpoint

```bash
# Replace <token> with token from mint response
curl "http://localhost:3000/api/tj/verify?token=<token>"
```

## 📦 Dependencies

- `jose`: JWT signing and verification (already installed)

## 🏗️ Module Structure

```
src/tj/
├── dto/
│   └── mint-token.dto.ts    # DTO for mint endpoint
├── tj.controller.ts          # REST endpoints
├── tj.service.ts            # Token logic
└── tj.module.ts             # NestJS module
```

## ✅ Checklist

- [x] Install `jose` dependency
- [x] Create TJ module (controller, service, DTOs)
- [x] Register TJ module in AppModule
- [ ] Add `TJ_PASS_SECRET` to `.env` file
- [ ] Test mint endpoint
- [ ] Test verify endpoint
- [ ] Frontend implementation (separate project)

---

**Note:** This is not an official Trader Joe's system. Use responsibly and only with the owner's own discount ID.
