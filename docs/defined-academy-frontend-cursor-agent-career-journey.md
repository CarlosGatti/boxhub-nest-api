# Cursor Agent Script — Defined Academy Career Journey (Frontend)

Use this in the **RE-Quest Academy frontend repo** (`request-academy.vercel.app` or equivalent) to implement the **Career Journey** experience end-to-end.

Backend is already implemented in **`boxhub-nest-api`** under `src/apps/defined-academy/` (isolated — no changes needed in other apps).

---

## Read first (backend source of truth)

| Doc | Purpose |
|-----|---------|
| [`DEFINED_ACADEMY_FRONTEND_IMPLEMENTATION_REPORT.md`](./DEFINED_ACADEMY_FRONTEND_IMPLEMENTATION_REPORT.md) | Base Academy API |
| [`defined-academy-frontend-cursor-agent.md`](./defined-academy-frontend-cursor-agent.md) | Routes, auth, learner flows |
| [`defined-academy-frontend-cursor-agent-uploads-and-fixes.md`](./defined-academy-frontend-cursor-agent-uploads-and-fixes.md) | Int coercion + uploads |
| [`defined-auth-contract-for-frontend.md`](./defined-auth-contract-for-frontend.md) | JWT, register with `appCode: "ACADEMY"` |

---

## Product concept (what we are building)

**Career Journey** is NOT a course catalog. It is a **long-term map of a real estate professional's career**:

```
Thinking about RE → Choose School → Get Licensed → First Brokerage →
First Listing → First Closing → Build Brand → Marketing → Grow Business →
Team → Broker → Coach → Instructor
```

The platform answers three questions for the user:

1. **Where am I today?** → current career stage
2. **What should I focus on next?** → recommended programs/resources for that stage
3. **How far have I come?** → completed stages + progress visualization

This positions RE-Quest as **career companion**, not only a training site.

### Personas

| Persona | Needs |
|---------|--------|
| **Visitor** | See the full journey map (motivation, trust) |
| **New user** | Onboarding: pick current stage |
| **Learner** | Workspace shows "You are here" + recommendations |
| **Admin (DEFINED)** | Edit stages, link courses to stages (backoffice — optional Phase 2) |

---

## Hard constraints

1. **No global redesign** — reuse existing RE-Quest layout, tokens, typography.
2. **Isolate code** under `features/academy/career/` (or equivalent).
3. **GraphQL `Int` variables must be numbers** — use `toInt()` helper (see uploads agent doc).
4. **Same auth** as existing Academy flows (`Authorization: Bearer`).
5. **Register with `appCode: "ACADEMY"`** for RE-Quest signup.
6. **Do not block** on admin CRUD — learner + public journey is the priority.
7. **No payments, gamification badges, or iCal** in this sprint.

---

## Environment variables

```env
NEXT_PUBLIC_GRAPHQL_URL=https://www.discart.me/graphql
NEXT_PUBLIC_API_URL=https://www.discart.me
NEXT_PUBLIC_ACADEMY_SLUG=re-quest-academy
NEXT_PUBLIC_ACADEMY_ID=1
```

After deploy backend on VPS:

```bash
npx prisma migrate deploy
npm run seed:academy-career   # 13 stages + links First 90 Days → First Brokerage
```

---

## Suggested routes

Add to existing Academy routing:

| Route | Auth | Purpose |
|-------|------|---------|
| `/academy/:academySlug/career` | Public | Full journey map (marketing + discovery) |
| `/workspace/career` or `/workspace` tab **Career** | JWT | Personal journey + recommendations |
| `/workspace/career/onboarding` | JWT | First-time stage selection (modal or page) |

If `/workspace` already exists, add a **Career** tab/section rather than a new top-level app.

---

## UX concepts (implement these patterns)

### 1. Journey Map (public + logged-in)

Visual: **vertical timeline** or **horizontal stepper** (mobile-first).

```
○ Thinking about RE
○ Choose School
● Get Licensed          ← YOU ARE HERE (logged-in only)
○ First Brokerage
...
○ Instructor
```

States per stage node:

| State | Visual |
|-------|--------|
| **Completed** | checkmark, muted green, filled |
| **Current** | highlighted ring, label "You are here" |
| **Upcoming** | outline, muted |
| **Locked** | optional — not required in MVP |

Click stage (logged-in) → sheet/modal with summary + recommended content.

### 2. Onboarding (first login without profile)

Trigger when `myDefinedAcademyCareerProfile` returns `null`:

```
Welcome to RE-Quest
Where are you in your real estate career?

[ grid of stage cards or compact list ]

[ Continue ]
```

On continue → `initializeMyDefinedAcademyCareerProfile(academyId, stageId)`.

Store locally: `careerOnboardingComplete=true` to avoid re-showing (still verify server profile).

### 3. Workspace Career panel

Layout suggestion:

```
┌─────────────────────────────────────────┐
│ Career Journey                          │
│ ● First Brokerage                       │
│   Join your first brokerage and learn…  │
├─────────────────────────────────────────┤
│ Recommended for your stage              │
│ ┌─────────────┐  ┌─────────────┐       │
│ │ First 90    │  │ Resource…   │       │
│ │ Days        │  │             │       │
│ └─────────────┘  └─────────────┘       │
├─────────────────────────────────────────┤
│ [ Mark stage complete ]  [ Change stage ]│
└─────────────────────────────────────────┘
```

### 4. Mark stage complete

Button → `completeMyDefinedAcademyCareerStage(academyId, stageId)`.

Backend auto-advances `currentStageId` to next stage by `sortOrder`.

Show toast: "Nice work! Your next focus: {nextStage.title}".

### 5. Change stage (self-service)

Dropdown or stage picker → `setMyDefinedAcademyCareerStage(academyId, stageId)`.

Use when user joined at wrong stage — no admin needed.

---

## File structure (suggested)

```
features/academy/
  career/
    api/
      career-journey.queries.ts
      career-journey.mutations.ts
    components/
      CareerJourneyMap.tsx
      CareerStageNode.tsx
      CareerStagePicker.tsx
      CareerRecommendations.tsx
      CareerOnboardingModal.tsx
    hooks/
      useCareerProfile.ts
      useCareerJourney.ts
    pages/
      CareerJourneyPage.tsx        # public /academy/:slug/career
      WorkspaceCareerSection.tsx   # logged-in workspace
    utils/
      career-stage-state.ts        # completed | current | upcoming
  utils/
    coerce-id.ts                   # shared toInt helper
```

Reuse existing Apollo/fetch client — do not create a second GraphQL layer.

---

## GraphQL operations (copy-paste ready)

### Shared fragment

```graphql
fragment CareerStageFields on DefinedAcademyCareerStage {
  id
  journeyId
  title
  slug
  description
  summary
  iconKey
  sortOrder
}
```

### Public — journey map

```graphql
query DefinedAcademyCareerJourneyByAcademySlug($academySlug: String!) {
  definedAcademyCareerJourneyByAcademySlug(academySlug: $academySlug) {
    id
    title
    slug
    description
    status
    stages {
      ...CareerStageFields
    }
  }
}
```

Variables:

```json
{ "academySlug": "re-quest-academy" }
```

Returns `null` if academy inactive or journey not ACTIVE.

---

### Learner — profile

```graphql
query MyDefinedAcademyCareerProfile($academyId: Int!) {
  myDefinedAcademyCareerProfile(academyId: $academyId) {
    id
    userId
    academyId
    journeyId
    currentStageId
    notes
    currentStage {
      ...CareerStageFields
    }
    completions {
      id
      stageId
      completedAt
      stage {
        ...CareerStageFields
      }
    }
    journey {
      id
      title
      stages {
        ...CareerStageFields
      }
    }
  }
}
```

**Important:** `academyId` must be number: `toInt(process.env.NEXT_PUBLIC_ACADEMY_ID)`.

---

### Learner — recommendations

```graphql
query MyDefinedAcademyCareerRecommendations($academyId: Int!) {
  myDefinedAcademyCareerRecommendations(academyId: $academyId) {
    stage {
      ...CareerStageFields
    }
    courses {
      id
      title
      slug
      summary
      coverImageUrl
      estimatedDurationMinutes
    }
    resources {
      id
      title
      type
      fileUrl
      externalUrl
    }
  }
}
```

Only **published** courses/resources linked to the current stage are returned.

---

### Learner — initialize (onboarding)

```graphql
mutation InitializeMyDefinedAcademyCareerProfile(
  $academyId: Int!
  $stageId: Int
) {
  initializeMyDefinedAcademyCareerProfile(
    academyId: $academyId
    stageId: $stageId
  ) {
    id
    currentStageId
    currentStage {
      ...CareerStageFields
    }
  }
}
```

Idempotent: if profile exists, returns existing profile.

---

### Learner — set stage

```graphql
mutation SetMyDefinedAcademyCareerStage($academyId: Int!, $stageId: Int!) {
  setMyDefinedAcademyCareerStage(academyId: $academyId, stageId: $stageId) {
    id
    currentStageId
    currentStage {
      ...CareerStageFields
    }
  }
}
```

Requires profile initialized first.

---

### Learner — complete stage

```graphql
mutation CompleteMyDefinedAcademyCareerStage(
  $academyId: Int!
  $stageId: Int!
  $notes: String
) {
  completeMyDefinedAcademyCareerStage(
    academyId: $academyId
    stageId: $stageId
    notes: $notes
  ) {
    id
    currentStageId
    currentStage {
      title
      slug
    }
    completions {
      stageId
      completedAt
    }
  }
}
```

---

## TypeScript helpers

### Int coercion (required)

```typescript
export function toInt(value: unknown, fieldName = 'id'): number {
  if (typeof value === 'number' && Number.isInteger(value)) return value;
  const parsed = parseInt(String(value ?? ''), 10);
  if (Number.isNaN(parsed) || parsed < 1) {
    throw new Error(`${fieldName} must be a positive integer`);
  }
  return parsed;
}

export const ACADEMY_ID = toInt(
  process.env.NEXT_PUBLIC_ACADEMY_ID ?? '1',
  'academyId',
);
```

### Stage state helper

```typescript
type StageState = 'completed' | 'current' | 'upcoming';

export function getStageState(params: {
  stageId: number;
  currentStageId?: number | null;
  completedStageIds: number[];
  stages: { id: number; sortOrder: number }[];
}): StageState {
  const { stageId, currentStageId, completedStageIds } = params;
  if (completedStageIds.includes(stageId)) return 'completed';
  if (stageId === currentStageId) return 'current';
  return 'upcoming';
}
```

Optional: mark all stages with `sortOrder < current.sortOrder` as completed visually even without completion records.

---

## Hook pattern

```typescript
export function useCareerProfile(academyId: number) {
  const { data, loading, error, refetch } = useQuery(MY_CAREER_PROFILE, {
    variables: { academyId },
    skip: !academyId,
  });

  const profile = data?.myDefinedAcademyCareerProfile ?? null;
  const needsOnboarding = !loading && !profile;

  return { profile, needsOnboarding, loading, error, refetch };
}
```

Load recommendations only when profile has `currentStageId`:

```typescript
const { data: recsData } = useQuery(MY_CAREER_RECOMMENDATIONS, {
  variables: { academyId },
  skip: !profile?.currentStageId,
});
```

---

## User flows (implement in order)

### Flow A — Public visitor

1. Navigate `/academy/re-quest-academy/career`
2. Query `definedAcademyCareerJourneyByAcademySlug`
3. Render full map (no "you are here")
4. CTA: "Sign up to track your career" → `/signup?appCode=ACADEMY`

### Flow B — New user onboarding

1. After login, open `/workspace`
2. Query `myDefinedAcademyCareerProfile`
3. If `null` → show `CareerOnboardingModal`
4. User picks stage → `initializeMyDefinedAcademyCareerProfile`
5. Refetch profile + recommendations

### Flow C — Returning learner

1. `/workspace` Career tab
2. Show map with current/completed states
3. Show `CareerRecommendations` cards
4. Course card links → existing `/academy/.../courses/:slug` or `/learn/:slug`
5. "Mark complete" → mutation → refetch

### Flow D — Change stage

1. "Update my stage" opens `CareerStagePicker`
2. `setMyDefinedAcademyCareerStage` → refetch recommendations

---

## Icon mapping (`iconKey` from backend)

Backend seed uses string keys — map to your icon library (Lucide, Heroicons, etc.):

| `iconKey` | Suggested icon |
|-----------|----------------|
| `compass` | Compass |
| `school` | GraduationCap |
| `license` | BadgeCheck |
| `building` | Building2 |
| `home` | Home |
| `key` | Key |
| `spark` | Sparkles |
| `megaphone` | Megaphone |
| `chart` | TrendingUp |
| `users` | Users |
| `briefcase` | Briefcase |
| `message` | MessageCircle |
| `graduation` | Award |

Fallback: circle with stage number.

---

## Admin (optional — Phase 2, DEFINED backoffice only)

Only if implementing admin in Defined Lab backoffice (`@RequireApp('DEFINED')`):

| Operation | Use |
|-----------|-----|
| `definedAcademyCareerJourney(academyId)` | Load full journey + content links |
| `updateDefinedAcademyCareerJourney` | Set status ACTIVE |
| `createDefinedAcademyCareerStage` | Add stage |
| `linkDefinedAcademyCareerStageContent` | Attach course/resource |
| `reorderDefinedAcademyCareerStages` | Drag-and-drop order |

**Learner frontend does NOT need admin mutations.**

---

## Error handling

| Error | UX |
|-------|-----|
| `myDefinedAcademyCareerProfile` null | Show onboarding |
| `Active career journey not found` | Empty state: "Career path coming soon" |
| 401 | Redirect sign-in |
| 400 Int variable | Fix `toInt` — never send string IDs |
| Recommendations empty | "Content for this stage is coming soon" |

---

## Testing checklist

### Public

- [ ] `/academy/re-quest-academy/career` loads 13 stages
- [ ] Inactive/draft academy → graceful empty (query returns null)

### Auth

- [ ] New user sees onboarding after first workspace visit
- [ ] `initializeMyDefinedAcademyCareerProfile` sets current stage
- [ ] Re-login preserves profile

### Learner

- [ ] Current stage highlighted on map
- [ ] Recommendations show "First 90 Days" when on First Brokerage (after seed)
- [ ] Course card navigates to existing course page
- [ ] Complete stage advances to next
- [ ] Change stage updates recommendations

### Network

- [ ] All variables use numeric `academyId` / `stageId` (DevTools → no `"1"` strings)
- [ ] JWT attached on learner queries

---

## Implementation order for the agent

1. Add `coerce-id.ts` if missing
2. Add GraphQL documents in `career/api/`
3. Build `CareerJourneyMap` + `CareerStageNode`
4. Public page `/academy/:slug/career`
5. `useCareerProfile` hook + onboarding modal
6. Workspace Career section + recommendations
7. Complete / change stage actions
8. Polish: loading skeletons, empty states, mobile scroll

---

## Copy suggestions (RE-Quest tone)

| Context | Copy |
|---------|------|
| Page title | Your Real Estate Career Journey |
| Onboarding headline | Where are you in your career? |
| Onboarding sub | We'll recommend the right programs for your stage. |
| Current badge | You are here |
| Complete CTA | Mark this stage complete |
| Empty recommendations | New resources for this stage are on the way. |

---

## Out of scope (do NOT implement now)

- Calendar / live events per stage
- Badges, points, leaderboards
- Broker team dashboard
- Automated stage advance on course completion
- Branching career tracks (commercial vs residential)

These can layer on later without breaking this MVP.

---

## Quick reference — operation names

**Public:** `definedAcademyCareerJourneyByAcademySlug`

**Learner:** `myDefinedAcademyCareerProfile`, `myDefinedAcademyCareerRecommendations`, `initializeMyDefinedAcademyCareerProfile`, `setMyDefinedAcademyCareerStage`, `completeMyDefinedAcademyCareerStage`

**Admin:** `definedAcademyCareerJourney`, `createDefinedAcademyCareerJourney`, `updateDefinedAcademyCareerJourney`, `createDefinedAcademyCareerStage`, `updateDefinedAcademyCareerStage`, `reorderDefinedAcademyCareerStages`, `linkDefinedAcademyCareerStageContent`, `unlinkDefinedAcademyCareerStageContent`

---

## Agent prompt (paste into Cursor frontend chat)

```
Implement RE-Quest Career Journey frontend following docs/defined-academy-frontend-cursor-agent-career-journey.md in boxhub-nest-api.

Scope:
- Public journey map at /academy/:academySlug/career
- Workspace Career section with onboarding, current stage, recommendations
- GraphQL ops: definedAcademyCareerJourneyByAcademySlug, myDefinedAcademyCareerProfile, myDefinedAcademyCareerRecommendations, initialize/set/complete mutations
- Use toInt for all Int variables (academyId, stageId)
- Reuse existing auth, layout, Apollo client — no redesign
- Mobile-first vertical timeline UI

Do not implement admin CRUD or calendar in this sprint.
```
