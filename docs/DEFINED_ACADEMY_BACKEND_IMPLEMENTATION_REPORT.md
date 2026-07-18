# Defined Academy — Backend Implementation Report

**Repository:** `boxhub-nest-api`  
**Date:** 2026-07-18  
**Migration:** `20260718160000_add_defined_academy_foundation`

This report documents the backend foundation for **Defined Academy**, an educational platform domain designed to support multiple academies (starting with RE-Quest Professional Growth Initiative) without coupling to a single brand.

---

## Repository Patterns Discovered

Before implementation, the codebase was surveyed for established Defined product patterns. Two modules served as primary references:

### `src/apps/defined-branding/`

| Pattern | How Academy reuses it |
|--------|------------------------|
| Isolated NestJS module under `src/apps/` | `DefinedAcademyModule` mirrors module layout |
| Admin resolver: `@UseGuards(JwtAuthGuard, AppPermissionGuard)` + `@RequireApp('DEFINED')` | Identical guard stack on `DefinedAcademyResolver` |
| Public resolver: no class-level guards | `DefinedAcademyPublicResolver` is unguarded |
| Single domain service + Prisma | Split into focused services (content, learner, referral, shortlink, analytics) due to scope |
| URL-based assets (`fileUrl` on inputs) | Resources, logos, cover images, and partner logos use URL fields — no upload controller |
| `createLog` audit trail on mutations | All admin mutations log via `../../core/services/create-log` |
| `@generated` Prisma GraphQL models in resolvers | All resolvers import from `@generated/defined-academy-*` |

### `src/apps/defined-proposals/`

| Pattern | How Academy reuses it |
|--------|------------------------|
| Admin + public resolver split | Three resolver tiers: admin, public, learner |
| Status/visibility policy utilities | `utils/academy-publication.util.ts`, `utils/academy-resource-validation.util.ts` |
| Scoped reorder mutations | `reorderDefinedAcademyCourses`, `reorderDefinedAcademyModules`, `reorderDefinedAcademyLessons` |
| Service-level tenant isolation | All admin operations validate `academyId` ownership before reads/writes |
| Unit tests co-located with services | Five spec files under `defined-academy/` |

### Shared infrastructure reused (not modified)

- `JwtAuthGuard`, `AppPermissionGuard`, `@RequireApp('DEFINED')` from `src/core/auth/guards/`
- `PrismaService` injection
- GraphQL code-first schema generation via NestJS decorators
- Existing `App` model and permission system
- Existing `User` model and JWT authentication

---

## Architecture Selected

Defined Academy is implemented as an **isolated domain module** at:

```
src/apps/defined-academy/
├── defined-academy.module.ts
├── defined-academy.resolver.ts              # Admin (DEFINED app + JWT)
├── defined-academy-public.resolver.ts       # Public (no auth)
├── defined-academy-learner.resolver.ts      # Learner (JWT only)
├── defined-academy.service.ts               # Admin CRUD + public reads
├── defined-academy-learner.service.ts       # Enrollment + progress
├── defined-academy-referral.service.ts      # Campaigns + attribution
├── defined-academy-shortlink.service.ts     # Short links + resolve
├── defined-academy-analytics.service.ts     # Admin analytics summary
├── dto/                                     # GraphQL input types
├── types/                                   # GraphQL output types
├── utils/                                   # Publication, validation, slugs
└── *.spec.ts                                # Unit tests
```

**Design principles:**

1. **Multi-academy by default** — `DefinedAcademy` is the tenant root; courses, partners, and campaigns are scoped by `academyId`.
2. **Slug-based public URLs** — Public discovery uses `academySlug`, `courseSlug`, and `lessonSlug` (not numeric IDs).
3. **Publication gates** — Content is visible publicly only when academy, course, module, and lesson status chains pass publication rules (see `academy-publication.util.ts`).
4. **Optional auth on public reads** — Public resolvers inspect `context.req.user` to unlock `AUTHENTICATED` visibility without requiring login for `PUBLIC` content.
5. **Referral attribution is non-blocking** — Capture and attach operations fail silently (`null` returns) so registration and enrollment never depend on attribution success.

The module is registered once in `AppModule`:

```typescript
import { DefinedAcademyModule } from '../apps/defined-academy/defined-academy.module';
// ...
DefinedAcademyModule,
```

---

## Alternatives Considered

| Alternative | Why not selected |
|------------|-------------------|
| Extend `defined-branding` or an existing CMS module | Would mix unrelated concerns; academy has enrollment, progress, referrals, and partners |
| Single monolithic resolver | Hard to reason about auth boundaries; split mirrors proposals/branding and enables learner JWT-only access |
| Generic `Course` / `Lesson` tables shared across apps | Would risk cross-app coupling and complicate tenant isolation |
| New REST upload controller for academy media | Defined modules already use URL-based attachment; keeps scope minimal and consistent |
| `@RequireApp('ACADEMY')` for admin | Backoffice staff already have `DEFINED` app access; reuses existing permission model |
| Learner operations behind `@RequireApp('DEFINED')` | Would block end-user learners who only have platform JWT, not backoffice app access |
| Last-touch referral attribution | Product spec requires first-touch; implemented via `orderBy: { firstVisitedAt: 'asc' }` on capture and attach |

---

## Database Design Summary

Migration `20260718160000_add_defined_academy_foundation` adds **13 enums**, **14 tables**, indexes, and foreign keys. All changes are **additive** — no existing tables altered.

### Entity hierarchy

```
DefinedAcademy (tenant root, optional appId → App)
├── DefinedAcademyCourse
│   └── DefinedAcademyModule
│       └── DefinedAcademyLesson
│           └── DefinedAcademyResource (optional lessonId)
├── DefinedAcademyResource (academy-level)
├── DefinedAcademyPartnerCategory
│   └── DefinedAcademyPartner
├── DefinedAcademyShortLink (+ DefinedAcademyShortLinkEvent)
├── DefinedAcademyReferralCampaign
└── DefinedAcademyReferral

DefinedAcademyEnrollment (User ↔ Course)
└── DefinedAcademyLessonProgress
```

### Key enums

| Enum | Values |
|------|--------|
| `DefinedAcademyStatus` | `DRAFT`, `ACTIVE`, `ARCHIVED` |
| `DefinedAcademyCourseStatus` | `DRAFT`, `PUBLISHED`, `ARCHIVED` |
| `DefinedAcademyCourseVisibility` | `PUBLIC`, `AUTHENTICATED`, `PRIVATE` |
| `DefinedAcademyContentStatus` | `DRAFT`, `PUBLISHED`, `ARCHIVED` |
| `DefinedAcademyLessonType` | `VIDEO`, `ARTICLE`, `RESOURCE`, `MIXED` |
| `DefinedAcademyResourceType` | `PDF`, `IMAGE`, `FILE`, `TEXT`, `GUIDE`, `TEMPLATE`, `CHECKLIST`, `EXTERNAL_LINK`, `EMBED` |
| `DefinedAcademyEnrollmentStatus` | `ENROLLED`, `IN_PROGRESS`, `COMPLETED`, `CANCELLED` |
| `DefinedAcademyLessonProgressStatus` | `NOT_STARTED`, `IN_PROGRESS`, `COMPLETED` |
| `DefinedAcademyReferralStatus` | `VISITED`, `REGISTERED`, `ENROLLED`, `INVALID`, `EXPIRED` |

### Notable constraints

- Unique slugs: `DefinedAcademy.slug`, `(academyId, slug)` on courses/partners/categories, `(moduleId, slug)` on lessons
- Unique enrollment: `(courseId, userId)`
- Unique lesson progress: `(enrollmentId, lessonId)`
- Unique short link code globally: `DefinedAcademyShortLink.code`
- Unique campaign code per academy: `(academyId, code)`
- `DefinedAcademyEnrollment.courseId` uses `ON DELETE RESTRICT` to prevent accidental course deletion with active enrollments

### Archival behavior

- Academies and courses use explicit `archive*` mutations setting status to `ARCHIVED` (and `archivedAt` on academy)
- Resources use `archiveDefinedAcademyResource` (status → `ARCHIVED`)
- No hard deletes exposed via GraphQL for content entities

---

## Authorization Design

Three resolver tiers with distinct guard requirements:

| Tier | Resolver | Guards | App permission |
|------|----------|--------|----------------|
| **Admin** | `DefinedAcademyResolver` | `JwtAuthGuard` + `AppPermissionGuard` | `@RequireApp('DEFINED')` on every operation |
| **Learner** | `DefinedAcademyLearnerResolver` | `JwtAuthGuard` only | None — any authenticated platform user |
| **Public** | `DefinedAcademyPublicResolver` | None | None |

### Admin operations (DEFINED + JWT)

All queries and mutations on `DefinedAcademyResolver` require a valid JWT **and** `DEFINED` app permission. Operations are scoped by `academyId` arguments; the service layer validates that nested entities belong to the requested academy.

### Learner operations (JWT only)

Enrollment and progress operations use `@CurrentUser()` to scope data to the authenticated user. Users cannot read or mutate another user's enrollments or progress.

### Public operations (no auth)

Public queries return only published/active content per publication rules. Mutations limited to `captureDefinedAcademyReferral` (anonymous first-touch capture).

### Visibility on public reads

Public course/lesson/resource queries accept optional JWT via GraphQL context:

- `PUBLIC` visibility → accessible anonymously
- `AUTHENTICATED` visibility → requires `context.req.user`
- `PRIVATE` visibility → never returned on public endpoints

Preview lessons (`isPreview: true`) bypass module/lesson publish status when academy and course are published.

---

## Security Considerations

1. **Tenant isolation** — Admin and public services validate `academyId` on all nested entity lookups (`ensureCourse`, `ensureModule`, `ensureLesson`, etc.).
2. **URL safety** — `assertSafeExternalUrl` / `isSafeExternalUrl` validate `destinationUrl`, `externalUrl`, and `fileUrl` values; blocks unsafe schemes.
3. **Short link resolution** — `resolveDefinedAcademyShortLink` returns backend-validated `destinationUrl` only; frontend must redirect to that URL, not user-supplied input. Disabled/expired links throw `BadRequestException`.
4. **Self-referral prevention** — Referral attach and enrollment mark operations reject or invalidate when `referrerUserId === referredUserId`.
5. **Attribution expiry** — `attributionExpiresAt` enforced on attach and enrollment; expired referrals transition to `EXPIRED`.
6. **First-touch idempotency** — `captureDefinedAcademyReferral` returns existing anonymous visit for same `(academyId, referralCode)` before creating duplicates.
7. **Non-blocking attribution** — `attachReferralToUser` wraps logic in try/catch and returns `null` on failure so auth flows are never interrupted.
8. **No new upload surface** — Media URLs are stored as strings; validation ensures safe URLs or `/uploads/` paths only.

---

## Performance Considerations

1. **Indexes** — Migration adds composite indexes on common filters: `(academyId, status)`, `(academyId, sortOrder)`, `(courseId, sortOrder)`, `(moduleId, sortOrder)`, referral lookup indexes on `referralCode` and `referredUserId`.
2. **Ordered includes** — `COURSE_INCLUDE` constant loads modules and lessons ordered by `sortOrder` in a single query for course detail views.
3. **List endpoints** — Admin list operations use `findMany` with scoped `where` clauses; no unbounded cross-academy queries.
4. **Analytics summary** — `definedAcademyAnalyticsSummary` runs aggregate counts per academy; suitable for admin dashboards at current scale. Heavy analytics deferred (see Risks).
5. **No N+1 in GraphQL field resolvers** — Academy resolvers return Prisma entities directly; nested relations require explicit client-side field selection or future DataLoader work if needed.

---

## Migration Safety Analysis

**Migration:** `prisma/migrations/20260718160000_add_defined_academy_foundation/migration.sql`

| Safety property | Status |
|----------------|--------|
| Additive only (new enums + tables) | ✅ |
| No alterations to existing tables | ✅ |
| No data backfill required | ✅ |
| Foreign keys to existing `App` and `User` tables | ✅ (`ON DELETE SET NULL` or `CASCADE` as appropriate) |
| Rollback | Drop new tables/enums in reverse order; no existing data affected |
| Production deploy sequence | Run `npx prisma migrate deploy` before deploying API code that references new models |

The migration header explicitly states: *"Defined Academy foundation (additive, backward-compatible)"*.

---

## Test Coverage

### Commands

```bash
npm test                                    # Full suite
npm test -- --testPathPattern=defined-academy   # Academy only
```

### Results (2026-07-18)

| Scope | Suites | Tests |
|-------|--------|-------|
| Defined Academy | 5 | **19** |
| Full repository | 17 | **97** |

### Academy test files

| File | Focus |
|------|-------|
| `defined-academy.service.spec.ts` | Public visibility filtering, publication rules, admin helpers |
| `defined-academy-learner.service.spec.ts` | Enrollment, reactivation of cancelled enrollments |
| `defined-academy-referral.service.spec.ts` | First-touch capture, attach behavior |
| `defined-academy-shortlink.service.spec.ts` | Resolve, disabled/expired link handling |
| `utils/academy-resource-validation.util.spec.ts` | Resource type payload validation |

### Not covered (deferred)

- GraphQL resolver e2e/integration tests
- Analytics service unit tests
- Load/performance testing

---

## Existing Files Modified

Only **three existing files** were modified. All other implementation is new code under `src/apps/defined-academy/`, `prisma/`, and `@generated/`.

| File | Change | Justification |
|------|--------|---------------|
| `src/app/app.module.ts` | Import and register `DefinedAcademyModule` | Required to expose GraphQL operations in the running API |
| `prisma/seed.apps.ts` | Added `ACADEMY` app record (`code: 'ACADEMY'`) | Links academy tenant to app registry for future app-scoped features |
| `package.json` | Added `"seed:academy": "ts-node prisma/seed.academy.ts"` | Development seed script for RE-Quest sample academy data |

**Confirmation:** No unrelated production modules (Bucket, HomeOps, Review Cards, Signalboard, etc.) were modified.

---

## Backward Compatibility Confirmation

- ✅ No existing Prisma models, enums, or columns changed
- ✅ No existing GraphQL operations renamed or removed
- ✅ No changes to authentication, JWT format, or global guards
- ✅ No changes to existing seed data for other apps (only additive `ACADEMY` app upsert)
- ✅ Full test suite passes: **97/97** tests green after academy addition
- ✅ New module is opt-in via migration; API without migration deploy continues serving existing domains (academy routes simply unavailable until migrated)

---

## Risks and Deferred Work

### Risks

| Risk | Mitigation |
|------|------------|
| Admin uses `DEFINED` app permission, not `ACADEMY` | Document clearly for frontend; grant `DEFINED` to backoffice staff |
| Global short link codes must be unique | Auto-generated codes via `generateShortCode`; custom codes validated |
| Analytics queries may slow at high volume | Acceptable for v1; defer to materialized views or event pipeline |
| URL-based uploads depend on external upload infrastructure | Frontend must upload elsewhere (e.g. existing storage) and pass URL |
| `reorderDefinedAcademyCourses` shares DTO with module/lesson reorder (`parentId` field) | Frontend should pass `parentId: 0` or any value for course reorder — service ignores it |

### Deferred decisions / features

- Certificates and completion credentials
- Quizzes, assignments, and grading
- Comments and discussion threads
- Live classes / webinars
- Paid courses, subscriptions, and billing
- Affiliate commissions and payout automation
- Advanced analytics dashboards and export
- Email automation for course milestones
- Badges and gamification
- Dedicated academy upload REST controller
- GraphQL pagination cursors (lists use full `findMany` with filters)
- `@RequireApp('ACADEMY')` learner app permission model
- Partner engagement event tracking beyond referral/shortlink events
- Resolver-level integration tests

---

## GraphQL Operations Summary

For full operation documentation with examples, see [`DEFINED_ACADEMY_FRONTEND_IMPLEMENTATION_REPORT.md`](./DEFINED_ACADEMY_FRONTEND_IMPLEMENTATION_REPORT.md).

| Tier | Count | Resolver |
|------|-------|----------|
| Admin queries | 9 | `DefinedAcademyResolver` |
| Admin mutations | 26 | `DefinedAcademyResolver` |
| Public queries | 8 | `DefinedAcademyPublicResolver` |
| Public mutations | 1 | `DefinedAcademyPublicResolver` |
| Learner queries | 4 | `DefinedAcademyLearnerResolver` |
| Learner mutations | 5 | `DefinedAcademyLearnerResolver` |

---

## Environment Variables

| Variable | Default | Purpose |
|----------|---------|---------|
| `DEFINED_ACADEMY_REFERRAL_ATTRIBUTION_DAYS` | `30` | Days until referral attribution expires (`attributionExpiresAt`) |
| `ACADEMY_SEED_SLUG` | `re-quest-academy` | Dev seed academy slug |
| `ACADEMY_SEED_COURSE_SLUG` | `first-90-days-real-estate` | Dev seed course slug |

---

## Seed Commands

```bash
npm run seed:apps      # Ensures ACADEMY (and other) app records exist
npm run seed:academy   # Seeds RE-Quest sample academy, course, modules, lessons
```

Recommended order: `npm run seed:apps && npm run seed:academy`

---

## Recommended Frontend Implementation Order

1. Public academy landing (`definedAcademyBySlug`, `definedAcademyPublishedCourses`)
2. Public course/lesson pages with visibility handling
3. Learner auth + enrollment + progress mutations
4. Referral capture on landing + attach after registration
5. Admin backoffice (DEFINED JWT) for content management
6. Short links and partner directory
7. Analytics dashboard (`definedAcademyAnalyticsSummary`)
