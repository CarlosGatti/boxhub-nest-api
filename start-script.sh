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

echo "🛠  Installing dependencies..."
npm install --omit=dev

echo "🏗  Building project..."
npm run build

echo "🚀  Starting application..."
exec node dist/main.js
