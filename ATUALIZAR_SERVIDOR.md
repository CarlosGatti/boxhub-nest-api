# 🚨 Servidor Precisa Ser Atualizado

## ⚠️ Problema

O servidor ainda está com código antigo. Os logs mostram:

```
Error: Undefined type error. Make sure you are providing an explicit type for the "donateItemToDiscartMe" (parameter at index [4])
```

Isso significa que o código no servidor **não tem** o tipo explícito para `contactPhone` que foi corrigido localmente.

## ✅ Solução: Atualizar o Servidor

### 1. Fazer Commit e Push das Mudanças Locais

```bash
# No seu computador local
git add .
git commit -m "fix: add explicit types for apps field and contactPhone parameter"
git push origin main
```

### 2. No Servidor: Fazer Pull e Rebuild

```bash
# Conectar ao servidor
ssh root@104.251.216.111

# Ir para o diretório
cd /home/boxhub/boxhub-api

# Fazer pull das mudanças
git pull origin main

# Fazer build
npm run build

# Regenerar Prisma Client
npx prisma generate

# Reiniciar PM2
pm2 restart khub

# Verificar logs (não deve ter mais o erro)
v
```

### 3. Verificar que Funcionou

Após reiniciar, os logs devem mostrar:
- ✅ `Nest application successfully started`
- ✅ **SEM** erro sobre "Undefined type error"
- ✅ **SEM** erro sobre "donateItemToDiscartMe"

## 🔍 Mudanças que Precisam Estar no Servidor

1. ✅ `src/qrcode/qrcode.resolver.ts` - `contactPhone` com tipo explícito
2. ✅ `src/user/user.resolver.ts` - `@ResolveField` para `apps` como `[String]`
3. ✅ `src/user/dto/me.dto.ts` - `apps` como `[String]`
4. ✅ `src/user/dto/user.dto.ts` - `LoginUser` com `apps` como `[String]`
5. ✅ `src/auth/auth.service.ts` - Transformação de user para `LoginUser`

## ⚡ Comando Rápido (No Servidor)

```bash
cd /home/boxhub/boxhub-api && git pull origin main && npm run build && npx prisma generate && pm2 restart khub && sleep 3 && pm2 logs khub --lines 20 --nostream
```

---

**Importante:** O código local está correto, mas o servidor precisa ser atualizado com essas mudanças via `git pull`.

