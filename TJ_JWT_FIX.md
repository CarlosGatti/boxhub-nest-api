# 🔧 Fix: Substituição de `jose` por `jsonwebtoken`

## 🚨 Problema Resolvido

**Erro Original:**
```
ERR_REQUIRE_ESM require() of ES Module `jose` from dist/src/tj/tj.service.js
```

**Causa:**
- `jose` é um módulo ESM-only (ES Modules)
- O build do NestJS gera CommonJS
- CommonJS não pode `require()` módulos ESM diretamente
- PM2 crashava ao tentar iniciar o servidor

## ✅ Solução Implementada

### 1. Dependências Instaladas

```bash
npm install jsonwebtoken
npm install --save-dev @types/jsonwebtoken
```

### 2. Código Atualizado

**Arquivo:** `src/tj/tj.service.ts`

**Mudanças:**
- ❌ Removido: `import { SignJWT, jwtVerify } from 'jose'`
- ✅ Adicionado: `import * as jwt from 'jsonwebtoken'`
- ✅ Alterado: `getSecret()` agora retorna `string` ao invés de `Uint8Array`
- ✅ Alterado: `mintToken()` usa `jwt.sign()` ao invés de `SignJWT`
- ✅ Alterado: `verifyToken()` usa `jwt.verify()` ao invés de `jwtVerify`

### 3. Payload do Token

```typescript
interface TokenPayload {
  name?: string;        // Opcional
  discountId: string;   // Obrigatório
  iat?: number;        // Adicionado automaticamente pelo jsonwebtoken
}
```

### 4. Configuração

- **Algoritmo:** HS256 (mesmo de antes)
- **Expiração:** 365 dias (`expiresIn: '365d'`)
- **Secret:** `TJ_PASS_SECRET` (string, mínimo 32 caracteres)

## 🧪 Testes

### Build

```bash
npm run build
# ✅ Build bem-sucedido sem erros
```

### Verificação de Tipos

```bash
# Sem erros de lint
npm run lint
```

## 📝 Próximos Passos no Servidor

1. **Fazer pull das mudanças:**
   ```bash
   cd /var/www/khub
   git pull origin main
   ```

2. **Instalar dependências:**
   ```bash
   npm install
   ```

3. **Build:**
   ```bash
   npm run build
   ```

4. **Reiniciar PM2:**
   ```bash
   pm2 stop khub
   pm2 delete khub
   pm2 start ecosystem.config.js --env homolog
   pm2 save
   ```

5. **Verificar logs:**
   ```bash
   pm2 logs khub --lines 50
   ```

6. **Testar endpoints:**
   ```bash
   # Testar mint
   curl -X POST http://localhost:3000/api/tj/mint \
     -H "Content-Type: application/json" \
     -d '{"name": "Test", "discountId": "123456789"}'
   
   # Testar verify (use o token retornado acima)
   curl "http://localhost:3000/api/tj/verify?token=<token>"
   ```

## ✅ Checklist de Aceitação

- [x] `jose` removido do código backend
- [x] `jsonwebtoken` instalado e funcionando
- [x] Build compila sem erros
- [x] Tipos TypeScript corretos
- [ ] Servidor reiniciado no PM2
- [ ] `/graphql` retorna 200 (sem 502)
- [ ] `/api/tj/mint` funciona
- [ ] `/api/tj/verify` funciona

## 🔍 Diferenças: jose vs jsonwebtoken

| Aspecto | jose | jsonwebtoken |
|---------|------|--------------|
| Formato | ESM-only | CommonJS/ESM |
| Secret | `Uint8Array` | `string` |
| Sign | `SignJWT().sign()` | `jwt.sign()` |
| Verify | `jwtVerify()` | `jwt.verify()` |
| Compatibilidade | Node.js 18+ ESM | Node.js qualquer versão |

## 📌 Notas Importantes

- **Não remover `jose` do `package.json`** - ainda é usado nos arquivos de referência do Next.js (`NEXTJS_APP_ROUTER_REFERENCE/` e `NEXTJS_PAGES_ROUTER_REFERENCE/`)
- O backend agora usa apenas `jsonwebtoken` (CommonJS compatível)
- Tokens gerados são compatíveis entre ambos (mesmo formato JWT)
- O secret `TJ_PASS_SECRET` deve ser uma string (não precisa converter para Uint8Array)

---

**Status:** ✅ Fix implementado e testado localmente. Pronto para deploy no servidor.
