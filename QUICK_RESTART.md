# 🚀 Reinicialização Rápida do Servidor - Discart-me

## ⚡ Comandos Rápidos (Copie e Cole no Servidor)

### 1. Conectar ao Servidor

```bash
ssh root@104.251.216.111
```

### 2. Ir para o Diretório

```bash
cd /var/www/khub
# ou
cd /home/boxhub/boxhub-api
```

### 3. Executar Script de Reinicialização Completa

```bash
# Se o script já existe no servidor:
bash restart-complete.sh

# OU copie o script para o servidor primeiro:
# (do seu computador local)
scp restart-complete.sh root@104.251.216.111:/var/www/khub/
# (depois no servidor)
chmod +x restart-complete.sh
./restart-complete.sh
```

### 4. OU Reiniciar Manualmente (Comandos Individuais)

```bash
# 1. Verificar .env
cat .env | grep FRONTEND_URL

# 2. Build
npm run build

# 3. Regenerar Prisma
npx prisma generate

# 4. Parar e deletar PM2
pm2 stop khub
pm2 delete khub

# 5. Iniciar novamente
pm2 start ecosystem.config.js --env homolog

# 6. Salvar
pm2 save

# 7. Verificar
pm2 status
pm2 logs khub --lines 50
```

---

## 🔍 Verificar se Funcionou

```bash
# Status
pm2 status

# Logs
pm2 logs khub --lines 50

# Testar API
curl http://localhost:3000/health
```

---

## ❌ Se Ainda Não Funcionar

```bash
# Ver logs de erro
pm2 logs khub --err --lines 100

# Ver informações detalhadas
pm2 describe khub

# Verificar variáveis de ambiente
pm2 env khub

# Verificar se o .env está correto
cat .env
```

---

**Dica:** O problema mais comum é que o PM2 não recarrega o `.env` com apenas `restart`. Use `delete` + `start` para garantir que as variáveis sejam recarregadas.
