# Next.js Pages Router - TJ Barcode API Routes Setup

## 📋 Quick Setup Guide

Este guia mostra como implementar os endpoints `/api/tj/mint` e `/api/tj/verify` no projeto Next.js usando **Pages Router**.

## 🚀 Passos de Implementação

### 1. Instalar Dependência

No diretório do projeto Next.js:

```bash
npm i jose
```

### 2. Adicionar Variável de Ambiente

Adicione ao arquivo `.env.local` do projeto Next.js:

```bash
TJ_PASS_SECRET="REPLACE_WITH_A_LONG_RANDOM_STRING_AT_LEAST_32_CHARS"

# Opcional: URL base para os links gerados
NEXT_PUBLIC_BASE_URL="http://localhost:3001"
# ou em produção:
# NEXT_PUBLIC_BASE_URL="https://carlosgatti.com"
```

**Gerar secret seguro:**
```bash
# Usando openssl
openssl rand -base64 32

# Ou usando node
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### 3. Criar Estrutura de Pastas

No projeto Next.js, crie a estrutura:

```
src/pages/api/tj/
```

Ou se usar estrutura sem `src/`:

```
pages/api/tj/
```

### 4. Criar Arquivo: `src/pages/api/tj/mint.ts`

Copie o conteúdo de `NEXTJS_PAGES_ROUTER_REFERENCE/src/pages/api/tj/mint.ts`

**Ou cole diretamente:**

```typescript
import type { NextApiRequest, NextApiResponse } from "next";
import { SignJWT } from "jose";

function requireEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

function isValidDiscountId(id: string) {
  return /^[0-9]{6,20}$/.test(id);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const name = String(req.body?.name ?? "").trim();
    const discountId = String(req.body?.discountId ?? "").trim();

    if (!isValidDiscountId(discountId)) {
      return res.status(400).json({ error: "Invalid discountId format." });
    }

    const secret = new TextEncoder().encode(requireEnv("TJ_PASS_SECRET"));

    const token = await new SignJWT({ name: name || undefined, discountId })
      .setProtectedHeader({ alg: "HS256", typ: "JWT" })
      .setIssuedAt()
      .setExpirationTime("365d")
      .sign(secret);

    const proto = (req.headers["x-forwarded-proto"] as string) || "http";
    const host = req.headers.host;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || `${proto}://${host}`;

    const url = `${baseUrl}/tj/${encodeURIComponent(token)}`;

    return res.status(200).json({ token, url });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message || "Server error" });
  }
}
```

### 5. Criar Arquivo: `src/pages/api/tj/verify.ts`

Copie o conteúdo de `NEXTJS_PAGES_ROUTER_REFERENCE/src/pages/api/tj/verify.ts`

**Ou cole diretamente:**

```typescript
import type { NextApiRequest, NextApiResponse } from "next";
import { jwtVerify } from "jose";

function requireEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== "GET") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const token = String(req.query.token ?? "");
    if (!token) {
      return res.status(400).json({ error: "Missing token" });
    }

    const secret = new TextEncoder().encode(requireEnv("TJ_PASS_SECRET"));
    const { payload } = await jwtVerify(token, secret, { algorithms: ["HS256"] });

    const name = typeof payload?.name === "string" ? payload.name : "";
    const discountId = typeof payload?.discountId === "string" ? payload.discountId : "";

    if (!discountId) {
      return res.status(400).json({ error: "Invalid payload" });
    }

    return res.status(200).json({ name, discountId });
  } catch {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
}
```

### 6. Remover Rotas Conflitantes (se existirem)

Se houver rotas App Router (`src/app/api/tj/...`) mas o projeto usa Pages Router:
- Deixe-as, mas não as referencie no frontend
- Prefira `pages/api` como canônico

### 7. Verificação Rápida

1. **Reinicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

2. **Teste GET `/api/tj/mint` (deve retornar 405):**
   ```bash
   curl http://localhost:3001/api/tj/mint
   ```

3. **Teste POST `/api/tj/mint` (deve retornar 200 com token e url):**
   ```bash
   curl -X POST http://localhost:3001/api/tj/mint \
     -H "Content-Type: application/json" \
     -d '{"name": "Test User", "discountId": "123456789"}'
   ```

4. **Teste GET `/api/tj/verify` (use o token retornado acima):**
   ```bash
   curl "http://localhost:3001/api/tj/verify?token=<SEU_TOKEN_AQUI>"
   ```

## ✅ Checklist

- [ ] Instalar `jose` via npm
- [ ] Adicionar `TJ_PASS_SECRET` ao `.env.local`
- [ ] Criar pasta `src/pages/api/tj/` (ou `pages/api/tj/`)
- [ ] Criar `mint.ts` com código acima
- [ ] Criar `verify.ts` com código acima
- [ ] Reiniciar servidor Next.js
- [ ] Testar endpoints conforme acima
- [ ] Verificar que não há mais 404

## 🔍 Troubleshooting

### Erro 404 ainda aparece
- Verifique que os arquivos estão em `src/pages/api/tj/` (ou `pages/api/tj/`)
- Reinicie o servidor Next.js completamente
- Verifique que não há erros de compilação no terminal

### Erro "Missing env: TJ_PASS_SECRET"
- Verifique que `.env.local` existe na raiz do projeto Next.js
- Reinicie o servidor após adicionar a variável
- Certifique-se de que o secret tem pelo menos 32 caracteres

### Erro de compilação TypeScript
- Verifique que `@types/node` está instalado
- Verifique que o projeto tem `tsconfig.json` configurado corretamente

## 📝 Notas

- Os endpoints são **stateless** (sem banco de dados)
- Tokens expiram em 365 dias
- `discountId` deve ter 6-20 dígitos
- O `name` é opcional

---

**Arquivos de referência criados em:** `NEXTJS_PAGES_ROUTER_REFERENCE/`

Copie esses arquivos para o seu projeto Next.js Pages Router!
