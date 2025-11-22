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

# Verificar qual usuário está rodando o PM2
PM2_USER=$(pm2 describe khub 2>/dev/null | grep "username" | awk '{print $4}' || echo "root")
echo "🔍 PM2 está rodando como: $PM2_USER"

# Definir dono das pastas baseado no usuário do PM2
if [ "$PM2_USER" != "root" ]; then
  chown -R $PM2_USER:$PM2_USER uploads
  echo "✅ Ownership definido para $PM2_USER:$PM2_USER"
else
  chown -R root:root uploads
  echo "✅ Ownership definido para root:root"
fi

# Definir permissões corretas (755 para pastas, 644 para arquivos)
chmod -R 755 uploads
find uploads -type f -exec chmod 644 {} \;

# Verificar permissões
echo "✅ Permissões definidas:"
ls -la uploads/ | head -10

echo ""
echo "✅ Permissões corrigidas! A pasta uploads agora tem permissões de escrita."

