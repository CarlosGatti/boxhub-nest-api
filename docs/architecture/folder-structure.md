# Folder Structure

This repo uses a layered layout to keep cross-cutting concerns separate from product domains.

## Structure

```
src/
  core/                 # cross-cutting infrastructure
    auth/
    constants/
    prisma/
    redis/
    services/
    utils/
  shared/               # shared DTOs/types used across domains
    dto/
    types/
  domains/              # domain modules (Nest modules)
    review-cards/
    cashflow/
    comments/
    discart-item/
    holdings/
    metrics/
    portfolios/
    pricing/
    qrcode/
    ratings/
    tj/
    user/
    webhooks/
  apps/                 # multi-app product wrappers
    homeops/
    feedback/
    signalboard/
  app/
  main.ts
```

## Conventions

- **core/**: shared infrastructure (auth, prisma, redis, providers).
- **shared/**: common DTOs/types. Keep small and reused.
- **domains/**: feature modules (REST/GraphQL) grouped by bounded context.
- **apps/**: product-specific modules that aggregate features and app-level guards.

## Adding new features

- Add new feature modules under `src/domains/<name>`.
- Add cross-cutting utilities under `src/core`.
- Keep shared DTOs/types in `src/shared`.
