# ✅ Solução Final: Proxy para Backend NestJS

## 🎯 Problema Resolvido

**Situação:**
- ✅ Backend NestJS funciona: `https://api.discart.me/api/tj/mint`
- ❌ Frontend chamava: `https://www.carlosgatti.com/api/tj/mint` (não existia)
- ✅ **Solução:** Criar rotas proxy no frontend que chamam o backend

## 📝 Arquivos Criados no Frontend

### 1. `app/api/tj/mint/route.ts` - Proxy para Backend

```typescript
import { NextResponse } from "next/server";

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
    
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://api.discart.me";
    const backendUrl = `${apiUrl}/api/tj/mint`;

    console.log("[TJ Mint Proxy] Calling backend:", backendUrl);

    const res = await fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      console.error("[TJ Mint Proxy] Backend error:", data);
      return NextResponse.json(
        { error: data?.error || "Failed to mint token" },
        {
          status: res.status,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
          },
        }
      );
    }

    console.log("[TJ Mint Proxy] Success");

    return NextResponse.json(data, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch (error: any) {
    console.error("[TJ Mint Proxy] Error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to mint token" },
      { status: 500 }
    );
  }
}
```

### 2. `app/api/tj/verify/route.ts` - Proxy para Backend

```typescript
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token");

    if (!token) {
      return NextResponse.json({ error: "Missing token" }, { status: 400 });
    }

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://api.discart.me";
    const backendUrl = `${apiUrl}/api/tj/verify?token=${encodeURIComponent(token)}`;

    console.log("[TJ Verify Proxy] Calling backend");

    const res = await fetch(backendUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      console.error("[TJ Verify Proxy] Backend error:", data);
      return NextResponse.json(
        { error: data?.error || "Failed to verify token" },
        { status: res.status }
      );
    }

    console.log("[TJ Verify Proxy] Success");

    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    console.error("[TJ Verify Proxy] Error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to verify token" },
      { status: 500 }
    );
  }
}
```

## 🔧 Configuração Necessária no Vercel

### Variável de Ambiente

**Vercel Dashboard → Settings → Environment Variables:**

```
NEXT_PUBLIC_API_URL=https://api.discart.me
```

**Importante:**
- Configure para **Production**, **Preview** e **Development**
- Após adicionar, faça um novo deploy (ou aguarde deploy automático)

## 🧪 Testes

### 1. Testar Backend Diretamente

```bash
curl -X POST https://api.discart.me/api/tj/mint \
  -H "Content-Type: application/json" \
  -d '{"name": "Test", "discountId": "123456789"}'
```

**Esperado:** `200 OK` com `{"token":"...","url":"..."}`

### 2. Testar Proxy no Frontend (após deploy)

```bash
curl -X POST https://www.carlosgatti.com/api/tj/mint \
  -H "Content-Type: application/json" \
  -d '{"name": "Test", "discountId": "123456789"}'
```

**Esperado:** `200 OK` com `{"token":"...","url":"..."}`

### 3. Testar Verify

```bash
curl "https://www.carlosgatti.com/api/tj/verify?token=SEU_TOKEN_AQUI"
```

**Esperado:** `200 OK` com `{"name":"...","discountId":"..."}`

## 📋 Checklist de Deploy

- [ ] Criar `app/api/tj/mint/route.ts` no frontend
- [ ] Criar `app/api/tj/verify/route.ts` no frontend
- [ ] `NEXT_PUBLIC_API_URL=https://api.discart.me` configurado no Vercel
- [ ] Variável configurada para Production, Preview e Development
- [ ] Commit e push das mudanças
- [ ] Deploy no Vercel completado
- [ ] Testado `/api/tj/mint` em produção
- [ ] Testado `/api/tj/verify` em produção

## 🔍 Logs de Debug

As rotas proxy incluem logging para facilitar debug:

- `[TJ Mint Proxy] Calling backend:` - Mostra URL do backend sendo chamado
- `[TJ Mint Proxy] Backend error:` - Erros do backend
- `[TJ Mint Proxy] Success:` - Sucesso
- `[TJ Verify Proxy]` - Mesmos logs para verify

**Ver logs no Vercel:**
- Deployments → Último deploy → Functions → `/api/tj/mint` → Runtime Logs

## ✅ Vantagens desta Solução

1. ✅ **Backend já funciona** - Não precisa duplicar lógica
2. ✅ **Lógica centralizada** - Toda lógica no backend NestJS
3. ✅ **Fácil de manter** - Mudanças só no backend
4. ✅ **CORS resolvido** - Proxy no mesmo domínio
5. ✅ **Logging** - Fácil debug com logs
6. ✅ **Sem dependências extras** - Não precisa instalar `jsonwebtoken` no frontend

## 🚨 Troubleshooting

### Se ainda der 405:
1. Verifique se `NEXT_PUBLIC_API_URL` está configurado no Vercel
2. Verifique se fez deploy após adicionar variável
3. Verifique Runtime Logs no Vercel para ver erros
4. Verifique se os arquivos estão em `app/api/tj/mint/route.ts` (não `pages/`)

### Se der erro de conexão:
1. Verifique se `https://api.discart.me/api/tj/mint` está acessível
2. Verifique se backend está rodando
3. Verifique logs do backend
4. Teste backend diretamente com curl

### Se der timeout:
1. Backend pode estar lento
2. Verifique performance do backend
3. Considere adicionar timeout na requisição fetch:
   ```typescript
   const controller = new AbortController();
   const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout
   
   const res = await fetch(backendUrl, {
     ...options,
     signal: controller.signal,
   });
   clearTimeout(timeoutId);
   ```

## 📝 Próximos Passos

1. **Commit e Push:**
   ```bash
   git add app/api/tj/mint/route.ts app/api/tj/verify/route.ts
   git commit -m "feat: add TJ API proxy routes to backend NestJS"
   git push
   ```

2. **Configurar Vercel:**
   - Adicionar `NEXT_PUBLIC_API_URL=https://api.discart.me`
   - Aguardar deploy automático (ou fazer deploy manual)

3. **Testar:**
   - Testar `/api/tj/mint` em produção
   - Testar `/api/tj/verify` em produção
   - Verificar logs se houver problemas

4. **Monitorar:**
   - Verificar logs do Vercel periodicamente
   - Verificar logs do backend NestJS
   - Monitorar performance

## 🎯 Arquitetura Final

```
Frontend (Vercel)
  └─ app/api/tj/mint/route.ts (Proxy)
      └─→ https://api.discart.me/api/tj/mint (Backend NestJS)
      
Frontend (Vercel)
  └─ app/api/tj/verify/route.ts (Proxy)
      └─→ https://api.discart.me/api/tj/verify (Backend NestJS)
```

**Fluxo:**
1. Cliente → `POST /api/tj/mint` no Vercel
2. Vercel → Proxy route (`app/api/tj/mint/route.ts`)
3. Proxy → `POST https://api.discart.me/api/tj/mint`
4. Backend NestJS → Processa e retorna token
5. Proxy → Retorna resposta para cliente

---

**Status:** ✅ Solução implementada e documentada. Pronto para deploy!
