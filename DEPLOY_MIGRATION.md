# 🚀 Guia de Deploy da Migration - Little Library

## ⚠️ IMPORTANTE: Ordem de Operações

A migration precisa ser aplicada **ANTES** do código ser deployado, pois o código já espera o enum `DiscartItemCategory` existir.

## 📋 Processo Completo

### 1️⃣ **Testar Localmente Primeiro** (Recomendado)

```bash
# Aplicar a migration no banco local para testar
npx prisma migrate dev

# Verificar se funcionou
npx prisma studio
# Ou verificar via query:
# SELECT * FROM "DiscartItem" LIMIT 5;
```

### 2️⃣ **Commit e Push das Mudanças**

```bash
# Adicionar todos os arquivos da migration
git add prisma/schema.prisma
git add prisma/migrations/
git add src/
git add package.json

# Commit
git commit -m "feat: Add DiscartItemCategory enum for Little Library feature"

# Push
git push origin main
```

### 3️⃣ **Aplicar Migration no Servidor** ⚠️ CRÍTICO

**IMPORTANTE:** A migration DEVE ser aplicada ANTES do deploy do código!

#### Opção A: Via SSH (Recomendado)

```bash
# Conectar ao servidor
ssh root@104.251.216.111

# Ir para o diretório do projeto
cd /var/www/khub

# Fazer pull das mudanças (só o schema e migration, não precisa build ainda)
git pull origin main

# Aplicar a migration
npx prisma migrate deploy

# Verificar se aplicou corretamente
npx prisma migrate status
```

#### Opção B: Usando o Script Atualizado

O script `deploy-vps.sh` foi atualizado para aplicar migrations automaticamente.

### 4️⃣ **Deploy do Código**

Depois que a migration foi aplicada com sucesso:

```bash
# No servidor, fazer o deploy completo
cd /var/www/khub
./deploy-vps.sh

# OU manualmente:
git pull origin main
yarn install
yarn build
npx prisma generate  # Regenerar tipos Prisma
pm2 restart khub
```

### 5️⃣ **Verificar se Funcionou**

```bash
# Verificar logs do PM2
pm2 logs khub --lines 50

# Verificar se o enum existe no banco
psql -U seu_usuario -d khub -c "SELECT enumlabel FROM pg_enum WHERE enumtypid = 'DiscartItemCategory'::regtype;"

# Verificar se a coluna foi alterada
psql -U seu_usuario -d khub -c "\d \"DiscartItem\""
```

## 🔍 Verificação Pós-Deploy

### Testar via GraphQL:

```graphql
# Criar um item BOOK
mutation {
  createDiscartItem(data: {
    title: "Test Book"
    description: "Testing Little Library"
    type: DONATE
    category: BOOK
    condition: USED
    contactPhone: "1234567890"
  }) {
    id
    title
    category
  }
}

# Buscar apenas livros
query {
  discartItems(category: BOOK) {
    id
    title
    category
  }
}
```

## ⚠️ Troubleshooting

### Erro: "enum type does not exist"
- A migration não foi aplicada ainda
- Execute: `npx prisma migrate deploy`

### Erro: "column category does not exist"
- A migration não foi aplicada completamente
- Verifique: `npx prisma migrate status`

### Erro no build: "DiscartItemCategory not found"
- Regenerar tipos: `npx prisma generate`
- Rebuild: `yarn build`

## 📝 Checklist de Deploy

- [ ] Migration testada localmente
- [ ] Código commitado e pushed
- [ ] Migration aplicada no servidor (`npx prisma migrate deploy`)
- [ ] Tipos Prisma regenerados (`npx prisma generate`)
- [ ] Build executado com sucesso
- [ ] PM2 reiniciado
- [ ] Testado via GraphQL
- [ ] Verificado logs do PM2

## 🎯 Resumo Rápido

```bash
# 1. No servidor, aplicar migration PRIMEIRO
ssh root@104.251.216.111
cd /var/www/khub
git pull origin main
npx prisma migrate deploy

# 2. Depois fazer deploy do código
./deploy-vps.sh
# OU
yarn install && yarn build && npx prisma generate && pm2 restart khub
```

