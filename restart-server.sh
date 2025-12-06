#!/bin/bash
# Script para reiniciar o servidor PM2 após mudanças

set -e

echo "🔄 Reiniciando servidor..."

# Verificar se estamos no servidor (VPS) ou localmente
if [ -d "/var/www/khub" ] || [ -d "/home/boxhub/boxhub-api" ]; then
    # Estamos no servidor
    echo "📍 Ambiente: Servidor VPS"
    
    # Ir para o diretório do projeto
    if [ -d "/var/www/khub" ]; then
        cd /var/www/khub
    elif [ -d "/home/boxhub/boxhub-api" ]; then
        cd /home/boxhub/boxhub-api
    fi
    
    # Fazer build
    echo "🔨 Fazendo build..."
    npm run build
    
    # Regenerar Prisma Client
    echo "🔄 Regenerando Prisma Client..."
    npx prisma generate
    
    # Reiniciar PM2
    echo "🔄 Reiniciando PM2..."
    pm2 restart khub || pm2 start ecosystem.config.js --env homolog
    
    # Mostrar status
    echo ""
    echo "✅ Servidor reiniciado!"
    echo ""
    echo "📊 Status do PM2:"
    pm2 status
    
    echo ""
    echo "📋 Últimas 20 linhas de log:"
    pm2 logs khub --lines 20 --nostream
    
else
    # Estamos localmente
    echo "📍 Ambiente: Desenvolvimento Local"
    
    # Fazer build
    echo "🔨 Fazendo build..."
    npm run build
    
    # Verificar se PM2 está instalado
    if command -v pm2 &> /dev/null; then
        echo "🔄 Reiniciando PM2 local..."
        pm2 restart khub 2>/dev/null || echo "⚠️  PM2 não está rodando localmente. Use 'npm run start:dev' para desenvolvimento."
    else
        echo "ℹ️  PM2 não está instalado. Para desenvolvimento, use:"
        echo "   npm run start:dev"
    fi
fi

echo ""
echo "✨ Processo concluído!"

