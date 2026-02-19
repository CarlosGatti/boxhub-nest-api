# Bucket Vision Board GraphQL Examples

Manual testing examples for the Vision Board (guided prompts + visual inspiration) module.

**Authentication**: All operations require a valid JWT:
```
Authorization: Bearer <your-jwt-token>
```

---

## Queries

### 1. List Vision Boards

```graphql
query BucketVisionBoards {
  bucketVisionBoards {
    id
    title
    year
    theme
    periodType
    layoutMode
    createdAt
    _count {
      sections
      items
      goalLinks
    }
  }
}
```

### 2. Get Board by ID

```graphql
query BucketVisionBoard($id: Int!) {
  bucketVisionBoard(id: $id) {
    id
    title
    year
    theme
    coverUrl
    sections {
      id
      type
      title
      content
      order
    }
    items {
      id
      type
      text
      url
      color
      order
      layout
    }
    goalLinks {
      id
      goalId
      label
      goal {
        id
        title
        status
      }
    }
  }
}
# Variables: { "id": 1 }
```

### 3. Get Board by Year

```graphql
query BucketVisionBoardByYear($year: Int!) {
  bucketVisionBoardByYear(year: $year) {
    id
    title
    year
    theme
    sections { id type content }
    items { id type text url color }
  }
}
# Variables: { "year": 2026 }
```

### 4. Progress Summary

```graphql
query BucketVisionBoardProgress($boardId: Int!) {
  bucketVisionBoardProgress(boardId: $boardId) {
    linkedGoalsCount
    doneGoalsCount
    completionRate
    ideaCount
    plannedCount
    inProgressCount
    droppedCount
  }
}
# Variables: { "boardId": 1 }
```

---

## Mutations

### 1. Create Board (Current Year)

```graphql
mutation CreateBucketVisionBoard {
  createBucketVisionBoard(input: {
    title: "My Vision 2026"
    year: 2026
    theme: "Discipline & Expansion"
  }) {
    id
    title
    year
    theme
    sections {
      id
      type
      content
    }
  }
}
```

### 2. Create Board (Custom Period)

```graphql
mutation CreateCustomVisionBoard {
  createBucketVisionBoard(input: {
    title: "Q1 2026 Focus"
    periodType: QUARTER
    startDate: "2026-01-01"
    endDate: "2026-03-31"
    theme: "Launch"
  }) {
    id
    title
    periodType
    startDate
    endDate
  }
}
```

### 3. Update Board Theme

```graphql
mutation UpdateBucketVisionBoard($id: Int!) {
  updateBucketVisionBoard(id: $id, input: {
    theme: "Growth & Gratitude"
    coverUrl: "/uploads/bucket-goals/cover/xxx.jpg"
  }) {
    id
    theme
    coverUrl
  }
}
# Variables: { "id": 1 }
```

### 4. Upsert Section Content (Life & Well-being)

```graphql
mutation UpsertLifeWellbeingSection($boardId: Int!) {
  upsertBucketVisionSection(boardId: $boardId, input: {
    type: LIFE_WELLBEING
    content: {
      feelMore: "Energized and present"
      buildHabit: "Morning meditation"
      letGoHabit: "Scrolling before bed"
      stayConnectedTo: "Family and close friends"
      dailyRoutine: "Wake 6am, exercise, journal"
    }
  }) {
    id
    type
    content
  }
}
# Variables: { "boardId": 1 }
```

### 5. Upsert Section Content (Dream Big)

```graphql
mutation UpsertDreamBigSection($boardId: Int!) {
  upsertBucketVisionSection(boardId: $boardId, input: {
    type: DREAM_BIG
    content: {
      bigDream: "Visit Japan and see cherry blossoms"
      achievementFeeling: "Accomplished and grateful"
      whyMatters: "It represents a lifelong dream"
    }
  }) {
    id
    type
    content
  }
}
# Variables: { "boardId": 1 }
```

### 6. Add Quote Item

```graphql
mutation AddQuoteItem($boardId: Int!) {
  addBucketVisionItem(boardId: $boardId, input: {
    type: QUOTE
    text: "The only way to do great work is to love what you do."
    order: 0
  }) {
    id
    type
    text
  }
}
# Variables: { "boardId": 1 }
```

### 7. Add Image Item

```graphql
mutation AddImageItem($boardId: Int!) {
  addBucketVisionItem(boardId: $boardId, input: {
    type: IMAGE
    url: "/uploads/bucket-goals/media/xxx.jpg"
    order: 1
  }) {
    id
    type
    url
  }
}
# Variables: { "boardId": 1 }
```

### 8. Add Color Item

```graphql
mutation AddColorItem($boardId: Int!) {
  addBucketVisionItem(boardId: $boardId, input: {
    type: COLOR
    color: "#4F46E5"
    order: 2
  }) {
    id
    type
    color
  }
}
# Variables: { "boardId": 1 }
```

### 9. Update Item

```graphql
mutation UpdateBucketVisionItem($id: Int!) {
  updateBucketVisionItem(id: $id, input: {
    text: "Updated quote text"
    order: 5
  }) {
    id
    text
    order
  }
}
# Variables: { "id": 1 }
```

### 10. Delete Item

```graphql
mutation DeleteBucketVisionItem($id: Int!) {
  deleteBucketVisionItem(id: $id)
}
# Variables: { "id": 1 }
```

### 11. Link Goal (Phase B)

```graphql
mutation LinkBucketVisionGoal($boardId: Int!, $goalId: Int!) {
  linkBucketVisionGoal(boardId: $boardId, goalId: $goalId, label: "Dream Big Goal") {
    id
    boardId
    goalId
    label
  }
}
# Variables: { "boardId": 1, "goalId": 5 }
```

### 12. Unlink Goal

```graphql
mutation UnlinkBucketVisionGoal($boardId: Int!, $goalId: Int!) {
  unlinkBucketVisionGoal(boardId: $boardId, goalId: $goalId)
}
# Variables: { "boardId": 1, "goalId": 5 }
```

### 13. Create Check-in (Phase D)

```graphql
mutation CreateBucketVisionCheckin($boardId: Int!) {
  createBucketVisionCheckin(boardId: $boardId, input: {
    kind: "6_MONTH_REVIEW"
    notes: "Halfway through the year. Feeling good about progress on learning goals."
    mood: {
      feeling: "Motivated"
      score: 8
      tags: ["grateful", "focused"]
    }
  }) {
    id
    kind
    notes
    mood
    createdAt
  }
}
# Variables: { "boardId": 1 }
```

---

## Section Content Schemas (Phase A)

### LIFE_WELLBEING
```json
{
  "feelMore": "string",
  "buildHabit": "string",
  "letGoHabit": "string",
  "stayConnectedTo": "string",
  "dailyRoutine": "string"
}
```

### SCHOOL_LEARNING
```json
{
  "courseExcited": "string",
  "skillImprove": "string",
  "challengeOvercome": "string",
  "studyHabitBuild": "string",
  "progressWhen": "string"
}
```

### DREAM_BIG
```json
{
  "bigDream": "string",
  "achievementFeeling": "string",
  "whyMatters": "string"
}
```

### CAREER_GROWTH
```json
{
  "pathExplore": "string",
  "skillCertification": "string",
  "connectionMake": "string",
  "oneStepThisYear": "string",
  "proudStatement": "string"
}
```

### VISUAL_INSPIRATION
Empty object `{}` — visuals live in BucketVisionItem.

---

## Enums Reference

- **BucketVisionPeriodType**: `YEAR`, `QUARTER`, `CUSTOM`
- **BucketVisionSectionType**: `LIFE_WELLBEING`, `SCHOOL_LEARNING`, `DREAM_BIG`, `CAREER_GROWTH`, `VISUAL_INSPIRATION`, `CUSTOM`
- **BucketVisionItemType**: `IMAGE`, `QUOTE`, `COLOR`, `LINK`, `GOAL_REF`
- **BucketVisionLayoutMode**: `FORM`, `CANVAS`
