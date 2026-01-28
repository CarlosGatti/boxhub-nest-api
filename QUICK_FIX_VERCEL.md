# ⚡ Quick Fix: 405 no Vercel - /api/tj/mint

## 🎯 Solução em 5 Minutos

### 1. Identifique o Router (30 segundos)

```bash
# No projeto Next.js do Vercel:
ls app/ 2>/dev/null && echo "✅ App Router" || echo "❌ Não é App Router"
ls pages/ 2>/dev/null && echo "✅ Pages Router" || echo "❌ Não é Pages Router"
```

### 2. Crie o Arquivo (1 minuto)

**Se App Router:**
```bash
mkdir -p app/api/tj/mint
# Copie conteúdo de: NEXTJS_APP_ROUTER_REFERENCE/src/app/api/tj/mint/route.ts
```

**Se Pages Router:**
```bash
mkdir -p pages/api/tj
# Copie conteúdo de: NEXTJS_PAGES_ROUTER_REFERENCE/src/pages/api/tj/mint.ts
```

### 3. Instale Dependências (1 minuto)

```bash
npm install jsonwebtoken
npm install --save-dev @types/jsonwebtoken
```

### 4. Remova Conflitos (30 segundos)

```bash
# Se usar App Router:
rm -rf pages/api/tj/

# Se usar Pages Router:
rm -rf app/api/tj/
```

### 5. Configure Vercel (2 minutos)

1. Vercel Dashboard → Settings → Environment Variables
2. Adicione: `TJ_PASS_SECRET` = `sua_string_secreta_minimo_32_chars`
3. Adicione: `NEXT_PUBLIC_BASE_URL` = `https://www.carlosgatti.com`

### 6. Deploy (1 minuto)

```bash
git add .
git commit -m "fix: add /api/tj/mint endpoint"
git push
```

## ✅ Teste

Aguarde 2-3 minutos após o deploy e teste:

```bash
curl -X POST https://www.carlosgatti.com/api/tj/mint \
  -H "Content-Type: application/json" \
  -d '{"name": "Test", "discountId": "123456789"}'
```

**Deve retornar 200 com token e url!**

---

**Problema mais comum:** Arquivo não existe ou está no lugar errado.
**Solução:** Verifique `app/api/tj/mint/route.ts` (App Router) ou `pages/api/tj/mint.ts` (Pages Router)
