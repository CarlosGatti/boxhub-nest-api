# 🔧 Fix: 405 Method Not Allowed no Vercel - /api/tj/mint

## 🚨 Problema

Frontend chama `POST https://www.carlosgatti.com/api/tj/mint` e recebe **405 Method Not Allowed**.

**Causa:** A rota existe mas o método POST não está implementado corretamente ou há conflito entre App Router e Pages Router.

## ✅ Solução

### Passo 1: Identificar Qual Router Está Sendo Usado

Verifique a estrutura do projeto Next.js:

```bash
# Se existe app/ → App Router
ls app/

# Se existe pages/ → Pages Router  
ls pages/
```

**Importante:** Next.js pode usar ambos simultaneamente, mas `app/` tem prioridade sobre `pages/`.

### Passo 2: Implementar no Router Correto

#### Opção A: App Router (Next.js 13+)

**Arquivo:** `app/api/tj/mint/route.ts`

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

// Handle CORS preflight
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

    // Validate discountId
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

    // Build baseUrl safely (works behind proxies/Vercel)
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

#### Opção B: Pages Router (Next.js 12 ou anterior)

**Arquivo:** `pages/api/tj/mint.ts`

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
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(204).end();
  }

  // Only allow POST
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST, OPTIONS");
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const name = String(req.body?.name ?? "").trim();
    const discountId = String(req.body?.discountId ?? "").trim();

    // Validate discountId
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

    // Set CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    return res.status(200).json({ token, url });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message || "Server error" });
  }
}
```

### Passo 3: Remover Conflitos

**IMPORTANTE:** Garanta que existe apenas UMA implementação:

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

### Passo 5: Variáveis de Ambiente no Vercel

No painel do Vercel, adicione:

```
TJ_PASS_SECRET=sua_string_secreta_minimo_32_caracteres
NEXT_PUBLIC_BASE_URL=https://www.carlosgatti.com
```

### Passo 6: Deploy e Teste

```bash
# Commit e push
git add .
git commit -m "fix: implement POST /api/tj/mint with jsonwebtoken"
git push

# Vercel fará deploy automaticamente
# Aguarde alguns minutos e teste:

curl -X POST https://www.carlosgatti.com/api/tj/mint \
  -H "Content-Type: application/json" \
  -d '{"name": "Test", "discountId": "123456789"}'
```

## ✅ Checklist

- [ ] Identificado qual router está em uso (App ou Pages)
- [ ] Implementado `POST` handler no router correto
- [ ] Implementado `OPTIONS` handler para CORS
- [ ] Removido implementações duplicadas
- [ ] Instalado `jsonwebtoken` e `@types/jsonwebtoken`
- [ ] Adicionado `TJ_PASS_SECRET` no Vercel
- [ ] Deploy feito no Vercel
- [ ] Testado POST `/api/tj/mint` retorna 200

## 🔍 Troubleshooting

### Ainda retorna 405

1. **Verifique se o arquivo está no lugar certo:**
   - App Router: `app/api/tj/mint/route.ts`
   - Pages Router: `pages/api/tj/mint.ts`

2. **Verifique se há conflito:**
   ```bash
   # Procurar por arquivos duplicados
   find . -name "mint.ts" -o -name "route.ts" | grep tj
   ```

3. **Verifique logs do Vercel:**
   - Vercel Dashboard → Deployments → View Function Logs

### Erro "Missing env: TJ_PASS_SECRET"

- Adicione a variável no Vercel Dashboard → Settings → Environment Variables

### Erro de compilação

- Verifique que `jsonwebtoken` está instalado
- Verifique que `@types/jsonwebtoken` está instalado como dev dependency

---

**Arquivos atualizados em:**
- `NEXTJS_APP_ROUTER_REFERENCE/src/app/api/tj/mint/route.ts`
- `NEXTJS_PAGES_ROUTER_REFERENCE/src/pages/api/tj/mint.ts`

Copie o arquivo correto para o seu projeto Next.js no Vercel!
