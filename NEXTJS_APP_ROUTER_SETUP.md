# Next.js App Router - TJ Barcode API Routes Setup

## 📋 Quick Setup Guide

Este guia mostra como implementar os endpoints `/api/tj/mint` e `/api/tj/verify` no projeto Next.js usando **App Router**.

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
src/app/api/tj/mint/
src/app/api/tj/verify/
```

Ou se usar estrutura sem `src/`:

```
app/api/tj/mint/
app/api/tj/verify/
```

### 4. Criar Arquivo: `src/app/api/tj/mint/route.ts`

Copie o conteúdo de `NEXTJS_APP_ROUTER_REFERENCE/src/app/api/tj/mint/route.ts`

**Ou cole diretamente:**

```typescript
import { NextResponse } from "next/server";
import { SignJWT } from "jose";
import { headers } from "next/headers";

function requireEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

function isValidDiscountId(id: string) {
  return /^[0-9]{6,20}$/.test(id);
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const name = String(body?.name ?? "").trim();
    const discountId = String(body?.discountId ?? "").trim();

    if (!isValidDiscountId(discountId)) {
      return NextResponse.json({ error: "Invalid discountId format." }, { status: 400 });
    }

    const secret = new TextEncoder().encode(requireEnv("TJ_PASS_SECRET"));

    const token = await new SignJWT({ name: name || undefined, discountId })
      .setProtectedHeader({ alg: "HS256", typ: "JWT" })
      .setIssuedAt()
      .setExpirationTime("365d")
      .sign(secret);

    // Build baseUrl safely (works behind proxies)
    const h = headers();
    const host = h.get("host") || "localhost:3001";
    const proto = h.get("x-forwarded-proto") || "http";

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || `${proto}://${host}`;
    const url = `${baseUrl}/tj/${encodeURIComponent(token)}`;

    return NextResponse.json({ token, url }, { status: 200 });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Server error" }, { status: 500 });
  }
}
```

### 5. Criar Arquivo: `src/app/api/tj/verify/route.ts`

Copie o conteúdo de `NEXTJS_APP_ROUTER_REFERENCE/src/app/api/tj/verify/route.ts`

**Ou cole diretamente:**

```typescript
import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

function requireEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token");
    if (!token) return NextResponse.json({ error: "Missing token" }, { status: 400 });

    const secret = new TextEncoder().encode(requireEnv("TJ_PASS_SECRET"));
    const { payload } = await jwtVerify(token, secret, { algorithms: ["HS256"] });

    const name = typeof payload?.name === "string" ? payload.name : "";
    const discountId = typeof payload?.discountId === "string" ? payload.discountId : "";
    if (!discountId) return NextResponse.json({ error: "Invalid payload" }, { status: 400 });

    return NextResponse.json({ name, discountId }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Invalid or expired token" }, { status: 401 });
  }
}
```

### 6. Remover Rotas Conflitantes (se existirem)

Se houver rotas Pages Router (`src/pages/api/tj/...`), você pode removê-las para evitar confusão:

```bash
# Opcional: remover se existirem
rm -rf src/pages/api/tj/
# ou
rm -rf pages/api/tj/
```

**Nota:** App Router e Pages Router podem coexistir, mas é melhor manter apenas um padrão.

### 7. Reiniciar Servidor

```bash
# Pare o servidor (Ctrl+C) e reinicie
npm run dev
```

### 8. Verificação Rápida

1. **Teste POST `/api/tj/mint` (deve retornar 200 JSON, não HTML 404):**
   ```bash
   curl -X POST http://localhost:3001/api/tj/mint \
     -H "Content-Type: application/json" \
     -d '{"name": "Test User", "discountId": "123456789"}'
   ```

2. **Teste GET `/api/tj/verify` (use o token retornado acima):**
   ```bash
   curl "http://localhost:3001/api/tj/verify?token=<SEU_TOKEN_AQUI>"
   ```

## ✅ Checklist

- [ ] Instalar `jose` via npm
- [ ] Adicionar `TJ_PASS_SECRET` ao `.env.local`
- [ ] Criar pasta `src/app/api/tj/mint/` (ou `app/api/tj/mint/`)
- [ ] Criar `route.ts` em `mint/` com código acima
- [ ] Criar pasta `src/app/api/tj/verify/` (ou `app/api/tj/verify/`)
- [ ] Criar `route.ts` em `verify/` com código acima
- [ ] (Opcional) Remover rotas Pages Router conflitantes
- [ ] Reiniciar servidor Next.js
- [ ] Testar endpoints conforme acima
- [ ] Verificar que não há mais 404 HTML

## 🔍 Troubleshooting

### Erro 404 HTML ainda aparece
- Verifique que os arquivos estão em `src/app/api/tj/mint/route.ts` (não `src/pages/api/`)
- Verifique que o arquivo se chama exatamente `route.ts` (não `mint.ts`)
- Reinicie o servidor Next.js completamente
- Verifique que não há erros de compilação no terminal

### Erro "Missing env: TJ_PASS_SECRET"
- Verifique que `.env.local` existe na raiz do projeto Next.js
- Reinicie o servidor após adicionar a variável
- Certifique-se de que o secret tem pelo menos 32 caracteres

### Erro de compilação TypeScript
- Verifique que `@types/node` está instalado
- Verifique que o projeto tem `tsconfig.json` configurado corretamente
- Verifique que está usando Next.js 13+ (App Router requer Next.js 13+)

### Erro "headers() can only be called in Server Components"
- O código usa `headers()` do Next.js 13+ App Router
- Certifique-se de que está usando Next.js 13 ou superior
- Se estiver usando versão anterior, use `req.headers` diretamente

## 📝 Diferenças: App Router vs Pages Router

| Aspecto | App Router | Pages Router |
|---------|------------|--------------|
| Localização | `app/api/tj/mint/route.ts` | `pages/api/tj/mint.ts` |
| Export | `export async function POST()` | `export default async function handler()` |
| Request | `Request` (Web API) | `NextApiRequest` |
| Response | `NextResponse` | `NextApiResponse` |
| Headers | `headers()` helper | `req.headers` |

## 📝 Notas

- Os endpoints são **stateless** (sem banco de dados)
- Tokens expiram em 365 dias
- `discountId` deve ter 6-20 dígitos
- O `name` é opcional
- App Router requer Next.js 13+

---

**Arquivos de referência criados em:** `NEXTJS_APP_ROUTER_REFERENCE/`

Copie esses arquivos para o seu projeto Next.js App Router!
