# 🔧 Solução: URL Duplicada `/graphql//graphql`

> **Guia rápido** para resolver erro de URL duplicada no GraphQL.

---

## ❌ Erro que você está vendo:

```
Request URL: https://discart.me/graphql//graphql
Status Code: 500 Internal Server Error
```

**Problema:** A URL está duplicada - tem `//graphql` no final, o que significa que o caminho está sendo adicionado duas vezes.

---

## ✅ SOLUÇÃO: Verificar e Corrigir Configuração

### Causa 1: Frontend está configurado incorretamente

**O frontend pode estar usando:**
```typescript
const API_URL = "https://discart.me/graphql"
const GRAPHQL_ENDPOINT = "/graphql"

// Resultado: API_URL + GRAPHQL_ENDPOINT = "https://discart.me/graphql/graphql" ❌
```

**Solução no Frontend:**

```typescript
// Opção 1: Usar apenas a base URL (recomendado)
const API_URL = "https://discart.me"
const GRAPHQL_ENDPOINT = "/graphql"

// Resultado: API_URL + GRAPHQL_ENDPOINT = "https://discart.me/graphql" ✅

// Opção 2: Usar URL completa SEM o /graphql
const GRAPHQL_URL = "https://discart.me/graphql"  // ← Sem barra no final

// Opção 3: Verificar se a biblioteca GraphQL não está adicionando /graphql automaticamente
```

---

### Causa 2: Configuração do NestJS GraphQL

**Verificar se o path está configurado corretamente:**

```typescript
// src/app/app.module.ts
GraphQLModule.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,
  autoSchemaFile: true,
  playground: true,
  introspection: true,
  installSubscriptionHandlers: true,
  path: '/graphql',  // ← Adicionar explicitamente se não estiver
})
```

---

## ✅ SOLUÇÃO: Configurar Path Explícito no NestJS

### Passo 1: Editar app.module.ts

```bash
# No seu computador local (não na VPS)
nano src/app/app.module.ts
```

### Passo 2: Adicionar path explícito

```typescript
GraphQLModule.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,
  autoSchemaFile: true,
  playground: true,
  introspection: true,
  installSubscriptionHandlers: true,
  path: '/graphql',  // ← Adicionar esta linha explicitamente
})
```

**Arquivo completo:**
```typescript
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
// ... outros imports

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
      introspection: true,
      installSubscriptionHandlers: true,
      path: '/graphql',  // ← Adicionar esta linha
    }),
    // ... outros módulos
  ],
})
export class AppModule {}
```

### Passo 3: Fazer commit e deploy

```bash
# No seu computador local
git add src/app/app.module.ts
git commit -m "fix: adicionar path explícito para GraphQL"
git push

# O GitHub Actions vai fazer deploy automaticamente
```

---

## ✅ SOLUÇÃO: Verificar Frontend

### No Frontend (Next.js/React)

**Verificar onde a URL do GraphQL está sendo configurada:**

1. **Buscar por:**
   ```typescript
   // Pode estar em:
   - lib/graphql.request.ts
   - lib/discartMeApi.ts
   - config/api.ts
   - .env.local
   - .env.production
   ```

2. **Verificar se está assim (ERRADO):**
   ```typescript
   const API_URL = "https://discart.me/graphql"
   const endpoint = "/graphql"
   
   // Usado juntos: API_URL + endpoint = "https://discart.me/graphql/graphql" ❌
   ```

3. **Corrigir para (CORRETO):**
   ```typescript
   // Opção A: Base URL sem /graphql
   const API_URL = "https://discart.me"
   const endpoint = "/graphql"
   
   // Opção B: URL completa
   const GRAPHQL_URL = "https://discart.me/graphql"  // Usar diretamente
   ```

---

## ✅ SOLUÇÃO: Verificar Nginx (Se necessário)

**Verificar se o proxy está duplicando o path:**

```bash
# Na VPS
sudo nano /etc/nginx/sites-available/boxhub-api
```

**Verificar se está assim:**

```nginx
location /graphql {
    proxy_pass http://localhost:3000/graphql;  # ← Pode causar duplicação
}
```

**Mudar para:**

```nginx
location /graphql {
    proxy_pass http://localhost:3000/graphql;  # OK - path explícito
    # Ou se usar trailing slash:
    proxy_pass http://localhost:3000/graphql/;  # Com barra no final
}
```

**Ou mais simples (recomendado):**

```nginx
location / {
    proxy_pass http://localhost:3000;  # ← Sem path adicional
    # ... headers
}
```

**Isso passa `/graphql` diretamente para `http://localhost:3000/graphql`** ✅

---

## ✅ Testar no Postman

**Depois de corrigir:**

1. **URL:** `https://discart.me/graphql` (sem barra no final, sem duplicação)
2. **Método:** POST
3. **Headers:**
   ```
   Content-Type: application/json
   ```
4. **Body:**
   ```json
   {
     "query": "{ __typename }"
   }
   ```

**Deve funcionar!** ✅

---

## 🔍 Como Verificar a URL Correta

**Testar diretamente na VPS:**

```bash
# Na VPS
curl -X POST http://localhost:3000/graphql \
  -H "Content-Type: application/json" \
  -d '{"query": "{ __typename }"}'
```

**Se funcionar na VPS mas não pelo domínio, é problema de configuração no frontend ou Nginx.**

---

## 📝 Resumo Rápido

**Problema:** URL duplicada `https://discart.me/graphql//graphql`

**Soluções:**

1. ✅ **Frontend:** Verificar se não está concatenando `/graphql` duas vezes
2. ✅ **NestJS:** Adicionar `path: '/graphql'` explicitamente no GraphQLModule
3. ✅ **Nginx:** Verificar se proxy_pass não está duplicando o path

**Execute os passos acima!** 🚀

