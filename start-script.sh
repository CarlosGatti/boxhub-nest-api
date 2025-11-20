#!/bin/bash
set -e

APP_DIR="/home/boxhub/boxhub-api"

echo "📦  Entering application directory..."
cd $APP_DIR

echo "🛠  Installing dependencies..."
npm install --omit=dev

echo "🏗  Building project..."
npm run build

echo "🚀  Starting application..."
exec node dist/main.js
