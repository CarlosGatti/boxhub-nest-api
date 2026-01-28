# 🚀 Deploy Fix: PM2 Crash ERR_REQUIRE_ESM - Backend NestJS

## ✅ Status Atual

**Já corrigido no código:**
- ✅ `src/tj/tj.service.ts` usa `jsonwebtoken` (não `jose`)
- ✅ Dependências instaladas: `jsonwebtoken` e `@types/jsonwebtoken`
- ✅ Build testado localmente

**Próximo passo:** Deploy no servidor

---

## 📋 Passo a Passo para Deploy no Servidor

### 1. Conectar ao Servidor

```bash
ssh root@104.251.216.111
# ou
ssh boxhub@104.251.216.111
```

### 2. Ir para o Diretório do Projeto

```bash
cd /var/www/khub
# ou
cd /home/boxhub/boxhub-api
```

### 3. Verificar Status Atual

```bash
# Ver logs do PM2 para confirmar o erro:
pm2 logs khub --lines 50 --err

# Ver status:
pm2 status
```

### 4. Fazer Pull das Mudanças

```bash
# Verificar se há mudanças:
git status

# Fazer pull:
git pull origin main
```

### 5. Instalar Dependências

```bash
# Instalar/atualizar dependências (inclui jsonwebtoken):
npm ci
# ou se não tiver package-lock.json:
npm install
```

### 6. Verificar Variável de Ambiente

```bash
# Verificar se TJ_PASS_SECRET existe:
grep TJ_PASS_SECRET .env

# Se não existir, adicionar:
echo 'TJ_PASS_SECRET="sua_string_secreta_minimo_32_caracteres"' >> .env
```

### 7. Build do Projeto

```bash
# Limpar build anterior (opcional mas recomendado):
rm -rf dist

# Build:
npm run build

# Verificar se build foi bem-sucedido:
ls -la dist/src/tj/tj.service.js
```

### 8. Regenerar Prisma Client (se necessário)

```bash
npx prisma generate
```

### 9. Reiniciar PM2

```bash
# Parar processo:
pm2 stop khub

# Deletar processo (importante para recarregar .env):
pm2 delete khub

# Iniciar novamente:
pm2 start ecosystem.config.js --env homolog
# ou se não tiver env_homolog:
pm2 start ecosystem.config.js

# Salvar configuração:
pm2 save
```

### 10. Verificar Logs

```bash
# Ver logs em tempo real:
pm2 logs khub --lines 100

# Ver apenas erros:
pm2 logs khub --err --lines 50

# Ver status:
pm2 status
```

### 11. Testar Endpoints

```bash
# Testar health:
curl http://localhost:3000/health

# Testar TJ mint:
curl -X POST http://localhost:3000/api/tj/mint \
  -H "Content-Type: application/json" \
  -d '{"name": "Test", "discountId": "123456789"}'

# Deve retornar 200 com token e url
```

---

## 🔍 Verificação de Sucesso

### ✅ Checklist

- [ ] `git pull` executado com sucesso
- [ ] `npm ci` ou `npm install` executado
- [ ] `TJ_PASS_SECRET` existe no `.env`
- [ ] `npm run build` executado sem erros
- [ ] `dist/src/tj/tj.service.js` existe
- [ ] PM2 reiniciado (delete + start)
- [ ] Logs não mostram `ERR_REQUIRE_ESM`
- [ ] `/api/tj/mint` retorna 200
- [ ] `/graphql` retorna 200 (sem 502)

### ✅ Logs Esperados

**Antes (erro):**
```
Error [ERR_REQUIRE_ESM]: require() of ES Module jose/dist/webapi/index.js
```

**Depois (sucesso):**
```
[Nest] Application successfully started
```

---

## 🚨 Troubleshooting

### Erro: "Cannot find module 'jsonwebtoken'"

**Solução:**
```bash
npm install jsonwebtoken
npm install --save-dev @types/jsonwebtoken
npm run build
pm2 restart khub
```

### Erro: "TJ_PASS_SECRET must be at least 32 characters"

**Solução:**
```bash
# Editar .env:
nano .env

# Adicionar ou atualizar:
TJ_PASS_SECRET="sua_string_secreta_minimo_32_caracteres"

# Reiniciar PM2:
pm2 delete khub
pm2 start ecosystem.config.js --env homolog
```

### Erro: Ainda mostra ERR_REQUIRE_ESM

**Solução:**
```bash
# Verificar se o código foi atualizado:
grep -r "jose" src/tj/

# Se ainda houver imports de jose, o código não foi atualizado
# Fazer pull novamente:
git pull origin main
npm run build
pm2 restart khub
```

### Erro: Build falha

**Solução:**
```bash
# Limpar tudo:
rm -rf dist node_modules/.cache

# Reinstalar:
npm ci

# Build novamente:
npm run build
```

---

## 📝 Script Automatizado (Opcional)

Crie um arquivo `deploy-tj-fix.sh` no servidor:

```bash
#!/bin/bash
set -e

echo "🚀 Deploying TJ Fix (jsonwebtoken)..."
cd /var/www/khub || cd /home/boxhub/boxhub-api

echo "📥 Pulling changes..."
git pull origin main

echo "📦 Installing dependencies..."
npm ci

echo "🔨 Building..."
npm run build

echo "🔄 Restarting PM2..."
pm2 stop khub || true
pm2 delete khub || true
pm2 start ecosystem.config.js --env homolog || pm2 start ecosystem.config.js
pm2 save

echo "✅ Deploy complete!"
echo ""
echo "📊 PM2 Status:"
pm2 status

echo ""
echo "📋 Logs (last 20 lines):"
pm2 logs khub --lines 20 --nostream
```

**Tornar executável e rodar:**
```bash
chmod +x deploy-tj-fix.sh
./deploy-tj-fix.sh
```

---

## 🎯 Resumo Rápido

```bash
# No servidor:
cd /var/www/khub
git pull origin main
npm ci
npm run build
pm2 delete khub
pm2 start ecosystem.config.js --env homolog
pm2 save
pm2 logs khub --lines 50
```

---

**Status:** ✅ Código corrigido localmente. Pronto para deploy no servidor!
