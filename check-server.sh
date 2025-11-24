#!/bin/bash
# Script para verificar status do servidor

echo "🔍 Verificando status do servidor..."
echo ""

echo "1️⃣ Status do PM2:"
pm2 list
echo ""

echo "2️⃣ Últimas 30 linhas dos logs de erro:"
pm2 logs khub --lines 30 --err --nostream || echo "⚠️ Não foi possível ler logs"
echo ""

echo "3️⃣ Últimas 30 linhas dos logs de saída:"
pm2 logs khub --lines 30 --out --nostream || echo "⚠️ Não foi possível ler logs"
echo ""

echo "4️⃣ Verificando se dist/src/main.js existe:"
if [ -f "dist/src/main.js" ]; then
  echo "✅ dist/src/main.js existe"
  ls -lh dist/src/main.js
else
  echo "❌ dist/src/main.js NÃO existe"
  echo "📁 Conteúdo de dist/:"
  ls -la dist/ 2>&1 || echo "dist/ não existe"
fi
echo ""

echo "5️⃣ Testando conexão na porta 3000:"
curl -f http://127.0.0.1:3000/graphql -X POST -H "Content-Type: application/json" -d '{"query":"{ __typename }"}' 2>&1 || echo "❌ Backend não está respondendo na porta 3000"
echo ""

echo "6️⃣ Verificando processos Node.js:"
ps aux | grep node | grep -v grep || echo "⚠️ Nenhum processo Node.js encontrado"
echo ""

echo "✅ Diagnóstico completo"

