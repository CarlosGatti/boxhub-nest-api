# 📋 PLANEJAMENTO DE DEPLOY - VPS (VPSdime)

> **Estratégia:** Instalação manual (sem Docker) para facilitar manutenção e backups. VPS + PostgreSQL + Redis + Nginx + Cloudflare + PM2.

---

## 🎯 Visão Geral

### Stack Final:
- **OS:** Ubuntu 22.04 LTS (recomendado na VPSdime)
- **VPS:** VPSdime (1GB RAM mínimo recomendado, 2GB ideal)
- **Banco de Dados:** PostgreSQL 15
- **Cache:** Redis 7
- **Runtime:** Node.js 18+ (via nvm)
- **Process Manager:** PM2
- **Reverse Proxy:** Nginx (opcional mas recomendado)
- **DNS/HTTPS:** Cloudflare (Tunnel ou proxied DNS)
- **Backup:** Script simples + cron

---

## 📦 Passo 1: Preparar a VPS

### 1.1 – Criar/Configurar VPS na VPSdime

1. **Acesse:** https://www.vpsdime.com
2. **Crie uma VPS:**
   - **OS:** Ubuntu 22.04 LTS
   - **RAM:** 1GB mínimo (2GB recomendado)
   - **Storage:** 20GB+ SSD
   - **Anote:** IP público da VPS

### 1.2 – Conectar na VPS

```bash
ssh root@SEU_IP_VPS
# ou
ssh root@seu-ip-vps.vpsdime.com
```

### 1.3 – Atualizar sistema e instalar dependências básicas

```bash
# Atualizar pacotes
apt update && apt upgrade -y

# Instalar ferramentas básicas
apt install -y curl wget git build-essential
apt install -y software-properties-common
apt install -y apt-transport-https ca-certificates gnupg lsb-release
```

---

## 🗄️ Passo 2: Instalar PostgreSQL

### 2.1 – Instalar PostgreSQL 15

```bash
# Adicionar repositório oficial
sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add -
apt update

# Instalar PostgreSQL
apt install -y postgresql-15 postgresql-contrib-15

# Verificar instalação
systemctl status postgresql
```

### 2.2 – Configurar PostgreSQL

```bash
# Trocar para usuário postgres
su - postgres

# Acessar PostgreSQL CLI
psql

# Criar banco de dados e usuário
CREATE DATABASE boxhub_db;
CREATE USER boxhub_user WITH PASSWORD 'SUA_SENHA_FORTE_AQUI';
GRANT ALL PRIVILEGES ON DATABASE boxhub_db TO boxhub_user;
ALTER USER boxhub_user CREATEDB;
\q

# Voltar para root
exit
```

### 2.3 – Configurar acesso remoto (opcional - apenas se precisar acessar de fora)

**Editar:** `/etc/postgresql/15/main/postgresql.conf`

```bash
nano /etc/postgresql/15/main/postgresql.conf
```

**Descomentar/ajustar:**
```
listen_addresses = 'localhost'
```

**Editar:** `/etc/postgresql/15/main/pg_hba.conf`

```bash
nano /etc/postgresql/15/main/pg_hba.conf
```

**Adicionar (para conexão local):**
```
host    boxhub_db    boxhub_user    127.0.0.1/32    md5
```

**Reiniciar PostgreSQL:**
```bash
systemctl restart postgresql
```

---

## 🔴 Passo 3: Instalar Redis

### 3.1 – Instalar Redis

```bash
# Instalar Redis
apt install -y redis-server

# Configurar Redis para iniciar automaticamente
systemctl enable redis-server
systemctl start redis-server

# Verificar status
systemctl status redis-server
redis-cli ping  # Deve retornar PONG
```

### 3.2 – Configurar Redis (opcional - adicionar senha)

**Editar:** `/etc/redis/redis.conf`

```bash
nano /etc/redis/redis.conf
```

**Descomentar e definir senha:**
```
requirepass SUA_SENHA_REDIS_AQUI
```

**Reiniciar Redis:**
```bash
systemctl restart redis-server
```

---

## 🟢 Passo 4: Instalar Node.js (via nvm)

### 4.1 – Instalar NVM e Node.js

```bash
# Instalar nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Recarregar shell
source ~/.bashrc

# Instalar Node.js 18 LTS
nvm install 18
nvm use 18
nvm alias default 18

# Verificar instalação
node --version
npm --version
```

### 4.2 – Instalar Yarn (se usar)

```bash
npm install -g yarn
```

---

## 📦 Passo 5: Deploy da Aplicação

### 5.1 – Criar usuário para a aplicação (recomendado)

```bash
# Criar usuário
adduser boxhub
usermod -aG sudo boxhub

# Trocar para o usuário
su - boxhub
```

### 5.2 – Clonar/Enviar código para VPS

**Opção 1: Via Git (recomendado)**
```bash
cd /home/boxhub
git clone SEU_REPOSITORIO_GIT boxhub-api
cd boxhub-api
```

**Opção 2: Via SCP (do seu computador local)**
```bash
# No seu computador local:
scp -r /caminho/do/seu/projeto root@SEU_IP_VPS:/home/boxhub/boxhub-api
```

### 5.3 – Instalar dependências

```bash
cd /home/boxhub/boxhub-api

# Se usar yarn:
yarn install --production

# Se usar npm:
npm ci --production
```

### 5.4 – Configurar variáveis de ambiente

```bash
# Criar arquivo .env
nano .env
```

**Conteúdo do `.env`:**
```env
# Database
DATABASE_URL="postgresql://boxhub_user:SUA_SENHA_FORTE_AQUI@localhost:5432/boxhub_db?schema=public"
SHADOW_DATABASE_URL="postgresql://boxhub_user:SUA_SENHA_FORTE_AQUI@localhost:5432/boxhub_db_shadow?schema=public"

# Redis
REDIS_HOST="localhost"
REDIS_PASSWORD="SUA_SENHA_REDIS_AQUI"
REDIS_PORT=6379

# JWT
JWT_SECRET="SUA_CHAVE_SECRETA_JWT_AQUI"

# Frontend URLs (ajustar com seu domínio)
FRONTEND_URL_LOCAL="http://localhost:3000"
FRONTEND_URL_PROD="https://seu-dominio.com"

# API Port
PORT=3000

# Node Environment
NODE_ENV=production
```

**Salvar e sair:** `Ctrl+X`, `Y`, `Enter`

### 5.5 – Executar migrations do Prisma

```bash
# Gerar Prisma Client
npx prisma generate

# Executar migrations
npx prisma migrate deploy

# (Opcional) Seed do banco se necessário
# npx prisma db seed
```

### 5.6 – Build da aplicação

```bash
# Build
yarn build
# ou
npm run build
```

---

## 🔄 Passo 6: Configurar PM2 (Process Manager)

### 6.1 – Instalar PM2

```bash
npm install -g pm2
```

### 6.2 – Criar arquivo de configuração PM2

```bash
cd /home/boxhub/boxhub-api
nano ecosystem.config.js
```

**Conteúdo:**
```javascript
module.exports = {
  apps: [
    {
      name: 'boxhub-api',
      script: 'dist/src/main.js',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
      },
      error_file: './logs/pm2-error.log',
      out_file: './logs/pm2-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      autorestart: true,
      max_memory_restart: '500M',
      watch: false,
    },
  ],
};
```

**Criar pasta de logs:**
```bash
mkdir -p logs
```

### 6.3 – Iniciar aplicação com PM2

```bash
# Iniciar
pm2 start ecosystem.config.js

# Salvar configuração para iniciar no boot
pm2 save
pm2 startup

# Verificar status
pm2 status
pm2 logs boxhub-api
```

---

## 🌐 Passo 7: Configurar Cloudflare

### 7.1 – Configurar DNS no Cloudflare

1. **Acesse:** https://dash.cloudflare.com
2. **Selecione seu domínio**
3. **Vá em DNS > Records**
4. **Adicione/Crie registro A:**
   - **Type:** A
   - **Name:** `api` (ou `subdominio` que preferir)
   - **IPv4 address:** IP da sua VPS
   - **Proxy status:** ⚠️ **Desabilitado (cinza)** - IMPORTANTE para permitir SSL direto
   - **TTL:** Auto
5. **Clique em Save**

### 7.2 – Instalar Certbot (Let's Encrypt) para HTTPS

```bash
# Instalar Certbot
apt install -y certbot python3-certbot-nginx

# Se NÃO usar Nginx (apenas Node direto):
apt install -y certbot
```

---

## 🔒 Passo 8: Configurar HTTPS (Opção 1 - Sem Nginx)

### 8.1 – Configurar HTTPS com Certbot (standalone)

```bash
# Parar PM2 temporariamente
pm2 stop boxhub-api

# Gerar certificado (substitua seu-dominio.com)
certbot certonly --standalone -d api.seu-dominio.com

# Certificados serão salvos em:
# /etc/letsencrypt/live/api.seu-dominio.com/fullchain.pem
# /etc/letsencrypt/live/api.seu-dominio.com/privkey.pem
```

**⚠️ Problema:** NestJS não suporta HTTPS nativamente sem configuração adicional. **Recomendamos usar Nginx** (Próximo passo).

---

## 🔒 Passo 8 (Alternativa): Configurar Nginx + HTTPS

### 8.1 – Instalar Nginx

```bash
apt install -y nginx
systemctl enable nginx
systemctl start nginx
```

### 8.2 – Configurar Nginx como Reverse Proxy

**Criar configuração:**
```bash
nano /etc/nginx/sites-available/boxhub-api
```

**Conteúdo:**
```nginx
server {
    listen 80;
    server_name api.seu-dominio.com;

    # Redirecionar HTTP para HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name api.seu-dominio.com;

    # Certificados SSL (serão configurados pelo Certbot)
    ssl_certificate /etc/letsencrypt/live/api.seu-dominio.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/api.seu-dominio.com/privkey.pem;

    # SSL Configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;

    # Logs
    access_log /var/log/nginx/boxhub-api-access.log;
    error_log /var/log/nginx/boxhub-api-error.log;

    # Upload size limit (para imagens)
    client_max_body_size 10M;

    # Proxy para aplicação Node.js
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Servir arquivos estáticos (uploads)
    location /uploads/ {
        alias /home/boxhub/boxhub-api/uploads/;
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}
```

**Habilitar site:**
```bash
ln -s /etc/nginx/sites-available/boxhub-api /etc/nginx/sites-enabled/
nginx -t  # Testar configuração
systemctl reload nginx
```

### 8.3 – Obter certificado SSL

```bash
# Gerar certificado
certbot --nginx -d api.seu-dominio.com

# Configurar renovação automática
certbot renew --dry-run
```

**Testar renovação manual:**
```bash
certbot renew
```

---

## 💾 Passo 9: Configurar Backups

### 9.1 – Script de backup do PostgreSQL

**Criar script:**
```bash
nano /home/boxhub/backup-db.sh
```

**Conteúdo:**
```bash
#!/bin/bash

# Configurações
BACKUP_DIR="/home/boxhub/backups"
DB_NAME="boxhub_db"
DB_USER="boxhub_user"
DATE=$(date +%Y%m%d_%H%M%S)
FILENAME="backup_${DB_NAME}_${DATE}.sql"

# Criar diretório de backups se não existir
mkdir -p $BACKUP_DIR

# Fazer backup
PGPASSWORD="SUA_SENHA_FORTE_AQUI" pg_dump -U $DB_USER -h localhost $DB_NAME > $BACKUP_DIR/$FILENAME

# Comprimir backup
gzip $BACKUP_DIR/$FILENAME

# Remover backups antigos (manter apenas últimos 7 dias)
find $BACKUP_DIR -name "backup_*.sql.gz" -mtime +7 -delete

echo "Backup criado: $BACKUP_DIR/${FILENAME}.gz"
```

**Tornar executável:**
```bash
chmod +x /home/boxhub/backup-db.sh
```

### 9.2 – Configurar Cron para backups automáticos

```bash
crontab -e
```

**Adicionar linha (backup diário às 2h da manhã):**
```
0 2 * * * /home/boxhub/backup-db.sh >> /home/boxhub/backup.log 2>&1
```

**Testar backup manualmente:**
```bash
/home/boxhub/backup-db.sh
```

### 9.3 – (Opcional) Backup automático para servidor remoto

**Usar rsync ou SCP para enviar backups para outro servidor/storage:**

```bash
# Adicionar ao final do script backup-db.sh:
# rsync -avz $BACKUP_DIR/ usuario@outro-servidor:/backups/boxhub-api/
```

---

## 🔧 Passo 10: Configurar Firewall (UFW)

### 10.1 – Configurar firewall básico

```bash
# Instalar UFW
apt install -y ufw

# Permitir SSH (IMPORTANTE - não bloquear!)
ufw allow 22/tcp

# Permitir HTTP e HTTPS
ufw allow 80/tcp
ufw allow 443/tcp

# Habilitar firewall
ufw enable

# Verificar status
ufw status
```

---

## ✅ Passo 11: Verificações Finais

### 11.1 – Checklist

```bash
# 1. Verificar PostgreSQL
systemctl status postgresql
psql -U boxhub_user -d boxhub_db -c "SELECT 1;"

# 2. Verificar Redis
systemctl status redis-server
redis-cli ping

# 3. Verificar Node.js
node --version
pm2 status

# 4. Verificar Nginx (se instalado)
systemctl status nginx
nginx -t

# 5. Verificar aplicação rodando
curl http://localhost:3000
# ou
curl https://api.seu-dominio.com

# 6. Verificar logs
pm2 logs boxhub-api
```

### 11.2 – Configurar variáveis no frontend

**No seu `.env` do frontend:**
```env
NEXT_PUBLIC_API_URL=https://api.seu-dominio.com
```

---

## 🚨 Troubleshooting

### Problema: Aplicação não inicia
```bash
# Ver logs do PM2
pm2 logs boxhub-api

# Verificar se a porta está sendo usada
netstat -tulpn | grep 3000

# Verificar permissões
ls -la /home/boxhub/boxhub-api
```

### Problema: Erro de conexão com PostgreSQL
```bash
# Verificar se PostgreSQL está rodando
systemctl status postgresql

# Testar conexão
psql -U boxhub_user -d boxhub_db -h localhost

# Verificar logs do PostgreSQL
tail -f /var/log/postgresql/postgresql-15-main.log
```

### Problema: Certificado SSL não renova
```bash
# Verificar certificado
certbot certificates

# Renovar manualmente
certbot renew --force-renewal
systemctl reload nginx
```

### Problema: Upload de arquivos não funciona
```bash
# Verificar permissões da pasta uploads
chmod -R 755 /home/boxhub/boxhub-api/uploads
chown -R boxhub:boxhub /home/boxhub/boxhub-api/uploads
```

---

## 📊 Monitoramento Básico

### 12.1 – Instalar ferramentas de monitoramento

```bash
# PM2 Monitor (web dashboard)
pm2 install pm2-server-monit

# Acessar dashboard
# pm2 web
```

### 12.2 – Verificar uso de recursos

```bash
# CPU e Memória
htop

# Disco
df -h

# Uso do PostgreSQL
psql -U boxhub_user -d boxhub_db -c "SELECT pg_size_pretty(pg_database_size('boxhub_db'));"
```

---

## 🔄 Atualizações Futuras

### Deploy de novas versões:

```bash
cd /home/boxhub/boxhub-api

# Fazer backup do banco antes
/home/boxhub/backup-db.sh

# Pull do código novo
git pull origin main

# Instalar dependências
yarn install --production

# Rodar migrations
npx prisma migrate deploy

# Build
yarn build

# Reiniciar aplicação
pm2 restart boxhub-api
```

---

## 📝 Resumo de Comandos Úteis

```bash
# Gerenciar aplicação
pm2 status
pm2 logs boxhub-api
pm2 restart boxhub-api
pm2 stop boxhub-api
pm2 start boxhub-api

# Gerenciar PostgreSQL
systemctl status postgresql
systemctl restart postgresql

# Gerenciar Redis
systemctl status redis-server
systemctl restart redis-server

# Gerenciar Nginx
systemctl status nginx
systemctl restart nginx
nginx -t

# Backup manual
/home/boxhub/backup-db.sh

# Ver logs
pm2 logs
tail -f /var/log/nginx/boxhub-api-error.log
```

---

## 🎯 Próximos Passos (Opcionais)

1. **Configurar Cloudflare Tunnel** (alternativa ao Nginx para HTTPS)
2. **Configurar monitoramento** (Sentry, LogRocket, etc.)
3. **Configurar CDN** para uploads (Cloudflare R2, AWS S3)
4. **Configurar health checks** automáticos
5. **Documentar API** (Swagger/OpenAPI)

---

**✅ Pronto!** Agora você tem um deploy completo e funcional. O próximo passo é testar tudo e ajustar conforme necessário! 🚀

