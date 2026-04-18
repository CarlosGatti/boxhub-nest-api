# Cursor Agent Script — DEFINED Frontend (Auth + Backoffice 1A/1B)

Use this script in the **frontend repository** to implement DEFINED internal backoffice screens and API integration against `boxhub-nest-api`.

This is a monorepo-safe brief: additive changes only, no global redesign.

---

## Primary references (read first)

1. `docs/defined-auth-contract-for-frontend.md`
2. `docs/defined-backoffice-frontend-cursor-agent-phase-1a.md`
3. `docs/defined-backoffice-cursor-agent-phase-1b.md`

Do not invent a new auth/API pattern if frontend already has one.

---

## Hard constraints

1. Do not refactor unrelated modules/pages.
2. Do not change global design system/layout.
3. Reuse existing frontend architecture (routing, GraphQL client, auth store, error handling, form components).
4. Keep all changes scoped to DEFINED area/routes/components/services.
5. Respect current auth/session conventions from project.

---

## Goal

Implement the full internal DEFINED flow in frontend:

- Auth screens/guards for internal usage
- Backoffice CRUD screens (clients/projects/notes)
- Intake forms flow (create, submit answers, review)

---

## Step-by-step implementation plan

### Step 0 — Wiring and app access

1. Ensure frontend GraphQL client points to `/graphql` endpoint already used.
2. Ensure authenticated requests send bearer token in existing pattern.
3. Add DEFINED app access handling in frontend guard layer:
   - user must be authenticated
   - user.apps includes `DEFINED`
4. Handle:
   - 401 -> redirect `/signin`
   - 403 + `EMAIL_NOT_VERIFIED` -> verify-email flow
   - 403 app denied -> “No access to DEFINED” state

---

### Step 1 — Auth screens (from backend contract)

Implement pages (reusing existing auth UI components/patterns):

1. `Sign in`
   - mutation: `login`
2. `Sign up`
   - mutation: `register` with `appCode: "DEFINED"`
3. `Verify email`
   - support redirect query params and/or verify mutation
4. `Forgot password`
   - mutation: `requestPasswordReset`
5. `Reset password`
   - mutation: `resetPassword`

Do not create a custom auth backend layer; consume existing contract.

---

### Step 2 — Backoffice Phase 1A pages

Implement minimum pages:

1. `/defined/clients`
   - query: `definedClients(filter, take, skip)`
   - filters: type/search
2. `/defined/clients/new`
   - mutation: `createDefinedClient`
3. `/defined/clients/:id`
   - query: `definedClient(id)`
   - mutation: `updateDefinedClient`
   - query: `definedProjects(filter: { clientId })`
   - query/mutation notes: `definedInternalNotesByClient`, `createDefinedInternalNote`
4. `/defined/projects`
   - query: `definedProjects(filter, take, skip)`
   - filters: client/status/serviceType
5. `/defined/projects/new`
   - mutation: `createDefinedProject`
6. `/defined/projects/:id`
   - query: `definedProject(id)`
   - mutation: `updateDefinedProject`
   - mutation: `changeDefinedProjectStatus`
   - query/mutation notes: `definedInternalNotesByProject`, `createDefinedInternalNote`

---

### Step 3 — Backoffice Phase 1B (intake)

Implement intake screens and wiring:

1. Intake form list by client
   - query: `definedIntakeFormsByClient(clientId)`
2. Intake form list by project
   - query: `definedIntakeFormsByProject(projectId)`
3. Intake form create
   - mutation: `createDefinedIntakeForm`
4. Intake form detail
   - query: `definedIntakeForm(id)` (includes answers)
   - query: `definedIntakeTemplate(formType)` (render groups/questions UI metadata)
5. Intake submit answers
   - mutation: `submitDefinedIntakeForm(input)`
6. Mark reviewed
   - mutation: `markDefinedIntakeFormReviewed(input)`

Behavior notes:
- submitting answers should replace prior answers (backend is idempotent by replacement)
- if project is archived and backend rejects, show user-friendly message

---

## Backend operation map (copy as source of truth)

### Auth
- `login`
- `register`
- `verifyEmail`
- `resendVerificationEmail`
- `requestPasswordReset`
- `resetPassword`

### Clients/Projects/Notes (1A)
- `createDefinedClient`
- `definedClients`
- `definedClient`
- `updateDefinedClient`
- `createDefinedProject`
- `definedProjects`
- `definedProject`
- `updateDefinedProject`
- `changeDefinedProjectStatus`
- `createDefinedInternalNote`
- `definedInternalNotesByClient`
- `definedInternalNotesByProject`

### Intake (1B)
- `createDefinedIntakeForm`
- `definedIntakeFormsByClient`
- `definedIntakeFormsByProject`
- `definedIntakeForm`
- `submitDefinedIntakeForm`
- `markDefinedIntakeFormReviewed`
- `definedIntakeTemplate`

---

## Required UX behavior

1. No global layout change.
2. Keep DEFINED pages visually consistent with current backoffice style.
3. Show loading/empty/error states using existing UI components.
4. Disable submit while mutations are pending.
5. After create actions, route to detail page.
6. Show API validation errors without exposing raw stack traces.

---

## Suggested frontend folder scope (adapt to repo conventions)

- `src/features/defined/...` or equivalent existing pattern
  - `api/defined.gql.ts` (queries/mutations)
  - `pages/...`
  - `components/...`
  - `forms/...`
  - `types/...`

Do not move unrelated files.

---

## Acceptance checklist (must pass)

### Auth
- can sign in
- can register for DEFINED and receive verify flow behavior
- protected `/defined/*` redirects when unauthenticated
- handles no-access-to-DEFINED scenario

### Backoffice 1A
- can create/edit/list clients
- can create/edit/list projects
- can change project status
- can create/list notes in client and project context

### Backoffice 1B
- can create intake form
- can open intake detail and render template metadata
- can submit answers
- can mark reviewed

### Safety
- no regressions in unrelated frontend modules
- lint/build/tests pass under current repo standards

---

## Copy-paste prompt for Cursor (frontend repo)

```md
Implement DEFINED internal frontend end-to-end using existing project architecture, without global redesign.

Read and follow:
1) docs/defined-auth-contract-for-frontend.md
2) docs/defined-backoffice-frontend-cursor-agent-phase-1a.md
3) docs/defined-backoffice-cursor-agent-phase-1b.md
4) docs/defined-backoffice-frontend-cursor-agent-full.md

Deliver:
- Auth screens integration (signin/signup/verify/forgot/reset) using existing backend contract.
- Protected /defined routes with proper 401/403 handling and app access check (apps includes DEFINED).
- Phase 1A pages: clients/projects/notes CRUD integration.
- Phase 1B pages: intake forms create/list/detail, submit answers, mark reviewed, template query rendering.

Constraints:
- no refactor of unrelated modules
- no global UI/layout changes
- additive scoped changes only
- reuse existing frontend patterns for GraphQL client, routing, state, forms, error handling.
```

