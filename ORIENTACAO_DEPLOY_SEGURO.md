# 🛡️ Orientação: Deploy Seguro para Produção

## ⚠️ IMPORTANTE: Proteger Dados de Produção

Antes de fazer qualquer mudança no deploy, vamos entender o que está acontecendo e garantir que **NENHUM dado será perdido**.

## Situação Atual

### O que temos:
1. ✅ Schema Prisma atualizado com `App` e `UserAppAccess`
2. ✅ Seed criado (`prisma/seed.apps.ts`)
3. ✅ Código backend atualizado para multi-app
4. ⚠️ Migration `20250130000000_add_apps_multiapp` existe mas pode ter problemas

### O problema:
- O erro do shadow database indica que a migration não pode ser validada
- Mas isso **NÃO significa** que vai perder dados!

## Análise de Segurança

### ✅ O que é SEGURO fazer:

1. **`npx prisma db push`** - SEGURO
   - ✅ Apenas cria/modifica tabelas que não existem
   - ✅ Não apaga dados existentes
   - ✅ Não usa shadow database
   - ⚠️ Mas não cria histórico de migrations

2. **`npx prisma migrate deploy`** - SEGURO (se migration estiver correta)
   - ✅ Aplica apenas migrations pendentes
   - ✅ Não modifica dados existentes
   - ✅ Mantém histórico
   - ⚠️ Pode falhar se migration estiver malformada

3. **`npx ts-node prisma/seed.apps.ts`** - SEGURO
   - ✅ Usa `skipDuplicates: true`
   - ✅ Não apaga nada
   - ✅ Apenas insere se não existir

### ❌ O que NÃO fazer:

- ❌ `prisma migrate reset` - **APAGA TUDO!**
- ❌ `prisma db push --force-reset` - **APAGA TUDO!**
- ❌ Modificar migrations já aplicadas em produção

## Plano de Ação Seguro

### Opção 1: Usar `db push` (MAIS SEGURO para este caso)

**Vantagens:**
- ✅ Não usa shadow database (evita o erro)
- ✅ Apenas cria as novas tabelas (`App` e `UserAppAccess`)
- ✅ Não mexe em tabelas existentes
- ✅ Não mexe em dados existentes

**Como fazer:**
```bash
# No servidor, manualmente:
npx prisma generate
npx prisma db push  # Cria apenas App e UserAppAccess
npx ts-node prisma/seed.apps.ts  # Cria os apps
npx ts-node scripts/backfill-user-app-access.ts  # Vincula usuários existentes
pm2 restart khub
```

**Depois**, atualizar o GitHub Actions para usar `db push` também.

### Opção 2: Corrigir a Migration (MAIS TRABALHOSO)

**Passos:**
1. Verificar o conteúdo da migration `20250130000000_add_apps_multiapp`
2. Se ela tentar modificar tabelas que não existem, criar uma nova migration limpa
3. Marcar a antiga como aplicada ou removê-la
4. Aplicar a nova migration

**Risco:** Médio (precisa entender bem o estado do banco)

### Opção 3: Marcar Migration como Aplicada (SE já foi aplicada)

**Se você já executou `db push` no servidor:**
```bash
# Marcar como aplicada para evitar tentar aplicar novamente
npx prisma migrate resolve --applied 20250130000000_add_apps_multiapp
```

## Recomendação: Opção 1 (`db push`)

**Por quê?**
- ✅ Mais simples
- ✅ Mais seguro
- ✅ Evita problemas com shadow database
- ✅ Não mexe em migrations antigas

## Verificação Antes de Qualquer Mudança

### 1. Verificar estado atual do banco:

```sql
-- Verificar se App e UserAppAccess já existem
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
  AND table_name IN ('App', 'UserAppAccess');

-- Verificar se apps já foram criados
SELECT id, code, name FROM "App" ORDER BY code;

-- Verificar quantos usuários existem
SELECT COUNT(*) FROM "User";
```

### 2. Verificar estado das migrations:

```bash
npx prisma migrate status
```

### 3. Backup do banco (RECOMENDADO):

```bash
# Fazer backup antes de qualquer mudança
pg_dump -h localhost -U seu_usuario -d khub > backup_antes_deploy_$(date +%Y%m%d_%H%M%S).sql
```

## Próximos Passos Sugeridos

1. ✅ **Fazer backup do banco** (se ainda não fez)
2. ✅ **Verificar estado atual** (tabelas existentes, migrations aplicadas)
3. ✅ **Decidir qual opção usar** (recomendo Opção 1)
4. ✅ **Testar localmente primeiro** (já fizemos isso)
5. ✅ **Aplicar no servidor manualmente** (antes de atualizar GitHub Actions)
6. ✅ **Verificar que funcionou**
7. ✅ **Depois atualizar GitHub Actions** (se necessário)

## Perguntas para Você Responder

Antes de modificar o deploy, preciso saber:

1. **As tabelas `App` e `UserAppAccess` já existem no servidor?**
   - Se SIM → apenas executar seed
   - Se NÃO → precisa criar (db push ou migrate)

2. **Você já executou `db push` ou `migrate deploy` no servidor?**
   - Se SIM → tabelas já existem
   - Se NÃO → precisa criar

3. **Você tem backup recente do banco?**
   - Se NÃO → fazer backup primeiro!

4. **Prefere fazer manualmente primeiro ou atualizar o GitHub Actions?**
   - Manualmente = mais controle, mais seguro
   - GitHub Actions = automático, mas menos controle

## Minha Recomendação Final

**FAZER MANUALMENTE PRIMEIRO:**

1. Conectar no servidor via SSH
2. Executar comandos manualmente:
   ```bash
   cd /home/boxhub/boxhub-api
   npx prisma generate
   npx prisma db push
   npx ts-node prisma/seed.apps.ts
   npx ts-node scripts/backfill-user-app-access.ts
   pm2 restart khub
   ```
3. Verificar que funcionou
4. **DEPOIS** atualizar GitHub Actions para usar `db push`

Isso dá mais controle e segurança! 🛡️

