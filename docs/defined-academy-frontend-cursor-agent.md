# Cursor Agent Script — Defined Academy Frontend (from zero)

Use this document in the **frontend repo** (Defined Lab site — e.g. `defined-lab.com`) so the Cursor agent can implement the Academy experience end-to-end with the same patterns already used for the Defined site.

---

## Read these backend docs first (source of truth)

All paths are in the **`boxhub-nest-api`** repo:

1. [`docs/DEFINED_ACADEMY_FRONTEND_IMPLEMENTATION_REPORT.md`](./DEFINED_ACADEMY_FRONTEND_IMPLEMENTATION_REPORT.md) — **primary API reference** (every query/mutation, inputs, errors)
2. [`docs/DEFINED_ACADEMY_BACKEND_IMPLEMENTATION_REPORT.md`](./DEFINED_ACADEMY_BACKEND_IMPLEMENTATION_REPORT.md) — architecture, auth tiers, migration
3. [`docs/defined-auth-contract-for-frontend.md`](./defined-auth-contract-for-frontend.md) — login, register, JWT, headers
4. [`docs/defined-frontend-cursor-agent-complete-with-testing.md`](./defined-frontend-cursor-agent-complete-with-testing.md) — **follow the same frontend conventions** (routing, GraphQL client, auth store, loading/error UX)
5. [`docs/defined-academy-uploads.md`](./defined-academy-uploads.md) — REST upload endpoints (program cover, logo, resources)
6. [`docs/defined-academy-frontend-cursor-agent-uploads-and-fixes.md`](./defined-academy-frontend-cursor-agent-uploads-and-fixes.md) — **fix GraphQL Int bugs + implement upload UI** (use this for current sprint)

Do **not** invent parallel auth or API patterns. Reuse what the Defined site already uses.

---

## Goal

Build the **Defined Academy** public + learner frontend for **RE-Quest Professional Growth Initiative** (first academy: `re-quest-academy`), without breaking existing Defined pages.

### In scope (Phase 1 — this agent)

1. **Public discovery** — academy home, course catalog, course detail, lesson preview
2. **Partners** — categories + partner directory
3. **Short links** — resolve backend-approved redirects (`/a/:code` or similar)
4. **Referral capture** — query param / cookie + attach after login
5. **Auth** — sign in / sign up (reuse Defined auth flow)
6. **Learner** — enroll, course player, lesson progress (video position + complete)
7. **Resources** — PDFs, links, text blocks per lesson

### Out of scope (Phase 2 — separate agent in Defined backoffice)

Admin CRUD (`createDefinedAcademyCourse`, publish, partners admin, analytics) lives in **`/defined/*` backoffice** with `@RequireApp('DEFINED')`. Do not block Phase 1 on admin UI unless explicitly requested.

---

## Hard constraints

1. **No global redesign** — reuse Defined Lab layout, tokens, typography, components.
2. **No unrelated refactor** — isolate under an `academy/` (or equivalent) module/folder.
3. **Same GraphQL client** as Defined site (`NEXT_PUBLIC_GRAPHQL_URL` or existing env name).
4. **Same auth storage** — JWT in the same place Defined uses (localStorage/cookie/context).
5. **Send JWT on all authenticated requests** — `Authorization: Bearer <token>`.
6. **Also send JWT on public read queries when logged in** — unlocks `AUTHENTICATED` visibility courses/lessons.
7. **CORS** — production API is on `discart.me` (or configured API host); frontend origin must be allowed in Nginx (`defined-lab.com`).
8. **No payments, checkout, subscriptions, or invoices.**

---

## Environment variables (frontend)

Mirror Defined site env naming:

```env
# GraphQL API (same as Defined site)
NEXT_PUBLIC_GRAPHQL_URL=https://www.discart.me/graphql
# or VITE_GRAPHQL_URL for Vite — match existing project convention

# Default academy slug for RE-Quest (can override per env)
NEXT_PUBLIC_ACADEMY_SLUG=re-quest-academy

# Optional: academy id for referral capture if known at build time
NEXT_PUBLIC_ACADEMY_ID=1
```

Backend optional (document only): `DEFINED_ACADEMY_REFERRAL_ATTRIBUTION_DAYS=30`

---

## Suggested route map

Adapt to your router (Next.js App Router, React Router, etc.) but keep equivalent URLs:

### Public (no login required)

| Route | Purpose |
|-------|---------|
| `/academy` | Redirect → `/academy/re-quest-academy` or academy picker |
| `/academy/:academySlug` | Academy home + published courses |
| `/academy/:academySlug/courses/:courseSlug` | Course detail + syllabus |
| `/academy/:academySlug/courses/:courseSlug/lessons/:lessonSlug` | Lesson view (preview or full if allowed) |
| `/academy/:academySlug/partners` | Partner directory |
| `/academy/:academySlug/partners/:partnerSlug` | Partner detail |
| `/a/:code` | Short link resolver → backend redirect |

### Auth (reuse Defined routes if shared)

| Route | Purpose |
|-------|---------|
| `/signin` | Login (existing) |
| `/signup` | Register — pass `appCode: "ACADEMY"` **or** no app code (learner only needs JWT) |
| `/verify-email` | Email verification (existing) |

### Learner (protected)

| Route | Purpose |
|-------|---------|
| `/academy/:academySlug/my-courses` | Enrolled courses |
| `/academy/:academySlug/learn/:courseSlug` | Course player (enrolled) |
| `/academy/:academySlug/learn/:courseSlug/:lessonSlug` | Active lesson + progress |

**Access rules:**

- Unauthenticated on `/learn/*` → redirect to `/signin?returnUrl=...`
- Authenticated on `AUTHENTICATED` visibility content → send JWT on GraphQL requests
- `PRIVATE` courses → show "invitation required" (no public enroll)

---

## GraphQL operations map

Organize like Defined backoffice: one file per domain under `graphql/academy/` (or your existing convention).

### Public queries (no auth header required; send header if logged in)

| Operation | Purpose |
|-----------|---------|
| `definedAcademyBySlug` | Academy header/branding |
| `definedAcademyPublishedCourses` | Course cards on academy home |
| `definedAcademyCourseBySlug` | Course detail + modules/lessons tree |
| `definedAcademyLessonBySlug` | Single lesson content |
| `definedPublicAcademyResources` | Resources for academy or lesson |
| `definedPublicAcademyPartners` | Partner list |
| `definedAcademyPartnerBySlug` | Partner detail |
| `resolveDefinedAcademyShortLink` | Validate code before redirect |

### Public mutation

| Operation | Purpose |
|-----------|---------|
| `captureDefinedAcademyReferral` | First-touch attribution (anonymous) |

### Learner (JWT required)

| Operation | Purpose |
|-----------|---------|
| `myDefinedAcademyEnrollments` | My courses list |
| `myDefinedAcademyEnrollment` | Single enrollment detail |
| `myDefinedAcademyCourseProgress` | Progress bar % |
| `myDefinedAcademyLessonProgress` | Lesson state |
| `enrollInDefinedAcademyCourse` | Enroll button |
| `startDefinedAcademyLesson` | Open lesson |
| `updateDefinedAcademyLessonProgress` | Video heartbeat |
| `completeDefinedAcademyLesson` | Mark done |
| `attachDefinedAcademyReferralToCurrentUser` | After login/register |

### Auth (shared with Defined)

| Operation | Purpose |
|-----------|---------|
| `login` | Session |
| `register` | Optional `appCode: "ACADEMY"` |
| `verifyEmail` / `resendVerificationEmail` | Verification gate |

---

## Copy-paste GraphQL documents

Create these as `.graphql` or `gql` template literals in the frontend repo.

### Academy home

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

query DefinedAcademyPublishedCourses($academySlug: String!) {
  definedAcademyPublishedCourses(academySlug: $academySlug) {
    id
    slug
    title
    summary
    coverImageUrl
    visibility
    level
    estimatedDurationMinutes
    sortOrder
  }
}
```

Variables (RE-Quest seed):

```json
{ "slug": "re-quest-academy", "academySlug": "re-quest-academy" }
```

### Course detail

```graphql
query DefinedAcademyCourseBySlug($academySlug: String!, $courseSlug: String!) {
  definedAcademyCourseBySlug(academySlug: $academySlug, courseSlug: $courseSlug) {
    id
    slug
    title
    summary
    description
    coverImageUrl
    visibility
    estimatedDurationMinutes
    modules {
      id
      title
      sortOrder
      status
      lessons {
        id
        slug
        title
        summary
        lessonType
        videoUrl
        videoProvider
        videoDurationSeconds
        isPreview
        visibility
        status
        sortOrder
      }
    }
  }
}
```

Variables:

```json
{
  "academySlug": "re-quest-academy",
  "courseSlug": "first-90-days-real-estate"
}
```

### Lesson page

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
    summary
    description
    lessonType
    videoUrl
    videoProvider
    videoDurationSeconds
    bodyContent
    isPreview
    visibility
    resources {
      id
      title
      type
      fileUrl
      externalUrl
      textContent
      downloadable
      sortOrder
    }
  }
}
```

### Lesson resources (standalone query if needed)

```graphql
query DefinedPublicAcademyResources($academySlug: String!, $lessonId: Int) {
  definedPublicAcademyResources(academySlug: $academySlug, lessonId: $lessonId) {
    id
    title
    description
    type
    fileUrl
    externalUrl
    textContent
    mimeType
    fileName
    downloadable
    sortOrder
  }
}
```

### Partners

```graphql
query DefinedPublicAcademyPartners($academySlug: String!) {
  definedPublicAcademyPartners(academySlug: $academySlug) {
    id
    slug
    name
    description
    websiteUrl
    contactUrl
    logoUrl
    location
    featured
    sortOrder
    category {
      id
      name
      slug
    }
  }
}

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
    category {
      id
      name
      slug
    }
  }
}
```

### Short link

```graphql
query ResolveDefinedAcademyShortLink($code: String!) {
  resolveDefinedAcademyShortLink(code: $code) {
    code
    destinationUrl
    status
  }
}
```

**UI rule:** Only redirect to `destinationUrl` returned by the API. Never redirect to user-supplied URLs.

### Referral capture (public)

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
    "referralCode": "partner-jane-2026"
  }
}
```

Store `referralCode` in `sessionStorage` or cookie until user registers/logs in.

### Enroll + progress (learner)

```graphql
mutation EnrollInDefinedAcademyCourse($courseId: Int!) {
  enrollInDefinedAcademyCourse(courseId: $courseId) {
    id
    courseId
    status
    enrolledAt
  }
}

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

mutation StartDefinedAcademyLesson($enrollmentId: Int!, $lessonId: Int!) {
  startDefinedAcademyLesson(enrollmentId: $enrollmentId, lessonId: $lessonId) {
    id
    status
    startedAt
  }
}

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

mutation CompleteDefinedAcademyLesson($enrollmentId: Int!, $lessonId: Int!) {
  completeDefinedAcademyLesson(enrollmentId: $enrollmentId, lessonId: $lessonId) {
    id
    status
    completedAt
    progressPercentage
  }
}

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

Progress heartbeat example (video player):

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

## Frontend architecture (match Defined site)

Follow the same structure as the existing Defined frontend. Typical layout:

```
src/
  lib/graphql/client.ts          # same Apollo/urql/fetch wrapper as Defined
  lib/auth/                      # token storage, getAuthHeaders()
  features/academy/
    api/                         # GraphQL documents + typed hooks
    components/                  # CourseCard, LessonPlayer, ProgressBar, PartnerCard
    pages/                       # or app/academy/... for Next.js
    hooks/                       # useAcademySlug, useReferralCapture, useLessonProgress
    utils/referral.ts            # ?ref= parsing, sessionStorage
  features/auth/                 # reuse existing — do not duplicate
```

### GraphQL client headers

```typescript
// Same pattern as Defined site
const headers: Record<string, string> = {
  'Content-Type': 'application/json',
};
const token = getAccessToken();
if (token) {
  headers.Authorization = `Bearer ${token}`;
}
// Optional: x-app-code: ACADEMY on register only
```

### Error handling (same as Defined)

| HTTP / GraphQL | UI response |
|----------------|-------------|
| 401 Unauthorized | Redirect to `/signin` |
| 403 Forbidden + `EMAIL_NOT_VERIFIED` | Redirect to `/verify-email` |
| 403 on enroll | Show friendly "not available" message |
| `BadRequestException` "already enrolled" | Navigate to course player |
| Network / CORS | Check API URL + Nginx origin for `defined-lab.com` |
| Public slug returns `null` | Show 404 "Academy/course not found" |

Parse GraphQL errors via existing `formatError` extensions (same as Defined auth doc).

---

## Screen-by-screen implementation checklist

### 1. Academy home (`/academy/:academySlug`)

- [ ] `definedAcademyBySlug` — hero (name, description, logo)
- [ ] `definedAcademyPublishedCourses` — grid of course cards
- [ ] CTA: Sign in / Start learning
- [ ] Link to Partners
- [ ] Capture `?ref=` or `?referral=` on mount → `captureDefinedAcademyReferral`

### 2. Course detail (`/academy/.../courses/:courseSlug`)

- [ ] `definedAcademyCourseBySlug` with modules + lessons
- [ ] Show lock icon on non-preview lessons for anonymous users
- [ ] **Enroll** button → requires auth → `enrollInDefinedAcademyCourse(courseId)`
- [ ] If enrolled → link to `/learn/:courseSlug`

### 3. Lesson view (preview or learn)

- [ ] `definedAcademyLessonBySlug`
- [ ] Render by `lessonType`: VIDEO (embed `videoUrl`), ARTICLE (`bodyContent`), RESOURCE list
- [ ] Resources: PDF/link download buttons from `fileUrl` / `externalUrl` / `textContent`
- [ ] Learn mode: `startDefinedAcademyLesson` on open
- [ ] Video: debounced `updateDefinedAcademyLessonProgress` every ~15s
- [ ] **Mark complete** → `completeDefinedAcademyLesson`
- [ ] Sidebar: module/lesson list + `myDefinedAcademyCourseProgress`

### 4. My courses (`/academy/:academySlug/my-courses`)

- [ ] `myDefinedAcademyEnrollments(academyId)` — filter by academy id from slug lookup
- [ ] Progress % from `myDefinedAcademyCourseProgress`

### 5. Partners

- [ ] List + detail pages with public partner queries
- [ ] External links open in new tab with `rel="noopener noreferrer"`

### 6. Short link route (`/a/:code`)

- [ ] `resolveDefinedAcademyShortLink`
- [ ] On success → `window.location.href = destinationUrl` (HTTPS only from API)
- [ ] On error → friendly "link expired or disabled" page

### 7. Auth + referral attach

On successful login/register:

```typescript
const referralCode = sessionStorage.getItem('academy_referral_code');
if (referralCode) {
  await attachDefinedAcademyReferralToCurrentUser({ input: { referralCode } });
  // ignore null result — non-blocking
  sessionStorage.removeItem('academy_referral_code');
}
```

---

## Media / uploads (admin content, learner display)

Backend stores **URLs only** (same as Defined Branding):

- `coverImageUrl`, `logoUrl`, `videoUrl`, resource `fileUrl`
- Display with `<img src={url} />`, video embed, or `<a href={fileUrl} download>`
- No Academy-specific upload endpoint in Phase 1 — staff uploads via existing infrastructure and paste URLs in backoffice (Phase 2)

---

## Referral flow (first-touch)

1. User lands with `?ref=CODE` or campaign link containing code.
2. Frontend calls `captureDefinedAcademyReferral` with `academyId` + `referralCode`.
3. Store code in `sessionStorage`.
4. User browses anonymously (optional).
5. User registers/logs in.
6. Call `attachDefinedAcademyReferralToCurrentUser` — **never block auth on failure**.
7. On enroll, backend may upgrade referral to `ENROLLED` automatically.

Attribution window: **30 days** (first-touch).

---

## Suggested implementation order

1. GraphQL client + auth headers (reuse Defined)
2. Academy home + course list (public queries)
3. Course detail + lesson preview
4. Auth gate + enroll mutation
5. Learn mode + progress mutations
6. Partners pages
7. Short link route
8. Referral capture + attach
9. Polish: loading skeletons, 404, empty states, mobile layout

---

## Manual testing guide (agent must deliver this section)

### Prerequisites (local/staging)

```bash
# In boxhub-nest-api
npx prisma migrate deploy
npm run seed:apps
npm run seed:academy
yarn start:dev
```

Seed slugs: academy `re-quest-academy`, course `first-90-days-real-estate`.

### Test 1 — Public discovery (incognito)

1. Open `/academy/re-quest-academy`
2. Expect: academy name + at least one course card
3. Open course detail
4. Expect: 4 modules, first lesson may be `isPreview: true`

### Test 2 — Auth-gated enroll

1. Click Enroll without login → redirect to signin
2. Login with verified user
3. Enroll → expect success or "already enrolled"
4. Open learn route → lesson content loads

### Test 3 — Progress

1. Open enrolled lesson
2. Wait for progress update (or trigger manually)
3. Mark complete
4. Expect `myDefinedAcademyCourseProgress.progressPercentage` > 0

### Test 4 — Referral

1. Open `/academy/re-quest-academy?ref=test-ref-123`
2. Confirm `captureDefinedAcademyReferral` fired (network tab)
3. Register new user
4. Confirm `attachDefinedAcademyReferralToCurrentUser` called
5. Login must succeed even if attach returns null

### Test 5 — Short link

1. Create short link in DB/admin (Phase 2) or use seeded code
2. Open `/a/{code}`
3. Expect redirect only to HTTPS URL from API

### Test 6 — CORS

1. From `defined-lab.com` (or localhost dev), GraphQL requests must succeed
2. If CORS error → Nginx must include frontend origin (see backend team)

---

## Required deliverables from the frontend agent

When finished, the agent must output:

1. **Summary** of implemented screens and flows
2. **File list** created/changed
3. **Route map** (final URLs)
4. **GraphQL operations map** (file → operation names)
5. **Env vars** required
6. **Manual testing guide** with steps above filled in for the actual routes
7. **Known gaps** (e.g. admin CMS deferred to Defined backoffice Phase 2)

---

## Admin operations reference (Phase 2 — Defined backoffice)

If extending the **existing Defined backoffice** later, use JWT + `DEFINED` app access:

- `definedAcademies`, `createDefinedAcademy`, `updateDefinedAcademy`
- `definedAcademyCourses`, `createDefinedAcademyCourse`, `publishDefinedAcademyCourse`
- `createDefinedAcademyModule`, `createDefinedAcademyLesson`, `publishDefinedAcademyLesson`
- `reorderDefinedAcademyCourses`, `reorderDefinedAcademyModules`, `reorderDefinedAcademyLessons`
- `definedAcademyAnalyticsSummary`

Full admin API: see [`DEFINED_ACADEMY_FRONTEND_IMPLEMENTATION_REPORT.md`](./DEFINED_ACADEMY_FRONTEND_IMPLEMENTATION_REPORT.md) §5.3.

---

## Quick prompt for Cursor (paste in frontend repo)

```
Implement Defined Academy frontend Phase 1 following exactly:
boxhub-nest-api/docs/defined-academy-frontend-cursor-agent.md

Reuse the same GraphQL client, auth store, layout, and error patterns as the existing Defined site.
Primary academy slug: re-quest-academy
API: NEXT_PUBLIC_GRAPHQL_URL → /graphql on boxhub-nest-api

Deliver: routes, GraphQL hooks, all public + learner screens, referral + short link handling, and manual test guide.
Do not implement admin CRUD in this pass.
```

---

**Backend contact:** `boxhub-nest-api` → `src/apps/defined-academy/`  
**Full API spec:** `docs/DEFINED_ACADEMY_FRONTEND_IMPLEMENTATION_REPORT.md`
