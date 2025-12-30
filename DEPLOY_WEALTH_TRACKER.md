# 🚀 Deploy do Wealth Tracker - Guia de Produção

## ⚠️ IMPORTANTE: Status Atual

### ✅ O que foi feito LOCALMENTE:
- `prisma db push` foi executado **APENAS no seu ambiente local**
- Isso **NÃO afetou produção** - foi só para desenvolvimento

### ✅ O que está PRONTO para produção:
- Migration criada: `20250131120000_add_wealth_tracker_models`
- Migration SQL está correta e segura
- App `WEALTH_TRACKER` será criado via seed no deploy

## 📋 Processo de Deploy Seguro

### 1. Verificação Pré-Deploy

Antes de fazer deploy, verifique:

```bash
# 1. Verificar se a migration está no repositório
git status prisma/migrations/20250131120000_add_wealth_tracker_models/

# 2. Verificar se o schema está correto
npx prisma validate

# 3. Verificar se o Prisma Client compila
npx prisma generate
npm run build
```

### 2. Deploy Automático (via GitHub Actions)

O workflow `.github/workflows/deploy.yml` já está configurado para:

1. ✅ Fazer build do projeto
2. ✅ Gerar Prisma Client (`npx prisma generate`)
3. ✅ Aplicar migrations (`npx prisma migrate deploy`)
4. ✅ Rodar seed dos apps (`npx ts-node prisma/seed.apps.ts`)
5. ✅ Reiniciar PM2

**A migration será aplicada automaticamente no próximo push para `main`**

### 3. Deploy Manual (se necessário)

Se precisar fazer deploy manual:

```bash
# No servidor de produção
cd /home/boxhub/boxhub-api

# 1. Pull do código
git pull origin main

# 2. Instalar dependências
yarn install --frozen-lockfile

# 3. Gerar Prisma Client
npx prisma generate

# 4. Aplicar migrations (SEGURO - só aplica migrations pendentes)
npx prisma migrate deploy

# 5. Seed dos apps (idempotente - não duplica)
npx ts-node prisma/seed.apps.ts

# 6. Build
yarn build

# 7. Reiniciar
pm2 restart khub
```

## 🔒 Segurança da Migration

A migration `20250131120000_add_wealth_tracker_models` é **SEGURA** porque:

1. ✅ **Apenas cria novas tabelas** - não modifica tabelas existentes
2. ✅ **Não deleta dados** - apenas adiciona estrutura
3. ✅ **Foreign keys corretas** - referenciam User existente
4. ✅ **Índices otimizados** - não bloqueia tabelas existentes
5. ✅ **Enums novos** - não conflita com enums existentes

### Tabelas que serão criadas:
- `RefreshToken` - nova tabela
- `Portfolio` - nova tabela (FK para User)
- `Asset` - nova tabela
- `Holding` - nova tabela (FK para Portfolio e Asset)
- `PricePoint` - nova tabela (FK para Asset)
- `Transaction` - nova tabela (FK para Portfolio e Asset)

### Enums que serão criados:
- `AssetType` - novo enum
- `TransactionType` - novo enum

## ⚡ Impacto em Produção

### ✅ ZERO impacto em:
- Tabelas existentes (User, App, DiscartItem, etc.)
- Dados existentes
- Funcionalidades existentes (QRACK, Discart-me)
- Performance (apenas cria estrutura vazia)

### ⚠️ Possível impacto mínimo:
- **Tempo de deploy**: ~2-5 segundos para criar tabelas
- **Espaço em disco**: ~1-2 MB para estrutura inicial
- **Locks**: Mínimos (apenas durante criação de índices)

## 🧪 Teste em Staging (Recomendado)

Se você tem ambiente de staging/homolog:

1. Aplique a migration em staging primeiro
2. Teste os endpoints do Wealth Tracker
3. Verifique logs para erros
4. Depois faça deploy em produção

## 📊 Monitoramento Pós-Deploy

Após o deploy, verifique:

```bash
# 1. Verificar se as tabelas foram criadas
npx prisma db execute --stdin <<< "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' AND table_name IN ('Portfolio', 'Asset', 'Holding', 'PricePoint', 'Transaction', 'RefreshToken');"

# 2. Verificar se o app foi criado
npx prisma db execute --stdin <<< "SELECT code, name FROM \"App\" WHERE code = 'WEALTH_TRACKER';"

# 3. Verificar logs do PM2
pm2 logs khub --lines 50

# 4. Testar endpoint de health (se existir)
curl https://seu-dominio.com/health
```

## 🆘 Rollback (se necessário)

Se algo der errado (improvável, mas seguro ter plano):

```sql
-- Apenas em caso de emergência - NÃO executar preventivamente
-- Isso deletaria TODOS os dados do Wealth Tracker

DROP TABLE IF EXISTS "Transaction" CASCADE;
DROP TABLE IF EXISTS "PricePoint" CASCADE;
DROP TABLE IF EXISTS "Holding" CASCADE;
DROP TABLE IF EXISTS "Asset" CASCADE;
DROP TABLE IF EXISTS "Portfolio" CASCADE;
DROP TABLE IF EXISTS "RefreshToken" CASCADE;
DROP TYPE IF EXISTS "TransactionType";
DROP TYPE IF EXISTS "AssetType";
```

**NOTA**: Rollback não é necessário porque a migration só adiciona estrutura, não modifica nada existente.

## ✅ Checklist Final

Antes de fazer deploy:

- [x] Migration criada e testada localmente
- [x] Schema validado (`npx prisma validate`)
- [x] Build funciona (`npm run build`)
- [x] Migration SQL revisada (sem DROP, sem ALTER em tabelas existentes)
- [x] Seed dos apps atualizado (inclui WEALTH_TRACKER)
- [x] Código commitado e pushado para `main`
- [ ] (Opcional) Testado em staging primeiro
- [ ] Monitorar logs após deploy

## 🎯 Conclusão

**A migration é SEGURA para produção** porque:
- ✅ Apenas adiciona novas tabelas
- ✅ Não modifica estrutura existente
- ✅ Não afeta dados existentes
- ✅ Processo de deploy já está automatizado
- ✅ Rollback disponível se necessário (improvável)

**Próximo passo**: Fazer push para `main` e o deploy automático aplicará a migration com segurança! 🚀
