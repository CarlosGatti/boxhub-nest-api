# Bucket List — Referência de API para Frontend

Guia completo: **o que fazer** → **qual endpoint** → **payload exato**. Todas as operações exigem `Authorization: Bearer <token>`.

**Base URL GraphQL:** `{API_URL}/graphql`  
**Base URL REST:** `{API_URL}/api/bucket-goals/upload/`

---

## Índice rápido

| Quero fazer… | Endpoint | Seção |
|-------------|----------|-------|
| Listar goals (com filtros) | `bucketGoals` | [1.1](#11-listar-goals) |
| Ver um goal com logs/pins/media | `bucketGoal` | [1.2](#12-ver-um-goal) |
| Criar goal (qualquer tipo) | `createBucketGoal` | [1.3](#13-criar-goal) |
| Editar goal | `updateBucketGoal` | [1.4](#14-editar-goal) |
| Deletar goal | `deleteBucketGoal` | [1.5](#15-deletar-goal) |
| Dashboard (contagens) | `bucketDashboardSummary` | [1.6](#16-dashboard) |
| Pins no mapa | `bucketMapPins` | [1.7](#17-pins-no-mapa) |
| Upload de capa | `POST /cover` | [2.1](#21-upload-capa) |
| Upload de mídia | `POST /media` | [2.2](#22-upload-mídia) |
| Vincular mídia a goal/log | `addBucketGoalMedia` | [2.3](#23-vincular-mídia) |
| Remover capa | `removeBucketGoalCover` | [2.4](#24-remover-capa) |
| Deletar mídia | `deleteBucketGoalMedia` | [2.5](#25-deletar-mídia) |
| Adicionar log (memória) | `addBucketGoalLog` | [3.1](#31-adicionar-log) |
| Adicionar pin no mapa | `addBucketGoalPin` | [3.2](#32-adicionar-pin) |
| Vision Board: listar/criar | `bucketVisionBoard*` | [4](#4-vision-board) |

---

## 1. Goals (GraphQL)

### 1.1 Listar goals

**Query:** `bucketGoals(filter?)`

**Payload (variables):** `filter` é opcional.

```graphql
query BucketGoals($filter: BucketGoalsFilterInput) {
  bucketGoals(filter: $filter) {
    id
    title
    description
    type
    status
    priority
    coverUrl
    tags
    details
    targetDate
    completedAt
    createdAt
    _count { logs pins media }
  }
}
```

**Exemplos de filter:**

| Cenário UX | filter |
|------------|--------|
| Todos | `{}` ou omitir |
| Só viagens | `{ type: TRAVEL }` |
| Watchlist (filmes + séries) | `{ typeIn: [MOVIE, TV_SHOW] }` |
| Games | `{ typeIn: [GAME] }` |
| Livros | `{ typeIn: [BOOK] }` |
| Em progresso | `{ status: IN_PROGRESS }` |
| Concluídos | `{ statusIn: [DONE] }` |
| Busca por texto | `{ search: "japão" }` |
| Tags | `{ tagsHasAny: ["urgente", "2025"] }` |
| Combinado | `{ typeIn: [MOVIE], statusIn: [PLANNED, IN_PROGRESS], search: "marvel" }` |

**Enums:** `BucketGoalType` = `GENERAL`, `TRAVEL`, `EVENT`, `PLACE_COLLECTION`, `ACHIEVEMENT`, `GAME`, `MOVIE`, `TV_SHOW`, `BOOK`  
**Status:** `IDEA`, `PLANNED`, `IN_PROGRESS`, `DONE`, `DROPPED`

---

### 1.2 Ver um goal

**Query:** `bucketGoal(id: Int!)`

```graphql
query BucketGoal($id: Int!) {
  bucketGoal(id: $id) {
    id
    title
    description
    type
    status
    priority
    details
    coverUrl
    tags
    targetDate
    completedAt
    logs {
      id
      note
      happenedAt
      media { id url type }
    }
    pins { id lat lng label }
    media { id url type }
    createdAt
    updatedAt
  }
}
```

**Variables:** `{ "id": 1 }`

---

### 1.3 Criar goal

**Mutation:** `createBucketGoal(input: CreateBucketGoalInput!)`

**Payload mínimo:**
```json
{
  "input": {
    "title": "Título obrigatório",
    "type": "GENERAL",
    "status": "IDEA"
  }
}
```

**Payload completo (por tipo):**

<details>
<summary><b>TRAVEL</b></summary>

```json
{
  "input": {
    "title": "Visitar Japão",
    "description": "2 semanas em Tokyo e Kyoto",
    "type": "TRAVEL",
    "status": "PLANNED",
    "priority": 10,
    "details": {
      "where": "Japão",
      "startDate": "2025-04-01",
      "endDate": "2025-04-15",
      "withWho": ["Esposa", "Filhos"],
      "budget": 8000,
      "notes": "Época das cerejeiras",
      "checklist": [
        { "label": "Comprar passagens", "done": true },
        { "label": "Reservar hotéis", "done": false }
      ]
    },
    "tags": ["viagem", "asia"],
    "targetDate": "2025-04-01"
  }
}
```
</details>

<details>
<summary><b>EVENT</b></summary>

```json
{
  "input": {
    "title": "Ver show do artista X",
    "type": "EVENT",
    "status": "PLANNED",
    "details": {
      "artist": "Artista",
      "venue": "Local",
      "city": "Cidade",
      "date": "2025-06-15",
      "ticketUrl": "https://...",
      "companions": ["Amigo 1"]
    },
    "targetDate": "2025-06-15"
  }
}
```
</details>

<details>
<summary><b>GAME</b></summary>

```json
{
  "input": {
    "title": "Zelda Tears of the Kingdom",
    "type": "GAME",
    "status": "IN_PROGRESS",
    "details": {
      "platform": ["Switch"],
      "releaseDate": "2023-05-12",
      "status": "playing",
      "hoursPlayed": 45,
      "rating": 9.5,
      "externalIds": { "igdb": "123" }
    }
  }
}
```
</details>

<details>
<summary><b>MOVIE / TV_SHOW</b></summary>

```json
{
  "input": {
    "title": "Duna 2",
    "type": "MOVIE",
    "status": "PLANNED",
    "details": {
      "service": "Cinema",
      "releaseDate": "2024-03-01",
      "watchedAt": null,
      "runtimeMin": 166,
      "rating": null,
      "externalIds": { "tmdb": "693134" }
    }
  }
}
```

TV_SHOW aceita ainda: `seasonCount`
</details>

<details>
<summary><b>BOOK</b></summary>

```json
{
  "input": {
    "title": "Hábitos Atômicos",
    "type": "BOOK",
    "status": "IN_PROGRESS",
    "details": {
      "author": "James Clear",
      "pages": 320,
      "format": "paperback",
      "progress": 60,
      "startedAt": "2025-01-10",
      "finishedAt": null,
      "rating": null,
      "favoriteQuote": "Você não sobe ao nível dos seus objetivos..."
    }
  }
}
```
</details>

<details>
<summary><b>PLACE_COLLECTION</b></summary>

```json
{
  "input": {
    "title": "Parques Nacionais EUA",
    "type": "PLACE_COLLECTION",
    "status": "IN_PROGRESS",
    "details": {
      "collectionKey": "US_NATIONAL_PARKS",
      "goal": "Visitar os 63",
      "visitedCount": 12,
      "plannedCount": 5
    }
  }
}
```
</details>

<details>
<summary><b>ACHIEVEMENT</b></summary>

```json
{
  "input": {
    "title": "Corrida 5k",
    "type": "ACHIEVEMENT",
    "status": "DONE",
    "details": {
      "proofLinks": ["https://strava.com/..."],
      "metrics": { "time": "28:30", "distance": "5km" }
    }
  }
}
```
</details>

---

### 1.4 Editar goal

**Mutation:** `updateBucketGoal(id: Int!, input: UpdateBucketGoalInput!)`

Campos opcionais; envie só o que mudou.

```json
{
  "id": 1,
  "input": {
    "status": "DONE",
    "priority": 5,
    "completedAt": "2025-02-19T12:00:00.000Z"
  }
}
```

---

### 1.5 Deletar goal

**Mutation:** `deleteBucketGoal(id: Int!)`

```json
{ "id": 1 }
```

---

### 1.6 Dashboard

**Query:** `bucketDashboardSummary`

```graphql
query BucketDashboardSummary {
  bucketDashboardSummary {
    totalGoals
    byStatus { IDEA PLANNED IN_PROGRESS DONE DROPPED }
    byType { GENERAL TRAVEL EVENT PLACE_COLLECTION ACHIEVEMENT GAME MOVIE TV_SHOW BOOK }
    completionRate
  }
}
```

---

### 1.7 Pins no mapa

**Query:** `bucketMapPins(filter?)`

```graphql
query BucketMapPins($filter: BucketMapPinsFilterInput) {
  bucketMapPins(filter: $filter) {
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

**filter:** `{ goalStatus: DONE }` para só pins de goals concluídos.

---

## 2. Uploads e mídia

### 2.1 Upload capa

**REST:** `POST /api/bucket-goals/upload/cover`

**Form-data:**
| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| file | File (image) | Sim |
| goalId | number | Sim |

**Resposta:** `{ "goalId": 123, "url": "https://api.../uploads/bucket-goals/cover/1/123/uuid.webp" }`

**Fluxo UX:** 1) Upload → 2) Usar `url` em `updateBucketGoal` com `coverUrl: url` (ou a capa já é atualizada automaticamente pelo endpoint de cover).

---

### 2.2 Upload mídia

**REST:** `POST /api/bucket-goals/upload/media`

**Form-data:**
| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| file | File (image) | Sim |
| goalId | number | Para mídia do goal |
| boardId | number | Para item do Vision Board |
| logId | number | Para anexo de log |

**Exatamente um** de `goalId`, `boardId`, `logId` é obrigatório.

**Resposta:** `{ "scope": "goal-5", "url": "https://api.../uploads/.../uuid.webp" }`

**Fluxo UX:** 1) Upload → 2) Chamar `addBucketGoalMedia` com a `url` retornada (ver 2.3).

---

### 2.3 Vincular mídia a goal ou log

**Mutation:** `addBucketGoalMedia(input: AddBucketGoalMediaInput!)`

**Regra:** Exatamente um de `goalId` ou `logId` (XOR).

**Para mídia do goal:**
```json
{
  "input": {
    "goalId": 5,
    "url": "https://api.../uploads/bucket-goals/media/1/goal-5/uuid.webp",
    "type": "IMAGE"
  }
}
```

**Para anexo de log:**
```json
{
  "input": {
    "logId": 42,
    "url": "https://api.../uploads/bucket-goals/media/1/log-42/uuid.webp",
    "type": "IMAGE"
  }
}
```

**Fluxo completo:** Upload (2.2) → `addBucketGoalMedia` com a URL.

---

### 2.4 Remover capa

**Mutation:** `removeBucketGoalCover(goalId: Int!)`

```json
{ "goalId": 1 }
```

---

### 2.5 Deletar mídia

**Mutation:** `deleteBucketGoalMedia(mediaId: Int!)`

```json
{ "mediaId": 1 }
```

---

## 3. Logs e pins

### 3.1 Adicionar log (memória)

**Mutation:** `addBucketGoalLog(goalId: Int!, input: CreateBucketGoalLogInput!)`

```json
{
  "goalId": 1,
  "input": {
    "note": "Finalmente chegamos! Vista incrível do topo.",
    "happenedAt": "2024-03-15T14:30:00.000Z"
  }
}
```

**Para anexar foto ao log:** 1) `addBucketGoalLog` → 2) Upload com `logId` → 3) `addBucketGoalMedia` com `logId` e a URL.

---

### 3.2 Adicionar pin no mapa

**Mutation:** `addBucketGoalPin(goalId: Int!, input: AddBucketGoalPinInput!)`

```json
{
  "goalId": 1,
  "input": {
    "lat": 35.6762,
    "lng": 139.6503,
    "label": "Tokyo Tower"
  }
}
```

---

### 3.3 Deletar log

**Mutation:** `deleteBucketGoalLog(id: Int!)`

```json
{ "id": 1 }
```

---

## 4. Vision Board

### Queries

| Query | Variables | Uso |
|------|-----------|-----|
| `bucketVisionBoards` | — | Listar todos os boards |
| `bucketVisionBoard(id)` | `{ id: 1 }` | Board por ID |
| `bucketVisionBoardByYear(year)` | `{ year: 2025 }` | Board do ano |
| `bucketVisionBoardProgress(boardId)` | `{ boardId: 1 }` | Progresso (metas vinculadas) |

### Mutations

| Mutation | Payload |
|----------|---------|
| `createBucketVisionBoard` | `{ title?, year?, theme?, periodType? }` |
| `updateBucketVisionBoard` | `{ title?, theme?, layoutMode?, coverUrl? }` |
| `upsertBucketVisionSection` | `{ type, title?, content?, order? }` — `content` pode ser `null` para seção vazia |
| `addBucketVisionItem` | `{ type, text?, url?, color?, metadata?, order? }` |
| `updateBucketVisionItem` | `{ type?, text?, url?, color?, order?, layout? }` |
| `deleteBucketVisionItem` | `{ id }` |
| `linkBucketVisionGoal` | Args: `boardId`, `goalId`, `label?` |
| `unlinkBucketVisionGoal` | Args: `boardId`, `goalId` |
| `createBucketVisionCheckin` | `{ kind?, notes?, mood?, snapshot? }` |

**Tipos de item:** `IMAGE`, `QUOTE`, `COLOR`, `LINK`, `GOAL_REF`  
**Tipos de seção:** `LIFE_WELLBEING`, `SCHOOL_LEARNING`, `DREAM_BIG`, `CAREER_GROWTH`, `VISUAL_INSPIRATION`, `CUSTOM`

---

## 5. Schemas de `details` por tipo (resumo)

| Tipo | Campos principais |
|------|-------------------|
| TRAVEL | `where` (obrigatório), `startDate`, `endDate`, `withWho[]`, `budget`, `checklist[]` |
| EVENT | `artist`, `venue`, `city`, `date`, `ticketUrl`, `companions[]` |
| PLACE_COLLECTION | `collectionKey` (obrigatório), `visitedCount`, `plannedCount` |
| ACHIEVEMENT | `proofLinks[]`, `metrics{}` |
| GAME | `platform[]`, `releaseDate`, `status`, `hoursPlayed`, `rating`, `externalIds{}` |
| MOVIE/TV_SHOW | `title`, `service`, `releaseDate`, `watchedAt`, `runtimeMin`, `rating`, `seasonCount` (TV) |
| BOOK | `author`, `pages`, `format`, `progress`, `startedAt`, `finishedAt`, `rating`, `favoriteQuote` |
| GENERAL | Qualquer objeto JSON |

Todos os campos são opcionais exceto os marcados. Datas em ISO 8601.

---

## 6. Erros comuns

| Erro | Causa | Solução |
|------|-------|---------|
| `Invalid details for type X` | `details` com tipo errado ou campo inválido | Ver schema da seção 5 |
| `Provide exactly one of goalId or logId` | `addBucketGoalMedia` com ambos ou nenhum | Enviar só `goalId` ou só `logId` |
| `Could not authenticate` | Token inválido/expirado | Refazer login |
| `You do not have access to Bucket List` | Usuário sem app BUCKET | Registrar com appCode BUCKET |

---

## 7. Referências

- [bucket-graphql-examples.md](./bucket-graphql-examples.md) — Exemplos GraphQL completos
- [bucket-uploads.md](./bucket-uploads.md) — Detalhes dos uploads REST
- [bucket-vision-frontend-ux-guide.md](./bucket-vision-frontend-ux-guide.md) — Fluxos UX do Vision Board
- [bucket-frontend-auth-guide.md](./bucket-frontend-auth-guide.md) — Login e autenticação
