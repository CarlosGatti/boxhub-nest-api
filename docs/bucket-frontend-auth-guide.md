# Bucket List — Guia de Autenticação para o Frontend

Este guia orienta o desenvolvedor frontend a integrar o login no projeto Bucket List.

---

## 1. Variáveis de ambiente

O frontend precisa apontar para a API:

```env
# Use uma das duas (a primeira tem prioridade)
NEXT_PUBLIC_DISCARD_API_URL=http://localhost:3000
# ou
NEXT_PUBLIC_GRAPHQL_API_URL=http://localhost:3000
```

- **Desenvolvimento local**: `http://localhost:3000` (ou a porta em que o backend está rodando)
- **Produção**: URL pública da API (ex: `https://api.carlosgatti.com`)

O GraphQL endpoint é derivado automaticamente: `{API_URL}/graphql`.

---

## 2. Fluxo de autenticação

### Login (usuário existente)

1. Chamar a mutation `login` com `email` e `password`
2. O backend retorna `{ user, token }`
3. O frontend verifica se `user.apps` inclui `"BUCKET"`
4. Se sim: salvar `token` e `user` (ex: localStorage) e usar o token em todas as requisições
5. Se não: exibir erro — "You do not have access to Bucket List"

### Registro (novo usuário)

1. Chamar a mutation `register` com `user` e `appCode: "BUCKET"`
2. Enviar também os headers: `x-app-code: BUCKET` e `x-app: BUCKET`
3. O backend cria o usuário e associa ao app BUCKET
4. Retorna `{ user, token }` — o usuário já tem acesso ao Bucket List

---

## 3. Requisições autenticadas

Todas as queries e mutations do Bucket List exigem JWT. Incluir o header:

```
Authorization: Bearer <token>
```

O `bucketApi.ts` já recebe `token` em cada função e repassa para `graphqlRequest`. Exemplo:

```ts
const data = await getBucketGoals(filters, token);
```

---

## 4. Checklist de troubleshooting

| Problema | Verificação |
|----------|-------------|
| **"Could not log-in with the provided credentials"** | Email/senha incorretos, ou usuário não existe |
| **"You do not have access to Bucket List"** | Usuário não tem o app BUCKET. Registrar via signup do Bucket List (com appCode BUCKET) ou adicionar manualmente no banco |
| **"Network/CORS error"** | Backend deve estar rodando; em dev, CORS está habilitado automaticamente |
| **"API_BASE_URL is not configured"** | Definir `NEXT_PUBLIC_DISCARD_API_URL` ou `NEXT_PUBLIC_GRAPHQL_API_URL` no `.env.local` |
| **401 Unauthorized** | Token inválido ou expirado — fazer logout e login novamente |

---

## 5. Backend: garantir que BUCKET existe

O app BUCKET precisa existir na tabela `App`. Rodar o seed:

```bash
npx prisma db seed
# ou apenas apps:
npm run seed:apps
```

O seed inclui:

```ts
{ code: 'BUCKET', name: 'Bucket List', description: '...' }
```

---

## 6. Dar acesso BUCKET a um usuário existente

Se o usuário foi criado por outro app (ex: Discart-me) e não tem BUCKET:

```sql
-- Encontrar IDs
SELECT id, code FROM "App" WHERE code = 'BUCKET';
SELECT id, email FROM "User" WHERE email = 'usuario@email.com';

-- Inserir acesso (substituir userId e appId)
INSERT INTO "UserAppAccess" ("userId", "appId")
VALUES (<userId>, <appId>)
ON CONFLICT DO NOTHING;
```

Ou via Prisma Studio: `npx prisma studio` → UserAppAccess → Create.

---

## 7. Exemplo de login (GraphQL)

```graphql
mutation Login($user: LoginUserInput!) {
  login(user: $user) {
    user {
      id
      email
      firstName
      lastName
      profilePicture
      apps
    }
    token
  }
}
```

Variables:

```json
{
  "user": {
    "email": "usuario@email.com",
    "password": "senha123"
  }
}
```

---

## 8. Exemplo de registro (GraphQL)

```graphql
mutation Register($user: RegisterUserInput!, $appCode: String) {
  register(user: $user, appCode: $appCode) {
    user {
      id
      email
      firstName
      lastName
      apps
    }
    token
  }
}
```

Variables:

```json
{
  "user": {
    "email": "novo@email.com",
    "firstName": "Nome",
    "lastName": "Sobrenome",
    "password": "senha123",
    "public": false
  },
  "appCode": "BUCKET"
}
```

Headers recomendados: `x-app-code: BUCKET`, `x-app: BUCKET`.

---

## Resumo

1. **API URL** no `.env.local` do frontend
2. **Login** via mutation `login` (sem token)
3. **Registro** com `appCode: "BUCKET"` para garantir acesso
4. **Token** em `Authorization: Bearer <token>` em todas as chamadas do Bucket List
5. **App BUCKET** deve existir no banco (seed) e o usuário deve ter `UserAppAccess` para BUCKET
