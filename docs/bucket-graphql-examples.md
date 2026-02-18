# Bucket List GraphQL Examples

Manual testing examples for the Bucket List (goals + memories) module.

**Authentication**: All operations require a valid JWT. Include in the `Authorization` header:
```
Authorization: Bearer <your-jwt-token>
```

---

## Queries

### 1. List Goals (Vision Board)

```graphql
query BucketGoals {
  bucketGoals {
    id
    title
    description
    type
    status
    priority
    coverUrl
    tags
    targetDate
    completedAt
    createdAt
    _count {
      logs
      pins
      media
    }
  }
}
```

With filters:

```graphql
query BucketGoalsFiltered {
  bucketGoals(filter: {
    type: TRAVEL
    status: PLANNED
    search: "Japan"
  }) {
    id
    title
    type
    status
  }
}
```

### 2. Get Single Goal

```graphql
query BucketGoal($id: Int!) {
  bucketGoal(id: $id) {
    id
    title
    description
    type
    status
    details
    coverUrl
    tags
    targetDate
    completedAt
    logs {
      id
      note
      happenedAt
    }
    pins {
      id
      lat
      lng
      label
    }
    media {
      id
      url
      type
    }
  }
}
# Variables: { "id": 1 }
```

### 3. Map Pins

```graphql
query BucketMapPins {
  bucketMapPins {
    id
    goalId
    lat
    lng
    label
    goalTitle
    goalStatus
    goalType
    coverUrl
  }
}
```

Filter by goal status (e.g. only visited places):

```graphql
query BucketMapPinsDone {
  bucketMapPins(filter: { goalStatus: DONE }) {
    id
    lat
    lng
    label
    goalTitle
  }
}
```

### 4. Dashboard Summary

```graphql
query BucketDashboardSummary {
  bucketDashboardSummary {
    totalGoals
    byStatus {
      IDEA
      PLANNED
      IN_PROGRESS
      DONE
      DROPPED
    }
    byType {
      GENERAL
      TRAVEL
      EVENT
      PLACE_COLLECTION
      ACHIEVEMENT
    }
    completionRate
  }
}
```

---

## Mutations

### 1. Create Travel Goal

```graphql
mutation CreateTravelGoal {
  createBucketGoal(input: {
    title: "Visit Japan"
    description: "2-week trip to Tokyo, Kyoto, and Osaka"
    type: TRAVEL
    status: PLANNED
    priority: 10
    details: {
      where: "Japan"
      startDate: "2025-04-01"
      endDate: "2025-04-15"
      withWho: ["Spouse", "Kids"]
      budget: 8000
      notes: "Cherry blossom season"
      checklist: [
        { label: "Book flights", done: true }
        { label: "Book hotels", done: false }
        { label: "Get JR Pass", done: false }
      ]
    }
    coverUrl: "https://example.com/japan.jpg"
    tags: ["travel", "asia", "family"]
    targetDate: "2025-04-01"
  }) {
    id
    title
    type
    status
    details
  }
}
```

### 2. Create Event Goal

```graphql
mutation CreateEventGoal {
  createBucketGoal(input: {
    title: "See Taylor Swift in concert"
    type: EVENT
    status: PLANNED
    details: {
      artist: "Taylor Swift"
      venue: "Madison Square Garden"
      city: "New York"
      date: "2025-06-15"
      ticketUrl: "https://ticketmaster.com/..."
      companions: ["Sarah", "Mike"]
    }
    targetDate: "2025-06-15"
  }) {
    id
    title
    type
    details
  }
}
```

### 3. Create Place Collection Goal

```graphql
mutation CreatePlaceCollectionGoal {
  createBucketGoal(input: {
    title: "Visit all US National Parks"
    type: PLACE_COLLECTION
    status: IN_PROGRESS
    details: {
      collectionKey: "US_NATIONAL_PARKS"
      goal: "Visit all 63 parks"
      visitedCount: 12
      plannedCount: 5
    }
  }) {
    id
    title
    type
    details
  }
}
```

### 4. Create General Goal

```graphql
mutation CreateGeneralGoal {
  createBucketGoal(input: {
    title: "Learn to play guitar"
    description: "Master basic chords and 5 songs"
    type: GENERAL
    status: IDEA
    details: {
      instrument: "acoustic"
      targetSongs: ["Wonderwall", "Hotel California"]
    }
  }) {
    id
    title
    type
  }
}
```

### 5. Update Goal

```graphql
mutation UpdateBucketGoal($id: Int!) {
  updateBucketGoal(id: $id, input: {
    status: IN_PROGRESS
    priority: 5
  }) {
    id
    status
    priority
  }
}
# Variables: { "id": 1 }
```

### 6. Add Pin (Manual)

```graphql
mutation AddBucketGoalPin($goalId: Int!) {
  addBucketGoalPin(goalId: $goalId, input: {
    lat: 35.6762
    lng: 139.6503
    label: "Tokyo Tower"
  }) {
    id
    lat
    lng
    label
    source
  }
}
# Variables: { "goalId": 1 }
```

### 7. Add Log (Memory)

```graphql
mutation AddBucketGoalLog($goalId: Int!) {
  addBucketGoalLog(goalId: $goalId, input: {
    note: "Finally made it! The view from the top was incredible. Had matcha ice cream at the base."
    happenedAt: "2024-03-15T14:30:00.000Z"
  }) {
    id
    note
    happenedAt
  }
}
# Variables: { "goalId": 1 }
```

### 8. Delete Log

```graphql
mutation DeleteBucketGoalLog($id: Int!) {
  deleteBucketGoalLog(id: $id)
}
# Variables: { "id": 1 }
```

### 9. Delete Goal

```graphql
mutation DeleteBucketGoal($id: Int!) {
  deleteBucketGoal(id: $id)
}
# Variables: { "id": 1 }
```

---

## Enums Reference

- **BucketGoalType**: `GENERAL`, `TRAVEL`, `EVENT`, `PLACE_COLLECTION`, `ACHIEVEMENT`
- **BucketGoalStatus**: `IDEA`, `PLANNED`, `IN_PROGRESS`, `DONE`, `DROPPED`
- **BucketPinSource**: `MANUAL`, `NOMINATIM`, `GOOGLE` (v1 uses MANUAL only)

---

## Details JSON Schemas by Type

### TRAVEL
```json
{
  "where": "string (required)",
  "startDate": "ISO date string",
  "endDate": "ISO date string",
  "withWho": ["string"],
  "budget": number,
  "notes": "string",
  "checklist": [{ "label": "string", "done": boolean }]
}
```

### EVENT
```json
{
  "title": "string",
  "artist": "string",
  "venue": "string",
  "city": "string",
  "date": "ISO date string",
  "ticketUrl": "URL string",
  "companions": ["string"]
}
```

### PLACE_COLLECTION
```json
{
  "collectionKey": "string (required)",
  "goal": "string",
  "visitedCount": number,
  "plannedCount": number
}
```

### ACHIEVEMENT
```json
{
  "proofLinks": ["URL strings"],
  "metrics": { "key": "any" }
}
```

### GENERAL
Any valid JSON object (not array or string).
