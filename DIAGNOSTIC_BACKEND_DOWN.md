# 🔧 Diagnóstico: Backend Não Está Respondendo (502 Bad Gateway)

## 🚨 Problema

O frontend está recebendo erro **502 Bad Gateway** ao tentar acessar `/graphql`, indicando que o backend não está respondendo.

## 🔍 Possíveis Causas

1. **PM2 não está rodando**
2. **Servidor crashando ao iniciar** (erro de schema GraphQL ou runtime)
3. **Migration não aplicada** (tabelas Comment/Rating não existem)
4. **Prisma Client desatualizado** (tipos não gerados)

## ✅ Solução Passo a Passo

### 1. Conectar no Servidor

```bash
ssh root@104.251.216.111
# ou
ssh boxhub@104.251.216.111
```

### 2. Verificar Status do PM2

```bash
pm2 status
pm2 logs khub --lines 50
```

**Se PM2 não estiver rodando:**
```bash
cd /home/boxhub/boxhub-api
pm2 start ecosystem.config.js
pm2 save
```

### 3. Verificar Erros nos Logs

```bash
# Ver últimos logs
pm2 logs khub --lines 100

# Ver erros específicos
pm2 logs khub --err --lines 50
```

**Procurar por:**
- `Error: Schema must contain uniquely named types`
- `Error: Table "Comment" does not exist`
- `Error: Cannot find module`
- Qualquer erro de GraphQL schema

### 4. Aplicar Migrations (se necessário)

```bash
cd /home/boxhub/boxhub-api

# Verificar status das migrations
npx prisma migrate status

# Aplicar migrations pendentes
npx prisma migrate deploy

# Regenerar Prisma Client
npx prisma generate
```

### 5. Verificar se Tabelas Existem

```bash
# Conectar ao banco
psql -U seu_usuario -d khub

# Verificar tabelas
\dt

# Verificar se Comment e Rating existem
SELECT * FROM "Comment" LIMIT 1;
SELECT * FROM "Rating" LIMIT 1;

\q
```

### 6. Rebuild e Restart

```bash
cd /home/boxhub/boxhub-api

# Fazer pull das mudanças
git pull origin main

# Instalar dependências (se necessário)
yarn install

# Aplicar migrations
n Prisma Client
npx prisma generate

# Build
yarn build

# Verificar se build foi bem-sucedido
ls -la dist/src/main.js

# Restart PM2
pm2 restart khub

# Ver logs
pm2 logs khub --lines 20
```

### 7. Verificar se Servidor Está Escutando

```bash
# Verificar se porta 3000 está em uso
netstat -tulpn | grep 3000
# ou
lsof -i :3000

# Testar endpoint localmente
curl http://localhost:3000/graphql -X POST -H "Content-Type: application/json" -d '{"query":"{ __typename }"}'
```

### 8. Verificar Nginx (se aplicável)

```bash
# Verificar status do Nginx
sudo systemctl status nginx

# Ver logs do Nginx
sudo tail -f /var/log/nginx/error.log

# Testar configuração
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

## 🎯 Comandos Rápidos (Copy-Paste)

```bash
# 1. Ir para diretório
cd /home/boxhub/boxhub-api

# 2. Ver status PM2
pm2 status

# 3. Ver logs
pm2 logs khub --lines 50

# 4. Aplicar migrations
npx prisma migrate deploy

# 5. Regenerar Prisma
npx prisma generate

# 6. Build
yarn build

# 7. Restart
pm2 restart khub

# 8. Verificar
pm2 logs khub --lines 20
curl http://localhost:3000/graphql -X POST -H "Content-Type: application/json" -d '{"query":"{ __typename }"}'
```

## 🔧 Se o Problema Persistir

### Verificar Erro Específico de Schema GraphQL

Se o erro for sobre tipo duplicado "Comment":

1. **Verificar se há DTO manual ainda:**
```bash
find /home/boxhub/boxhub-api/src -name "*comment*.dto.ts"
```

2. **Verificar imports no resolver:**
```bash
grep -r "from.*comment.dto" /home/boxhub/boxhub-api/src
```

3. **Garantir que está usando tipo gerado:**
```bash
grep -r "from.*@generated/comment" /home/boxhub/boxhub-api/src
```

### Limpar e Rebuild Completo

```bash
cd /home/boxhub/boxhub-api

# Parar PM2
pm2 stop khub

# Limpar build
rm -rf dist
rm -rf node_modules/.prisma
rm -rf @generated

# Reinstalar (se necessário)
yarn install

# Regenerar tudo
npx prisma generate

# Build
yarn build

# Iniciar
pm2 start ecosystem.config.js
pm2 save
```

## 📊 Checklist de Diagnóstico

- [ ] PM2 está rodando?
- [ ] Logs mostram algum erro?
- [ ] Migrations aplicadas?
- [ ] Prisma Client gerado?
- [ ] Build passou?
- [ ] Servidor escutando na porta 3000?
- [ ] Nginx configurado corretamente?
- [ ] Tabelas Comment e Rating existem no banco?

## 🚀 Solução Mais Provável

O problema mais comum após adicionar novos models é:

1. **Migration não aplicada** → `npx prisma migrate deploy`
2. **Prisma Client desatualizado** → `npx prisma generate`
3. **Build não atualizado** → `yarn build`
4. **PM2 não reiniciado** → `pm2 restart khub`

Execute esses comandos na ordem acima e o servidor deve voltar a funcionar.

