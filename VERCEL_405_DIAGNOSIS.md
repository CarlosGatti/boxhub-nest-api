# 🔍 Diagnóstico: 405 Method Not Allowed no Vercel

## 🚨 Problema Atual

- **URL:** `https://www.carlosgatti.com/api/tj/mint`
- **Método:** `POST`
- **Status:** `405 Method Not Allowed`
- **Response Headers:** `X-Matched-Path: /404` (indica que Vercel não encontrou a rota)

## 🔍 Diagnóstico Passo a Passo

### 1. Verificar Estrutura do Projeto Next.js

No projeto Next.js (não neste backend), verifique:

```bash
# Verificar se existe app/ ou pages/
ls -la

# Se existe app/ → App Router
ls app/api/

# Se existe pages/ → Pages Router
ls pages/api/
```

### 2. Verificar se o Arquivo Existe

**Para App Router:**
```bash
# O arquivo DEVE estar em:
app/api/tj/mint/route.ts

# Verificar:
ls -la app/api/tj/mint/route.ts
```

**Para Pages Router:**
```bash
# O arquivo DEVE estar em:
pages/api/tj/mint.ts

# Verificar:
ls -la pages/api/tj/mint.ts
```

### 3. Verificar Conflitos

**IMPORTANTE:** Next.js pode ter conflito se ambos existirem:

```bash
# Verificar se AMBOS existem (isso causa conflito):
ls app/api/tj/mint/route.ts 2>/dev/null && echo "App Router existe"
ls pages/api/tj/mint.ts 2>/dev/null && echo "Pages Router existe"

# Se ambos existem, REMOVA um deles!
```

### 4. Verificar Conteúdo do Arquivo

O arquivo deve ter exatamente este conteúdo (dependendo do router):

#### App Router: `app/api/tj/mint/route.ts`

```typescript
import { NextResponse } from "next/server";
import * as jwt from "jsonwebtoken";
import { headers } from "next/headers";

function requireEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

function isValidDiscountId(id: string) {
  return /^[0-9]{6,20}$/.test(id);
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const name = String(body?.name ?? "").trim();
    const discountId = String(body?.discountId ?? "").trim();

    if (!discountId || discountId.length === 0) {
      return NextResponse.json(
        { error: "discountId is required" },
        { status: 400 }
      );
    }

    if (!isValidDiscountId(discountId)) {
      return NextResponse.json(
        { error: "Invalid discountId format. Must be 6-20 digits." },
        { status: 400 }
      );
    }

    const secret = requireEnv("TJ_PASS_SECRET");

    const payload: { name?: string; discountId: string } = {
      discountId,
    };

    if (name) {
      payload.name = name;
    }

    const token = jwt.sign(payload, secret, {
      algorithm: "HS256",
      expiresIn: "365d",
    });

    const h = headers();
    const host = h.get("host") || "localhost:3001";
    const proto = h.get("x-forwarded-proto") || "https";

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || `${proto}://${host}`;
    const url = `${baseUrl}/tj/${encodeURIComponent(token)}`;

    return NextResponse.json(
      { token, url },
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      }
    );
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message || "Server error" },
      { status: 500 }
    );
  }
}
```

#### Pages Router: `pages/api/tj/mint.ts`

```typescript
import type { NextApiRequest, NextApiResponse } from "next";
import * as jwt from "jsonwebtoken";

function requireEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

function isValidDiscountId(id: string) {
  return /^[0-9]{6,20}$/.test(id);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST, OPTIONS");
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const name = String(req.body?.name ?? "").trim();
    const discountId = String(req.body?.discountId ?? "").trim();

    if (!discountId || discountId.length === 0) {
      return res.status(400).json({ error: "discountId is required" });
    }

    if (!isValidDiscountId(discountId)) {
      return res
        .status(400)
        .json({ error: "Invalid discountId format. Must be 6-20 digits." });
    }

    const secret = requireEnv("TJ_PASS_SECRET");

    const payload: { name?: string; discountId: string } = {
      discountId,
    };

    if (name) {
      payload.name = name;
    }

    const token = jwt.sign(payload, secret, {
      algorithm: "HS256",
      expiresIn: "365d",
    });

    const proto = (req.headers["x-forwarded-proto"] as string) || "https";
    const host = req.headers.host;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || `${proto}://${host}`;

    const url = `${baseUrl}/tj/${encodeURIComponent(token)}`;

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    return res.status(200).json({ token, url });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message || "Server error" });
  }
}
```

### 5. Verificar Dependências

```bash
# Verificar se jsonwebtoken está instalado:
grep "jsonwebtoken" package.json

# Se não estiver, instalar:
npm install jsonwebtoken
npm install --save-dev @types/jsonwebtoken
```

### 6. Verificar Variáveis de Ambiente no Vercel

No Vercel Dashboard:
1. Vá em **Settings** → **Environment Variables**
2. Verifique se `TJ_PASS_SECRET` existe
3. Verifique se `NEXT_PUBLIC_BASE_URL` existe (opcional)

### 7. Verificar Logs do Vercel

No Vercel Dashboard:
1. Vá em **Deployments**
2. Clique no último deployment
3. Vá em **Function Logs**
4. Procure por erros relacionados a `/api/tj/mint`

## ✅ Solução Rápida

### Passo 1: Criar/Estruturar Pastas

**Para App Router:**
```bash
mkdir -p app/api/tj/mint
touch app/api/tj/mint/route.ts
```

**Para Pages Router:**
```bash
mkdir -p pages/api/tj
touch pages/api/tj/mint.ts
```

### Passo 2: Copiar Código Correto

Copie o código acima (dependendo do router) para o arquivo criado.

### Passo 3: Remover Conflitos

```bash
# Se usar App Router, remova Pages Router:
rm -rf pages/api/tj/

# Se usar Pages Router, remova App Router:
rm -rf app/api/tj/
```

### Passo 4: Instalar Dependências

```bash
npm install jsonwebtoken
npm install --save-dev @types/jsonwebtoken
```

### Passo 5: Testar Localmente

```bash
# Iniciar servidor local
npm run dev

# Testar em outro terminal:
curl -X POST http://localhost:3000/api/tj/mint \
  -H "Content-Type: application/json" \
  -d '{"name": "Test", "discountId": "123456789"}'
```

### Passo 6: Deploy no Vercel

```bash
git add .
git commit -m "fix: add /api/tj/mint route"
git push
```

## 🔍 Verificação Final

Após o deploy, teste:

```bash
curl -X POST https://www.carlosgatti.com/api/tj/mint \
  -H "Content-Type: application/json" \
  -d '{"name": "Test", "discountId": "123456789"}'
```

**Deve retornar:**
```json
{
  "token": "eyJhbGci...",
  "url": "https://www.carlosgatti.com/tj/eyJhbGci..."
}
```

## ❌ Erros Comuns

### Erro: "Cannot find module 'jsonwebtoken'"
**Solução:** `npm install jsonwebtoken`

### Erro: "Module not found: Can't resolve 'next/headers'"
**Solução:** Você está usando Pages Router mas copiou código do App Router

### Erro: "X-Matched-Path: /404"
**Solução:** O arquivo não existe ou está no lugar errado

### Erro: Ainda retorna 405
**Solução:** 
1. Verifique se há conflito entre `app/` e `pages/`
2. Remova um deles
3. Faça rebuild: `rm -rf .next && npm run build`

---

**Arquivos de referência atualizados:**
- `NEXTJS_APP_ROUTER_REFERENCE/src/app/api/tj/mint/route.ts`
- `NEXTJS_PAGES_ROUTER_REFERENCE/src/pages/api/tj/mint.ts`

Copie o arquivo correto para o seu projeto Next.js!
