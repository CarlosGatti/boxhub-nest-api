#!/bin/bash
# Script completo para reiniciar o servidor Discart-me API
# Garante que variáveis de ambiente sejam recarregadas

set -e

echo "🔄 =========================================="
echo "🔄 Reiniciando servidor Discart-me API"
echo "🔄 =========================================="
echo ""

# Detectar diretório do projeto
if [ -d "/var/www/khub" ]; then
    PROJECT_DIR="/var/www/khub"
elif [ -d "/home/boxhub/boxhub-api" ]; then
    PROJECT_DIR="/home/boxhub/boxhub-api"
else
    echo "❌ ERRO: Diretório do projeto não encontrado!"
    echo "   Procurando em: /var/www/khub ou /home/boxhub/boxhub-api"
    exit 1
fi

cd "$PROJECT_DIR"
echo "📍 Diretório: $PROJECT_DIR"
echo ""

# Verificar .env
echo "📋 Verificando arquivo .env..."
if [ ! -f .env ]; then
    echo "❌ ERRO: Arquivo .env não encontrado em $PROJECT_DIR"
    exit 1
fi
echo "✅ Arquivo .env encontrado"
echo ""

# Verificar variáveis importantes
echo "🔍 Verificando variáveis de ambiente importantes..."
if grep -q "FRONTEND_URL" .env; then
    echo "✅ FRONTEND_URL encontrado"
else
    echo "⚠️  FRONTEND_URL não encontrado no .env"
fi

if grep -q "DATABASE_URL" .env; then
    echo "✅ DATABASE_URL encontrado"
else
    echo "⚠️  DATABASE_URL não encontrado no .env"
fi

if grep -q "DISCART" .env; then
    echo "✅ Variáveis DISCART encontradas"
else
    echo "⚠️  Variáveis DISCART não encontradas no .env"
fi
echo ""

# Fazer pull (opcional, comentado por padrão)
# echo "📥 Fazendo pull do repositório..."
# git pull origin main || echo "⚠️  Pull falhou ou não há mudanças"
# echo ""

# Instalar dependências (se necessário)
echo "📦 Verificando dependências..."
if [ -f "package.json" ]; then
    npm install --production=false || echo "⚠️  npm install falhou"
else
    echo "❌ package.json não encontrado!"
    exit 1
fi
echo ""

# Regenerar Prisma Client
echo "🔄 Regenerando Prisma Client..."
if [ -f "prisma/schema.prisma" ]; then
    npx prisma generate || {
        echo "⚠️  Erro ao gerar Prisma Client"
        exit 1
    }
    echo "✅ Prisma Client regenerado"
else
    echo "⚠️  prisma/schema.prisma não encontrado, pulando..."
fi
echo ""

# Build
echo "🔨 Fazendo build do projeto..."
npm run build || {
    echo "❌ Erro no build!"
    exit 1
}

if [ ! -f "dist/src/main.js" ]; then
    echo "❌ ERRO: Build falhou - dist/src/main.js não encontrado"
    exit 1
fi
echo "✅ Build concluído"
echo ""

# Parar e deletar processo PM2 antigo
echo "🛑 Parando processo PM2..."
pm2 stop khub 2>/dev/null || echo "⚠️  Processo não estava rodando"
pm2 delete khub 2>/dev/null || echo "⚠️  Processo não existia"
echo "✅ Processo antigo removido"
echo ""

# Iniciar PM2 com ecosystem.config.js (carrega .env)
echo "🚀 Iniciando PM2 com ecosystem.config.js..."
if [ -f "ecosystem.config.js" ]; then
    # Tentar com env_homolog primeiro, depois sem
    pm2 start ecosystem.config.js --env homolog 2>/dev/null || \
    pm2 start ecosystem.config.js || {
        echo "❌ Erro ao iniciar PM2!"
        exit 1
    }
else
    echo "⚠️  ecosystem.config.js não encontrado, iniciando diretamente..."
    pm2 start dist/src/main.js --name khub || {
        echo "❌ Erro ao iniciar PM2!"
        exit 1
    }
fi
echo "✅ PM2 iniciado"
echo ""

# Salvar configuração PM2
echo "💾 Salvando configuração PM2..."
pm2 save || echo "⚠️  Erro ao salvar PM2"
echo ""

# Aguardar alguns segundos para o servidor inicializar
echo "⏳ Aguardando inicialização do servidor (5 segundos)..."
sleep 5
echo ""

# Verificar status
echo "📊 Status do PM2:"
pm2 status
echo ""

# Verificar logs
echo "📋 Últimas 30 linhas de log:"
pm2 logs khub --lines 30 --nostream || echo "⚠️  Não foi possível ler logs"
echo ""

# Testar saúde da API
echo "🏥 Testando saúde da API..."
if curl -f -s http://localhost:3000/health > /dev/null 2>&1; then
    echo "✅ API respondendo em http://localhost:3000/health"
else
    echo "⚠️  API não está respondendo em http://localhost:3000/health"
    echo "   Verifique os logs acima para mais detalhes"
fi
echo ""

# Verificar variáveis de ambiente do processo
echo "🔍 Variáveis de ambiente do processo PM2:"
pm2 env khub 2>/dev/null | head -20 || echo "⚠️  Não foi possível verificar variáveis"
echo ""

echo "✅ =========================================="
echo "✅ Reinicialização concluída!"
echo "✅ =========================================="
echo ""
echo "📝 Próximos passos:"
echo "   1. Verifique os logs: pm2 logs khub"
echo "   2. Teste a API: curl http://localhost:3000/health"
echo "   3. Se houver problemas, verifique: pm2 describe khub"
echo ""
