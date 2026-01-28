# 🔄 Guia de Reinicialização do Servidor - Discart-me API

## 🚨 Problema: API retornando valores default

Quando você adiciona novas variáveis de ambiente ou faz deploy, o PM2 **não recarrega automaticamente** as variáveis. É necessário reiniciar o processo corretamente.

---

## 📋 Passo a Passo para Reiniciar o Servidor

### 1. Conectar ao Servidor VPS

```bash
ssh root@104.251.216.111
# ou
ssh boxhub@104.251.216.111
```

### 2. Navegar para o Diretório do Projeto

```bash
# Verificar qual diretório existe:
ls -la /var/www/khub
ls -la /home/boxhub/boxhub-api

# Ir para o diretório correto:
cd /var/www/khub
# OU
cd /home/boxhub/boxhub-api
```

### 3. Verificar Variáveis de Ambiente

```bash
# Verificar se o arquivo .env existe e tem as variáveis corretas:
cat .env | grep -i discart
cat .env | grep -i FRONTEND_URL
cat .env | grep -i DATABASE_URL

# Verificar TODAS as variáveis importantes:
cat .env
```

### 4. Verificar Status do PM2

```bash
# Ver status atual:
pm2 status

# Ver logs recentes:
pm2 logs khub --lines 50

# Ver informações detalhadas do processo:
pm2 describe khub
```

### 5. **REINICIAR O SERVIDOR CORRETAMENTE**

#### Opção A: Usar o Script de Restart (Recomendado)

```bash
# Se o script existe:
bash restart-server.sh

# Ou executar manualmente:
chmod +x restart-server.sh
./restart-server.sh
```

#### Opção B: Reiniciar Manualmente (Passo a Passo)

```bash
# 1. Parar o processo PM2
pm2 stop khub

# 2. Fazer build do projeto (IMPORTANTE após mudanças no código)
npm run build

# 3. Regenerar Prisma Client (se houver mudanças no schema)
npx prisma generate

# 4. Deletar o processo antigo (para garantir que recarrega .env)
pm2 delete khub

# 5. Iniciar novamente com o ecosystem.config.js (carrega .env)
pm2 start ecosystem.config.js --env homolog

# OU se não tiver env_homolog configurado:
pm2 start ecosystem.config.js

# 6. Salvar a configuração do PM2
pm2 save
```

#### Opção C: Reload (Mais Rápido, mas pode não recarregar .env)

```bash
# Reload mantém o processo vivo mas recarrega o código
pm2 reload khub

# Se não funcionar, use restart completo:
pm2 restart khub
```

### 6. Verificar se Funcionou

```bash
# Ver status:
pm2 status

# Ver logs em tempo real:
pm2 logs khub --lines 100

# Verificar se o processo está rodando:
pm2 describe khub

# Testar a API:
curl http://localhost:3000/health
# ou
curl https://api.discart.me/health
```

### 7. Verificar Variáveis de Ambiente no Processo

```bash
# Ver variáveis de ambiente que o processo está usando:
pm2 env khub

# Ou ver informações completas:
pm2 show khub
```

---

## 🔍 Diagnóstico: Por que está retornando valores default?

### Verificar se o .env está sendo carregado:

```bash
# No servidor, verificar o arquivo .env:
cd /var/www/khub  # ou /home/boxhub/boxhub-api
cat .env

# Verificar se as variáveis estão definidas:
grep -i "FRONTEND_URL" .env
grep -i "DISCART" .env
grep -i "DATABASE_URL" .env
```

### Verificar logs do PM2 para erros:

```bash
# Ver últimos 100 logs:
pm2 logs khub --lines 100 --nostream

# Ver logs em tempo real:
pm2 logs khub

# Ver apenas erros:
pm2 logs khub --err --lines 50
```

### Verificar se o código está atualizado:

```bash
# Ver último commit:
git log -1

# Ver se há mudanças não commitadas:
git status

# Fazer pull se necessário:
git pull origin main
```

---

## 🛠️ Solução Completa (Script Automatizado)

Crie um arquivo `restart-complete.sh` no servidor:

```bash
#!/bin/bash
set -e

echo "🔄 Reiniciando servidor Discart-me API..."

# Ir para o diretório
cd /var/www/khub || cd /home/boxhub/boxhub-api

# Verificar .env
echo "📋 Verificando variáveis de ambiente..."
if [ ! -f .env ]; then
    echo "❌ ERRO: Arquivo .env não encontrado!"
    exit 1
fi

# Fazer pull (se necessário)
echo "📥 Fazendo pull do repositório..."
git pull origin main || echo "⚠️  Pull falhou ou não há mudanças"

# Instalar dependências (se necessário)
echo "📦 Verificando dependências..."
npm install --production=false

# Regenerar Prisma
echo "🔄 Regenerando Prisma Client..."
npx prisma generate

# Build
echo "🔨 Fazendo build..."
npm run build

# Parar PM2
echo "🛑 Parando PM2..."
pm2 stop khub || true
pm2 delete khub || true

# Iniciar PM2 com .env
echo "🚀 Iniciando PM2..."
pm2 start ecosystem.config.js --env homolog || pm2 start ecosystem.config.js

# Salvar PM2
pm2 save

# Mostrar status
echo ""
echo "✅ Servidor reiniciado!"
echo ""
pm2 status
echo ""
echo "📋 Últimos logs:"
pm2 logs khub --lines 20 --nostream
```

**Tornar executável e rodar:**
```bash
chmod +x restart-complete.sh
./restart-complete.sh
```

---

## 🚨 Problemas Comuns e Soluções

### Problema 1: PM2 não recarrega .env

**Solução:**
```bash
# Deletar e recriar o processo:
pm2 delete khub
pm2 start ecosystem.config.js --env homolog
pm2 save
```

### Problema 2: Build falha

**Solução:**
```bash
# Limpar e rebuildar:
rm -rf dist node_modules/.cache
npm run build
```

### Problema 3: Prisma Client desatualizado

**Solução:**
```bash
npx prisma generate
npm run build
pm2 restart khub
```

### Problema 4: Porta já em uso

**Solução:**
```bash
# Verificar o que está usando a porta:
lsof -i :3000
# ou
netstat -tulpn | grep 3000

# Matar o processo se necessário:
kill -9 <PID>
```

### Problema 5: Variáveis não aparecem no processo

**Solução:**
```bash
# Verificar se o .env está no diretório correto:
pwd
ls -la .env

# Verificar se o PM2 está lendo do diretório correto:
pm2 describe khub | grep "cwd"

# Se o cwd estiver errado, ajustar no ecosystem.config.js
```

---

## 📝 Checklist de Reinicialização

- [ ] Conectado ao servidor via SSH
- [ ] Navegado para o diretório correto (`/var/www/khub` ou `/home/boxhub/boxhub-api`)
- [ ] Verificado que `.env` existe e tem as variáveis corretas
- [ ] Feito `git pull` se houver mudanças no código
- [ ] Executado `npm install` se houver novas dependências
- [ ] Executado `npx prisma generate` se houver mudanças no schema
- [ ] Executado `npm run build`
- [ ] Parado o PM2: `pm2 stop khub`
- [ ] Deletado o processo: `pm2 delete khub`
- [ ] Iniciado novamente: `pm2 start ecosystem.config.js --env homolog`
- [ ] Salvo: `pm2 save`
- [ ] Verificado status: `pm2 status`
- [ ] Verificado logs: `pm2 logs khub --lines 50`
- [ ] Testado a API: `curl http://localhost:3000/health`

---

## 🔗 Comandos Rápidos de Referência

```bash
# Status do PM2
pm2 status

# Logs em tempo real
pm2 logs khub

# Reiniciar rápido (pode não recarregar .env)
pm2 restart khub

# Reiniciar completo (recomendado após mudanças no .env)
pm2 delete khub && pm2 start ecosystem.config.js --env homolog

# Ver variáveis de ambiente do processo
pm2 env khub

# Ver informações detalhadas
pm2 describe khub

# Verificar saúde da API
curl http://localhost:3000/health
curl https://api.discart.me/health
```

---

## 💡 Dica Importante

**Sempre que adicionar novas variáveis de ambiente:**
1. Adicione ao arquivo `.env` no servidor
2. **Delete e recrie o processo PM2** (não apenas restart)
3. Verifique os logs para confirmar que está funcionando

**O PM2 só carrega variáveis de ambiente na inicialização. Um `restart` pode não recarregar o `.env` atualizado.**

---

**Pronto!** Siga esses passos e o servidor deve voltar a funcionar corretamente.
