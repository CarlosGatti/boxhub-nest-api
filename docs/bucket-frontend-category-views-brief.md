# Brief: Bucket List — Views por Categoria (Games, Livros, Watchlist)

**Objetivo:** Implementar no frontend do Bucket List (projeto `carlosgatti.github.io`) as views por categoria, para que o usuário possa ver listas separadas de **Games**, **Livros** e **Watchlist** (filmes + séries), sem misturar com eventos de futebol, viagens, etc.

**Contexto:** O backend já suporta os tipos `GAME`, `BOOK`, `MOVIE`, `TV_SHOW` e o filtro `typeIn` na query `bucketGoals`. O frontend ainda não usa isso — faz filtro client-side e não tem rotas específicas por categoria.

---

## 1. O que o backend já oferece

### 1.1 Tipos de goal (`BucketGoalType`)

```
GENERAL | TRAVEL | EVENT | PLACE_COLLECTION | ACHIEVEMENT | GAME | MOVIE | TV_SHOW | BOOK
```

### 1.2 Query `bucketGoals` com filtro

```graphql
query BucketGoals($filter: BucketGoalsFilterInput) {
  bucketGoals(filter: $filter) {
    id title description type status priority coverUrl tags details targetDate
    _count { logs pins media }
  }
}
```

**Exemplos de `filter`:**

| Cenário | filter |
|---------|--------|
| Todos | `{}` |
| Só games | `{ typeIn: [GAME] }` |
| Só livros | `{ typeIn: [BOOK] }` |
| Watchlist (filmes + séries) | `{ typeIn: [MOVIE, TV_SHOW] }` |
| Em progresso | `{ statusIn: [IN_PROGRESS] }` |
| Busca | `{ search: "zelda" }` |
| Combinado | `{ typeIn: [BOOK], statusIn: [PLANNED, IN_PROGRESS], search: "hábitos" }` |

### 1.3 Payloads para criar goals por tipo

**GAME:**
```json
{
  "title": "Zelda Tears of the Kingdom",
  "type": "GAME",
  "status": "IN_PROGRESS",
  "details": {
    "platform": ["Switch"],
    "releaseDate": "2023-05-12",
    "status": "playing",
    "hoursPlayed": 45,
    "rating": 9.5
  }
}
```

**BOOK:**
```json
{
  "title": "Hábitos Atômicos",
  "type": "BOOK",
  "status": "IN_PROGRESS",
  "details": {
    "author": "James Clear",
    "pages": 320,
    "format": "paperback",
    "progress": 60,
    "startedAt": "2025-01-10",
    "rating": null,
    "favoriteQuote": "..."
  }
}
```

**MOVIE / TV_SHOW:**
```json
{
  "title": "Duna 2",
  "type": "MOVIE",
  "status": "PLANNED",
  "details": {
    "service": "Cinema",
    "releaseDate": "2024-03-01",
    "watchedAt": null,
    "runtimeMin": 166,
    "rating": null
  }
}
```

---

## 2. O que o frontend precisa implementar

### 2.1 Atualizar `bucketApi.ts`

- **Adicionar** `GAME`, `MOVIE`, `TV_SHOW`, `BOOK` ao tipo `BucketGoalType`.
- **Alterar** `getBucketGoals` para passar `filter` na query GraphQL em vez de filtrar no cliente:
  - `typeIn: [type]` quando `filters.type` for um único tipo.
  - `typeIn: [MOVIE, TV_SHOW]` quando for "watchlist".
  - `statusIn`, `search`, `tagsHasAny` conforme API reference.
- **Atualizar** `BucketGoalFilters` para aceitar `typeIn?: BucketGoalType[]` (para watchlist) além de `type?: BucketGoalType | 'ALL'`.

### 2.2 Rotas por categoria

| Rota | Descrição | filter |
|------|-----------|--------|
| `/bucket` | Todos os goals | `{}` |
| `/bucket/games` | Só games | `{ typeIn: [GAME] }` |
| `/bucket/books` | Só livros | `{ typeIn: [BOOK] }` |
| `/bucket/watchlist` | Filmes + séries | `{ typeIn: [MOVIE, TV_SHOW] }` |

**Implementação sugerida:**
- Criar `app/(projects)/(bucket)/bucket/games/page.tsx` — reutiliza a mesma estrutura da página principal, mas com `typeIn: [GAME]`.
- Criar `app/(projects)/(bucket)/bucket/books/page.tsx` — idem com `typeIn: [BOOK]`.
- Criar `app/(projects)/(bucket)/bucket/watchlist/page.tsx` — idem com `typeIn: [MOVIE, TV_SHOW]`.

### 2.3 Navegação (tabs ou links)

- No `BucketNavbar` ou em uma barra de tabs na página de goals:
  - **All** → `/bucket`
  - **Games** → `/bucket/games`
  - **Books** → `/bucket/books`
  - **Watchlist** → `/bucket/watchlist`

- Alternativa: manter o dropdown de tipos no `BucketFiltersBar` e adicionar tabs rápidas acima da lista para as categorias principais.

### 2.4 Formulário de cadastro (`BucketGoalForm`)

- **Adicionar** os tipos `GAME`, `BOOK`, `MOVIE`, `TV_SHOW` ao select de tipos.
- **Campos específicos por tipo** (em `details`):
  - **GAME:** platform (multi-select), releaseDate, status (playing/backlog/etc), hoursPlayed, rating.
  - **BOOK:** author, pages, format (paperback/ebook/audiobook), progress, startedAt, finishedAt, rating, favoriteQuote.
  - **MOVIE/TV_SHOW:** service, releaseDate, watchedAt, runtimeMin, rating; para TV_SHOW: seasonCount.

- **Página de novo goal com tipo pré-selecionado:**  
  `/bucket/new?type=GAME` ou `/bucket/games/new` — ao abrir, o tipo já vem selecionado e os campos específicos aparecem.

### 2.5 Visualização individual (`/bucket/goals/[id]`)

- O `BucketDetailsPanel` ou equivalente deve exibir os campos de `details` conforme o tipo:
  - GAME: platform, hoursPlayed, rating, status.
  - BOOK: author, pages, progress, favoriteQuote.
  - MOVIE/TV_SHOW: service, runtimeMin, watchedAt, rating.

---

## 3. Arquivos principais do frontend

| Arquivo | Ação |
|---------|------|
| `src/lib/bucketApi.ts` | Adicionar tipos, passar filter na query |
| `src/components/bucket/BucketFiltersBar.tsx` | Adicionar GAME, BOOK, MOVIE, TV_SHOW ao select |
| `src/components/bucket/BucketGoalForm.tsx` | Novos tipos + campos details por tipo |
| `src/components/bucket/BucketDetailsPanel.tsx` | Exibir details por tipo na view individual |
| `app/(projects)/(bucket)/bucket/page.tsx` | Manter "todos"; opcional: tabs para categorias |
| `app/(projects)/(bucket)/bucket/games/page.tsx` | **Criar** — lista só de games |
| `app/(projects)/(bucket)/bucket/books/page.tsx` | **Criar** — lista só de livros |
| `app/(projects)/(bucket)/bucket/watchlist/page.tsx` | **Criar** — lista de filmes + séries |
| `src/components/bucket/BucketNavbar.tsx` | Adicionar links Games, Books, Watchlist |
| `app/(projects)/(bucket)/bucket/new/page.tsx` | Suportar `?type=GAME` (ou similar) para pré-selecionar tipo |

---

## 4. Referências

- **API completa:** `boxhub-nest-api/docs/bucket-api-reference.md`
- **Auth:** `boxhub-nest-api/docs/bucket-frontend-auth-guide.md`

---

## 5. Prompt sugerido para o Cursor (frontend)

> Implemente as views por categoria do Bucket List conforme o brief em `boxhub-nest-api/docs/bucket-frontend-category-views-brief.md`.
>
> Resumo:
> 1. Atualize `bucketApi.ts` para incluir GAME, BOOK, MOVIE, TV_SHOW e passar `filter` (typeIn, statusIn, search) na query GraphQL.
> 2. Crie rotas `/bucket/games`, `/bucket/books`, `/bucket/watchlist` que listam apenas goals daquela categoria.
> 3. Adicione navegação (tabs ou links) para essas categorias.
> 4. Atualize o formulário de cadastro para suportar os novos tipos e campos específicos em `details`.
> 5. Atualize a visualização individual do goal para exibir os campos de `details` conforme o tipo.
>
> O backend já suporta tudo isso; o frontend precisa consumir a API corretamente e oferecer a UX.
