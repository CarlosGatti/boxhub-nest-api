# Bucket Vision Board — Guia de UX para Frontend

Dicas para implementar o fluxo de usuário no frontend usando a API GraphQL do Vision Board.

**Referência:** exemplos de queries e mutations em [bucket-vision-graphql-examples.md](./bucket-vision-graphql-examples.md).

---

## 1. Fluxo de entrada e onboarding

### Primeiro acesso
- **Query:** `bucketVisionBoards` ou `bucketVisionBoardByYear(year: currentYear)`
- Se retornar `null` ou lista vazia → mostrar **onboarding**:
  - "Crie seu Vision Board para [ano]"
  - Inputs: título (opcional), tema (ex: "Discipline & Expansion")
  - **Mutation:** `createBucketVisionBoard` com `year`, `title`, `theme`
- O board criado já vem com **seções padrão** (LIFE_WELLBEING, SCHOOL_LEARNING, DREAM_BIG, CAREER_GROWTH, VISUAL_INSPIRATION)

### Navegação entre anos
- Se o usuário tem vários boards → lista com `bucketVisionBoards`
- Para ano específico: `bucketVisionBoardByYear(year: 2026)` (evita precisar do `id`)

---

## 2. Modos de visualização: `layoutMode`

- **FORM** (padrão): foco em prompts guiados (Phase A). Bom para preencher as seções.
- **CANVAS**: foco em itens visuais (Phase C). Bom para mood board / inspiração.

**Sugestão de UX:**
- Tabs ou toggle: "Prompts" | "Canvas"
- Ou duas abas: "Refletir" (FORM) e "Inspiração" (CANVAS)
- **Mutation:** `updateBucketVisionBoard` para trocar `layoutMode` conforme a aba ativa

---

## 3. Phase A — Prompts guiados (seções)

### Estrutura
Cada seção tem `type` e `content` (JSON). O schema varia por tipo:

| Section Type       | Campos no content                                                                 |
|--------------------|------------------------------------------------------------------------------------|
| LIFE_WELLBEING     | feelMore, buildHabit, letGoHabit, stayConnectedTo, dailyRoutine                    |
| SCHOOL_LEARNING    | courseExcited, skillImprove, challengeOvercome, studyHabitBuild, progressWhen      |
| DREAM_BIG          | bigDream, achievementFeeling, whyMatters                                          |
| CAREER_GROWTH      | pathExplore, skillCertification, connectionMake, oneStepThisYear, proudStatement   |
| VISUAL_INSPIRATION | vazio — use BucketVisionItem                                                      |

### UX sugerida
- Uma **card/accordion por seção** com título amigável (ex: "Life & Well-being", "Dream Big")
- Campos de texto (textarea ou input) por chave do `content`
- Labels sugeridos:
  - `feelMore` → "O que você quer sentir mais?"
  - `buildHabit` → "Qual hábito quer construir?"
  - `letGoHabit` → "O que quer deixar de fazer?"
  - `bigDream` → "Qual é seu grande sonho?"
  - etc.

### Salvamento
- **Mutation:** `upsertBucketVisionSection`
- Salvar ao blur ou com botão "Salvar" por seção
- Usar **debounce** (ex: 500ms) se salvar em tempo real

---

## 4. Phase B — Vincular goals

### Onde mostrar
- Seção "Goals do ano" ou "Metas conectadas" no board
- Ou modal "Adicionar meta" ao clicar em "Link goal"

### Fluxo
1. **Listar goals disponíveis:** usar `bucketGoals` (já existente no Bucket)
2. **Listar goals já vinculados:** `bucketVisionBoard` → `goalLinks { goalId, label, goal { title, status } }`
3. **Vincular:** `linkBucketVisionGoal(boardId, goalId, label?)`
4. **Desvincular:** `unlinkBucketVisionGoal(boardId, goalId)`

### UX
- Chips ou cards com título do goal + status
- Botão "Remover" em cada goal vinculado
- Modal de seleção com busca/filtro ao clicar "Adicionar meta"

### Progresso
- **Query:** `bucketVisionBoardProgress(boardId)` → `linkedGoalsCount`, `doneGoalsCount`, `completionRate`, contagens por status
- Mostrar barra de progresso ou resumo: "3 de 6 metas concluídas"

---

## 5. Phase C — Itens visuais (Canvas)

### Tipos de item
| type   | Campos principais | Uso no UI                          |
|--------|--------------------|-------------------------------------|
| QUOTE  | text               | Card com citação                    |
| IMAGE  | url                | Imagem (upload ou URL)              |
| COLOR  | color (hex)        | Quadrado de cor                     |
| LINK   | url, text          | Link clicável                       |
| GOAL_REF | goalId (futuro)  | Referência a um goal                |

### Fluxo de adição
- Botão "Adicionar item" → escolher tipo (Quote, Imagem, Cor, Link)
- **Mutation:** `addBucketVisionItem(boardId, { type, text?, url?, color?, order })`
- `order` para ordenação (0, 1, 2...)

### Edição e exclusão
- `updateBucketVisionItem(id, { text, url, color, order, layout })`
- `deleteBucketVisionItem(id)`

### Layout (Phase C avançada)
- Campo `layout` em cada item: JSON livre para posição/tamanho no canvas (ex: `{ x, y, w, h }` para grid)
- Útil para canvas arrastável (drag-and-drop)

---

## 6. Phase D — Check-ins

### Quando mostrar
- Botão "Fazer check-in" ou "Review" no board
- Sugestão: lembretes em marcos (ex: 3 meses, 6 meses, fim do ano)

### Fluxo
- Form com:
  - `kind` (opcional): "6_MONTH_REVIEW", "MONTHLY_CHECKIN", etc.
  - `notes`: texto livre
  - `mood`: `{ feeling, score, tags }` — ex: "Motivated", 8, ["grateful", "focused"]
  - `snapshot` (opcional): dados extras
- **Mutation:** `createBucketVisionCheckin(boardId, input)`

### Histórico
- Incluir `checkins` na query `bucketVisionBoard`:
  ```graphql
  bucketVisionBoard(id: $id) {
    ...
    checkins {
      id
      kind
      notes
      mood
      createdAt
    }
  }
  ```

---

## 7. Queries recomendadas por tela

| Tela              | Query principal                          | Dados extras                          |
|-------------------|------------------------------------------|---------------------------------------|
| Lista de boards   | `bucketVisionBoards`                     | `_count { sections, items, goalLinks }` |
| Board completo    | `bucketVisionBoard(id)` ou `bucketVisionBoardByYear(year)` | sections, items, goalLinks |
| Progresso         | `bucketVisionBoardProgress(boardId)`     | —                                     |
| Modal "Link goal" | `bucketGoals` (Bucket)                   | Filtrar os que ainda não estão em goalLinks |

---

## 8. Boas práticas

- **Cache:** usar Apollo Client cache ou React Query; invalidar após mutations (board, sections, items, goalLinks)
- **Optimistic updates:** em `upsertBucketVisionSection` e `addBucketVisionItem` para UX mais fluida
- **Erros:** validar `content` no frontend conforme os schemas da doc (evita 400 do backend)
- **Upload de imagem:** usar `POST /api/bucket-goals/upload/media` (form: `file`, `boardId` ou `goalId` ou `logId`). Passar a URL retornada em `addBucketVisionItem` com `type: IMAGE`. Ver [bucket-uploads.md](./bucket-uploads.md).
- **Auth:** todas as operações exigem JWT; tratar 401 e redirecionar para login

---

## 9. Resumo de mutations por ação

| Ação do usuário        | Mutation                          |
|------------------------|-----------------------------------|
| Criar board            | `createBucketVisionBoard`         |
| Editar tema/capa       | `updateBucketVisionBoard`         |
| Salvar respostas       | `upsertBucketVisionSection`       |
| Adicionar citação/cor  | `addBucketVisionItem`             |
| Editar item            | `updateBucketVisionItem`          |
| Remover item           | `deleteBucketVisionItem`          |
| Vincular meta          | `linkBucketVisionGoal`            |
| Desvincular meta       | `unlinkBucketVisionGoal`          |
| Fazer check-in         | `createBucketVisionCheckin`       |
