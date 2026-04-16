# Cursor Agent Brief — DEFINED Backoffice (Phase 1A)

Use this brief in Cursor to implement the DEFINED internal backoffice foundation in a production monorepo, with strict isolation and minimal blast radius.

---

## Objective

Implement a new isolated backend area for **DEFINED** with:

- app registration in existing app seed/bootstrap
- clients (basic CRUD)
- projects (basic CRUD + status change)
- internal notes (create + list by client/project)

This is **Phase 1A only**.

---

## Hard constraints

1. Do not modify global auth behavior.
2. Do not refactor unrelated modules/apps.
3. Use existing project patterns (Nest + GraphQL + Prisma + class-validator).
4. Additive changes only.
5. If a change can affect existing apps, stop and ask.

---

## Architecture rules to follow

- Reuse existing patterns from modules like `feedback`, `cashflow`, `signalboard`.
- Prefer folder style already used in the repo (`src/apps/...` for app-scoped features).
- Keep module isolated (resolver/service/dto/types module boundary).
- Reuse `PrismaService`, existing guards, and app access model.

---

## Implementation scope (do exactly this)

### A) Register app code in seed

Add DEFINED to existing app seed list in `prisma/seed.apps.ts`:

- code: `DEFINED`
- name: `Defined`
- description: `Defined internal backoffice`

No other seed refactors.

### B) Prisma schema (Phase 1A entities only)

Add models and enums:

1. `DefinedClient`
2. `DefinedProject`
3. `DefinedInternalNote`

Use repository conventions:

- `id Int @id @default(autoincrement())`
- `createdAt DateTime @default(now())`
- `updatedAt DateTime @updatedAt`
- indexes on frequent filters (`clientId`, `projectId`, `status`, `createdAt`)

Suggested enums:

- `DefinedClientType`: `COMPANY`, `INDIVIDUAL`
- `DefinedProjectServiceType`: `BRANDING`, `WEBSITE`, `VIDEO`, `ADS`, `SOCIAL`, `OTHER`
- `DefinedProjectStatus`: `DRAFT`, `ACTIVE`, `WAITING_ON_CLIENT`, `IN_PROGRESS`, `IN_REVIEW`, `COMPLETED`, `ARCHIVED`

Suggested relation mapping:

- one `DefinedClient` -> many `DefinedProject`
- one `DefinedClient` -> many `DefinedInternalNote`
- one `DefinedProject` -> many `DefinedInternalNote`

### C) New app/module structure

Create isolated module under:

- `src/apps/defined/`

Suggested files:

- `defined.module.ts`
- `defined.resolver.ts`
- `defined.service.ts`
- `dto/*.input.ts`
- `types/*.type.ts` (only if needed for payloads)

### D) GraphQL operations

Implement internal-authenticated operations:

#### Clients
- `createDefinedClient(input)`
- `definedClients(...)`
- `definedClient(id)`
- `updateDefinedClient(input)`

#### Projects
- `createDefinedProject(input)`
- `definedProjects(...)`
- `definedProject(id)`
- `updateDefinedProject(input)`
- `changeDefinedProjectStatus(input)`

#### Internal Notes
- `createDefinedInternalNote(input)`
- `definedInternalNotesByClient(clientId)`
- `definedInternalNotesByProject(projectId)`

Use auth/guard conventions already used by internal app resolvers.

### E) Validation

Use `class-validator` on input DTOs:

- required fields as needed
- email validation
- max length limits
- optional fields where appropriate

### F) App wiring

Register the new module in `src/app/app.module.ts` using current import conventions.

---

## Non-goals (must not implement in 1A)

- intake forms/answers
- assets upload/storage pipeline
- supplier/client portal roles
- approval workflows
- broad permission system redesign

---

## Safety checks (mandatory)

1. `npx prisma generate`
2. `npm run build`
3. verify lints for changed files
4. ensure no unrelated files were refactored

---

## Deliverables required from agent

1. Summary of what was added
2. List of created/modified files
3. Prisma migration summary
4. Seed updates
5. Assumptions
6. Next-step recommendation for Phase 1B

