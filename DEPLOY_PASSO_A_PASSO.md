# 🚀 DEPLOY PASSO A PASSO - Ordem Correta de Execução

> **Guia sequencial** para fazer deploy completo da API na VPS, na ordem correta.

---

## 📋 Visão Geral do Processo

```
1. Subir código para Git ✅
2. Configurar acesso remoto à VPS (SSH) ✅
3. Instalar PostgreSQL + Redis manualmente ✅
4. Configurar acesso remoto ao PostgreSQL (pgAdmin) ✅
5. Configurar GitHub Actions (CI/CD) ✅
6. Fazer projeto rodar no Nginx ✅
7. Configurar HTTPS com Cloudflare ✅
8. Frontend se comunicar via HTTPS ✅
```

---

## ✅ PASSO 1: Subir Código para Git

### 1.1 – Commit e Push

```bash
# No seu projeto local
git add .
git commit -m "feat: adicionar módulo Discart-me completo"
git push origin main
```

**✅ Pronto!** Código está no GitHub.

---

## ✅ PASSO 2: Configurar Acesso Remoto à VPS (SSH)

### 2.1 – Conectar na VPS pela primeira vez

```bash
# No seu computador local
ssh root@104.237.3.199
# ou
ssh root@gatti
```

**📝 Sua VPS:**
- **IP:** 104.237.3.199
- **Hostname:** gatti
- **OS:** Ubuntu 24.04

**🔑 Senha Root:** Pegue no painel da VPSdime (botão "Root Password")

### 2.2 – Criar usuário para a aplicação (recomendado)

```bash
# Na VPS
adduser boxhub
usermod -aG sudo boxhub

# Configurar SSH para o novo usuário
mkdir -p /home/boxhub/.ssh
cp /root/.ssh/authorized_keys /home/boxhub/.ssh/ 2>/dev/null || true
chmod 700 /home/boxhub/.ssh
chmod 600 /home/boxhub/.ssh/authorized_keys
chown -R boxhub:boxhub /home/boxhub/.ssh
```

### 2.3 – Testar conexão com novo usuário

```bash
# No seu computador local
ssh boxhub@SEU_IP_VPS
```

**✅ Pronto!** Você consegue acessar a VPS remotamente.

---

## ✅ PASSO 3: Instalar PostgreSQL + Redis Manualmente

### 3.1 – Instalar PostgreSQL 15

```bash
# Na VPS (como root ou com sudo)
sudo apt update
sudo apt upgrade -y

# Adicionar repositório do PostgreSQL
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
sudo apt update

# Instalar PostgreSQL
sudo apt install -y postgresql-15 postgresql-contrib-15

# Verificar instalação
sudo systemctl status postgresql
```

### 3.2 – Criar banco de dados e usuário

**Opção A: Se você está conectado como ROOT**

```bash
# Acessar PostgreSQL diretamente
su - postgres

# Agora você está como usuário postgres
psql

# Dentro do psql (postgres=#), criar banco e usuário:
CREATE DATABASE khub;
CREATE USER gatti WITH PASSWORD 'asdf1234';
GRANT ALL PRIVILEGES ON DATABASE khub TO gatti;
ALTER USER gatti CREATEDB;
\q

# Sair do usuário postgres
exit
```

**⚠️ IMPORTANTE:**
- Os comandos `CREATE DATABASE`, `CREATE USER`, etc. são comandos SQL e devem ser executados **dentro do psql** (quando você vê `postgres=#`)
- Comandos como `su`, `psql`, `exit` são comandos de shell e devem ser executados **fora do psql** (quando você vê `postgres@gatti:~$`)

**Opção B: Se você está conectado como usuário com sudo**

```bash
# Acessar PostgreSQL via sudo
sudo -u postgres psql

# Criar banco e usuário
CREATE DATABASE boxhub_db;
CREATE USER boxhub_user WITH PASSWORD 'SUA_SENHA_FORTE_AQUI';
GRANT ALL PRIVILEGES ON DATABASE boxhub_db TO boxhub_user;
ALTER USER boxhub_user CREATEDB;
\q
```

**⚠️ IMPORTANTE:** 
- Use `boxhub_db` como nome do banco (não `khub`)
- Use `boxhub_user` como nome do usuário (não `carlosgatti`)
- Use uma senha forte e segura

**✅ Exemplo de senha forte:** `MyStr0ngP@ssw0rd!2024`

### 3.3 – Instalar Redis

```bash
# Na VPS
sudo apt install -y redis-server

# Iniciar e habilitar Redis
sudo systemctl enable redis-server
sudo systemctl start redis-server

# Verificar
sudo systemctl status redis-server
redis-cli ping  # Deve retornar PONG
```

**✅ Pronto!** PostgreSQL e Redis instalados e rodando.

### 3.4 – Instalar e Configurar Firewall (UFW)

```bash
# Instalar UFW (se não estiver instalado)
sudo apt install -y ufw

# Configurar regras básicas
sudo ufw allow 22/tcp    # SSH
sudo ufw allow 80/tcp    # HTTP
sudo ufw allow 443/tcp   # HTTPS

# Habilitar firewall
sudo ufw enable

# Verificar status
sudo ufw status
```

**✅ Pronto!** Firewall configurado e ativo.

---

## ✅ PASSO 4: Configurar Acesso Remoto ao PostgreSQL (pgAdmin)

### 4.1 – Configurar pgAdmin para Acessar o Banco

**📘 Guia Completo:** Veja o arquivo `CONFIGURAR_PGADMIN.md` para instruções detalhadas com screenshots.

**Resumo Rápido:**

**Opção A: Usar Túnel SSH (mais seguro - recomendado)**

1. **Aba "General":**
   - **Name:** `BoxHub VPS` (obrigatório - não pode estar vazio!)

2. **Aba "SSH Tunnel":**
   - **Use SSH tunneling:** ✅ Ativar (toggle ON)
   - **Tunnel host:** `104.237.3.199`
   - **Tunnel port:** `22`
   - **Username:** `root` (ou seu usuário SSH)
   - **Authentication:** Password ou Identity file
   - **Password:** Senha do seu usuário SSH na VPS

3. **Aba "Connection":**
   - **Host name/address:** `localhost` ⚠️ (não use o IP da VPS aqui!)
   - **Port:** `5432`
   - **Maintenance database:** `khub`
   - **Username:** `gatti`
   - **Password:** `asdf1234`
   - **Save password?:** ✅ Ativar

4. Clique em **Save**

**✅ Pronto!** Agora você pode gerenciar seu banco via pgAdmin.

---

### 4.2 – Habilitar acesso remoto no PostgreSQL (Opção B - apenas se necessário)

**⚠️ IMPORTANTE:** Esta opção é menos segura. Use apenas se o túnel SSH não funcionar.

**Opção B: Acesso remoto direto (menos seguro)**

Se realmente precisar de acesso remoto direto:

```bash
# Na VPS
sudo nano /etc/postgresql/15/main/postgresql.conf
```

**Descomentar/ajustar:**
```
listen_addresses = '*'  # ou seu IP específico
```

```bash
sudo nano /etc/postgresql/15/main/pg_hba.conf
```

**Adicionar no final:**
```
# Permitir acesso do seu IP específico
host    khub    gatti    SEU_IP_AQUI/32    md5
```

**Substitua `SEU_IP_AQUI` pelo seu IP público atual!**

Para descobrir seu IP:
```bash
# No seu computador local
curl ifconfig.me
```

```bash
# Reiniciar PostgreSQL
sudo systemctl restart postgresql

# Abrir porta no firewall (apenas se usar acesso direto)
sudo ufw allow from SEU_IP_AQUI to any port 5432
```

**✅ Pronto!** Você pode acessar o PostgreSQL via pgAdmin.

---

## ✅ PASSO 5: Configurar GitHub Actions (CI/CD)

### 5.1 – Gerar chave SSH na VPS (para GitHub Actions)

```bash
# Na VPS (como usuário boxhub)
ssh boxhub@SEU_IP_VPS

# Gerar chave SSH
ssh-keygen -t ed25519 -C "github-actions" -f ~/.ssh/github_actions
# Não colocar senha (Enter duas vezes)

# Adicionar chave pública ao authorized_keys
cat ~/.ssh/github_actions.pub >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys

# Mostrar chave privada (copiar TODO o conteúdo)
cat ~/.ssh/github_actions
```

### 5.2 – Adicionar Secrets no GitHub

1. **Acesse:** `https://github.com/SEU_USUARIO/boxhub-nest-api/settings/secrets/actions`

2. **Clique em:** "New repository secret"

3. **Adicione os secrets:**

| Secret Name | Valor | Exemplo |
|------------|-------|---------|
| `VPS_SSH_PRIVATE_KEY` | Conteúdo completo de `~/.ssh/github_actions` | `-----BEGIN OPENSSH...` |
| `VPS_HOST` | IP da sua VPS | `123.45.67.89` |
| `VPS_USER` | `boxhub` | `boxhub` |
| `DOMAIN` | Seu domínio (sem http/https) | `seu-dominio.com` |

**✅ Pronto!** GitHub Actions configurado. Agora, quando você fizer `git push`, o deploy será automático.

---

## ✅ PASSO 6: Fazer Projeto Rodar no Nginx

### 6.1 – Instalar Node.js na VPS

```bash
# Na VPS (como boxhub)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc

# Instalar Node.js 18
nvm install 18
nvm use 18
nvm alias default 18

# Instalar Yarn e PM2
npm install -g yarn pm2

# Verificar
node --version
yarn --version
pm2 --version
```

### 6.2 – Fazer primeiro deploy manual (para testar)

```bash
# Na VPS
cd /home/boxhub
git clone SEU_REPOSITORIO_GIT boxhub-api
cd boxhub-api

# Instalar dependências
yarn install --production

# Criar arquivo .env
nano .env
```

**Conteúdo do `.env`:**
```env
DATABASE_URL="postgresql://boxhub_user:SUA_SENHA@localhost:5432/boxhub_db?schema=public"
SHADOW_DATABASE_URL="postgresql://boxhub_user:SUA_SENHA@localhost:5432/boxhub_db_shadow?schema=public"
REDIS_HOST="localhost"
REDIS_PASSWORD=""
REDIS_PORT=6379
JWT_SECRET="SUA_CHAVE_JWT_LONGA_E_SEGURA"
FRONTEND_URL_LOCAL="http://localhost:3000"
FRONTEND_URL_PROD="https://seu-dominio.com"
PORT=3000
NODE_ENV=production
```

```bash
# Gerar Prisma Client
npx prisma generate

# Executar migrations
npx prisma migrate deploy

# Build
yarn build

# Iniciar com PM2
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

### 6.3 – Instalar e Configurar Nginx

```bash
# Na VPS (como root ou com sudo)
sudo apt install -y nginx

# Criar configuração
sudo nano /etc/nginx/sites-available/boxhub-api
```

**Conteúdo:**
```nginx
server {
    listen 80;
    server_name api.seu-dominio.com;

    # Redirecionar HTTP para HTTPS (será configurado depois)
    # Por enquanto, comentar esta linha:
    # return 301 https://$server_name$request_uri;

    # Upload size limit
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

```bash
# Habilitar site
sudo ln -s /etc/nginx/sites-available/boxhub-api /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# Configurar firewall
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw allow 22/tcp
sudo ufw enable
```

**✅ Pronto!** Projeto rodando no Nginx (ainda sem HTTPS).

**Teste:** `http://api.seu-dominio.com` (ou `http://SEU_IP_VPS`)

---

## ✅ PASSO 7: Configurar HTTPS com Cloudflare

### 7.1 – Configurar DNS no Cloudflare

1. **Acesse:** https://dash.cloudflare.com
2. **Selecione seu domínio**
3. **Vá em DNS > Records**
4. **Adicione/Crie registro A:**
   - **Type:** A
   - **Name:** `api` (ou o subdomínio que preferir)
   - **IPv4 address:** IP da sua VPS
   - **Proxy status:** ⚠️ **Desabilitado (cinza)** - IMPORTANTE!
   - **TTL:** Auto
5. **Clique em Save**

**⚠️ IMPORTANTE:** Proxy deve estar **DESABILITADO** (cinza) para usar SSL do Let's Encrypt.

### 7.2 – Instalar Certbot e Obter Certificado SSL

```bash
# Na VPS (como root ou com sudo)
sudo apt install -y certbot python3-certbot-nginx

# Obter certificado SSL
sudo certbot --nginx -d api.seu-dominio.com

# Seguir as instruções:
# - Email: seu email
# - Aceitar termos: Y
# - Compartilhar email: N (ou Y, sua escolha)
# - Redirecionar HTTP para HTTPS: 2 (Sim)
```

### 7.3 – Atualizar Configuração do Nginx

O Certbot já atualizou automaticamente! Mas verifique:

```bash
sudo nano /etc/nginx/sites-available/boxhub-api
```

**Deve estar assim (Certbot já configurou):**
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

    # ... resto da configuração
    location / {
        proxy_pass http://localhost:3000;
        # ... headers
    }

    location /uploads/ {
        alias /home/boxhub/boxhub-api/uploads/;
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}
```

```bash
# Testar e recarregar
sudo nginx -t
sudo systemctl reload nginx
```

### 7.4 – Configurar Renovação Automática do SSL

```bash
# Testar renovação
sudo certbot renew --dry-run

# Certbot já configura renovação automática via cron
# Verificar:
sudo systemctl status certbot.timer
```

**✅ Pronto!** HTTPS configurado e funcionando.

**Teste:** `https://api.seu-dominio.com`

---

## ✅ PASSO 8: Frontend se Comunicar via HTTPS

### 8.1 – Atualizar .env do Frontend

**No seu projeto frontend, atualize o `.env.local` ou `.env.production`:**

```env
NEXT_PUBLIC_API_URL=https://api.seu-dominio.com
```

### 8.2 – Testar Comunicação

```bash
# No frontend, testar se consegue acessar a API
curl https://api.seu-dominio.com/health

# Deve retornar:
# {"status":"ok","timestamp":"2024-..."}
```

**✅ Pronto!** Frontend pode se comunicar com a API via HTTPS.

---

## 📝 Resumo: O que foi criado e como usar

### Arquivos criados:

1. **`.github/workflows/deploy.yml`**
   - Workflow do GitHub Actions
   - **Quando usar:** Após configurar os secrets, faz deploy automático a cada `git push`

2. **`.github/scripts/deploy.sh`**
   - Script que roda na VPS durante o deploy
   - **Quando usar:** Automaticamente pelo GitHub Actions (você não precisa rodar manualmente)

3. **`.github/scripts/setup-vps.sh`**
   - Script de setup inicial da VPS
   - **Quando usar:** UMA VEZ, no início, para instalar tudo automaticamente (opcional)

4. **`DEPLOY_VPS.md`**
   - Guia completo de deploy manual
   - **Quando usar:** Referência para fazer deploy manual se preferir

5. **`DEPLOY_PASSO_A_PASSO.md`** (este arquivo)
   - Guia sequencial passo a passo
   - **Quando usar:** Seguir na ordem para fazer deploy completo

### Como usar o CI/CD (GitHub Actions):

**Após configurar os secrets (Passo 5):**

1. **Fazer alterações no código**
2. **Commit e push:**
   ```bash
   git add .
   git commit -m "feat: nova funcionalidade"
   git push origin main
   ```
3. **GitHub Actions faz automaticamente:**
   - ✅ Testa o código
   - ✅ Faz build
   - ✅ Faz backup do banco
   - ✅ Para aplicação atual
   - ✅ Copia novos arquivos
   - ✅ Instala dependências
   - ✅ Executa migrations
   - ✅ Reinicia aplicação
   - ✅ Verifica se está funcionando

**Você não precisa fazer nada manualmente na VPS!**

---

## 🎯 Ordem de Execução Recomendada

1. ✅ **Subir código para Git** (Passo 1)
2. ✅ **Configurar acesso SSH** (Passo 2)
3. ✅ **Instalar PostgreSQL + Redis** (Passo 3)
4. ✅ **Configurar pgAdmin** (Passo 4)
5. ✅ **Fazer primeiro deploy manual** (Passo 6.2) - para testar
6. ✅ **Configurar Nginx** (Passo 6.3)
7. ✅ **Configurar HTTPS** (Passo 7)
8. ✅ **Configurar GitHub Actions** (Passo 5) - para automatizar depois
9. ✅ **Atualizar frontend** (Passo 8)

---

## ❓ Dúvidas Frequentes

### Posso pular o GitHub Actions?

**Sim!** Você pode fazer deploy manual sempre que quiser. O GitHub Actions é apenas para automatizar.

### Preciso usar o script setup-vps.sh?

**Não obrigatório.** Você pode instalar tudo manualmente seguindo o Passo 3 e 6. O script apenas automatiza.

### Como fazer deploy manual depois?

```bash
# Na VPS
cd /home/boxhub/boxhub-api
git pull origin main
yarn install --production
npx prisma migrate deploy
yarn build
pm2 restart boxhub-api
```

### O que acontece se o GitHub Actions falhar?

A aplicação continua rodando com a versão anterior. Nada é quebrado. Você pode corrigir e tentar novamente.

---

**✅ Agora você tem um guia completo e sequencial!** Siga os passos na ordem e tudo funcionará. 🚀

