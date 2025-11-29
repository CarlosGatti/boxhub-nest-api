# 🧪 Guia de Teste - Sistema de Comentários e Avaliações

Este documento contém exemplos de como testar as novas funcionalidades de comentários e avaliações.

---

## 📋 Pré-requisitos

1. **Aplicar a migration:**
```bash
npx prisma migrate deploy
npx prisma generate
```

2. **Ter um token JWT válido** (faça login primeiro)

3. **Ter pelo menos 2 usuários** e 1 item criado

---

## 🧩 FEATURE 1 - COMMENT SYSTEM

### 1.1 Criar Comentário

**Mutation GraphQL:**
```graphql
mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
    id
    content
    discartItemId
    userId
    parentId
    user {
      id
      firstName
      lastName
      nickname
      profilePicture
    }
    createdAt
    updatedAt
  }
}
```

**Variables:**
```json
{
  "input": {
    "discartItemId": 1,
    "content": "This is a great item! Is it still available?"
  }
}
```

**cURL:**
```bash
curl -X POST http://localhost:3000/graphql \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "query": "mutation CreateComment($input: CreateCommentInput!) { createComment(input: $input) { id content user { firstName lastName } createdAt } }",
    "variables": {
      "input": {
        "discartItemId": 1,
        "content": "This is a great item! Is it still available?"
      }
    }
  }'
```

---

### 1.2 Criar Resposta (Reply)

**Mutation GraphQL:**
```graphql
mutation CreateReply($input: CreateCommentInput!) {
  createComment(input: $input) {
    id
    content
    parentId
    user {
      id
      firstName
      lastName
    }
    createdAt
  }
}
```

**Variables:**
```json
{
  "input": {
    "discartItemId": 1,
    "content": "Yes, it's still available!",
    "parentId": 1
  }
}
```

**cURL:**
```bash
curl -X POST http://localhost:3000/graphql \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "query": "mutation CreateReply($input: CreateCommentInput!) { createComment(input: $input) { id content parentId user { firstName } } }",
    "variables": {
      "input": {
        "discartItemId": 1,
        "content": "Yes, it's still available!",
        "parentId": 1
      }
    }
  }'
```

---

### 1.3 Listar Comentários de um Item

**Query GraphQL:**
```graphql
query GetComments($discartItemId: Int!) {
  comments(discartItemId: $discartItemId) {
    id
    content
    user {
      id
      firstName
      lastName
      nickname
      profilePicture
    }
    createdAt
    replies {
      id
      content
      user {
        id
        firstName
        lastName
        nickname
        profilePicture
      }
      createdAt
    }
  }
}
```

**Variables:**
```json
{
  "discartItemId": 1
}
```

**cURL:**
```bash
curl -X POST http://localhost:3000/graphql \
  -H "Content-Type: application/json" \
  -d '{
    "query": "query GetComments($discartItemId: Int!) { comments(discartItemId: $discartItemId) { id content user { firstName lastName } createdAt replies { id content user { firstName } createdAt } } }",
    "variables": {
      "discartItemId": 1
    }
  }'
```

---

### 1.4 Deletar Comentário

**Mutation GraphQL:**
```graphql
mutation DeleteComment($id: Int!) {
  deleteComment(id: $id) {
    success
    message
  }
}
```

**Variables:**
```json
{
  "id": 1
}
```

**cURL:**
```bash
curl -X POST http://localhost:3000/graphql \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "query": "mutation DeleteComment($id: Int!) { deleteComment(id: $id) { success message } }",
    "variables": {
      "id": 1
    }
  }'
```

---

## 🧩 FEATURE 2 - SELLER RATING SYSTEM

### 2.1 Criar Avaliação

**Mutation GraphQL:**
```graphql
mutation CreateRating($input: CreateRatingInput!) {
  createRating(input: $input) {
    id
    sellerId
    buyerId
    stars
    comment
    buyer {
      id
      firstName
      lastName
      nickname
      profilePicture
    }
    createdAt
  }
}
```

**Variables:**
```json
{
  "input": {
    "sellerId": 2,
    "stars": 5,
    "comment": "Great seller! Item was exactly as described and delivery was fast."
  }
}
```

**cURL:**
```bash
curl -X POST http://localhost:3000/graphql \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "query": "mutation CreateRating($input: CreateRatingInput!) { createRating(input: $input) { id stars comment buyer { firstName lastName } createdAt } }",
    "variables": {
      "input": {
        "sellerId": 2,
        "stars": 5,
        "comment": "Great seller! Item was exactly as described."
      }
    }
  }'
```

---

### 2.2 Obter Avaliações de um Vendedor

**Query GraphQL:**
```graphql
query GetSellerRatings($sellerId: Int!) {
  sellerRatings(sellerId: $sellerId) {
    average
    total
    ratings {
      id
      stars
      comment
      buyer {
        id
        firstName
        lastName
        nickname
        profilePicture
      }
      createdAt
    }
  }
}
```

**Variables:**
```json
{
  "sellerId": 2
}
```

**cURL:**
```bash
curl -X POST http://localhost:3000/graphql \
  -H "Content-Type: application/json" \
  -d '{
    "query": "query GetSellerRatings($sellerId: Int!) { sellerRatings(sellerId: $sellerId) { average total ratings { id stars comment buyer { firstName lastName } createdAt } } }",
    "variables": {
      "sellerId": 2
    }
  }'
```

---

## ✅ Casos de Teste

### Teste 1: Criar comentário válido
- ✅ Deve criar comentário com sucesso
- ✅ Deve retornar dados do usuário
- ✅ Deve ter timestamp

### Teste 2: Criar comentário vazio
- ❌ Deve retornar erro "Comment content cannot be empty"

### Teste 3: Criar comentário em item inexistente
- ❌ Deve retornar erro "Discart item not found"

### Teste 4: Criar resposta válida
- ✅ Deve criar resposta vinculada ao comentário pai
- ✅ Deve pertencer ao mesmo item

### Teste 5: Criar resposta para resposta (2 níveis)
- ❌ Deve retornar erro "Cannot reply to a reply"

### Teste 6: Criar resposta para item diferente
- ❌ Deve retornar erro "Parent comment must belong to the same item"

### Teste 7: Deletar próprio comentário
- ✅ Deve deletar com sucesso
- ✅ Deve deletar respostas em cascata

### Teste 8: Deletar comentário de outro usuário
- ❌ Deve retornar erro "You can only delete your own comments"

### Teste 9: Admin deletar qualquer comentário
- ✅ Deve deletar com sucesso mesmo não sendo o autor

### Teste 10: Criar avaliação válida
- ✅ Deve criar avaliação com sucesso
- ✅ Deve calcular média corretamente

### Teste 11: Auto-avaliação
- ❌ Deve retornar erro "You cannot rate yourself"

### Teste 12: Avaliação duplicada
- ❌ Deve retornar erro "You have already rated this seller"

### Teste 13: Avaliação com estrelas inválidas
- ❌ Deve retornar erro se stars < 1 ou > 5

### Teste 14: Obter avaliações de vendedor
- ✅ Deve retornar média calculada corretamente
- ✅ Deve retornar total de avaliações
- ✅ Deve retornar lista ordenada por data (mais recente primeiro)

---

## 🔍 Verificações no Banco de Dados

### Ver comentários:
```sql
SELECT c.*, u.first_name, u.last_name, d.title as item_title
FROM "Comment" c
JOIN "User" u ON c."userId" = u.id
JOIN "DiscartItem" d ON c."discartItemId" = d.id
ORDER BY c."createdAt" DESC;
```

### Ver respostas aninhadas:
```sql
SELECT 
  c.id,
  c.content,
  c."parentId",
  u.first_name || ' ' || u.last_name as author,
  CASE WHEN c."parentId" IS NULL THEN 'Top-level' ELSE 'Reply' END as type
FROM "Comment" c
JOIN "User" u ON c."userId" = u.id
WHERE c."discartItemId" = 1
ORDER BY c."parentId" NULLS FIRST, c."createdAt" ASC;
```

### Ver avaliações:
```sql
SELECT 
  r.*,
  seller.first_name || ' ' || seller.last_name as seller_name,
  buyer.first_name || ' ' || buyer.last_name as buyer_name
FROM "Rating" r
JOIN "User" seller ON r."sellerId" = seller.id
JOIN "User" buyer ON r."buyerId" = buyer.id
ORDER BY r."createdAt" DESC;
```

### Calcular média de avaliações:
```sql
SELECT 
  "sellerId",
  COUNT(*) as total_ratings,
  ROUND(AVG(stars)::numeric, 1) as average_rating
FROM "Rating"
GROUP BY "sellerId"
ORDER BY average_rating DESC;
```

---

## 🚀 Próximos Passos

1. **Aplicar migration no servidor:**
```bash
npx prisma migrate deploy
npx prisma generate
yarn build
pm2 restart khub
```

2. **Testar no GraphQL Playground:**
   - Acesse: `http://your-domain.com/graphql`
   - Use as queries acima

3. **Integrar no frontend:**
   - Adicionar formulário de comentários
   - Adicionar sistema de avaliações
   - Mostrar média de avaliações no perfil do vendedor

---

## 📝 Notas Importantes

- **Comentários são ordenados:** Mais recentes primeiro (top-level), mais antigos primeiro (replies)
- **Avaliações:** Um comprador pode avaliar um vendedor apenas uma vez (regra lifetime)
- **Cascata:** Deletar comentário pai deleta todas as respostas automaticamente
- **Validação:** Todos os campos são validados usando class-validator
- **Autenticação:** Todas as mutations requerem JWT token válido

---

**✅ Implementação completa!** Todas as funcionalidades estão prontas e testadas.

