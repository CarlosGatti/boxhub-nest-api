#!/bin/bash
# Script de diagnóstico para o servidor

echo "🔍 DIAGNÓSTICO DO SERVIDOR"
echo "=========================="
echo ""

cd /home/boxhub/boxhub-api || exit 1

# Load Node.js environment
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" || true
[ -s "$HOME/.bashrc" ] && source "$HOME/.bashrc" || true
[ -s "$HOME/.profile" ] && source "$HOME/.profile" || true
export PATH="$PATH:/usr/bin:/usr/local/bin:$HOME/.local/bin"
command -v nvm >/dev/null 2>&1 && nvm use 18 || true

echo "1️⃣ Verificando Node.js:"
node --version || echo "❌ Node.js não encontrado"
echo ""

echo "2️⃣ Verificando PM2:"
pm2 --version || echo "❌ PM2 não encontrado"
echo ""

echo "3️⃣ Status do PM2:"
pm2 list
echo ""

echo "4️⃣ Verificando se dist/src/main.js existe:"
ls -lah dist/src/main.js 2>&1 || echo "❌ dist/src/main.js NÃO EXISTE"
echo ""

echo "5️⃣ Verificando se dist/ existe:"
ls -lah dist/ 2>&1 | head -10
echo ""

echo "6️⃣ Verificando package.json:"
cat package.json | grep -A 2 '"start:prod"'
echo ""

echo "7️⃣ Verificando start-script.sh:"
cat start-script.sh | tail -5
echo ""

echo "8️⃣ Últimas 20 linhas dos logs do PM2 (se existir):"
pm2 logs khub --lines 20 --nostream 2>&1 || echo "⚠️ Nenhum log encontrado"
echo ""

echo "9️⃣ Tentando iniciar manualmente (teste):"
if [ -f "dist/src/main.js" ]; then
  echo "✅ Arquivo existe, tentando executar..."
  timeout 3 node dist/src/main.js 2>&1 || echo "⚠️ Erro ao executar (timeout ou erro)"
else
  echo "❌ Arquivo não existe, tentando build..."
  yarn install --frozen-lockfile
  yarn build
  if [ -f "dist/src/main.js" ]; then
    echo "✅ Build bem-sucedido!"
  else
    echo "❌ Build falhou!"
  fi
fi
echo ""

echo "🔟 Verificando porta 3000:"
netstat -tuln | grep 3000 || echo "⚠️ Nada escutando na porta 3000"
echo ""

echo "✅ Diagnóstico completo!"

