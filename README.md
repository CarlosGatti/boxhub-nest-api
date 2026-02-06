# BoxHub Backend
Production-ready NestJS + Prisma backend powering multiple product modules under a single API.

## Table of Contents
- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Requirements](#requirements)
- [Quick Start](#quick-start)
- [Environment Variables](#environment-variables)
- [Database & Prisma](#database--prisma)
- [API](#api)
- [Auth](#auth)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Observability](#observability)
- [Contributing](#contributing)
- [License](#license)
- [Assumptions / To Confirm](#assumptions--to-confirm)

## Overview
This repository hosts a NestJS API that serves multiple product areas (apps and domains) behind a single GraphQL endpoint. It uses Prisma for data access, Redis for caching/queues, and integrates email delivery via SMTP templates.

High-level architecture:
```
Clients (Web / Mobile)
        |
        v
   GraphQL API (NestJS)
        |
        +--> Prisma ORM --> PostgreSQL
        |
        +--> Redis
        |
        +--> SMTP (email templates)
```

## Tech Stack
- **Runtime:** Node.js
- **Framework:** NestJS (Express)
- **API:** GraphQL (Apollo)
- **ORM:** Prisma
- **Database:** PostgreSQL
- **Cache/Queue:** Redis
- **Auth:** Passport JWT
- **Email:** Nodemailer + Handlebars templates

## Requirements
- **Node.js:** 18.x recommended (CI uses Node 18)
- **Package manager:** Yarn (recommended) or npm
- **PostgreSQL:** 15+
- **Redis:** 6+
- **Docker (optional):** for local Postgres/Redis/Hasura via `docker-compose.yml`

## Quick Start
### 1) Install
```bash
yarn install
```

### 2) Configure environment
```bash
cp .env.ex .env
# or use .env.production.example as a starting point
```

### 3) Run database (Docker)
```bash
docker compose up -d
```
`docker-compose.yml` includes Postgres + Redis (and a Hasura stack for optional use). Adjust credentials before using in shared environments.

### 4) Run Prisma migrations
```bash
npx prisma generate
npx prisma migrate dev
```

### 5) Seed (optional)
```bash
yarn seed:apps
# or
yarn seed:all
```

### 6) Start dev server
```bash
yarn start:dev
```
API runs on `http://localhost:3000` by default.

## Environment Variables
Source of truth: `.env.ex`, `.env.production.example`, and usage in `src/main.ts` and services.

| Variable | Required | Example | Description |
|---|---|---|---|
| `DATABASE_URL` | Yes | `postgresql://user:pass@localhost:5432/db?schema=public` | Prisma database connection |
| `SHADOW_DATABASE_URL` | For migrate dev | `postgresql://user:pass@localhost:5432/db_shadow?schema=public` | Prisma shadow DB for migrations |
| `JWT_ACCESS_SECRET` | Yes (auth) | `super-long-secret` | JWT secret for access tokens |
| `JWT_SECRET` | To confirm | `super-long-secret` | Present in `.env.production.example` |
| `PORT` | No | `3000` | API port |
| `NODE_ENV` | No | `development` | Environment (`production` disables CORS in app) |
| `REDIS_HOST` | No | `localhost` | Redis host |
| `REDIS_PASSWORD` | No | `password` | Redis password |
| `GOOGLE_API_KEY` | No | `AIza...` | Google API integrations |
| `LEMON_SECRET` | No | `sk_live_...` | Lemon Squeezy integration |
| `FRONTEND_URL_LOCAL` | No | `http://localhost:3000` | Used in app flows |
| `FRONTEND_URL_PROD` | No | `https://example.com` | Used in app flows |
| `SMTP_HOST` | No | `smtp.gmail.com` | SMTP host |
| `SMTP_PORT` | No | `465` | SMTP port |
| `SMTP_USERNAME` | No | `user@example.com` | SMTP username |
| `SMTP_PASSWORD` | No | `password` | SMTP password |
| `HANDLEBARS_CLIENT_NAME` | No | `BoxHub` | Email sender display name |
| `HANDLEBARS_CLIENT_EMAIL` | No | `no-reply@example.com` | Email sender address |
| `TJ_PASS_SECRET` | No | `...` | TJ app secret |
| `LOG_DB_TARGET` | No | `true` | Logs Prisma DB target on boot |
| `LOG_LEVELS` | No | `error,warn,log` | NestJS logger levels |
| `LOG_HTTP` | No | `true` | Logs inbound HTTP requests |
| `ENABLE_LOCAL_CORS` | No | `true` | Force-enable CORS in non-prod |

## Database & Prisma
- Prisma is configured for PostgreSQL (`prisma/schema.prisma`).
- Migrations live in `prisma/migrations/`.

Common commands:
```bash
npx prisma generate
npx prisma migrate dev
npx prisma migrate deploy
```

## API
### GraphQL
- **Endpoint:** `/graphql`
- **Playground:** enabled by default in `AppModule`
- **Auth:** Bearer JWT in `Authorization` header

Example request:
```graphql
query {
  signalboardCollections {
    id
    name
  }
}
```

### REST (minimal)
- `GET /` → `Hello World!`
- `GET /health` → `{ status: "ok", timestamp: "..." }`

## Auth
Authentication uses **JWT (Passport)** with `Authorization: Bearer <token>`.  
Several GraphQL resolvers are protected with `JwtAuthGuard` and `RequireApp('...')` via `AppPermissionGuard`.

## Scripts
Key npm/yarn scripts:
- `yarn start:dev` — start NestJS with watch
- `yarn build` — build TypeScript to `dist/`
- `yarn start:prod` — run compiled server
- `yarn lint` — ESLint auto-fix
- `yarn test` — Jest tests
- `yarn prisma:migrate` — `prisma migrate dev`
- `yarn seed:apps` / `yarn seed:all` — seed scripts

## Project Structure
```
src/
  app/            # NestJS bootstrap module/controller/service
  apps/           # product-level modules (signalboard, homeops, feedback)
  core/           # cross-cutting infra (auth, prisma, redis, services)
  domains/        # feature modules grouped by bounded context
  shared/         # shared DTOs and types
  static/         # email templates/assets
```

## Deployment
This repo includes a production deployment flow via **GitHub Actions + VPS + PM2**:
- Workflow: `.github/workflows/deploy.yml`
- Process manager: `ecosystem.config.js`
- Deployment docs: `.github/CI_CD_SETUP.md`, `.github/ROTINA_DEPLOY.md`

Production checklist:
- [ ] Configure `.env` on server with DB/Redis/JWT settings
- [ ] Run Prisma migrations (`prisma migrate deploy`)
- [ ] Run seeds (if needed)
- [ ] Ensure PM2 process is running
- [ ] Verify Nginx/CORS configuration if used

## Observability
- Console logging with configurable levels (`LOG_LEVELS`)
- Optional HTTP request logging (`LOG_HTTP=true`)
- Application logs stored via `createLog` service (Prisma)

## Contributing
- Keep changes scoped to the correct domain/app module.
- Prefer DTO validation for all input.
- Add Prisma migrations for schema changes (never edit existing migrations).

## License
UNLICENSED — All rights reserved.

## Assumptions / To Confirm
- `JWT_ACCESS_SECRET` is the active JWT secret in code; `.env.production.example` lists `JWT_SECRET`. Align and document the intended variable.
- Docker compose includes Hasura (optional) — confirm whether it is used in local dev.
