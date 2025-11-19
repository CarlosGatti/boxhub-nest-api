#!/bin/bash

# Script de deploy executado na VPS
# Este script é executado via SSH pelo GitHub Actions

set -e  # Parar em caso de erro

# Mudar para o diretório home do usuário
cd ~ || exit 1

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Diretórios
APP_DIR="/home/boxhub/boxhub-api"
DEPLOY_DIR="/home/boxhub/boxhub-api-deploy"
BACKUP_DIR="/home/boxhub/backups"

echo -e "${GREEN}🚀 Iniciando deploy...${NC}"

# 1. Fazer backup do banco de dados antes do deploy
echo -e "${YELLOW}📦 Fazendo backup do banco de dados...${NC}"
if [ -f "$BACKUP_DIR/backup-db.sh" ]; then
  bash $BACKUP_DIR/backup-db.sh
fi

# 2. Parar aplicação atual
echo -e "${YELLOW}⏸️  Parando aplicação atual...${NC}"
cd $APP_DIR || exit 1
pm2 stop khub || true

# 3. Backup dos arquivos atuais (em caso de rollback)
echo -e "${YELLOW}💾 Fazendo backup dos arquivos atuais...${NC}"
BACKUP_TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_PATH="$BACKUP_DIR/app_backup_$BACKUP_TIMESTAMP"
mkdir -p "$BACKUP_PATH"
cp -r "$APP_DIR/dist" "$BACKUP_PATH/" 2>/dev/null || true
cp "$APP_DIR/package.json" "$BACKUP_PATH/" 2>/dev/null || true
cp "$APP_DIR/ecosystem.config.js" "$BACKUP_PATH/" 2>/dev/null || true

# 4. Instalar novas dependências na pasta de deploy
echo -e "${YELLOW}📥 Instalando dependências (incluindo devDependencies para prisma)...${NC}"
cd $DEPLOY_DIR || exit 1
yarn install --frozen-lockfile

# 5. Rodar migrations do Prisma
echo -e "${YELLOW}🗄️  Executando migrations do banco de dados...${NC}"
cd $DEPLOY_DIR || exit 1
npx prisma generate
npx prisma migrate deploy

# 6. Copiar arquivos novos para pasta da aplicação
echo -e "${YELLOW}📋 Copiando arquivos para pasta da aplicação...${NC}"
mkdir -p "$APP_DIR"
cp -r dist/ "$APP_DIR/"
cp package.json "$APP_DIR/"
cp yarn.lock "$APP_DIR/"
cp ecosystem.config.js "$APP_DIR/"
cp -r prisma/ "$APP_DIR/"

# Copiar node_modules (dependências de produção)
cp -r node_modules/ "$APP_DIR/" || true

# Copiar .env se existir (não sobrescrever)
if [ -f "$APP_DIR/.env" ]; then
  echo -e "${YELLOW}⚠️  Mantendo .env existente${NC}"
else
  echo -e "${RED}❌ AVISO: Arquivo .env não encontrado! Configure antes de iniciar.${NC}"
fi

# Copiar pasta uploads (manter arquivos existentes)
if [ -d "$APP_DIR/uploads" ]; then
  echo -e "${YELLOW}📁 Mantendo pasta uploads existente${NC}"
else
  mkdir -p "$APP_DIR/uploads"
  mkdir -p "$APP_DIR/uploads/discart-items"
  mkdir -p "$APP_DIR/uploads/avatars"
  mkdir -p "$APP_DIR/uploads/construction-logs"
  mkdir -p "$APP_DIR/uploads/project-documents"
  mkdir -p "$APP_DIR/uploads/project-permits"
  mkdir -p "$APP_DIR/uploads/insurance"
fi

# Criar pasta de logs se não existir
mkdir -p "$APP_DIR/logs"

# 7. Verificar se .env existe antes de iniciar
if [ ! -f "$APP_DIR/.env" ]; then
  echo -e "${RED}❌ ERRO: Arquivo .env não encontrado em $APP_DIR${NC}"
  echo -e "${RED}Configure o arquivo .env antes de continuar.${NC}"
  exit 1
fi

# 8. Reiniciar aplicação com PM2
echo -e "${YELLOW}🔄 Reiniciando aplicação...${NC}"
cd $APP_DIR || exit 1
pm2 restart ecosystem.config.js || pm2 start ecosystem.config.js

# 9. Salvar configuração do PM2
pm2 save

# 10. Limpar pasta de deploy temporária (opcional)
echo -e "${YELLOW}🧹 Limpando pasta temporária de deploy...${NC}"
rm -rf "$DEPLOY_DIR"

# 11. Verificar status da aplicação
echo -e "${YELLOW}✅ Verificando status da aplicação...${NC}"
sleep 2
pm2 status

# 12. Mostrar logs recentes
echo -e "${GREEN}📝 Últimas linhas dos logs:${NC}"
pm2 logs khub --lines 10 --nostream || true

echo -e "${GREEN}✅ Deploy concluído com sucesso!${NC}"

