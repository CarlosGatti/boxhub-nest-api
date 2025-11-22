#!/bin/bash
# Script para criar e corrigir pasta de uploads no servidor

APP_DIR="/home/boxhub/boxhub-api"

echo "🔧 Criando e corrigindo pasta de uploads..."
cd $APP_DIR || exit 1

# Criar todas as pastas necessárias
echo "📁 Criando pastas de upload..."
mkdir -p uploads/discart-items
mkdir -p uploads/project-documents
mkdir -p uploads/project-permits
mkdir -p uploads/avatars
mkdir -p uploads/insurance
mkdir -p uploads/construction-logs

# Definir ownership (PM2 roda como root baseado nos logs)
chown -R root:root uploads

# Definir permissões corretas
chmod -R 755 uploads
find uploads -type f -exec chmod 644 {} \;

echo "✅ Verificando permissões:"
ls -la uploads/ | head -10

echo ""
echo "✅ Testando escrita..."
touch uploads/discart-items/test.txt && rm uploads/discart-items/test.txt && echo "✅ Permissões OK!" || echo "❌ Ainda há problema de permissão"

echo ""
echo "✅ Pasta de uploads criada e configurada!"

