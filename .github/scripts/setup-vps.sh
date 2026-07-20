#!/bin/bash

# Script de setup inicial da VPS
# Execute este script UMA VEZ na VPS para configurar o ambiente

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${GREEN}🚀 Setup inicial da VPS para BoxHub API${NC}"

# Verificar se está rodando como root ou usuário com sudo
if [ "$EUID" -ne 0 ] && ! sudo -n true 2>/dev/null; then
  echo -e "${RED}❌ Este script precisa ser executado como root ou com sudo${NC}"
  exit 1
fi

# Função para executar comandos com sudo se necessário
run_cmd() {
  if [ "$EUID" -eq 0 ]; then
    eval "$@"
  else
    sudo eval "$@"
  fi
}

# 1. Atualizar sistema
echo -e "${YELLOW}📦 Atualizando sistema...${NC}"
run_cmd "apt update && apt upgrade -y"

# 2. Instalar dependências básicas
echo -e "${YELLOW}📦 Instalando dependências básicas...${NC}"
run_cmd "apt install -y curl wget git build-essential software-properties-common"

# 3. Criar usuário boxhub (se não existir)
if id "boxhub" &>/dev/null; then
  echo -e "${YELLOW}👤 Usuário boxhub já existe${NC}"
else
  echo -e "${YELLOW}👤 Criando usuário boxhub...${NC}"
  run_cmd "adduser --disabled-password --gecos '' boxhub"
  run_cmd "usermod -aG sudo boxhub"
fi

# 4. Configurar SSH para usuário boxhub
echo -e "${YELLOW}🔐 Configurando SSH...${NC}"
run_cmd "mkdir -p /home/boxhub/.ssh"
run_cmd "chmod 700 /home/boxhub/.ssh"
# Copiar chave SSH do root para boxhub (se existir)
if [ -f "/root/.ssh/authorized_keys" ]; then
  run_cmd "cp /root/.ssh/authorized_keys /home/boxhub/.ssh/authorized_keys 2>/dev/null || true"
  run_cmd "chmod 600 /home/boxhub/.ssh/authorized_keys"
fi
run_cmd "chown -R boxhub:boxhub /home/boxhub/.ssh"

# 5. Instalar PostgreSQL
if command -v psql &> /dev/null; then
  echo -e "${YELLOW}🗄️  PostgreSQL já instalado${NC}"
else
  echo -e "${YELLOW}🗄️  Instalando PostgreSQL...${NC}"
  run_cmd "sh -c 'echo \"deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main\" > /etc/apt/sources.list.d/pgdg.list'"
  run_cmd "wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add -"
  run_cmd "apt update"
  run_cmd "apt install -y postgresql-15 postgresql-contrib-15"
fi

# 6. Instalar Redis
if command -v redis-cli &> /dev/null; then
  echo -e "${YELLOW}🔴 Redis já instalado${NC}"
else
  echo -e "${YELLOW}🔴 Instalando Redis...${NC}"
  run_cmd "apt install -y redis-server"
  run_cmd "systemctl enable redis-server"
  run_cmd "systemctl start redis-server"
fi

# 7. Instalar Node.js via nvm (para usuário boxhub)
echo -e "${YELLOW}🟢 Instalando Node.js via nvm...${NC}"
if [ -d "/home/boxhub/.nvm" ]; then
  echo -e "${YELLOW}Node.js já instalado via nvm${NC}"
else
  run_cmd "runuser -l boxhub -c 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash'"
  run_cmd "runuser -l boxhub -c 'source ~/.nvm/nvm.sh && nvm install 18 && nvm use 18 && nvm alias default 18'"
  run_cmd "runuser -l boxhub -c 'source ~/.nvm/nvm.sh && npm install -g yarn pm2'"
fi

# 8. Instalar Nginx
if command -v nginx &> /dev/null; then
  echo -e "${YELLOW}🌐 Nginx já instalado${NC}"
else
  echo -e "${YELLOW}🌐 Instalando Nginx...${NC}"
  run_cmd "apt install -y nginx"
  run_cmd "systemctl enable nginx"
fi

# 9. Instalar Certbot
if command -v certbot &> /dev/null; then
  echo -e "${YELLOW}🔒 Certbot já instalado${NC}"
else
  echo -e "${YELLOW}🔒 Instalando Certbot...${NC}"
  run_cmd "apt install -y certbot python3-certbot-nginx"
fi

# 10. Configurar firewall (UFW)
echo -e "${YELLOW}🔥 Configurando firewall...${NC}"
if command -v ufw &> /dev/null; then
  run_cmd "ufw allow 22/tcp"
  run_cmd "ufw allow 80/tcp"
  run_cmd "ufw allow 443/tcp"
  run_cmd "ufw --force enable"
else
  run_cmd "apt install -y ufw"
  run_cmd "ufw allow 22/tcp"
  run_cmd "ufw allow 80/tcp"
  run_cmd "ufw allow 443/tcp"
  run_cmd "ufw --force enable"
fi

# 11. Criar diretórios necessários
echo -e "${YELLOW}📁 Criando diretórios...${NC}"
run_cmd "mkdir -p /home/boxhub/boxhub-api"
run_cmd "mkdir -p /home/boxhub/backups"
run_cmd "mkdir -p /home/boxhub/boxhub-api/uploads/discart-items"
run_cmd "mkdir -p /home/boxhub/boxhub-api/uploads/qrack-items"
run_cmd "mkdir -p /home/boxhub/boxhub-api/uploads/avatars"
run_cmd "mkdir -p /home/boxhub/boxhub-api/uploads/bucket-goals/cover"
run_cmd "mkdir -p /home/boxhub/boxhub-api/uploads/bucket-goals/media"
run_cmd "mkdir -p /home/boxhub/boxhub-api/uploads/academy/programs/cover"
run_cmd "mkdir -p /home/boxhub/boxhub-api/uploads/academy/logo"
run_cmd "mkdir -p /home/boxhub/boxhub-api/uploads/academy/resources"
run_cmd "mkdir -p /home/boxhub/boxhub-api/uploads/construction-logs"
run_cmd "mkdir -p /home/boxhub/boxhub-api/uploads/project-documents"
run_cmd "mkdir -p /home/boxhub/boxhub-api/uploads/project-permits"
run_cmd "mkdir -p /home/boxhub/boxhub-api/uploads/insurance"
run_cmd "chown -R boxhub:boxhub /home/boxhub"

# 12. Criar script de backup do banco
echo -e "${YELLOW}💾 Criando script de backup...${NC}"
cat > /home/boxhub/backups/backup-db.sh << 'EOF'
#!/bin/bash
BACKUP_DIR="/home/boxhub/backups"
DB_NAME="boxhub_db"
DB_USER="boxhub_user"
DATE=$(date +%Y%m%d_%H%M%S)
FILENAME="backup_${DB_NAME}_${DATE}.sql"
mkdir -p $BACKUP_DIR
PGPASSWORD="${DB_PASSWORD}" pg_dump -U $DB_USER -h localhost $DB_NAME > $BACKUP_DIR/$FILENAME
gzip $BACKUP_DIR/$FILENAME
find $BACKUP_DIR -name "backup_*.sql.gz" -mtime +7 -delete
echo "Backup criado: $BACKUP_DIR/${FILENAME}.gz"
EOF

run_cmd "chmod +x /home/boxhub/backups/backup-db.sh"
run_cmd "chown boxhub:boxhub /home/boxhub/backups/backup-db.sh"

# 13. Configurar cron para backups diários
echo -e "${YELLOW}⏰ Configurando cron para backups...${NC}"
# Adicionar ao crontab do usuário boxhub
run_cmd "runuser -l boxhub -c '(crontab -l 2>/dev/null | grep -v backup-db.sh; echo \"0 2 * * * /home/boxhub/backups/backup-db.sh >> /home/boxhub/backups/backup.log 2>&1\") | crontab -'"

echo -e "${GREEN}✅ Setup inicial concluído!${NC}"
echo -e "${YELLOW}📝 Próximos passos:${NC}"
echo -e "1. Configure o banco de dados PostgreSQL (usuário e senha)"
echo -e "2. Configure o arquivo .env em /home/boxhub/boxhub-api/"
echo -e "3. Adicione a chave SSH pública do GitHub em /home/boxhub/.ssh/authorized_keys"
echo -e "4. Configure os secrets no GitHub Actions"

