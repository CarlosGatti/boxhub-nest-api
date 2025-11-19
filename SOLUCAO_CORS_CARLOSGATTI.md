# 🔧 Solução: CORS Error - www.carlosgatti.com

> **Guia rápido** para resolver erro de CORS do frontend em `https://www.carlosgatti.com`.

---

## ❌ Erro que você está vendo:

```
CORS Error: Cannot connect to https://www.discart.me/graphql from https://www.carlosgatti.com.
Please configure CORS on the backend to allow requests from https://www.carlosgatti.com.
The backend needs to set: Access-Control-Allow-Origin: https://www.carlosgatti.com
```

**Problema:** O frontend em `https://www.carlosgatti.com` está tentando acessar a API em `https://www.discart.me/graphql`, mas o backend não está permitindo essa origem.

---

## ✅ SOLUÇÃO: Atualizar CORS no Backend

### Correção Aplicada

**Arquivo:** `src/main.ts`

**Melhorias feitas:**

1. ✅ **Adicionado todas as variações de `carlosgatti.com`:**
   - `https://www.carlosgatti.com`
   - `https://carlosgatti.com`
   - `http://www.carlosgatti.com`
   - `http://carlosgatti.com`

2. ✅ **Adicionado `filter(Boolean)`** para remover valores undefined/null do env

3. ✅ **Melhorado headers permitidos:**
   - `X-Requested-With` (usado por alguns frameworks)
   - `exposedHeaders: ["Authorization"]` (para permitir acesso ao header Authorization)

4. ✅ **Adicionado `optionsSuccessStatus: 200`** para navegadores legados

5. ✅ **Adicionado logs de debug** para identificar origens bloqueadas

---

## ✅ Verificar se Funcionou

### Passo 1: Fazer Deploy

```bash
# No seu computador local
git add src/main.ts
git commit -m "fix: atualizar CORS para permitir www.carlosgatti.com"
git push

# GitHub Actions vai fazer deploy automaticamente
```

### Passo 2: Verificar Logs na VPS

```bash
# Na VPS
pm2 logs khub

# Ou verificar logs do Nginx
sudo tail -f /var/log/nginx/boxhub-api-error.log
```

**Se ainda der erro de CORS, os logs vão mostrar:**
```
CORS blocked origin: https://www.carlosgatti.com
Allowed origins: ...
```

**Isso ajuda a identificar o problema!**

---

## ✅ Testar no Frontend

**Depois do deploy:**

1. **Frontend:** `https://www.carlosgatti.com`
2. **API URL:** `https://www.discart.me/graphql`
3. **Deve funcionar sem erro de CORS!** ✅

---

## 🔍 Verificar Requisição no Network Tab

**No navegador (DevTools > Network):**

1. **Verificar requisição OPTIONS (preflight):**
   - **URL:** `https://www.discart.me/graphql`
   - **Status:** `200 OK` ou `204 No Content` (não `500` ou `403`)
   - **Headers Response:**
     - `Access-Control-Allow-Origin: https://www.carlosgatti.com`
     - `Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS`
     - `Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With`
     - `Access-Control-Allow-Credentials: true`

2. **Verificar requisição POST (GraphQL):**
   - **URL:** `https://www.discart.me/graphql`
   - **Status:** `200 OK`
   - **Headers Response:**
     - `Access-Control-Allow-Origin: https://www.carlosgatti.com`

---

## 📝 Se Ainda Não Funcionar

### Opção 1: Verificar URL Exata no Frontend

**Verificar se o frontend está usando a URL correta:**

```typescript
// No frontend
console.log('API URL:', process.env.NEXT_PUBLIC_API_URL)
// Ou onde você configura a URL do GraphQL

// Deve ser: https://www.discart.me/graphql
// NÃO deve ser: https://www.discart.me/graphql/graphql
```

### Opção 2: Verificar Variável de Ambiente no Backend

**Na VPS, verificar `.env`:**

```bash
cd /home/boxhub/boxhub-api
cat .env | grep FRONTEND_URL_PROD
```

**Deve mostrar:**
```env
FRONTEND_URL_PROD="https://www.carlosgatti.com"
```

**Se não estiver, editar:**
```bash
nano .env
```

**Adicionar/atualizar:**
```env
FRONTEND_URL_PROD="https://www.carlosgatti.com"
```

**Salvar:** `Ctrl+O`, `Enter`, `Ctrl+X`

**Reiniciar aplicação:**
```bash
pm2 restart khub
```

### Opção 3: Testar CORS Diretamente

```bash
# No seu computador local (não na VPS)
curl -X OPTIONS https://www.discart.me/graphql \
  -H "Origin: https://www.carlosgatti.com" \
  -H "Access-Control-Request-Method: POST" \
  -H "Access-Control-Request-Headers: Content-Type" \
  -v

# Deve mostrar:
# < Access-Control-Allow-Origin: https://www.carlosgatti.com
# < Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS
# < Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With
# < Access-Control-Allow-Credentials: true
```

---

## ✅ Resumo das Correções

1. ✅ **Adicionado `https://www.carlosgatti.com` na lista de origens permitidas**
2. ✅ **Adicionado todas as variações (com e sem www, http e https)**
3. ✅ **Melhorado headers permitidos**
4. ✅ **Adicionado logs de debug**
5. ✅ **Filtrado valores undefined/null do env**

---

## 🚀 Próximos Passos

1. **Commit e push:**
   ```bash
   git add src/main.ts
   git commit -m "fix: atualizar CORS para permitir www.carlosgatti.com"
   git push
   ```

2. **Aguardar deploy automático (GitHub Actions)**

3. **Testar no frontend:**
   - Acesse: `https://www.carlosgatti.com`
   - Teste uma requisição GraphQL
   - Deve funcionar sem erro de CORS! ✅

---

**Execute os passos acima!** 🚀

