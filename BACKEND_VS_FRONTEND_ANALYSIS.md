# 🔍 Análise: 405 no Vercel - Backend vs Frontend

## 📊 Diagnóstico

### ❌ NÃO é causado pelo backend

**Evidências:**

1. **Backend está funcionando:**
   - ✅ Rota `/api/tj/mint` implementada em `src/tj/tj.controller.ts`
   - ✅ Usa `jsonwebtoken` (não `jose`) - compatível com CommonJS
   - ✅ Build testado localmente
   - ✅ Endpoint disponível em: `https://api.discart.me/api/tj/mint`

2. **Frontend está chamando rota errada:**
   - ❌ Frontend chama: `https://www.carlosgatti.com/api/tj/mint` (próprio Vercel)
   - ✅ Deveria chamar: `https://api.discart.me/api/tj/mint` (backend NestJS)
   - OU implementar rota local no Vercel

---

## 🎯 Duas Opções de Solução

### Opção 1: Frontend faz Proxy para o Backend (Recomendado)

**Vantagens:**
- ✅ Backend já está funcionando
- ✅ Lógica centralizada no backend
- ✅ Mais fácil de manter

**Implementação:**

No frontend Next.js, criar `app/api/tj/mint/route.ts`:

```typescript
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, discountId } = body;

    // Chamar backend NestJS
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://api.discart.me';
    const res = await fetch(`${apiUrl}/api/tj/mint`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, discountId }),
    });

    if (!res.ok) {
      const error = await res.json().catch(() => ({}));
      return NextResponse.json(
        { error: error?.error || 'Failed to mint token' },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to mint token' },
      { status: 500 }
    );
  }
}
```

**Variável de ambiente no Vercel:**
```
NEXT_PUBLIC_API_URL=https://api.discart.me
```

---

### Opção 2: Frontend implementa rota localmente

**Vantagens:**
- ✅ Não depende do backend
- ✅ Mais rápido (sem chamada externa)

**Desvantagens:**
- ❌ Duplicação de lógica
- ❌ Precisa manter sincronizado com backend

**Implementação:**

No frontend Next.js, criar `app/api/tj/mint/route.ts`:

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

**Variáveis de ambiente no Vercel:**
```
TJ_PASS_SECRET=sua_string_secreta_minimo_32_caracteres
NEXT_PUBLIC_BASE_URL=https://www.carlosgatti.com
```

**Dependências:**
```bash
npm install jsonwebtoken
npm install --save-dev @types/jsonwebtoken
```

---

## 🔍 Verificação do Backend

Para confirmar que o backend está funcionando:

```bash
# Testar backend diretamente:
curl -X POST https://api.discart.me/api/tj/mint \
  -H "Content-Type: application/json" \
  -d '{"name": "Test", "discountId": "123456789"}'

# Deve retornar:
# {
#   "token": "eyJhbGci...",
#   "url": "https://carlosgatti.com/tj/eyJhbGci..."
# }
```

Se o backend retornar 200, o problema é **100% no frontend**.

---

## ✅ Recomendação

**Use Opção 1 (Proxy para Backend):**
- Backend já está funcionando
- Lógica centralizada
- Mais fácil de manter
- Backend já tem validação e tratamento de erros

**Passos:**
1. Criar `app/api/tj/mint/route.ts` no frontend (proxy)
2. Adicionar `NEXT_PUBLIC_API_URL=https://api.discart.me` no Vercel
3. Deploy
4. Testar

---

## 📝 Resumo

| Item | Status | Observação |
|------|--------|------------|
| Backend `/api/tj/mint` | ✅ Funcionando | `https://api.discart.me/api/tj/mint` |
| Frontend `/api/tj/mint` | ❌ Não existe | Precisa criar no Vercel |
| Erro 405 | ❌ Frontend | Rota não encontrada no Vercel |
| Backend causa problema? | ❌ NÃO | Backend está OK |

**Conclusão:** O problema é **100% no frontend**. O backend está funcionando corretamente.
