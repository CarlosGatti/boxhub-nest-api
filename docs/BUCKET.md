# Bucket List Module

Goals, memories, Vision Board, and map pins. This document describes backend conventions and schema details.

---

## detailsSchemaVersion (BucketGoal)

- **Field:** `BucketGoal.detailsSchemaVersion`
- **Default:** 1
- **Purpose:** Version the `details` JSON shape for future migrations. When we change the schema for a given `BucketGoalType`, we can bump this and handle migration in resolvers.
- **Usage:** On create, we set `detailsSchemaVersion: 1`. Future versions can be introduced when we add new required fields or change structure.

---

## periodKey (BucketVisionBoard)

- **Field:** `BucketVisionBoard.periodKey`
- **Purpose:** Uniquely identify a board by period for future QUARTER/CUSTOM support. Currently we use `year` for YEAR boards.
- **Convention:**
  - For `periodType = YEAR` and `year = 2025`: `periodKey = "2025"`
  - For QUARTER (future): e.g. `periodKey = "2025-Q1"`
  - For CUSTOM (future): e.g. `periodKey = "custom-uuid"` or user-defined
- **Backward compatibility:** `year` and `@@unique([userId, year])` remain. `periodKey` is nullable. Lazy backfill sets `periodKey = String(year)` when loading YEAR boards with null periodKey.

---

## BucketGoalMedia ownership (XOR rule)

- **Rule:** Exactly one of `goalId` or `logId` must be set. Never both, never neither.
- **Enforcement:** Service layer in `addBucketGoalMedia` and seed.
- **Rationale:** Prevents ambiguous ownership. Media is either:
  - Attached to a goal (gallery, cover alternative)
  - Attached to a log (memory/event photo)
- **Mutation:** `addBucketGoalMedia(input: { goalId?, logId?, url, type?, metadata? })` — provide exactly one of goalId or logId.

---

## BucketGoal.details validation

- Validated per `BucketGoalType` using Zod schemas in `validation/details.schemas.ts`.
- Only validated on create/update; existing stored data is not re-validated on read.
- Invalid payload returns: `"Invalid details for type X: <field>: <message>"`.
- All schemas use `.passthrough()` to allow unknown keys (future-proofing).

---

## BucketVisionSection.content

- **Nullable:** Yes. Empty sections are allowed.
- **Usage:** Frontend can create sections with `content: null` and fill progressively.
- **Validation:** `validateSectionContent` returns `null` for empty; returns validated object otherwise.
