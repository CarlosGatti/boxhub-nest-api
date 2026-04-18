# Cursor Agent Script — DEFINED Frontend Complete (with Testing Guide)

Use this in the **frontend repo** so the Cursor agent can implement all required DEFINED screens and API integration, then provide a practical testing guide for you.

---

## Read these backend docs first (source of truth)

1. `docs/defined-auth-contract-for-frontend.md`
2. `docs/defined-backoffice-frontend-cursor-agent-phase-1a.md`
3. `docs/defined-backoffice-frontend-cursor-agent-full.md`
4. `docs/agent-handoffs/BACKEND_INTAKE_PUBLIC_LINK.md`

Do not invent parallel auth/API patterns.

---

## Goal

Implement DEFINED frontend end-to-end:

1. Auth flow for internal users
2. Backoffice Phase 1A (clients/projects/notes)
3. Intake Phase 1B (forms + answers + reviewed status)
4. Public intake-by-token flow (respondent page without login)
5. Deliver clear test instructions for manual validation

---

## Hard constraints

1. No global redesign or layout rewrite.
2. No unrelated module refactor.
3. Reuse existing frontend architecture (routing, GraphQL client, auth store, UI components).
4. Keep changes isolated to DEFINED area.
5. Follow existing error/loading/notification patterns already used in this repo.

---

## Required pages/routes

Adjust route structure to your frontend conventions, but implement equivalent pages:

### A) Auth

- `/signin`
- `/signup`
- `/verify-email`
- `/forgot-password`
- `/reset-password`

### B) Backoffice (protected)

- `/defined/clients`
- `/defined/clients/new`
- `/defined/clients/:id`
- `/defined/projects`
- `/defined/projects/new`
- `/defined/projects/:id`
- intake management inside client/project detail

### C) Public intake (no login)

- `/forms/intake/:token` (or `/i/:token`, keep one canonical route)
  - reads form using token
  - submits answers using token

---

## Backend operations to integrate

## Auth

- `login`
- `register` (with `appCode: "DEFINED"`)
- `verifyEmail`
- `resendVerificationEmail`
- `requestPasswordReset`
- `resetPassword`

## Backoffice 1A

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

## Intake 1B (staff)

- `createDefinedIntakeForm`
- `definedIntakeFormsByClient`
- `definedIntakeFormsByProject`
- `definedIntakeForm`
- `submitDefinedIntakeForm`
- `markDefinedIntakeFormReviewed`
- `definedIntakeTemplate`

## Intake public-by-token

- `generateDefinedIntakeShareLink` (staff, used to get token/link)
- `definedIntakeFormForRespondent` (public)
- `submitDefinedIntakeFormByShareToken` (public)

---

## Access control behavior (must implement)

For `/defined/*` routes:

- unauthenticated -> redirect to `/signin`
- authenticated but missing app access (`DEFINED`) -> show no-access screen/state
- 403 with `EMAIL_NOT_VERIFIED` -> guide to verify-email flow

Public route `/forms/intake/:token`:

- no auth required
- handle invalid/expired/revoked token gracefully

---

## UI/UX expectations

- Keep existing visual system untouched.
- Reuse current form/table/detail components when possible.
- Disable submit while loading.
- Show clear success/error feedback.
- After create actions, navigate to detail page.

---

## Required deliverables from the frontend agent

1. Summary of what was implemented
2. File list changed/created
3. Route map added
4. GraphQL ops map used
5. Testing guide with exact steps and expected outcomes

---

## Manual testing guide (agent must output this clearly)

The agent must include a section with steps like below:

### 1) Auth tests

1. Register user with `appCode: "DEFINED"`:
   - expected: `requiresVerification=true` if email not verified.
2. Verify email flow:
   - use `/verify-email` flow and confirm login unlocks.
3. Login:
   - expected: token/session persisted by existing frontend pattern.
4. Access `/defined/*`:
   - expected: allowed only if user has `DEFINED` in `apps`.

### 2) Backoffice tests (staff)

1. Create client -> appears in clients list.
2. Edit client -> changes persisted.
3. Create project for that client -> appears in projects list/detail.
4. Change project status -> status updates in UI.
5. Add internal note by client and by project -> note lists update.

### 3) Intake staff tests

1. Create intake form for client/project.
2. Open intake form detail and fetch template metadata.
3. Submit answers as staff.
4. Mark form reviewed.

### 4) Public token flow tests (without email dependency)

This is key so you do not need to email yourself every time.

1. In staff UI, click/trigger "Generate share link" (uses `generateDefinedIntakeShareLink`).
2. Copy the returned link/token and open in incognito:
   - `/forms/intake/<token>`
3. Confirm page loads with form title + template.
4. Submit answers as public respondent.
5. Re-open same link and submit again:
   - expected: blocked if form already submitted/reviewed.

### 5) Optional email test loop (if desired)

If frontend later adds "Send by email":
- send to your own email
- open received link
- complete submit
- verify status/answers in backoffice detail page

---

## Developer test shortcut (recommended)

Agent should provide a "no-email test mode":

- always expose a "Copy intake link" action in staff UI
- so QA can test token flow instantly
- email send can remain optional phase 2

---

## Copy-paste prompt for Cursor (frontend repo)

```md
Implement DEFINED frontend complete integration using existing project architecture and visual patterns only.

Read:
- docs/defined-auth-contract-for-frontend.md
- docs/defined-backoffice-frontend-cursor-agent-phase-1a.md
- docs/defined-backoffice-frontend-cursor-agent-full.md
- docs/agent-handoffs/BACKEND_INTAKE_PUBLIC_LINK.md
- docs/defined-frontend-cursor-agent-complete-with-testing.md

Build:
1) Auth pages (signin/signup/verify/forgot/reset) with DEFINED access behavior.
2) Backoffice pages for clients/projects/notes.
3) Intake staff flow (create/list/detail/submit/review/template).
4) Public respondent page by share token (/forms/intake/:token), with submit by token.

Constraints:
- no global redesign
- no unrelated refactor
- additive isolated changes only

At the end, provide:
- changed files list
- route map
- exact manual testing checklist and expected results
- especially a no-email test path using generated share link copy/paste.
```

