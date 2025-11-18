# 🚀 GUIA COMPLETO - CI/CD com GitHub Actions + VPS

> **Setup completo** de CI/CD automatizado para deploy na VPS usando GitHub Actions.

---

## 📋 Índice Rápido

1. [Preparação Inicial](#1-preparação-inicial)
2. [Setup da VPS](#2-setup-da-vps)
3. [Configurar GitHub Secrets](#3-configurar-github-secrets)
4. [Primeiro Deploy](#4-primeiro-deploy)
5. [Rotina Diária](#5-rotina-diária-de-deploy)

---

## 1️⃣ Preparação Inicial

### 1.1 – Arquivos Criados

Os seguintes arquivos foram criados no repositório:

```
.github/
├── workflows/
│   └── deploy.yml              # Workflow do GitHub Actions
├── scripts/
│   ├── deploy.sh               # Script de deploy executado na VPS
│   └── setup-vps.sh            # Script de setup inicial da VPS
├── CI_CD_SETUP.md             # Este arquivo
└── ROTINA_DEPLOY.md           # Rotina detalhada de deploy
```

### 1.2 – Fluxo de CI/CD

```mermaid
graph LR
    A[Push para main] --> B[GitHub Actions]
    B --> C[Test & Build]
    C --> D[Deploy para VPS]
    D --> E[Backup DB]
    E --> F[Stop App]
    F --> G[Copy Files]
    G --> H[Install Deps]
    H --> I[Run Migrations]
    I --> J[Restart App]
    J --> K[Health Check]
```

---

## 2️⃣ Setup da VPS

### 2.1 – Executar Script de Setup

```bash
# 1. Conectar na VPS como root
ssh root@SEU_IP_VPS

# 2. Fazer upload do script setup-vps.sh
# (ou criar diretamente na VPS copiando do repositório)

# 3. Executar script de setup
bash setup-vps.sh
```

**O script irá:**
- ✅ Instalar PostgreSQL 15
- ✅ Instalar Redis
- ✅ Instalar Node.js 18 via nvm
- ✅ Instalar Yarn e PM2
- ✅ Instalar Nginx
- ✅ Instalar Certbot
- ✅ Configurar Firewall (UFW)
- ✅ Criar usuário `boxhub`
- ✅ Criar diretórios necessários
- ✅ Configurar backups automáticos

### 2.2 – Configurar Banco de Dados

```bash
# Conectar como boxhub
ssh boxhub@SEU_IP_VPS

# Criar banco e usuário
sudo -u postgres psql

CREATE DATABASE boxhub_db;
CREATE USER boxhub_user WITH PASSWORD 'SUA_SENHA_FORTE_AQUI';
GRANT ALL PRIVILEGES ON DATABASE boxhub_db TO boxhub_user;
ALTER USER boxhub_user CREATEDB;
\q

# Testar conexão
psql -U boxhub_user -d boxhub_db -h localhost
```

### 2.3 – Configurar .env na VPS

```bash
# Conectar como boxhub
ssh boxhub@SEU_IP_VPS

# Criar arquivo .env
nano /home/boxhub/boxhub-api/.env
```

**Conteúdo do `.env`:**
```env
DATABASE_URL="postgresql://boxhub_user:SUA_SENHA@localhost:5432/boxhub_db?schema=public"
SHADOW_DATABASE_URL="postgresql://boxhub_user:SUA_SENHA@localhost:5432/boxhub_db_shadow?schema=public"
REDIS_HOST="localhost"
REDIS_PASSWORD="SUA_SENHA_REDIS"
REDIS_PORT=6379
JWT_SECRET="SUA_CHAVE_JWT_LONGA_E_SEGURA"
FRONTEND_URL_LOCAL="http://localhost:3000"
FRONTEND_URL_PROD="https://seu-dominio.com"
PORT=3000
NODE_ENV=production
```

```bash
# Proteger arquivo .env
chmod 600 /home/boxhub/boxhub-api/.env
```

---

## 3️⃣ Configurar GitHub Secrets

### 3.1 – Gerar Chave SSH na VPS

```bash
# Conectar como boxhub
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

### 3.2 – Adicionar Secrets no GitHub

1. **Acesse:** `https://github.com/SEU_USUARIO/boxhub-nest-api/settings/secrets/actions`

2. **Clique em:** "New repository secret"

3. **Adicione os secrets:**

| Secret Name | Valor | Exemplo |
|------------|-------|---------|
| `VPS_SSH_PRIVATE_KEY` | Conteúdo completo de `~/.ssh/github_actions` | `-----BEGIN OPENSSH PRIVATE KEY-----...` |
| `VPS_HOST` | IP da sua VPS | `123.45.67.89` |
| `VPS_USER` | Usuário SSH | `boxhub` |
| `DOMAIN` | Domínio principal (sem http/https) | `seu-dominio.com` |

**Como copiar a chave privada:**
```bash
# Na VPS
cat ~/.ssh/github_actions
# Copie TODO o conteúdo, incluindo -----BEGIN e -----END
```

---

## 4️⃣ Primeiro Deploy

### 4.1 – Testar Conexão SSH

```bash
# No seu computador local, testar se consegue conectar
# (se você tiver a chave privada)
ssh -i ~/.ssh/github_actions boxhub@SEU_IP_VPS

# Ou testar diretamente via GitHub Actions (ver logs)
```

### 4.2 – Fazer Push para Trigger do Workflow

```bash
# No seu repositório local
git add .
git commit -m "feat: configurar CI/CD com GitHub Actions"
git push origin main
```

### 4.3 – Verificar GitHub Actions

1. **Acesse:** `https://github.com/SEU_USUARIO/boxhub-nest-api/actions`

2. **Veja o workflow em execução:**
   - ✅ **Test & Build** deve passar
   - ✅ **Deploy to VPS** deve copiar arquivos
   - ✅ **Deploy script** deve executar
   - ✅ **Health check** deve passar

### 4.4 – Verificar na VPS

```bash
# Conectar na VPS
ssh boxhub@SEU_IP_VPS

# Verificar status da aplicação
pm2 status

# Ver logs
pm2 logs boxhub-api --lines 50

# Testar endpoint
curl http://localhost:3000/health
# Deve retornar: {"status":"ok","timestamp":"..."}
```

---

## 5️⃣ Rotina Diária de Deploy

### 5.1 – Deploy Automático

**Toda vez que você fizer push para `main`:**

1. ✅ GitHub Actions detecta push
2. ✅ Executa testes (lint, test)
3. ✅ Faz build da aplicação
4. ✅ Faz backup do banco de dados (automático)
5. ✅ Para aplicação atual (PM2 stop)
6. ✅ Copia novos arquivos para VPS
7. ✅ Instala dependências de produção
8. ✅ Executa migrations do Prisma
9. ✅ Reinicia aplicação (PM2 restart)
10. ✅ Faz health check para validar

### 5.2 – Deploy Manual

**Para fazer deploy sem push:**

1. **Acesse:** `https://github.com/SEU_USUARIO/boxhub-nest-api/actions`

2. **Clique em:** "Deploy to VPS"

3. **Clique em:** "Run workflow"

4. **Selecione branch:** `main`

5. **Clique em:** "Run workflow"

---

## 🔧 Estrutura dos Arquivos

### `.github/workflows/deploy.yml`
- Workflow do GitHub Actions
- Executa em `push` para `main`
- Testa, builda e faz deploy

### `.github/scripts/deploy.sh`
- Script executado na VPS via SSH
- Faz backup do banco
- Para aplicação atual
- Copia novos arquivos
- Instala dependências
- Executa migrations
- Reinicia aplicação

### `.github/scripts/setup-vps.sh`
- Script de setup inicial da VPS
- Instala todas as dependências
- Configura ambiente completo

---

## ✅ Checklist de Setup

### Antes do primeiro deploy:

- [ ] VPS criada e acessível
- [ ] Script `setup-vps.sh` executado
- [ ] PostgreSQL instalado e banco criado
- [ ] Redis instalado e rodando
- [ ] Node.js 18 instalado via nvm
- [ ] PM2 instalado globalmente
- [ ] Arquivo `.env` configurado na VPS
- [ ] Chave SSH gerada na VPS
- [ ] GitHub Secrets configurados
- [ ] Teste de conexão SSH funcionando

### Após primeiro deploy:

- [ ] GitHub Actions executando com sucesso
- [ ] Aplicação rodando no PM2
- [ ] Health check retornando `{"status":"ok"}`
- [ ] Endpoint acessível (HTTP ou HTTPS)
- [ ] Banco de dados conectado
- [ ] Redis conectado
- [ ] Uploads funcionando

---

## 🚨 Troubleshooting

### GitHub Actions falha ao conectar na VPS

**Solução:**
```bash
# Verificar se a chave SSH está correta
cat ~/.ssh/github_actions

# Verificar authorized_keys
cat ~/.ssh/authorized_keys | grep github_actions

# Testar conexão manualmente (do seu computador)
ssh -i ~/.ssh/github_actions boxhub@SEU_IP_VPS
```

### Deploy falha ao executar migrations

**Solução:**
```bash
# Verificar .env na VPS
cat /home/boxhub/boxhub-api/.env

# Testar conexão com banco
psql -U boxhub_user -d boxhub_db -h localhost

# Executar migrations manualmente
cd /home/boxhub/boxhub-api
npx prisma migrate deploy
```

### Aplicação não inicia após deploy

**Solução:**
```bash
# Ver logs do PM2
pm2 logs boxhub-api --lines 100

# Verificar se arquivos foram copiados
ls -la /home/boxhub/boxhub-api/dist/

# Verificar se .env existe
ls -la /home/boxhub/boxhub-api/.env

# Reiniciar manualmente
pm2 restart boxhub-api
```

### Health check falha

**Solução:**
```bash
# Verificar se aplicação está rodando
pm2 status

# Testar endpoint localmente
curl http://localhost:3000/health

# Ver logs
pm2 logs boxhub-api --lines 50
```

---

## 📊 Monitoramento

### Ver status da aplicação:
```bash
pm2 status
pm2 logs boxhub-api
pm2 monit
```

### Ver uso de recursos:
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

### Deploy de nova versão:

```bash
# Apenas fazer push para main
git add .
git commit -m "feat: nova funcionalidade"
git push origin main

# GitHub Actions fará o resto automaticamente!
```

### Rollback manual (se necessário):

```bash
# Na VPS
cd /home/boxhub/boxhub-api

# Ver backups disponíveis
ls -la /home/boxhub/backups/

# Restaurar backup do banco (se necessário)
# Restaurar arquivos de backup da aplicação
# Reiniciar PM2
pm2 restart boxhub-api
```

---

## 🎯 Próximos Passos (Opcional)

1. **Configurar staging environment** (deploy para staging antes de main)
2. **Configurar notificações** (email/Slack quando deploy falhar)
3. **Configurar monitoramento** (Sentry, LogRocket)
4. **Configurar rollback automático** em caso de falha no health check
5. **Configurar CDN** para uploads (Cloudflare R2, AWS S3)

---

**✅ Pronto!** Agora você tem CI/CD completo e automatizado! 🚀

**Fluxo completo:** Push → Test → Build → Deploy → Health Check → ✅ Produção

