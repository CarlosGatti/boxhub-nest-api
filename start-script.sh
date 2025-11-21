#!/bin/bash
set -e

APP_DIR="/home/boxhub/boxhub-api"

echo "📦  Entering application directory..."
cd $APP_DIR

# Load Node.js environment
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" || true
[ -s "$HOME/.bashrc" ] && source "$HOME/.bashrc" || true
[ -s "$HOME/.profile" ] && source "$HOME/.profile" || true
export PATH="$PATH:/usr/bin:/usr/local/bin:$HOME/.local/bin"

# Use Node 18 if nvm is available
command -v nvm >/dev/null 2>&1 && nvm use 18 || true

echo "🔍 Verificando ambiente..."
echo "Node version: $(node --version 2>&1 || echo 'N/A')"
echo "Yarn version: $(yarn --version 2>&1 || echo 'N/A')"
echo "Working directory: $(pwd)"
echo ""

echo "🚀  Starting application..."
# Verificar se dist/src/main.js existe
if [ ! -f "dist/src/main.js" ]; then
  echo "❌ ERRO: dist/src/main.js não encontrado!"
  echo "📦 Tentando buildar..."
  yarn install --frozen-lockfile
  echo "🔧 Rebuilding native modules (bcrypt, etc)..."
  yarn rebuild || npm rebuild || echo "⚠️ Rebuild falhou, mas continuando..."
  yarn prisma:generate || yarn prisma generate || echo "⚠️ Prisma generate falhou, mas continuando..."
  yarn build
  if [ ! -f "dist/src/main.js" ]; then
    echo "❌ ERRO CRÍTICO: Build falhou! dist/src/main.js ainda não existe."
    echo "📁 Conteúdo de dist/:"
    ls -la dist/ 2>&1 || echo "dist/ não existe"
    exit 1
  fi
fi

echo "✅ Arquivo dist/src/main.js encontrado"
echo "✅ Iniciando aplicação em dist/src/main.js"
echo ""

# Executar a aplicação
exec node dist/src/main.js
