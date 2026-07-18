# Defined Academy — Frontend Implementation Report

**Repository:** `boxhub-nest-api`  
**Audience:** Frontend engineers integrating Defined Academy (public site, learner app, DEFINED backoffice)  
**Date:** 2026-07-18  
**Backend reference:** [`DEFINED_ACADEMY_BACKEND_IMPLEMENTATION_REPORT.md`](./DEFINED_ACADEMY_BACKEND_IMPLEMENTATION_REPORT.md)

---

## 1. Executive Summary

### What was implemented

The backend foundation for **Defined Academy** — a multi-tenant educational platform supporting academies, courses (modules/lessons), downloadable resources, partner directories, short links, referral attribution, learner enrollment, and lesson progress tracking.

### Intended product behavior

- **Public visitors** discover academies and published courses by slug, preview lessons, browse partners, resolve short links, and capture referral attribution anonymously.
- **Authenticated learners** enroll in courses, track lesson progress (including video position), and attach referral codes after registration.
- **DEFINED backoffice staff** manage all academy content, partners, campaigns, short links, and view analytics summaries.

The first seeded experience targets **RE-Quest Professional Growth Initiative** (`re-quest-academy`), but the API is academy-agnostic.

### Architectural boundaries

| Surface | Auth | App permission |
|---------|------|----------------|
| Public GraphQL | None (optional JWT improves visibility) | None |
| Learner GraphQL | JWT (`Authorization: Bearer`) | None |
| Admin GraphQL | JWT | `DEFINED` app access |

All operations live under the existing `/graphql` endpoint. No new REST controllers were added for academy features.

### Important implementation decisions

- **Slug-based public routing** — use `academySlug`, `courseSlug`, `lessonSlug` in public queries.
- **URL-based media** — logos, covers, videos, and resource files are stored as URL strings (same pattern as Defined Branding). Upload via existing infrastructure, then pass URLs in mutations.
- **First-touch referral attribution** — `captureDefinedAcademyReferral` is idempotent; attach after login is optional and non-blocking.
- **Attribution window** — configurable via `DEFINED_ACADEMY_REFERRAL_ATTRIBUTION_DAYS` (default 30 days).

---

## 2. Files Changed

### Created (backend — for frontend awareness)

All new domain code is isolated under `src/apps/defined-academy/` plus:

| Path | Purpose |
|------|---------|
| `prisma/schema.prisma` | Defined Academy models and enums (append-only section) |
| `prisma/migrations/20260718160000_add_defined_academy_foundation/` | Database migration |
| `prisma/seed.academy.ts` | Development seed data |
| `@generated/defined-academy-*` | Auto-generated GraphQL types (from Prisma) |

### Modified (existing files only)

| File | Purpose |
|------|---------|
| `src/app/app.module.ts` | Registers `DefinedAcademyModule` |
| `prisma/seed.apps.ts` | Adds `ACADEMY` app record |
| `package.json` | Adds `seed:academy` npm script |

### Confirmation

No unrelated production projects (Bucket, HomeOps, Review Cards, Wealth Tracker, Signalboard, etc.) were modified.

---

## 3. Domain Model

### Entities

| Entity | Key fields | Notes |
|--------|-----------|-------|
| `DefinedAcademy` | `id`, `slug`, `name`, `status`, `logoUrl`, `settings`, `appId` | Tenant root |
| `DefinedAcademyCourse` | `academyId`, `slug`, `title`, `status`, `visibility`, `coverImageUrl`, `sortOrder` | Belongs to academy |
| `DefinedAcademyModule` | `courseId`, `title`, `status`, `sortOrder` | Course section |
| `DefinedAcademyLesson` | `moduleId`, `slug`, `lessonType`, `videoUrl`, `bodyContent`, `visibility`, `isPreview`, `status` | Leaf content unit |
| `DefinedAcademyResource` | `academyId`, `lessonId?`, `type`, `fileUrl`, `externalUrl`, `textContent`, `visibility`, `status` | Attachable assets |
| `DefinedAcademyEnrollment` | `courseId`, `userId`, `status`, timestamps | One per user per course |
| `DefinedAcademyLessonProgress` | `enrollmentId`, `lessonId`, `progressPercentage`, `lastPositionSeconds`, `status` | Per-lesson tracking |
| `DefinedAcademyPartner` | `academyId`, `slug`, `name`, `status`, `featured`, `logoUrl` | Partner directory |
| `DefinedAcademyPartnerCategory` | `academyId`, `slug`, `name` | Partner grouping |
| `DefinedAcademyShortLink` | `code`, `destinationUrl`, `status`, `expiresAt` | Tracked redirects |
| `DefinedAcademyReferralCampaign` | `academyId`, `code`, `sourceType`, `status` | Marketing campaigns |
| `DefinedAcademyReferral` | `referralCode`, `status`, `attributionExpiresAt`, user refs | Attribution record |

### Enums (GraphQL)

```
DefinedAcademyStatus: DRAFT | ACTIVE | ARCHIVED
DefinedAcademyCourseStatus: DRAFT | PUBLISHED | ARCHIVED
DefinedAcademyCourseVisibility: PUBLIC | AUTHENTICATED | PRIVATE
DefinedAcademyContentStatus: DRAFT | PUBLISHED | ARCHIVED
DefinedAcademyLessonType: VIDEO | ARTICLE | RESOURCE | MIXED
DefinedAcademyResourceType: PDF | IMAGE | FILE | TEXT | GUIDE | TEMPLATE | CHECKLIST | EXTERNAL_LINK | EMBED
DefinedAcademyResourceStatus: DRAFT | PUBLISHED | ARCHIVED
DefinedAcademyEnrollmentStatus: ENROLLED | IN_PROGRESS | COMPLETED | CANCELLED
DefinedAcademyLessonProgressStatus: NOT_STARTED | IN_PROGRESS | COMPLETED
DefinedAcademyPartnerStatus: DRAFT | ACTIVE | ARCHIVED
DefinedAcademyShortLinkStatus: ACTIVE | DISABLED | EXPIRED
DefinedAcademyReferralCampaignStatus: DRAFT | ACTIVE | ARCHIVED
DefinedAcademyReferralSourceType: SCHOOL | PARTNER | PROFESSIONAL | LINKEDIN | EMAIL | EVENT | SOCIAL | ORGANIC | OTHER
DefinedAcademyReferralStatus: VISITED | REGISTERED | ENROLLED | INVALID | EXPIRED
```

### Relationships

```
Academy → Courses → Modules → Lessons → Resources
Academy → Resources (standalone)
Academy → PartnerCategories → Partners
Academy → ShortLinks, ReferralCampaigns, Referrals
User → Enrollments → LessonProgress
```

### Ownership boundaries

- All content is scoped by `academyId`. Admin mutations require the correct `academyId` argument; services reject cross-academy access.
- Learner data is scoped by authenticated `userId` from JWT.

### Visibility rules

| Visibility | Anonymous | Authenticated (JWT in context) |
|------------|-----------|-------------------------------|
| `PUBLIC` | ✅ | ✅ |
| `AUTHENTICATED` | ❌ | ✅ |
| `PRIVATE` | ❌ | ❌ (admin only) |

Public endpoints also require publication status chain: academy `ACTIVE`, course `PUBLISHED`, module/lesson `PUBLISHED` (unless `isPreview: true` on lesson).

### Publication rules

- Admin must set academy to `ACTIVE` before `publishDefinedAcademyCourse` / `publishDefinedAcademyLesson` succeed.
- Public queries filter to published/active content automatically.

### Archival

- `archiveDefinedAcademy`, `archiveDefinedAcademyCourse`, `archiveDefinedAcademyResource` set status to `ARCHIVED`.
- Archived content is excluded from public queries.

---

## 4. Authentication and Authorization

### Endpoint

```
POST {API_URL}/graphql
Content-Type: application/json
Authorization: Bearer {jwt}   # when required
```

See also [`defined-auth-contract-for-frontend.md`](./defined-auth-contract-for-frontend.md) for JWT login/register flows.

### Roles and permissions

| Actor | JWT | App access | Operations |
|-------|-----|------------|------------|
| Anonymous visitor | No | — | Public queries + `captureDefinedAcademyReferral` |
| Platform user (learner) | Yes | Any (no app check) | Learner queries/mutations |
| DEFINED backoffice staff | Yes | `DEFINED` | All admin queries/mutations |

Admin operations use `@RequireApp('DEFINED')` — users without DEFINED app permission receive **403 Forbidden**.

### Public operations (no auth)

`definedAcademyBySlug`, `definedAcademyPublishedCourses`, `definedAcademyCourseBySlug`, `definedAcademyLessonBySlug`, `definedPublicAcademyResources`, `definedPublicAcademyPartners`, `definedAcademyPartnerBySlug`, `resolveDefinedAcademyShortLink`, `captureDefinedAcademyReferral`

**Note:** Sending JWT on public read queries unlocks `AUTHENTICATED`-visibility content via server-side context inspection.

### Learner operations (JWT only)

`myDefinedAcademyEnrollments`, `myDefinedAcademyEnrollment`, `myDefinedAcademyCourseProgress`, `myDefinedAcademyLessonProgress`, `enrollInDefinedAcademyCourse`, `startDefinedAcademyLesson`, `updateDefinedAcademyLessonProgress`, `completeDefinedAcademyLesson`, `attachDefinedAcademyReferralToCurrentUser`

### Administrative operations (JWT + DEFINED)

All operations on `DefinedAcademyResolver` (listed in Section 5).

---

## 5. GraphQL API

### 5.1 Public operations

#### `definedAcademyBySlug`

| Property | Value |
|----------|-------|
| Type | Query |
| Auth | None |
| Args | `slug: String!` |
| Returns | `DefinedAcademy` (nullable) |

```graphql
query DefinedAcademyBySlug($slug: String!) {
  definedAcademyBySlug(slug: $slug) {
    id
    slug
    name
    description
    logoUrl
    status
  }
}
```

```json
{ "slug": "re-quest-academy" }
```

---

#### `definedAcademyPublishedCourses`

| Property | Value |
|----------|-------|
| Type | Query |
| Auth | Optional JWT (unlocks `AUTHENTICATED` courses) |
| Args | `academySlug: String!` |
| Returns | `[DefinedAcademyCourse!]!` |

```graphql
query DefinedAcademyPublishedCourses($academySlug: String!) {
  definedAcademyPublishedCourses(academySlug: $academySlug) {
    id
    slug
    title
    summary
    coverImageUrl
    visibility
    estimatedDurationMinutes
    sortOrder
  }
}
```

---

#### `definedAcademyCourseBySlug`

| Property | Value |
|----------|-------|
| Type | Query |
| Auth | Optional JWT |
| Args | `academySlug: String!`, `courseSlug: String!` |
| Returns | `DefinedAcademyCourse` (nullable, includes modules → lessons when requested) |

```graphql
query DefinedAcademyCourseBySlug($academySlug: String!, $courseSlug: String!) {
  definedAcademyCourseBySlug(academySlug: $academySlug, courseSlug: $courseSlug) {
    id
    slug
    title
    summary
    description
    coverImageUrl
    modules {
      id
      title
      sortOrder
      lessons {
        id
        slug
        title
        lessonType
        isPreview
        sortOrder
      }
    }
  }
}
```

---

#### `definedAcademyLessonBySlug`

| Property | Value |
|----------|-------|
| Type | Query |
| Auth | Optional JWT |
| Args | `academySlug: String!`, `courseSlug: String!`, `lessonSlug: String!` |
| Returns | `DefinedAcademyLesson` (nullable) |

```graphql
query DefinedAcademyLessonBySlug(
  $academySlug: String!
  $courseSlug: String!
  $lessonSlug: String!
) {
  definedAcademyLessonBySlug(
    academySlug: $academySlug
    courseSlug: $courseSlug
    lessonSlug: $lessonSlug
  ) {
    id
    slug
    title
    lessonType
    videoUrl
    videoProvider
    videoDurationSeconds
    bodyContent
    isPreview
  }
}
```

---

#### `definedPublicAcademyResources`

| Property | Value |
|----------|-------|
| Type | Query |
| Auth | Optional JWT |
| Args | `academySlug: String!`, `lessonId: Int` (optional) |
| Returns | `[DefinedAcademyResource!]!` |

```graphql
query DefinedPublicAcademyResources($academySlug: String!, $lessonId: Int) {
  definedPublicAcademyResources(academySlug: $academySlug, lessonId: $lessonId) {
    id
    title
    type
    fileUrl
    externalUrl
    textContent
    downloadable
  }
}
```

---

#### `definedPublicAcademyPartners`

| Property | Value |
|----------|-------|
| Type | Query |
| Auth | None |
| Args | `academySlug: String!` |
| Returns | `[DefinedAcademyPartner!]!` (ACTIVE partners only) |

```graphql
query DefinedPublicAcademyPartners($academySlug: String!) {
  definedPublicAcademyPartners(academySlug: $academySlug) {
    id
    slug
    name
    description
    websiteUrl
    logoUrl
    featured
    location
  }
}
```

---

#### `definedAcademyPartnerBySlug`

| Property | Value |
|----------|-------|
| Type | Query |
| Auth | None |
| Args | `academySlug: String!`, `partnerSlug: String!` |
| Returns | `DefinedAcademyPartner` (nullable) |

```graphql
query DefinedAcademyPartnerBySlug($academySlug: String!, $partnerSlug: String!) {
  definedAcademyPartnerBySlug(academySlug: $academySlug, partnerSlug: $partnerSlug) {
    id
    slug
    name
    description
    websiteUrl
    contactUrl
    logoUrl
    location
    featured
  }
}
```

---

#### `resolveDefinedAcademyShortLink`

| Property | Value |
|----------|-------|
| Type | Query |
| Auth | None |
| Args | `code: String!` |
| Returns | `DefinedAcademyShortlinkResolve` (`code`, `destinationUrl`, `status`) |
| Errors | `404` not found; `400` disabled/expired |

```graphql
query ResolveDefinedAcademyShortLink($code: String!) {
  resolveDefinedAcademyShortLink(code: $code) {
    code
    destinationUrl
    status
  }
}
```

**Frontend rule:** Redirect only to `destinationUrl` returned by the backend.

---

#### `captureDefinedAcademyReferral`

| Property | Value |
|----------|-------|
| Type | Mutation |
| Auth | None |
| Input | `CaptureDefinedAcademyReferralInput` |
| Returns | `DefinedAcademyReferral` |

**Input shape:**

| Field | Type | Required |
|-------|------|----------|
| `academyId` | Int | Yes |
| `referralCode` | String | Yes (max 64) |
| `campaignId` | Int | No |
| `referrerUserId` | Int | No |
| `partnerId` | Int | No |
| `metadata` | JSON | No |

```graphql
mutation CaptureDefinedAcademyReferral($input: CaptureDefinedAcademyReferralInput!) {
  captureDefinedAcademyReferral(input: $input) {
    id
    referralCode
    status
    attributionExpiresAt
    firstVisitedAt
  }
}
```

```json
{
  "input": {
    "academyId": 1,
    "referralCode": "partner-jane-2026",
    "campaignId": 2
  }
}
```

**First-touch behavior:** Re-posting the same code for the same academy returns the existing anonymous `VISITED` record instead of creating a duplicate.

---

### 5.2 Learner operations (JWT required)

#### `myDefinedAcademyEnrollments`

| Args | `academyId: Int` (optional filter) |
| Returns | `[DefinedAcademyEnrollment!]!` |

```graphql
query MyDefinedAcademyEnrollments($academyId: Int) {
  myDefinedAcademyEnrollments(academyId: $academyId) {
    id
    courseId
    status
    enrolledAt
    startedAt
    completedAt
    lastAccessedAt
  }
}
```

---

#### `myDefinedAcademyEnrollment`

| Args | `enrollmentId: Int!` |
| Returns | `DefinedAcademyEnrollment` |

---

#### `myDefinedAcademyCourseProgress`

| Args | `courseId: Int!` |
| Returns | `DefinedAcademyCourseProgress` |

Fields: `enrollmentId`, `courseId`, `completedLessons`, `totalLessons`, `progressPercentage`, `enrollmentStatus`

```graphql
query MyDefinedAcademyCourseProgress($courseId: Int!) {
  myDefinedAcademyCourseProgress(courseId: $courseId) {
    enrollmentId
    courseId
    completedLessons
    totalLessons
    progressPercentage
    enrollmentStatus
  }
}
```

---

#### `myDefinedAcademyLessonProgress`

| Args | `enrollmentId: Int!`, `lessonId: Int!` |
| Returns | `DefinedAcademyLessonProgress` |

---

#### `enrollInDefinedAcademyCourse`

| Args | `courseId: Int!` |
| Returns | `DefinedAcademyEnrollment` |

```graphql
mutation EnrollInDefinedAcademyCourse($courseId: Int!) {
  enrollInDefinedAcademyCourse(courseId: $courseId) {
    id
    courseId
    status
    enrolledAt
  }
}
```

Re-enrollment reactivates a previously `CANCELLED` enrollment.

---

#### `startDefinedAcademyLesson`

| Args | `enrollmentId: Int!`, `lessonId: Int!` |
| Returns | `DefinedAcademyLessonProgress` (status → `IN_PROGRESS`) |

```graphql
mutation StartDefinedAcademyLesson($enrollmentId: Int!, $lessonId: Int!) {
  startDefinedAcademyLesson(enrollmentId: $enrollmentId, lessonId: $lessonId) {
    id
    status
    startedAt
  }
}
```

---

#### `updateDefinedAcademyLessonProgress`

| Args | `enrollmentId: Int!`, `lessonId: Int!`, `input: UpdateDefinedAcademyLessonProgressInput!` |

**Input:** `progressPercentage` (0–100), `lastPositionSeconds` (optional)

```graphql
mutation UpdateDefinedAcademyLessonProgress(
  $enrollmentId: Int!
  $lessonId: Int!
  $input: UpdateDefinedAcademyLessonProgressInput!
) {
  updateDefinedAcademyLessonProgress(
    enrollmentId: $enrollmentId
    lessonId: $lessonId
    input: $input
  ) {
    id
    progressPercentage
    lastPositionSeconds
    status
  }
}
```

```json
{
  "enrollmentId": 10,
  "lessonId": 42,
  "input": {
    "progressPercentage": 45,
    "lastPositionSeconds": 320
  }
}
```

---

#### `completeDefinedAcademyLesson`

| Args | `enrollmentId: Int!`, `lessonId: Int!` |
| Returns | `DefinedAcademyLessonProgress` (status → `COMPLETED`) |

---

#### `attachDefinedAcademyReferralToCurrentUser`

| Args | `input: AttachDefinedAcademyReferralInput!` (`referralCode: String!`) |
| Returns | `DefinedAcademyReferral` (nullable) |

```graphql
mutation AttachDefinedAcademyReferralToCurrentUser(
  $input: AttachDefinedAcademyReferralInput!
) {
  attachDefinedAcademyReferralToCurrentUser(input: $input) {
    id
    referralCode
    status
    registeredAt
  }
}
```

**Non-blocking:** Returns `null` on failure (expired, self-referral, already attributed to another user). Registration/login must succeed regardless.

---

### 5.3 Admin operations (JWT + DEFINED app access)

All admin operations require `Authorization: Bearer {jwt}` and DEFINED app permission.

#### Admin queries

| Operation | Args | Returns |
|-----------|------|---------|
| `definedAcademy` | `id: Int!` | `DefinedAcademy` |
| `definedAcademies` | `appId?: Int`, `status?: DefinedAcademyStatus` | `[DefinedAcademy!]!` |
| `definedAcademyCourses` | `academyId: Int!` | `[DefinedAcademyCourse!]!` |
| `definedAcademyCourse` | `academyId: Int!`, `courseId: Int!` | `DefinedAcademyCourse` |
| `definedAcademyResources` | `academyId: Int!`, `lessonId?: Int` | `[DefinedAcademyResource!]!` |
| `definedAcademyPartners` | `academyId: Int!` | `[DefinedAcademyPartner!]!` |
| `definedAcademyShortLinks` | `academyId: Int!` | `[DefinedAcademyShortLink!]!` |
| `definedAcademyReferralCampaigns` | `academyId: Int!`, `status?: DefinedAcademyReferralCampaignStatus` | `[DefinedAcademyReferralCampaign!]!` |
| `definedAcademyAnalyticsSummary` | `academyId: Int!` | `DefinedAcademyAnalyticsSummary` |

**Analytics summary fields:** `enrollments`, `courseStarts`, `lessonCompletions`, `courseCompletions`, `shortLinkVisits`, `referralVisits`, `referralRegistrations`, `referralEnrollments`, `activePartners`, `publishedCourses`

```graphql
query DefinedAcademyAnalyticsSummary($academyId: Int!) {
  definedAcademyAnalyticsSummary(academyId: $academyId) {
    enrollments
    courseStarts
    lessonCompletions
    courseCompletions
    shortLinkVisits
    referralVisits
    referralRegistrations
    referralEnrollments
    activePartners
    publishedCourses
  }
}
```

#### Admin mutations — academy

| Operation | Args |
|-----------|------|
| `createDefinedAcademy` | `input: CreateDefinedAcademyInput!` |
| `updateDefinedAcademy` | `id: Int!`, `input: UpdateDefinedAcademyInput!` |
| `archiveDefinedAcademy` | `id: Int!` |

```graphql
mutation CreateDefinedAcademy($input: CreateDefinedAcademyInput!) {
  createDefinedAcademy(input: $input) {
    id
    slug
    name
    status
  }
}
```

`CreateDefinedAcademyInput`: `name`, `slug` (kebab-case), optional `appId`, `description`, `status`, `logoUrl`, `settings` (JSON)

---

#### Admin mutations — courses

| Operation | Args |
|-----------|------|
| `createDefinedAcademyCourse` | `academyId: Int!`, `input: CreateDefinedAcademyCourseInput!` |
| `updateDefinedAcademyCourse` | `academyId: Int!`, `courseId: Int!`, `input: UpdateDefinedAcademyCourseInput!` |
| `publishDefinedAcademyCourse` | `academyId: Int!`, `courseId: Int!` |
| `archiveDefinedAcademyCourse` | `academyId: Int!`, `courseId: Int!` |
| `reorderDefinedAcademyCourses` | `academyId: Int!`, `input: ReorderDefinedAcademyItemsInput!` |

```graphql
mutation PublishDefinedAcademyCourse($academyId: Int!, $courseId: Int!) {
  publishDefinedAcademyCourse(academyId: $academyId, courseId: $courseId) {
    id
    status
    publishedAt
  }
}
```

---

#### Admin mutations — modules & lessons

| Operation | Args |
|-----------|------|
| `createDefinedAcademyModule` | `academyId: Int!`, `courseId: Int!`, `input: CreateDefinedAcademyModuleInput!` |
| `updateDefinedAcademyModule` | `academyId: Int!`, `moduleId: Int!`, `input: UpdateDefinedAcademyModuleInput!` |
| `reorderDefinedAcademyModules` | `academyId: Int!`, `input: ReorderDefinedAcademyItemsInput!` (`parentId` = courseId) |
| `createDefinedAcademyLesson` | `academyId: Int!`, `moduleId: Int!`, `input: CreateDefinedAcademyLessonInput!` |
| `updateDefinedAcademyLesson` | `academyId: Int!`, `lessonId: Int!`, `input: UpdateDefinedAcademyLessonInput!` |
| `publishDefinedAcademyLesson` | `academyId: Int!`, `lessonId: Int!` |
| `reorderDefinedAcademyLessons` | `academyId: Int!`, `input: ReorderDefinedAcademyItemsInput!` (`parentId` = moduleId) |

```graphql
mutation CreateDefinedAcademyLesson(
  $academyId: Int!
  $moduleId: Int!
  $input: CreateDefinedAcademyLessonInput!
) {
  createDefinedAcademyLesson(academyId: $academyId, moduleId: $moduleId, input: $input) {
    id
    slug
    title
    lessonType
    status
  }
}
```

---

#### Admin mutations — resources

| Operation | Args |
|-----------|------|
| `createDefinedAcademyResource` | `academyId: Int!`, `input: CreateDefinedAcademyResourceInput!` |
| `updateDefinedAcademyResource` | `academyId: Int!`, `resourceId: Int!`, `input: UpdateDefinedAcademyResourceInput!` |
| `archiveDefinedAcademyResource` | `academyId: Int!`, `resourceId: Int!` |

`CreateDefinedAcademyResourceInput` key fields: `type`, `title`, `fileUrl`, `externalUrl`, `textContent`, `lessonId?`, `visibility`, `downloadable`

---

#### Admin mutations — partners

| Operation | Args |
|-----------|------|
| `createDefinedAcademyPartnerCategory` | `academyId: Int!`, `input: CreateDefinedAcademyPartnerCategoryInput!` |
| `createDefinedAcademyPartner` | `academyId: Int!`, `input: CreateDefinedAcademyPartnerInput!` |
| `updateDefinedAcademyPartner` | `academyId: Int!`, `partnerId: Int!`, `input: UpdateDefinedAcademyPartnerInput!` |

---

#### Admin mutations — short links & referrals

| Operation | Args |
|-----------|------|
| `createDefinedAcademyShortLink` | `academyId: Int!`, `input: CreateDefinedAcademyShortLinkInput!` |
| `disableDefinedAcademyShortLink` | `academyId: Int!`, `shortLinkId: Int!` |
| `createDefinedAcademyReferralCampaign` | `academyId: Int!`, `input: CreateDefinedAcademyReferralCampaignInput!` |
| `updateDefinedAcademyReferralCampaign` | `academyId: Int!`, `campaignId: Int!`, `input: UpdateDefinedAcademyReferralCampaignInput!` |

```graphql
mutation CreateDefinedAcademyShortLink(
  $academyId: Int!
  $input: CreateDefinedAcademyShortLinkInput!
) {
  createDefinedAcademyShortLink(academyId: $academyId, input: $input) {
    id
    code
    destinationUrl
    status
  }
}
```

---

## 6. Frontend User Flows

### Public course discovery

1. **Load academy** — `definedAcademyBySlug(slug)` → render branding, validate `status === ACTIVE`.
2. **Load published courses** — `definedAcademyPublishedCourses(academySlug)`.
3. **Load course details** — `definedAcademyCourseBySlug(academySlug, courseSlug)` with modules/lessons.
4. **Load preview lessons** — `definedAcademyLessonBySlug(...)` for `isPreview` lessons or full lesson pages.
5. **Capture referral** — if `?ref=` or campaign param present, call `captureDefinedAcademyReferral` and store `referralCode` in localStorage/session.

```graphql
# Step 1–3 combined example
query AcademyDiscovery($academySlug: String!, $courseSlug: String!) {
  definedAcademyBySlug(slug: $academySlug) {
    id
    name
    logoUrl
  }
  definedAcademyPublishedCourses(academySlug: $academySlug) {
    id
    slug
    title
    summary
    coverImageUrl
  }
  definedAcademyCourseBySlug(academySlug: $academySlug, courseSlug: $courseSlug) {
    id
    title
    modules {
      title
      lessons {
        slug
        title
        isPreview
      }
    }
  }
}
```

---

### Registration with referral attribution

1. **Capture on landing** — `captureDefinedAcademyReferral` when visitor arrives with referral param (before login).
2. **Store client-side** — persist `referralCode` (and `academyId`) in localStorage.
3. **Complete normal registration** — use existing auth mutations (see auth contract doc).
4. **Attach after login** — `attachDefinedAcademyReferralToCurrentUser({ referralCode })` in background; ignore `null` response.
5. **Continue regardless** — never block UX on attribution failure.

```graphql
# After successful login/registration
mutation AttachReferral($input: AttachDefinedAcademyReferralInput!) {
  attachDefinedAcademyReferralToCurrentUser(input: $input) {
    id
    status
  }
}
```

Attribution model: **first-touch** — earliest anonymous visit wins; window defaults to 30 days (`DEFINED_ACADEMY_REFERRAL_ATTRIBUTION_DAYS`).

---

### Course enrollment

1. **Authenticate** — obtain JWT.
2. **Enroll** — `enrollInDefinedAcademyCourse(courseId)`.
3. **Load enrollment** — `myDefinedAcademyEnrollment(enrollmentId)` or `myDefinedAcademyEnrollments(academyId)`.
4. **Start course** — `myDefinedAcademyCourseProgress(courseId)` for overview; `startDefinedAcademyLesson` on first lesson.

```graphql
mutation EnrollAndProgress($courseId: Int!) {
  enrollInDefinedAcademyCourse(courseId: $courseId) {
    id
    status
  }
  myDefinedAcademyCourseProgress(courseId: $courseId) {
    progressPercentage
    completedLessons
    totalLessons
  }
}
```

---

### Lesson progress

1. **Start** — `startDefinedAcademyLesson(enrollmentId, lessonId)`.
2. **Update position** — debounced `updateDefinedAcademyLessonProgress` with `lastPositionSeconds` and `progressPercentage` during video playback.
3. **Complete** — `completeDefinedAcademyLesson(enrollmentId, lessonId)`.
4. **Refresh** — `myDefinedAcademyCourseProgress(courseId)`.

```graphql
mutation LessonProgressFlow(
  $enrollmentId: Int!
  $lessonId: Int!
  $courseId: Int!
) {
  startDefinedAcademyLesson(enrollmentId: $enrollmentId, lessonId: $lessonId) {
    status
  }
  updateDefinedAcademyLessonProgress(
    enrollmentId: $enrollmentId
    lessonId: $lessonId
    input: { progressPercentage: 80, lastPositionSeconds: 480 }
  ) {
    progressPercentage
    lastPositionSeconds
  }
  completeDefinedAcademyLesson(enrollmentId: $enrollmentId, lessonId: $lessonId) {
    status
    completedAt
  }
  myDefinedAcademyCourseProgress(courseId: $courseId) {
    progressPercentage
    enrollmentStatus
  }
}
```

---

### Resource access

1. **Query resources** — `definedPublicAcademyResources(academySlug, lessonId)` (send JWT if resources are `AUTHENTICATED`).
2. **Render by type** — `PDF`/`IMAGE`/`FILE` use `fileUrl`; `EXTERNAL_LINK`/`EMBED` use `externalUrl`; text types use `textContent`.
3. **Download** — if `downloadable === true`, link to `fileUrl` directly (no signed-URL mutation in v1).
4. **Access events** — not implemented in v1; defer analytics.

---

### Short links

1. **Resolve** — `resolveDefinedAcademyShortLink(code)` on `/l/:code` route.
2. **Validate** — check `status === ACTIVE`.
3. **Redirect** — `window.location.href = destinationUrl` (backend-approved URL only).
4. **Handle errors** — show friendly message for disabled/expired links (`400` errors).

```graphql
query ShortLinkRedirect($code: String!) {
  resolveDefinedAcademyShortLink(code: $code) {
    destinationUrl
    status
  }
}
```

---

### Partner discovery

1. **List partners** — `definedPublicAcademyPartners(academySlug)`.
2. **Filter client-side** — by `featured`, or group by category if admin has assigned categories (public query returns flat list; category join available on admin side).
3. **Partner detail** — `definedAcademyPartnerBySlug(academySlug, partnerSlug)`.
4. **Engagement tracking** — not implemented in v1 beyond referral/shortlink infrastructure.

---

## 7. Upload Integration

Defined Academy follows the **same URL-based pattern as Defined Branding and Defined Proposals**. There is **no academy-specific upload controller**.

### Process

1. Upload file using your organization's existing upload infrastructure (CDN, S3 presigned URL, or shared `/uploads/` pipeline if available in your deployment).
2. Obtain a public or authenticated URL string.
3. Pass the URL in GraphQL mutation inputs:
   - Academy logo → `logoUrl` on `createDefinedAcademy` / `updateDefinedAcademy`
   - Course cover → `coverImageUrl` on course inputs
   - Lesson video → `videoUrl` on lesson inputs
   - Resource files → `fileUrl` on `createDefinedAcademyResource`
   - Partner logo → `logoUrl` on partner inputs
   - Short link target → `destinationUrl` on `createDefinedAcademyShortLink`

### Allowed file types (by resource type)

| Resource type | Required field | Validation |
|--------------|----------------|------------|
| `PDF`, `IMAGE`, `FILE` | `fileUrl` | Must be safe `http(s)://` URL or `/uploads/` path |
| `EXTERNAL_LINK`, `EMBED` | `externalUrl` | Safe external URL |
| `TEXT`, `GUIDE`, `TEMPLATE`, `CHECKLIST` | `textContent` | Non-empty string |

### Maximum sizes

No server-side file size validation (URLs only). Enforce limits in your upload pipeline before storing the URL. Optionally pass `fileSize` and `mimeType` on resource inputs for display metadata.

### Public vs private files

- Resource `visibility` controls public query exposure (`PUBLIC`, `AUTHENTICATED`, `PRIVATE`).
- URL secrecy is the frontend/CDN's responsibility for private assets in v1 — no signed-URL GraphQL mutation exists yet.

### Required permissions

Only admin mutations (DEFINED + JWT) can set media URLs on academy content.

---

## 8. Pagination, Sorting, and Filtering

Defined Academy v1 does **not** use cursor-based pagination. Lists return full result sets scoped by filters.

| Operation | Filter parameters | Default sort |
|-----------|------------------|--------------|
| `definedAcademies` | `appId`, `status` | `createdAt desc` |
| `definedAcademyCourses` | `academyId` (required) | `sortOrder asc` |
| `definedAcademyResources` | `academyId`, `lessonId?` | `sortOrder asc` |
| `definedAcademyPartners` | `academyId` | `sortOrder asc` |
| `definedAcademyShortLinks` | `academyId` | `createdAt desc` |
| `definedAcademyReferralCampaigns` | `academyId`, `status?` | `createdAt desc` |
| `definedAcademyPublishedCourses` | `academySlug` | `sortOrder asc` |
| `definedPublicAcademyResources` | `academySlug`, `lessonId?` | `sortOrder asc` |
| `myDefinedAcademyEnrollments` | `academyId?` | `enrolledAt desc` |

**Reorder mutations** accept explicit `sortOrder` per item:

```graphql
mutation ReorderCourses($academyId: Int!, $input: ReorderDefinedAcademyItemsInput!) {
  reorderDefinedAcademyCourses(academyId: $academyId, input: $input) {
    id
    sortOrder
  }
}
```

`ReorderDefinedAcademyItemsInput`: `{ parentId: Int!, items: [{ id, sortOrder }] }`

- Modules: `parentId` = `courseId`
- Lessons: `parentId` = `moduleId`
- Courses: `parentId` is ignored by backend (required by schema — pass `0`)

---

## 9. Error Handling

| Condition | HTTP / GraphQL | Recommended UI |
|-----------|---------------|----------------|
| Missing or invalid JWT | 401 Unauthorized | Redirect to login |
| User lacks DEFINED app access | 403 Forbidden | Show "access denied" / contact admin |
| Entity not found | GraphQL error / 404 message | Show not-found page |
| Invalid slug format | 400 Bad Request | Show validation error on admin forms |
| Academy not ACTIVE for publish | 400 Bad Request | Prompt admin to activate academy first |
| Course not published for enrollment | 400 Bad Request | Show "course unavailable" |
| Duplicate enrollment | 400 Bad Request | Navigate to existing enrollment |
| Short link not found | 404 Not Found | Generic "link not found" page |
| Short link disabled | 400 Bad Request | "This link is no longer available" |
| Short link expired | 400 Bad Request | "This link has expired" |
| Unsafe URL in admin input | 400 Bad Request | Inline field validation message |
| Resource type missing required field | 400 Bad Request | Inline field validation |
| Referral attach failed (any reason) | 200 with `null` data | Silent — do not show error |
| Referral capture invalid code | 400 Bad Request | Log internally; optional toast |
| Validation errors (class-validator) | 400 Bad Request | Map to form fields |

GraphQL errors return NestJS exception messages in `errors[].message`. Do not expose stack traces in production UI.

---

## 10. Generated Types

The backend uses NestJS code-first GraphQL with Prisma-generated models under `@generated/`. The frontend should **not manually duplicate** these types.

### Recommended approach

1. Point your frontend GraphQL codegen (e.g. `@graphql-codegen/cli`) at the deployed schema introspection endpoint or a checked-in schema snapshot.
2. Generate TypeScript types and operation hooks from your `.graphql` documents.
3. Re-run codegen when backend schema changes (after migration deploy).

Example codegen config (adapt to your frontend repo):

```yaml
# codegen.yml (frontend repo)
schema: "${NEXT_PUBLIC_GRAPHQL_URL}"
documents: "src/graphql/**/*.graphql"
generates:
  src/generated/graphql.ts:
    plugins:
      - typescript
      - typescript-operations
      - typed-document-node
```

Enum names in GraphQL match Prisma enum names exactly (e.g. `DefinedAcademyCourseVisibility`).

---

## 11. Testing Notes

### Commands executed

```bash
npm test                                    # 97 passed
npm test -- --testPathPattern=defined-academy   # 19 passed
```

### Tests added (backend)

| File | Tests |
|------|-------|
| `defined-academy.service.spec.ts` | Publication & visibility |
| `defined-academy-learner.service.spec.ts` | Enrollment |
| `defined-academy-referral.service.spec.ts` | First-touch capture |
| `defined-academy-shortlink.service.spec.ts` | Link resolve |
| `academy-resource-validation.util.spec.ts` | Resource validation |

### Known limitations

- No GraphQL e2e tests yet
- No frontend test suite in this repository
- Analytics service lacks unit tests

### Deferred work

See Section 13.

---

## 12. Migration and Deployment

### Migration

```
20260718160000_add_defined_academy_foundation
```

Apply before deploying API code:

```bash
npx prisma migrate deploy
```

### Environment variables

| Variable | Default | When to set |
|----------|---------|-------------|
| `DEFINED_ACADEMY_REFERRAL_ATTRIBUTION_DAYS` | `30` | Production if attribution window differs |
| `ACADEMY_SEED_SLUG` | `re-quest-academy` | Dev seed only |
| `ACADEMY_SEED_COURSE_SLUG` | `first-90-days-real-estate` | Dev seed only |

### Rollout sequence

1. Deploy migration (`prisma migrate deploy`)
2. Deploy API with `DefinedAcademyModule` registered
3. Run `npm run seed:apps` (if `ACADEMY` app record missing)
4. Optionally run `npm run seed:academy` in non-production
5. Deploy frontend consuming new operations

### Backward compatibility

Fully additive — existing apps unaffected. API without migration will error only on academy operations.

### Rollback

Revert API deployment; migration rollback requires manual drop of new tables (safe — no existing data touched).

### Manual production steps

None required beyond migration deploy and ensuring DEFINED staff have app access. Seed scripts are development-only unless explicitly run in staging.

### Seed (development)

```bash
npm run seed:apps && npm run seed:academy
```

Creates `ACADEMY` app, RE-Quest academy (`re-quest-academy`), sample course with modules and lessons.

---

## 13. Future Extensions

Intentionally **not implemented** in v1:

| Feature | Notes |
|---------|-------|
| Certificates | No completion credential generation |
| Quizzes | No assessment engine |
| Assignments | No submission workflow |
| Comments | No discussion threads |
| Live classes | No scheduling/streaming integration |
| Paid courses | No payment gateway |
| Subscriptions | No recurring billing |
| Affiliate commissions | Referral tracking only; no payout logic |
| Advanced analytics | Basic counts in `definedAcademyAnalyticsSummary` only |
| Email automation | No course notification emails |
| Badges | No gamification |
| Gamification | No points/leaderboards |
| Signed upload URLs | URL-based attachment only |
| Access/download event logging | Deferred for resources |
| Partner engagement analytics | List/detail only |

These can be layered on the existing schema in future migrations without breaking current clients.

---

## Quick Reference — All Operation Names

### Public
`definedAcademyBySlug`, `definedAcademyPublishedCourses`, `definedAcademyCourseBySlug`, `definedAcademyLessonBySlug`, `definedPublicAcademyResources`, `definedPublicAcademyPartners`, `definedAcademyPartnerBySlug`, `resolveDefinedAcademyShortLink`, `captureDefinedAcademyReferral`

### Learner
`myDefinedAcademyEnrollments`, `myDefinedAcademyEnrollment`, `myDefinedAcademyCourseProgress`, `myDefinedAcademyLessonProgress`, `enrollInDefinedAcademyCourse`, `startDefinedAcademyLesson`, `updateDefinedAcademyLessonProgress`, `completeDefinedAcademyLesson`, `attachDefinedAcademyReferralToCurrentUser`

### Admin
`definedAcademy`, `definedAcademies`, `definedAcademyCourses`, `definedAcademyCourse`, `definedAcademyResources`, `definedAcademyPartners`, `definedAcademyShortLinks`, `definedAcademyReferralCampaigns`, `definedAcademyAnalyticsSummary`, `createDefinedAcademy`, `updateDefinedAcademy`, `archiveDefinedAcademy`, `createDefinedAcademyCourse`, `updateDefinedAcademyCourse`, `publishDefinedAcademyCourse`, `archiveDefinedAcademyCourse`, `reorderDefinedAcademyCourses`, `createDefinedAcademyModule`, `updateDefinedAcademyModule`, `reorderDefinedAcademyModules`, `createDefinedAcademyLesson`, `updateDefinedAcademyLesson`, `publishDefinedAcademyLesson`, `reorderDefinedAcademyLessons`, `createDefinedAcademyResource`, `updateDefinedAcademyResource`, `archiveDefinedAcademyResource`, `createDefinedAcademyPartnerCategory`, `createDefinedAcademyPartner`, `updateDefinedAcademyPartner`, `createDefinedAcademyShortLink`, `disableDefinedAcademyShortLink`, `createDefinedAcademyReferralCampaign`, `updateDefinedAcademyReferralCampaign`
