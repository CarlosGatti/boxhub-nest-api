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

# 0. Verificar e instalar dependências necessárias
echo -e "${YELLOW}🔧 Verificando dependências...${NC}"

# Carregar variáveis de ambiente do perfil do usuário
# Isso garante que comandos instalados globalmente estejam no PATH
if [ -f "$HOME/.bashrc" ]; then
  source "$HOME/.bashrc" 2>/dev/null || true
fi
if [ -f "$HOME/.profile" ]; then
  source "$HOME/.profile" 2>/dev/null || true
fi
if [ -f "$HOME/.bash_profile" ]; then
  source "$HOME/.bash_profile" 2>/dev/null || true
fi

# Carregar NVM se disponível
if [ -s "$HOME/.nvm/nvm.sh" ]; then
  source "$HOME/.nvm/nvm.sh"
  nvm use default 2>/dev/null || nvm use node 2>/dev/null || true
fi

# Adicionar caminhos comuns ao PATH
export PATH="$HOME/.nvm/versions/node/$(nvm version 2>/dev/null || echo 'v18.20.0')/bin:$PATH"
export PATH="$HOME/.local/bin:$PATH"
export PATH="/usr/local/bin:$PATH"
export PATH="/usr/bin:$PATH"

# Verificar se Node.js está instalado
if ! command -v node &> /dev/null; then
  echo -e "${RED}❌ Node.js não encontrado. Instalando Node.js...${NC}"
  if [ -s "$HOME/.nvm/nvm.sh" ]; then
    source "$HOME/.nvm/nvm.sh"
    nvm install 18
    nvm use 18
  else
    echo -e "${RED}❌ NVM não encontrado. Configure Node.js manualmente.${NC}"
    exit 1
  fi
fi

# Verificar se npm está instalado
if ! command -v npm &> /dev/null; then
  echo -e "${RED}❌ npm não encontrado.${NC}"
  exit 1
fi

# Verificar e instalar PM2 se necessário
if ! command -v pm2 &> /dev/null; then
  echo -e "${YELLOW}📦 PM2 não encontrado. Instalando PM2 globalmente...${NC}"
  if npm install -g pm2 2>/dev/null; then
    echo -e "${GREEN}✅ PM2 instalado com sucesso${NC}"
  elif command -v sudo &> /dev/null && sudo npm install -g pm2 2>/dev/null; then
    echo -e "${GREEN}✅ PM2 instalado com sucesso (usando sudo)${NC}"
  else
    echo -e "${RED}❌ Falha ao instalar PM2. Verifique as permissões de npm.${NC}"
    echo -e "${YELLOW}Dica: Execute manualmente na VPS: npm install -g pm2${NC}"
    exit 1
  fi
  # Recarregar PATH após instalação
  export PATH="$(npm config get prefix 2>/dev/null)/bin:$PATH"
  # Verificar novamente
  if ! command -v pm2 &> /dev/null; then
    export PATH="$HOME/.nvm/versions/node/$(nvm version 2>/dev/null || echo 'v18.20.0')/bin:$PATH"
  fi
fi

# Verificar e instalar Yarn se necessário
if ! command -v yarn &> /dev/null; then
  echo -e "${YELLOW}📦 Yarn não encontrado. Instalando Yarn globalmente...${NC}"
  if npm install -g yarn 2>/dev/null; then
    echo -e "${GREEN}✅ Yarn instalado com sucesso${NC}"
  elif command -v sudo &> /dev/null && sudo npm install -g yarn 2>/dev/null; then
    echo -e "${GREEN}✅ Yarn instalado com sucesso (usando sudo)${NC}"
  else
    echo -e "${RED}❌ Falha ao instalar Yarn. Verifique as permissões de npm.${NC}"
    echo -e "${YELLOW}Dica: Execute manualmente na VPS: npm install -g yarn${NC}"
    exit 1
  fi
  # Recarregar PATH após instalação
  export PATH="$(npm config get prefix 2>/dev/null)/bin:$PATH"
  # Verificar novamente
  if ! command -v yarn &> /dev/null; then
    export PATH="$HOME/.nvm/versions/node/$(nvm version 2>/dev/null || echo 'v18.20.0')/bin:$PATH"
  fi
fi

# Verificar novamente se os comandos estão disponíveis
if ! command -v pm2 &> /dev/null || ! command -v yarn &> /dev/null; then
  echo -e "${RED}❌ PM2 ou Yarn ainda não estão disponíveis após instalação.${NC}"
  echo -e "${YELLOW}Tentando encontrar no PATH...${NC}"
  which pm2 || echo "PM2 não encontrado no PATH"
  which yarn || echo "Yarn não encontrado no PATH"
  echo -e "${YELLOW}PATH atual: $PATH${NC}"
  # Tentar usar caminho completo
  PM2_CMD=$(which pm2 || echo "pm2")
  YARN_CMD=$(which yarn || echo "yarn")
else
  PM2_CMD="pm2"
  YARN_CMD="yarn"
fi

echo -e "${GREEN}✅ Dependências verificadas:${NC}"
echo -e "   Node.js: $(node --version 2>/dev/null || echo 'não encontrado')"
echo -e "   npm: $(npm --version 2>/dev/null || echo 'não encontrado')"
echo -e "   PM2: $(pm2 --version 2>/dev/null || echo 'não encontrado')"
echo -e "   Yarn: $(yarn --version 2>/dev/null || echo 'não encontrado')"

# 1. Fazer backup do banco de dados antes do deploy
echo -e "${YELLOW}📦 Fazendo backup do banco de dados...${NC}"
if [ -f "$BACKUP_DIR/backup-db.sh" ]; then
  bash $BACKUP_DIR/backup-db.sh
fi

# 2. Parar aplicação atual
echo -e "${YELLOW}⏸️  Parando aplicação atual...${NC}"
cd $APP_DIR || exit 1
$PM2_CMD stop khub || true

# 3. Backup dos arquivos atuais (em caso de rollback)
echo -e "${YELLOW}💾 Fazendo backup dos arquivos atuais...${NC}"
BACKUP_TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_PATH="$BACKUP_DIR/app_backup_$BACKUP_TIMESTAMP"
mkdir -p "$BACKUP_PATH"
cp -r "$APP_DIR/dist" "$BACKUP_PATH/" 2>/dev/null || true
cp "$APP_DIR/package.json" "$BACKUP_PATH/" 2>/dev/null || true
cp "$APP_DIR/ecosystem.config.js" "$BACKUP_PATH/" 2>/dev/null || true

# 4. Copiar .env para pasta de deploy (necessário para Prisma migrations)
echo -e "${YELLOW}📋 Copiando .env para pasta de deploy...${NC}"
if [ -f "$APP_DIR/.env" ]; then
  cp "$APP_DIR/.env" "$DEPLOY_DIR/.env"
  echo -e "${GREEN}✅ .env copiado com sucesso${NC}"
else
  echo -e "${RED}❌ ERRO: Arquivo .env não encontrado em $APP_DIR${NC}"
  echo -e "${RED}Configure o arquivo .env antes de fazer deploy.${NC}"
  exit 1
fi

# 5. Instalar novas dependências na pasta de deploy
echo -e "${YELLOW}📥 Instalando dependências (incluindo devDependencies para prisma)...${NC}"
cd $DEPLOY_DIR || exit 1
$YARN_CMD install --frozen-lockfile

# 6. Rodar migrations do Prisma
echo -e "${YELLOW}🗄️  Executando migrations do banco de dados...${NC}"
cd $DEPLOY_DIR || exit 1
npx prisma generate

# Tentar aplicar migrations
if npx prisma migrate deploy 2>&1 | tee /tmp/migrate_output.log; then
  echo -e "${GREEN}✅ Migrations aplicadas com sucesso${NC}"
else
  MIGRATION_ERROR=$?
  MIGRATE_OUTPUT=$(cat /tmp/migrate_output.log)
  
  # Verificar se o erro é porque tipos/tabelas já existem
  if echo "$MIGRATE_OUTPUT" | grep -q "already exists"; then
    echo -e "${YELLOW}⚠️  Tipos/tabelas já existem no banco. Marcando migration como aplicada...${NC}"
    
    # Verificar qual migration falhou (geralmente é a primeira/baseline)
    FAILED_MIGRATION=$(echo "$MIGRATE_OUTPUT" | grep "Migration name:" | sed 's/.*Migration name: \([0-9_]*\).*/\1/' | head -1)
    
    if [ -z "$FAILED_MIGRATION" ]; then
      # Se não encontrou no output, pegar a primeira migration
      FAILED_MIGRATION=$(ls -t prisma/migrations | grep -v migration_lock.toml | head -1)
    fi
    
    if [ -n "$FAILED_MIGRATION" ]; then
      echo -e "${YELLOW}📝 Marcando migration ${FAILED_MIGRATION} como aplicada...${NC}"
      if npx prisma migrate resolve --applied "${FAILED_MIGRATION}" 2>/dev/null; then
        echo -e "${GREEN}✅ Migration marcada como aplicada${NC}"
        
        # Tentar aplicar migrations novamente
        echo -e "${YELLOW}🔄 Tentando aplicar migrations pendentes...${NC}"
        if npx prisma migrate deploy; then
          echo -e "${GREEN}✅ Migrations aplicadas com sucesso${NC}"
        else
          echo -e "${YELLOW}⚠️  Ainda há migrations pendentes, mas continuando...${NC}"
        fi
      else
        echo -e "${RED}❌ Não foi possível marcar migration como aplicada${NC}"
        echo -e "${YELLOW}💡 Execute manualmente na VPS: npx prisma migrate resolve --applied ${FAILED_MIGRATION}${NC}"
        echo -e "${YELLOW}⚠️  Continuando deploy mesmo assim...${NC}"
      fi
    fi
  else
    echo -e "${RED}❌ Erro ao aplicar migrations (não relacionado a tipos existentes)${NC}"
    echo -e "${RED}Erro: $MIGRATE_OUTPUT${NC}"
    echo -e "${YELLOW}⚠️  Verifique o banco de dados manualmente${NC}"
    exit 1
  fi
fi
rm -f /tmp/migrate_output.log

# 7. Copiar arquivos novos para pasta da aplicação
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
  mkdir -p "$APP_DIR/uploads/bucket-goals/cover"
  mkdir -p "$APP_DIR/uploads/bucket-goals/media"
else
  mkdir -p "$APP_DIR/uploads"
  mkdir -p "$APP_DIR/uploads/discart-items"
  mkdir -p "$APP_DIR/uploads/qrack-items"
  mkdir -p "$APP_DIR/uploads/avatars"
  mkdir -p "$APP_DIR/uploads/bucket-goals/cover"
  mkdir -p "$APP_DIR/uploads/bucket-goals/media"
  mkdir -p "$APP_DIR/uploads/construction-logs"
  mkdir -p "$APP_DIR/uploads/project-documents"
  mkdir -p "$APP_DIR/uploads/project-permits"
  mkdir -p "$APP_DIR/uploads/insurance"
fi

# Criar pasta de logs se não existir
mkdir -p "$APP_DIR/logs"

# 8. Verificar se .env existe antes de iniciar (já copiado acima, mas verificar novamente)
if [ ! -f "$APP_DIR/.env" ]; then
  echo -e "${RED}❌ ERRO: Arquivo .env não encontrado em $APP_DIR${NC}"
  echo -e "${RED}Configure o arquivo .env antes de continuar.${NC}"
  exit 1
fi

# 9. Reiniciar aplicação com PM2
echo -e "${YELLOW}🔄 Reiniciando aplicação...${NC}"
cd $APP_DIR || exit 1
$PM2_CMD restart ecosystem.config.js || $PM2_CMD start ecosystem.config.js

# 10. Salvar configuração do PM2
$PM2_CMD save

# 11. Limpar pasta de deploy temporária
echo -e "${YELLOW}🧹 Limpando pasta temporária de deploy...${NC}"
rm -rf "$DEPLOY_DIR"

# 12. Verificar status da aplicação
echo -e "${YELLOW}✅ Verificando status da aplicação...${NC}"
sleep 2
$PM2_CMD status

# 13. Mostrar logs recentes
echo -e "${GREEN}📝 Últimas linhas dos logs:${NC}"
$PM2_CMD logs khub --lines 10 --nostream || true

echo -e "${GREEN}✅ Deploy concluído com sucesso!${NC}"

