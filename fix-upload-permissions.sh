#!/bin/bash
# Script para corrigir permissões da pasta de uploads no servidor

APP_DIR="/home/boxhub/boxhub-api"

echo "🔧 Corrigindo permissões da pasta de uploads..."
cd $APP_DIR

# Criar pasta uploads se não existir
mkdir -p uploads/discart-items
mkdir -p uploads/project-documents
mkdir -p uploads/project-permits
mkdir -p uploads/avatars
mkdir -p uploads/insurance
mkdir -p uploads/construction-logs

# Definir permissões corretas (755 para pastas, 644 para arquivos)
chmod -R 755 uploads
find uploads -type f -exec chmod 644 {} \;

# Verificar permissões
echo "✅ Permissões definidas:"
ls -la uploads/ | head -10

echo ""
echo "✅ Permissões corrigidas! A pasta uploads agora tem permissões de escrita."

