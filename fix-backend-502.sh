#!/bin/bash
# Script para diagnosticar e corrigir erro 502 Bad Gateway

set -e

echo "🔍 Diagnosticando problema 502 Bad Gateway..."
echo ""

# Detectar ambiente
if [ -d "/var/www/khub" ]; then
    PROJECT_DIR="/var/www/khub"
elif [ -d "/home/boxhub/boxhub-api" ]; then
    PROJECT_DIR="/home/boxhub/boxhub-api"
else
    PROJECT_DIR=$(pwd)
fi

cd "$PROJECT_DIR"

echo "📍 Diretório do projeto: $PROJECT_DIR"
echo ""

# 1. Verificar status do PM2
echo "1️⃣ Verificando status do PM2..."
pm2 status || echo "⚠️  PM2 não está instalado ou não há processos rodando"
echo ""

# 2. Verificar se o processo khub existe
echo "2️⃣ Verificando processo 'khub'..."
if pm2 list | grep -q "khub"; then
    echo "✅ Processo 'khub' encontrado"
    echo ""
    echo "📊 Status detalhado:"
    pm2 describe khub || true
    echo ""
    echo "📋 Últimos logs (últimas 30 linhas):"
    pm2 logs khub --lines 30 --nostream || true
else
    echo "❌ Processo 'khub' NÃO encontrado no PM2"
fi
echo ""

# 3. Verificar se o build existe
echo "3️⃣ Verificando build..."
if [ -f "dist/src/main.js" ]; then
    echo "✅ Build encontrado: dist/src/main.js"
    ls -lh dist/src/main.js
else
    echo "❌ Build NÃO encontrado! Precisamos fazer build primeiro."
fi
echo ""

# 4. Verificar porta
echo "4️⃣ Verificando porta 3000..."
PORT_CHECK=$(netstat -tuln 2>/dev/null | grep :3000 || lsof -i :3000 2>/dev/null || echo "")
if [ -n "$PORT_CHECK" ]; then
    echo "✅ Porta 3000 está em uso:"
    echo "$PORT_CHECK"
else
    echo "⚠️  Porta 3000 não está em uso (backend não está rodando)"
fi
echo ""

# 5. Tentar corrigir
echo "5️⃣ Tentando corrigir..."
echo ""

# Parar processo se existir
if pm2 list | grep -q "khub"; then
    echo "🛑 Parando processo existente..."
    pm2 stop khub 2>/dev/null || true
    pm2 delete khub 2>/dev/null || true
fi

# Fazer build
echo "🔨 Fazendo build..."
npm run build

if [ ! -f "dist/src/main.js" ]; then
    echo "❌ ERRO: Build falhou! Arquivo dist/src/main.js não foi criado."
    echo "   Verifique os erros acima e corrija antes de continuar."
    exit 1
fi

# Regenerar Prisma Client
echo "🔄 Regenerando Prisma Client..."
npx prisma generate || {
    echo "⚠️  Aviso: Erro ao gerar Prisma Client, mas continuando..."
}

# Iniciar PM2
echo "🚀 Iniciando PM2..."
pm2 start ecosystem.config.js --env homolog || pm2 start ecosystem.config.js

# Aguardar alguns segundos
sleep 3

# Verificar status
echo ""
echo "6️⃣ Verificando se iniciou corretamente..."
pm2 status

echo ""
echo "📋 Logs após restart (últimas 20 linhas):"
pm2 logs khub --lines 20 --nostream

echo ""
echo "✅ Processo concluído!"
echo ""
echo "🔍 Para monitorar em tempo real:"
echo "   pm2 logs khub"
echo ""
echo "🔍 Para verificar status:"
echo "   pm2 status"

