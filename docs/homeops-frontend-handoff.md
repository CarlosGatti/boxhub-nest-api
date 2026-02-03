# HomeOps Frontend Handoff

## Purpose and UX goals
HomeOps is a lightweight family/home task manager focused on quick daily/weekly completion. The v1 UX should prioritize:
- Fast “Today / Overdue / This week” view
- Minimal friction to complete or skip tasks
- Clear household context when multiple households exist

This backend supports multiple households, templates (recurring tasks), task instances, and a workload ledger.

---

## Screens required
1) **Household picker / create household**
2) **Household dashboard** (Today / Overdue / This week)
3) **Templates management** (admin only)
4) **Task list with filters**
5) **Create one-off task modal**
6) **Members management** (admin only)

---

## GraphQL operations

### Households
**createHomeOpsHousehold**
```graphql
mutation ($input: CreateHomeOpsHouseholdInput!) {
  createHomeOpsHousehold(input: $input) { id name createdAt }
}
```

**myHomeOpsHouseholds**
```graphql
query {
  myHomeOpsHouseholds { id name ownerId appId createdAt }
}
```

**homeOpsHousehold**
```graphql
query ($id: Int!) {
  homeOpsHousehold(id: $id) { id name ownerId appId }
}
```

**renameHomeOpsHousehold**
```graphql
mutation ($input: RenameHomeOpsHouseholdInput!) {
  renameHomeOpsHousehold(input: $input) { id name }
}
```

**inviteOrAddHomeOpsMember**
```graphql
mutation ($input: HomeOpsMemberInput!) {
  inviteOrAddHomeOpsMember(input: $input) { id userId role householdId }
}
```

**updateHomeOpsMemberRole**
```graphql
mutation ($input: HomeOpsMemberInput!) {
  updateHomeOpsMemberRole(input: $input) { id userId role }
}
```

**removeHomeOpsMember**
```graphql
mutation ($input: HomeOpsMemberInput!) {
  removeHomeOpsMember(input: $input)
}
```

**leaveHomeOpsHousehold**
```graphql
mutation ($householdId: Int!) {
  leaveHomeOpsHousehold(householdId: $householdId)
}
```

### Templates
**createHomeOpsTaskTemplate**
```graphql
mutation ($input: CreateHomeOpsTaskTemplateInput!) {
  createHomeOpsTaskTemplate(input: $input) { id title frequency isActive }
}
```

**updateHomeOpsTaskTemplate**
```graphql
mutation ($input: UpdateHomeOpsTaskTemplateInput!) {
  updateHomeOpsTaskTemplate(input: $input) { id title frequency isActive }
}
```

**toggleHomeOpsTaskTemplateActive**
```graphql
mutation ($input: ToggleHomeOpsTaskTemplateInput!) {
  toggleHomeOpsTaskTemplateActive(input: $input) { id isActive }
}
```

**homeOpsTaskTemplates**
```graphql
query ($householdId: Int!, $includeInactive: Boolean) {
  homeOpsTaskTemplates(householdId: $householdId, includeInactive: $includeInactive) {
    id title frequency assignmentMode fixedAssigneeId isActive
  }
}
```

### Task instances
**createHomeOpsOneOffTask**
```graphql
mutation ($input: CreateHomeOpsOneOffTaskInput!) {
  createHomeOpsOneOffTask(input: $input) { id title dueDate status }
}
```

**generateHomeOpsTaskInstances**
```graphql
mutation ($input: GenerateHomeOpsTaskInstancesInput!) {
  generateHomeOpsTaskInstances(input: $input) { id title dueDate status }
}
```

**homeOpsTasks**
```graphql
query ($filter: HomeOpsTasksFilterInput!) {
  homeOpsTasks(filter: $filter) { id title dueDate status assigneeId }
}
```

**homeOpsMyTasks**
```graphql
query ($filter: HomeOpsMyTasksFilterInput) {
  homeOpsMyTasks(filter: $filter) { id title dueDate status householdId }
}
```

**completeHomeOpsTask**
```graphql
mutation ($instanceId: Int!) {
  completeHomeOpsTask(instanceId: $instanceId) { id status completedAt }
}
```

**skipHomeOpsTask**
```graphql
mutation ($input: UpdateHomeOpsTaskStatusInput!) {
  skipHomeOpsTask(input: $input) { id status skippedAt }
}
```

**reopenHomeOpsTask**
```graphql
mutation ($instanceId: Int!) {
  reopenHomeOpsTask(instanceId: $instanceId) { id status }
}
```

**reassignHomeOpsTask**
```graphql
mutation ($input: ReassignHomeOpsTaskInput!) {
  reassignHomeOpsTask(input: $input) { id assigneeId }
}
```

---

## Suggested frontend state management
- Cache household list globally (query once, refetch on create/rename).
- Cache templates per household.
- Task lists should be cached by `(householdId, range, status, assignee)`.
- Optimistic updates:
  - complete/skip/reopen: update status in list immediately.
  - reassign: update assignee in list immediately.

---

## UX details
- **Empty states:** show “No tasks yet” with CTA to create one-off or templates.
- **Loading:** skeleton rows for tasks and templates.
- **Errors:** show toast + inline warning on mutation failure.
- **Quick actions:** checkbox for complete, context menu for skip/reassign.
- **Role gating:** Admin/Owner can see templates + member management; Member cannot.

---

## Edge cases
- User belongs to multiple households.
- Inactive templates should not generate tasks (unless includeInactive).
- Overdue tasks: dueDate < today and status OPEN.
- Reassignment allowed only for Admin/Owner.

---

## Minimal v1 design
Use a clean, compact Tailwind layout with:
- Left: household selector
- Top: quick filters (Today / Overdue / Week)
- Main: task list
- Modal for one-off task creation
- Admin-only tab for templates and members

---

## Frontend implementation checklist
- [ ] Household list + create flow
- [ ] Task list + filters + quick actions
- [ ] One-off task modal
- [ ] Template management (admin)
- [ ] Member management (admin)
- [ ] Role gating UI
- [ ] Error handling and optimistic updates
