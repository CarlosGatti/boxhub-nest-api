# Bucket List Share — Frontend Integration Guide

Share read-only snapshots of goals via public links. No auth required to view shared content.

---

## 1. GraphQL Operations

### 1.1 Public Query (no auth)

**Query:** `bucketSharePublic(token: String!)`

Call **without** `Authorization` header. Returns frozen snapshot payload.

```graphql
query BucketSharePublic($token: String!) {
  bucketSharePublic(token: $token) {
    token
    type
    payload
    createdAt
  }
}
```

**Variables:**
```json
{ "token": "abc123xyz..." }
```

**Sample response:**
```json
{
  "data": {
    "bucketSharePublic": {
      "token": "abc123xyz",
      "type": "GOAL",
      "createdAt": "2026-02-19T12:00:00.000Z",
      "payload": {
        "version": 1,
        "kind": "GOAL",
        "title": "Visitar Japão",
        "createdAt": "2026-02-19T12:00:00.000Z",
        "owner": { "displayName": "Carlos Gatti" },
        "filters": null,
        "goals": [
          {
            "id": 1,
            "title": "Visitar Japão",
            "description": "2 semanas em Tokyo",
            "type": "TRAVEL",
            "status": "PLANNED",
            "priority": 10,
            "coverUrl": "https://api.../uploads/bucket-goals/cover/1/1/uuid.webp",
            "tags": ["viagem", "asia"],
            "details": { "where": "Japão" },
            "targetDate": "2025-04-01T00:00:00.000Z",
            "completedAt": null,
            "createdAt": "2026-01-01T00:00:00.000Z",
            "_count": { "logs": 2, "pins": 1, "media": 3 },
            "logsPreview": [
              { "id": 1, "note": "Comprei passagens!", "happenedAt": "2026-01-15T00:00:00.000Z" }
            ],
            "pinsPreview": [{ "lat": 35.6762, "lng": 139.6503, "label": "Tokyo" }]
          }
        ]
      }
    }
  }
}
```

---

### 1.2 Create Share from Single Goal (auth required)

**Mutation:** `createBucketShareFromGoal(goalId: Int!, title: String)`

```graphql
mutation CreateBucketShareFromGoal($goalId: Int!, $title: String) {
  createBucketShareFromGoal(goalId: $goalId, title: $title) {
    id
    token
    type
    createdAt
  }
}
```

**Variables:**
```json
{ "goalId": 5, "title": "My Japan Trip" }
```

**Response:** Use `token` to build public URL: `https://yoursite.com/bucket/public/{token}`

---

### 1.3 Create Share from Type (auth required)

**Mutation:** `createBucketShareFromType(type: BucketGoalType!, filter: BucketGoalsFilterInput, title: String)`

Share all goals of a type (e.g. BOOK, GAME) or watchlist (MOVIE + TV_SHOW).

```graphql
mutation CreateBucketShareFromType($type: BucketGoalType!, $filter: BucketGoalsFilterInput, $title: String) {
  createBucketShareFromType(type: $type, filter: $filter, title: $title) {
    id
    token
    type
    createdAt
  }
}
```

**Variables — Books only:**
```json
{
  "type": "BOOK",
  "title": "My Reading List"
}
```

**Variables — Watchlist (movies + TV):**
```json
{
  "type": "MOVIE",
  "filter": { "typeIn": ["MOVIE", "TV_SHOW"] },
  "title": "My Watchlist"
}
```

---

### 1.4 Create Share from Custom Selection (auth required)

**Mutation:** `createBucketShareCustom(goalIds: [Int!]!, title: String!)`

```graphql
mutation CreateBucketShareCustom($goalIds: [Int!]!, $title: String!) {
  createBucketShareCustom(goalIds: $goalIds, title: $title) {
    id
    token
    type
    createdAt
  }
}
```

**Variables:**
```json
{ "goalIds": [1, 3, 7], "title": "My Top 3 Goals" }
```

---

### 1.5 List My Shares (auth required)

**Query:** `bucketMyShares`

```graphql
query BucketMyShares {
  bucketMyShares {
    id
    token
    type
    createdAt
  }
}
```

---

### 1.6 Delete Share (auth required)

**Mutation:** `deleteBucketShare(id: Int!)`

```graphql
mutation DeleteBucketShare($id: Int!) {
  deleteBucketShare(id: $id)
}
```

---

## 2. Recommended UX Flow

### Share single goal
1. User on goal page clicks "Share"
2. Call `createBucketShareFromGoal(goalId, title?)`
3. Copy link: `{FRONTEND_URL}/bucket/public/{token}`
4. Show toast: "Link copied!"

### Share list (books/games/watchlist)
1. User on `/bucket/books` (or games/watchlist) clicks "Share list"
2. Call `createBucketShareFromType(BOOK)` or with `filter: { typeIn: [MOVIE, TV_SHOW] }` for watchlist
3. Copy link
4. Show toast

### Share selected
1. User selects multiple goals (multi-select UI)
2. Clicks "Share selected"
3. Call `createBucketShareCustom(goalIds, title)`
4. Copy link

---

## 3. Public Route Expectations

**Frontend route:** `/bucket/public/:token`

1. Extract `token` from URL params
2. Call `bucketSharePublic(token)` **without** auth header
3. Render read-only list/cards from `payload.goals`
4. Display `payload.owner.displayName` as "Shared by {name}"
5. Use `payload.title` as page title

**Payload structure (v1):**
- `version`: 1
- `kind`: "GOAL" | "TYPE" | "CUSTOM"
- `title`: string
- `owner.displayName`: string | null (no email)
- `goals`: array of goal snapshots with `logsPreview`, `pinsPreview`, `_count`

---

## 4. Error Cases

| Case | Handling |
|------|----------|
| Invalid token / not found | Show "Not found / link expired" |
| Unauthorized on create | Prompt login, redirect to `/bucket/login` |
| No goals match type/filter | Show "No goals to share" before calling mutation |

---

## 5. Constraints

- **Payload is a snapshot** — it does not update when goals change. Creating a new share generates a fresh snapshot.
- **v1 payload** — `payload.version === 1`
- **Max 100 goals** per TYPE/CUSTOM share
- **Max 3 logs** preview per goal
- **No sensitive data** — email, password, apartment, etc. are never included
