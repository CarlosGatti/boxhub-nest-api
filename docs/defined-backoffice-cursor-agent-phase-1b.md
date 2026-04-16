# Cursor Agent Brief — DEFINED Backoffice (Phase 1B)

Phase 1B extends Phase 1A with intake structures only. Keep isolation and no regressions.

---

## Objective

Implement intake support for DEFINED:

- intake forms
- intake answers
- form templates metadata
- operations to create, submit, review, and query forms

---

## Hard constraints

1. Do not modify unrelated apps/domains.
2. Do not change global auth behavior.
3. Reuse repo conventions from existing GraphQL + Prisma modules.
4. Additive changes only.
5. Keep compatibility with Phase 1A entities.

---

## Prerequisite

Phase 1A must already be merged and stable:

- `DefinedClient`
- `DefinedProject`
- `DefinedInternalNote`
- `src/apps/defined/*` base module

---

## Implementation scope (Phase 1B)

### A) Prisma additions

Add:

1. `DefinedIntakeForm`
2. `DefinedIntakeAnswer`

Suggested enums:

- `DefinedIntakeFormType`: `BUSINESS_INTAKE`, `BRANDING_BRIEF`, `WEBSITE_BRIEF`, `VIDEO_BRIEF`, `ADS_BRIEF`
- `DefinedIntakeFormStatus`: `DRAFT`, `SENT`, `SUBMITTED`, `REVIEWED`
- `DefinedIntakeAnswerType`: `TEXT`, `LONG_TEXT`, `NUMBER`, `BOOLEAN`, `SELECT`, `MULTI_SELECT`, `JSON`

Suggested fields:

#### `DefinedIntakeForm`
- `id`
- `clientId`
- `projectId` (nullable)
- `formType`
- `status`
- `title`
- `description`
- `submittedAt`
- timestamps

#### `DefinedIntakeAnswer`
- `id`
- `intakeFormId`
- `questionKey`
- `questionLabel`
- `answerType`
- `answerValue` (prefer `Json` if repo already uses Prisma Json for dynamic answers)
- timestamps

Indexes:

- `DefinedIntakeForm(clientId)`
- `DefinedIntakeForm(projectId)`
- `DefinedIntakeForm(status, createdAt)`
- `DefinedIntakeAnswer(intakeFormId)`
- `DefinedIntakeAnswer(questionKey)`

### B) GraphQL operations (internal-only)

Implement:

- `createDefinedIntakeForm(input)`
- `definedIntakeFormsByClient(clientId)`
- `definedIntakeFormsByProject(projectId)`
- `definedIntakeForm(id)`
- `submitDefinedIntakeForm(input)` (upsert/replace answers + set status `SUBMITTED` + `submittedAt`)
- `markDefinedIntakeFormReviewed(input)` (set status `REVIEWED`)

### C) Service templates metadata

Provide backend template metadata map (no full dynamic renderer needed now) with question groups for:

1. business intake
2. branding brief
3. website brief
4. video brief
5. ads brief

Expose query:

- `definedIntakeTemplate(formType)` returning structured metadata for frontend rendering.

Do not build full template editor yet.

---

## Validation and behavior

- validate `questionKey` non-empty, length limits
- enforce form existence + relation integrity
- reject submission to archived/incompatible project if such status exists in Phase 1A
- keep operations idempotent where possible

---

## Non-goals (still out of scope)

- public client portal
- supplier access
- file storage workflow (assets module can come later)
- approvals workflow

---

## Safety checks (mandatory)

1. `npx prisma generate`
2. `npm run build`
3. lint diagnostics on changed files
4. quick GraphQL smoke calls for create + submit + reviewed flows

---

## Deliverables required from agent

1. What was added in Phase 1B
2. Files changed
3. Migration summary
4. API operations added
5. Open points for Phase 1C (assets + internal workflow)

