# Cursor Agent Brief — DEFINED Frontend (Phase 1A)

Use this brief in the frontend repository to implement only the pages and wiring required for the backend module already available in `boxhub-nest-api` (`src/apps/defined`).

---

## Goal

Create the minimum internal backoffice UI for DEFINED Phase 1A:

1. Clients
2. Projects
3. Internal notes

No portal/public flow yet.

---

## Hard constraints

1. Do not redesign global layout/theme/navigation.
2. Do not refactor unrelated frontend modules.
3. Reuse existing app shell, auth, GraphQL client, form and table patterns from this frontend codebase.
4. Keep changes additive and isolated to DEFINED area.
5. If there is existing app-based access control in UI, add DEFINED using the same pattern.

---

## Backend contract to use (already implemented)

All operations are authenticated and protected by app access `DEFINED`.

### Queries

- `definedClients(filter, take, skip)`
- `definedClient(id)`
- `definedProjects(filter, take, skip)`
- `definedProject(id)`
- `definedInternalNotesByClient(clientId)`
- `definedInternalNotesByProject(projectId)`

### Mutations

- `createDefinedClient(input)`
- `updateDefinedClient(input)`
- `createDefinedProject(input)`
- `updateDefinedProject(input)`
- `changeDefinedProjectStatus(input)`
- `createDefinedInternalNote(input)`

---

## Enums used by frontend

### Client type

- `COMPANY`
- `INDIVIDUAL`

### Project service type

- `BRANDING`
- `WEBSITE`
- `VIDEO`
- `ADS`
- `SOCIAL`
- `OTHER`

### Project status

- `DRAFT`
- `ACTIVE`
- `WAITING_ON_CLIENT`
- `IN_PROGRESS`
- `IN_REVIEW`
- `COMPLETED`
- `ARCHIVED`

---

## Required pages (minimum)

Implement the smallest page set needed to operate Phase 1A.

1. `Defined / Clients List`
   - search by name/company/email
   - filter by client type
   - open client detail
   - button to create client

2. `Defined / Client Create`
   - form using `createDefinedClient`

3. `Defined / Client Detail`
   - show client fields
   - edit via `updateDefinedClient`
   - list notes via `definedInternalNotesByClient`
   - add note via `createDefinedInternalNote` with `clientId`
   - show projects for this client via `definedProjects(filter: { clientId })`

4. `Defined / Projects List`
   - filter by client/status/service type
   - open project detail
   - button to create project

5. `Defined / Project Create`
   - form using `createDefinedProject`

6. `Defined / Project Detail`
   - show project fields
   - edit via `updateDefinedProject`
   - quick status update via `changeDefinedProjectStatus`
   - notes list via `definedInternalNotesByProject`
   - add note via `createDefinedInternalNote` with `projectId`

---

## Form fields (Phase 1A)

### Client form

- type (required)
- contactName (required)
- email (required)
- optional: companyName, legalName, phone, website, instagram, facebook
- optional address: addressLine1, addressLine2, city, state, postalCode, country
- optional: businessType, serviceArea, yearsInBusiness, notes

### Project form

- clientId (required)
- name (required)
- serviceType (required)
- optional: status, budget, deadline, source, assignedTo, supplierId, notes

### Internal note form

- body (required)
- plus at least one relation:
  - `clientId` OR `projectId`

---

## UX/behavior requirements

1. Use existing authenticated GraphQL flow (Bearer token, same client instance).
2. Respect current error handling style (toasts/inline alerts already used by app).
3. Disable submit while mutation is pending.
4. After create, navigate to detail page.
5. Keep list pages server-driven (query + filter), avoid overfetch if codebase standard already exists.

---

## Suggested GraphQL operation names in frontend code

Use explicit constants/hooks and keep naming close to backend operations:

- `DEFINED_CLIENTS_QUERY`
- `DEFINED_CLIENT_QUERY`
- `CREATE_DEFINED_CLIENT_MUTATION`
- `UPDATE_DEFINED_CLIENT_MUTATION`
- `DEFINED_PROJECTS_QUERY`
- `DEFINED_PROJECT_QUERY`
- `CREATE_DEFINED_PROJECT_MUTATION`
- `UPDATE_DEFINED_PROJECT_MUTATION`
- `CHANGE_DEFINED_PROJECT_STATUS_MUTATION`
- `DEFINED_NOTES_BY_CLIENT_QUERY`
- `DEFINED_NOTES_BY_PROJECT_QUERY`
- `CREATE_DEFINED_INTERNAL_NOTE_MUTATION`

---

## Access assumptions

If current user lacks app access `DEFINED`, backend returns forbidden via existing app guard.  
Frontend should:

- show existing unauthorized state/pattern used by other internal apps
- avoid custom auth logic rewrites

---

## Out of scope for this frontend phase

- Intake forms/answers UI (Phase 1B)
- Asset upload manager
- Client portal screens
- Vendor/supplier workflows

---

## Validation checklist (must pass)

1. Can create and edit a client.
2. Can create and edit a project.
3. Can change project status.
4. Can create note from client detail.
5. Can create note from project detail.
6. No visual regressions in unrelated areas.

---

## Copy-paste task prompt for Cursor (frontend repo)

```md
Implement DEFINED Backoffice Phase 1A pages using existing frontend architecture and design system only (no layout redesign). Wire authenticated GraphQL operations from backend:
definedClients, definedClient, createDefinedClient, updateDefinedClient, definedProjects, definedProject, createDefinedProject, updateDefinedProject, changeDefinedProjectStatus, definedInternalNotesByClient, definedInternalNotesByProject, createDefinedInternalNote.

Build minimum pages:
- Clients list/create/detail
- Projects list/create/detail
- Notes inside client/project detail

Reuse existing app patterns for routing, forms, table/listing, auth state, loading/error, and app access handling. Keep changes isolated to DEFINED area and avoid touching unrelated modules.
```

