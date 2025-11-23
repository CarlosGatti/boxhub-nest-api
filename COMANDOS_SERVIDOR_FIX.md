# 🚀 Comandos para Executar no Servidor (FIX pendingResidents)

Execute estes comandos **no servidor** para corrigir o problema:

---

## 📋 Passo a Passo Completo

### 1. Conectar ao servidor
```bash
ssh seu-usuario@seu-servidor-ip
```

### 2. Ir para o diretório e atualizar
```bash
cd /home/boxhub/boxhub-api

# Carregar ambiente Node.js
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" || true
[ -s "$HOME/.bashrc" ] && source "$HOME/.bashrc" || true
export PATH="$PATH:/usr/bin:/usr/local/bin:$HOME/.local/bin"
command -v nvm >/dev/null 2>&1 && nvm use 18 || true

# Atualizar código
echo "🔄 Atualizando código..."
git fetch origin main
git reset --hard origin/main
git clean -fd
```

### 3. Verificar se o código está atualizado
```bash
# Verificar se pendingResidents existe no código
grep -n "pendingResidents" src/user/user.resolver.ts

# Deve mostrar: 99:@Query(() => [User], { name: "pendingResidents" })

# Verificar se AdminGuard existe
ls -la src/auth/guards/admin.guard.ts
```

### 4. Instalar dependências e fazer build
```bash
echo "📦 Instalando dependências..."
yarn install --frozen-lockfile

echo "🔧 Rebuilding native modules..."
yarn rebuild || npm rebuild || true

echo "🏗️ Fazendo build..."
yarn build

# Verificar se build foi bem-sucedido
if [ ! -f "dist/src/user/user.resolver.js" ]; then
  echo "❌ ERRO: Build falhou!"
  exit 1
fi

echo "✅ Build OK"
```

### 5. Reiniciar PM2
```bash
echo "🔄 Reiniciando PM2..."
pm2 stop khub || pm2 delete khub || true
sleep 2
pm2 start ecosystem.config.js --update-env
sleep 5

# Verificar status
pm2 list
pm2 logs khub --lines 20 --nostream
```

### 6. Testar a query
```bash
# Aguardar alguns segundos para aplicação iniciar
sleep 3

# Testar se GraphQL está respondendo
curl -f http://127.0.0.1:3000/graphql -X POST \
  -H "Content-Type: application/json" \
  -d '{"query":"{ __typename }"}' || echo "⚠️ Teste básico falhou"
```

---

## 🎯 Comando Único (Copiar e Colar Tudo)

```bash
cd /home/boxhub/boxhub-api && \
export NVM_DIR="$HOME/.nvm" && \
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && \
nvm use 18 && \
git fetch origin main && \
git reset --hard origin/main && \
git clean -fd && \
yarn install --frozen-lockfile && \
yarn rebuild || npm rebuild || true && \
yarn build && \
pm2 stop khub || pm2 delete khub || true && \
sleep 2 && \
pm2 start ecosystem.config.js --update-env && \
sleep 5 && \
pm2 logs khub --lines 20 --nostream
```

---

## ✅ Verificar se Funcionou

Após executar os comandos acima, teste no GraphQL Playground ou via curl:

```bash
# Substitua SEU_TOKEN_JWT pelo token de um usuário admin
curl -X POST http://127.0.0.1:3000/graphql \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer SEU_TOKEN_JWT" \
  -d '{"query":"query { pendingResidents { id email firstName lastName } }"}'
```

Se retornar dados (mesmo que vazio `[]`), funcionou! ✅

---

## 🔍 Diagnóstico

Se ainda não funcionar, execute:

```bash
cd /home/boxhub/boxhub-api

# 1. Verificar se código está atualizado
git log --oneline -1
grep "pendingResidents" src/user/user.resolver.ts

# 2. Verificar se build gerou os arquivos
ls -la dist/src/user/user.resolver.js
ls -la dist/src/auth/guards/admin.guard.js

# 3. Verificar logs do PM2
pm2 logs khub --lines 50

# 4. Verificar se há erros no startup
pm2 logs khub --err --lines 50
```

---

**Execute no servidor e me avise o resultado!**

