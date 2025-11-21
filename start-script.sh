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

echo "🚀  Starting application..."
# Verificar se dist/main.js existe
if [ ! -f "dist/main.js" ]; then
  echo "❌ ERRO: dist/main.js não encontrado!"
  echo "📦 Tentando buildar..."
  yarn install
  yarn build
  if [ ! -f "dist/main.js" ]; then
    echo "❌ ERRO CRÍTICO: Build falhou! dist/main.js ainda não existe."
    exit 1
  fi
fi

echo "✅ Iniciando aplicação em dist/main.js"
exec node dist/main.js
