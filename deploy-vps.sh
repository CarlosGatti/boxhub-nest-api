#!/bin/bash
# Script para deploy na VPS - Resolve conflito de git e faz deploy

set -e  # Parar se houver erro

echo "🚀 Iniciando deploy na VPS..."

# Ir para o diretório do projeto
cd /var/www/khub

# Verificar se há arquivos não rastreados que podem causar conflito
if [ -f "prisma/migrations/20240101000000_baseline/migration.sql" ]; then
  echo "⚠️  Arquivo de migração local encontrado, fazendo backup..."
  mkdir -p /tmp/khub-backup
  cp prisma/migrations/20240101000000_baseline/migration.sql \
     /tmp/khub-backup/migration.sql.backup 2>/dev/null || true
  
  echo "🗑️  Removendo arquivo local (já existe no repositório)..."
  rm -f prisma/migrations/20240101000000_baseline/migration.sql
fi

# Fazer pull das mudanças
echo "📥 Fazendo pull do repositório..."
git pull origin main

# Instalar dependências (se necessário)
if [ -f "package.json" ] && [ -f "yarn.lock" ]; then
  echo "📦 Verificando dependências..."
  yarn install --production=false || npm install
fi

# Aplicar migrations do Prisma (CRÍTICO: antes do build!)
if [ -f "prisma/schema.prisma" ]; then
  echo "🗄️  Aplicando migrations do Prisma..."
  npx prisma migrate deploy || {
    echo "⚠️  Aviso: Migration pode ter falhado ou já estar aplicada"
    echo "   Verificando status das migrations..."
    npx prisma migrate status || true
  }
  
  echo "🔄 Regenerando tipos do Prisma..."
  npx prisma generate || {
    echo "❌ Erro ao gerar tipos Prisma"
    exit 1
  }

  # Seed dos apps (idempotente - pode rodar múltiplas vezes)
  if [ -f "prisma/seed.apps.ts" ]; then
    echo "🌱 Rodando seed dos apps..."
    npx ts-node prisma/seed.apps.ts || {
      echo "⚠️  Aviso: Seed dos apps pode ter falhado ou já estar aplicado"
    }
  fi

  # Backfill de acesso dos usuários (idempotente - pode rodar múltiplas vezes)
  if [ -f "scripts/backfill-user-app-access.ts" ]; then
    echo "👥 Rodando backfill de acesso dos usuários..."
    npx ts-node scripts/backfill-user-app-access.ts || {
      echo "⚠️  Aviso: Backfill pode ter falhado ou já estar aplicado"
    }
  fi
fi

# Build do projeto
echo "🔨 Fazendo build do projeto..."
npm run build

# Verificar se o build foi bem-sucedido
if [ ! -f "dist/src/main.js" ]; then
  echo "❌ Erro: Build falhou - arquivo dist/src/main.js não encontrado"
  exit 1
fi

# Reiniciar PM2
echo "🔄 Reiniciando PM2..."
pm2 restart khub || pm2 start ecosystem.config.js --env homolog

# Mostrar status
echo "✅ Deploy concluído!"
echo ""
echo "📊 Status do PM2:"
pm2 status

echo ""
echo "📋 Últimas 20 linhas de log:"
pm2 logs khub --lines 20 --nostream

echo ""
echo "✨ Deploy finalizado com sucesso!"

