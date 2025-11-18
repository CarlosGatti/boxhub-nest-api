# 🔄 ROTINA COMPLETA DE DEPLOY - GitHub Actions + VPS

> **Guia completo** para configurar CI/CD automático com GitHub Actions e deploy na VPS.

---

## 📋 Índice

1. [Setup Inicial da VPS](#1-setup-inicial-da-vps)
2. [Configurar GitHub Secrets](#2-configurar-github-secrets)
3. [Configurar Banco de Dados na VPS](#3-configurar-banco-de-dados-na-vps)
4. [Configurar .env na VPS](#4-configurar-env-na-vps)
5. [Configurar SSH para GitHub Actions](#5-configurar-ssh-para-github-actions)
6. [Primeiro Deploy Manual](#6-primeiro-deploy-manual)
7. [Testar CI/CD Automático](#7-testar-cicd-automático)
8. [Rotina de Deploy Diária](#8-rotina-de-deploy-diária)
9. [Troubleshooting](#9-troubleshooting)

---

## 1️⃣ Setup Inicial da VPS

### 1.1 – Executar script de setup na VPS

```bash
# Conectar na VPS
ssh root@SEU_IP_VPS

# Fazer upload do script setup-vps.sh
# (ou criar diretamente na VPS)

# Executar script de setup
bash setup-vps.sh
```

**O script irá instalar:**
- PostgreSQL 15
- Redis
- Node.js 18 via nvm
- Yarn e PM2
- Nginx
- Certbot
- Firewall (UFW)
- Criar usuário `boxhub`
- Criar diretórios necessários
- Configurar backups automáticos

### 1.2 – Verificar instalações

```bash
# Verificar Node.js
su - boxhub
node --version
yarn --version
pm2 --version

# Verificar PostgreSQL
sudo systemctl status postgresql

# Verificar Redis
sudo systemctl status redis-server

# Verificar Nginx
sudo systemctl status nginx
```

---

## 2️⃣ Configurar GitHub Secrets

### 2.1 – Gerar chave SSH na VPS (para GitHub Actions)

```bash
# Conectar como usuário boxhub
ssh boxhub@SEU_IP_VPS

# Gerar chave SSH (se ainda não tiver)
ssh-keygen -t ed25519 -C "github-actions" -f ~/.ssh/github_actions
# Não colocar senha (Enter duas vezes)

# Mostrar chave privada (para adicionar no GitHub)
cat ~/.ssh/github_actions

# Adicionar chave pública ao authorized_keys
cat ~/.ssh/github_actions.pub >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

### 2.2 – Adicionar Secrets no GitHub

1. **Acesse:** `https://github.com/SEU_USUARIO/boxhub-nest-api/settings/secrets/actions`

2. **Clique em:** "New repository secret"

3. **Adicione os seguintes secrets:**

| Secret Name | Valor | Descrição |
|------------|-------|-----------|
| `VPS_SSH_PRIVATE_KEY` | Conteúdo de `~/.ssh/github_actions` | Chave privada SSH |
| `VPS_HOST` | IP da sua VPS (ex: `123.45.67.89`) | IP ou hostname da VPS |
| `VPS_USER` | `boxhub` | Usuário SSH na VPS |
| `DOMAIN` | `seu-dominio.com` | Domínio principal (sem http/https) |

**Exemplo de como copiar a chave privada:**
```bash
# Na VPS
cat ~/.ssh/github_actions
# Copie TODO o conteúdo (incluindo -----BEGIN OPENSSH PRIVATE KEY-----)
```

---

## 3️⃣ Configurar Banco de Dados na VPS

### 3.1 – Criar banco e usuário

```bash
# Conectar na VPS
ssh boxhub@SEU_IP_VPS

# Acessar PostgreSQL
sudo -u postgres psql

# Criar banco e usuário
CREATE DATABASE boxhub_db;
CREATE USER boxhub_user WITH PASSWORD 'SUA_SENHA_FORTE_AQUI';
GRANT ALL PRIVILEGES ON DATABASE boxhub_db TO boxhub_user;
ALTER USER boxhub_user CREATEDB;
\q
```

### 3.2 – Configurar acesso local

```bash
# Editar pg_hba.conf
sudo nano /etc/postgresql/15/main/pg_hba.conf

# Adicionar linha (se ainda não existir):
host    boxhub_db    boxhub_user    127.0.0.1/32    md5

# Reiniciar PostgreSQL
sudo systemctl restart postgresql

# Testar conexão
psql -U boxhub_user -d boxhub_db -h localhost
```

---

## 4️⃣ Configurar .env na VPS

### 4.1 – Criar arquivo .env

```bash
# Conectar como boxhub
ssh boxhub@SEU_IP_VPS

# Criar arquivo .env
nano /home/boxhub/boxhub-api/.env
```

**Conteúdo do `.env`:**
```env
# Database
DATABASE_URL="postgresql://boxhub_user:SUA_SENHA_AQUI@localhost:5432/boxhub_db?schema=public"
SHADOW_DATABASE_URL="postgresql://boxhub_user:SUA_SENHA_AQUI@localhost:5432/boxhub_db_shadow?schema=public"

# Redis
REDIS_HOST="localhost"
REDIS_PASSWORD="SUA_SENHA_REDIS_AQUI"
REDIS_PORT=6379

# JWT
JWT_SECRET="SUA_CHAVE_SECRETA_JWT_LONGA_E_SEGURA_AQUI"

# Frontend URLs
FRONTEND_URL_LOCAL="http://localhost:3000"
FRONTEND_URL_PROD="https://seu-dominio.com"

# API Port
PORT=3000

# Node Environment
NODE_ENV=production
```

**Salvar:** `Ctrl+X`, `Y`, `Enter`

### 4.2 – Proteger arquivo .env

```bash
chmod 600 /home/boxhub/boxhub-api/.env
```

---

## 5️⃣ Configurar SSH para GitHub Actions

### 5.1 – Configurar authorized_keys

```bash
# Na VPS
ssh boxhub@SEU_IP_VPS

# Verificar se a chave já está adicionada
cat ~/.ssh/authorized_keys

# Se necessário, adicionar a chave pública do GitHub Actions manualmente
nano ~/.ssh/authorized_keys
# Cole a chave pública (github_actions.pub)
```

### 5.2 – Testar conexão SSH (do seu computador local)

```bash
# Testar se consegue conectar
ssh -i ~/.ssh/github_actions boxhub@SEU_IP_VPS

# Se funcionar, está tudo certo!
```

---

## 6️⃣ Primeiro Deploy Manual

### 6.1 – Fazer primeiro deploy manualmente na VPS

```bash
# Conectar na VPS
ssh boxhub@SEU_IP_VPS

# Criar diretório da aplicação
mkdir -p /home/boxhub/boxhub-api
cd /home/boxhub/boxhub-api

# Clonar repositório (ou fazer upload via SCP)
git clone SEU_REPOSITORIO_GIT .
# ou
# git pull origin main

# Instalar dependências
yarn install --production

# Gerar Prisma Client
npx prisma generate

# Executar migrations
npx prisma migrate deploy

# Build da aplicação
yarn build

# Verificar se .env existe
cat .env

# Criar ecosystem.config.js se não existir
# (deve estar no repositório)

# Iniciar com PM2
pm2 start ecosystem.config.js
pm2 save
pm2 startup

# Verificar status
pm2 status
pm2 logs boxhub-api
```

### 6.2 – Configurar Nginx (se ainda não fez)

```bash
# Criar configuração do Nginx
sudo nano /etc/nginx/sites-available/boxhub-api
```

**Conteúdo:**
```nginx
server {
    listen 80;
    server_name api.seu-dominio.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name api.seu-dominio.com;

    ssl_certificate /etc/letsencrypt/live/api.seu-dominio.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/api.seu-dominio.com/privkey.pem;

    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;

    client_max_body_size 10M;

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

    location /uploads/ {
        alias /home/boxhub/boxhub-api/uploads/;
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}
```

```bash
# Habilitar site
sudo ln -s /etc/nginx/sites-available/boxhub-api /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# Obter certificado SSL
sudo certbot --nginx -d api.seu-dominio.com
```

---

## 7️⃣ Testar CI/CD Automático

### 7.1 – Fazer commit e push

```bash
# No seu repositório local
git add .
git commit -m "feat: configurar CI/CD"
git push origin main
```

### 7.2 – Verificar GitHub Actions

1. **Acesse:** `https://github.com/SEU_USUARIO/boxhub-nest-api/actions`

2. **Clique no workflow em execução**

3. **Acompanhe os logs:**
   - ✅ Test & Build deve passar
   - ✅ Deploy deve copiar arquivos
   - ✅ Deploy script deve executar
   - ✅ Health check deve passar

### 7.3 – Verificar na VPS

```bash
# Conectar na VPS
ssh boxhub@SEU_IP_VPS

# Verificar status da aplicação
pm2 status

# Ver logs
pm2 logs boxhub-api --lines 50

# Testar endpoint
curl http://localhost:3000
```

---

## 8️⃣ Rotina de Deploy Diária

### 8.1 – Fluxo Automático

**Toda vez que você fizer push para `main`:**

1. ✅ **GitHub Actions detecta push**
2. ✅ **Executa testes** (lint, tests)
3. ✅ **Faz build** da aplicação
4. ✅ **Faz backup** do banco de dados (automático)
5. ✅ **Para aplicação** atual (PM2 stop)
6. ✅ **Copia novos arquivos** para VPS
7. ✅ **Instala dependências** de produção
8. ✅ **Executa migrations** do Prisma
9. ✅ **Reinicia aplicação** (PM2 restart)
10. ✅ **Faz health check** para validar

### 8.2 – Workflow Manual

**Para fazer deploy manualmente (sem push):**

1. **Acesse:** `https://github.com/SEU_USUARIO/boxhub-nest-api/actions`

2. **Clique em:** "Deploy to VPS"

3. **Clique em:** "Run workflow" (canto superior direito)

4. **Selecione branch:** `main`

5. **Clique em:** "Run workflow"

---

## 9️⃣ Troubleshooting

### Problema: GitHub Actions falha ao conectar na VPS

**Solução:**
```bash
# Verificar se a chave SSH está correta
cat ~/.ssh/github_actions

# Verificar se authorized_keys tem a chave pública
cat ~/.ssh/authorized_keys | grep github_actions

# Testar conexão manualmente
ssh -i ~/.ssh/github_actions boxhub@SEU_IP_VPS
```

### Problema: Deploy falha ao executar migrations

**Solução:**
```bash
# Verificar se .env está configurado
cat /home/boxhub/boxhub-api/.env

# Verificar conexão com banco
psql -U boxhub_user -d boxhub_db -h localhost

# Executar migrations manualmente
cd /home/boxhub/boxhub-api
npx prisma migrate deploy
```

### Problema: Aplicação não inicia após deploy

**Solução:**
```bash
# Verificar logs do PM2
pm2 logs boxhub-api --lines 100

# Verificar se .env existe
ls -la /home/boxhub/boxhub-api/.env

# Verificar se arquivos foram copiados
ls -la /home/boxhub/boxhub-api/dist/

# Reiniciar manualmente
pm2 restart boxhub-api
```

### Problema: Health check falha

**Solução:**
```bash
# Verificar se aplicação está rodando
pm2 status

# Testar endpoint localmente
curl http://localhost:3000

# Verificar se Nginx está configurado corretamente
sudo nginx -t
sudo systemctl status nginx

# Ver logs do Nginx
sudo tail -f /var/log/nginx/boxhub-api-error.log
```

### Problema: Certificado SSL expira

**Solução:**
```bash
# Renovar manualmente
sudo certbot renew --force-renewal
sudo systemctl reload nginx

# Verificar renovação automática
sudo certbot renew --dry-run
```

---

## 📝 Checklist Final

### Antes do primeiro deploy:

- [ ] VPS configurada e acessível
- [ ] PostgreSQL instalado e banco criado
- [ ] Redis instalado e rodando
- [ ] Node.js 18 instalado via nvm
- [ ] PM2 instalado globalmente
- [ ] Arquivo `.env` configurado na VPS
- [ ] Chave SSH gerada e adicionada no GitHub Secrets
- [ ] Nginx configurado (opcional mas recomendado)
- [ ] Certificado SSL obtido (se usando Nginx)
- [ ] Firewall (UFW) configurado
- [ ] Script de backup funcionando

### Após primeiro deploy:

- [ ] GitHub Actions executando com sucesso
- [ ] Aplicação rodando no PM2
- [ ] Endpoint acessível via HTTPS
- [ ] Health check passando
- [ ] Uploads funcionando
- [ ] Banco de dados conectado
- [ ] Redis conectado

---

## 🎯 Próximos Passos (Opcional)

1. **Configurar monitoramento** (Sentry, LogRocket)
2. **Configurar alertas** (email/Slack quando deploy falhar)
3. **Configurar staging environment** (deploy para `staging` antes de `main`)
4. **Configurar rollback automático** em caso de falha no health check
5. **Configurar CDN** para uploads (Cloudflare R2, AWS S3)

---

**✅ Pronto!** Agora você tem CI/CD completo e automatizado! 🚀

