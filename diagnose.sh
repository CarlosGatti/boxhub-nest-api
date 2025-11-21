#!/bin/bash
echo "🔍 DIAGNÓSTICO DO BACKEND"
echo "========================="
echo ""
echo "1️⃣ Verificando PM2:"
pm2 list
echo ""
echo "2️⃣ Verificando logs do PM2:"
pm2 logs khub --lines 20 --nostream
echo ""
echo "3️⃣ Verificando se dist/src/main.js existe:"
ls -lah dist/src/main.js 2>&1 || echo "❌ dist/src/main.js NÃO EXISTE"
echo ""
echo "4️⃣ Verificando se porta 3000 está em uso:"
netstat -tlnp | grep 3000 || echo "❌ Porta 3000 NÃO está em uso"
echo ""
echo "5️⃣ Tentando iniciar manualmente:"
cd /home/boxhub/boxhub-api
node dist/src/main.js &
sleep 2
curl -v http://127.0.0.1:3000/graphql 2>&1 | head -10
pkill -f "node dist/src/main.js"

