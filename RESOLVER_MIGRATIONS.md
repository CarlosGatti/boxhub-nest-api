# 🔧 Resolver Problemas de Migrations

## Problema

As migrations estão falhando porque o banco de dados está em estado inconsistente. A migration `20250101000000_add_discart_item_category_enum` está tentando modificar a tabela `DiscartItem` que não existe.

## Soluções

### Opção 1: Marcar migrations antigas como aplicadas (RECOMENDADO)

Se o banco já tem os dados corretos mas as migrations não foram marcadas como aplicadas:

```bash
# Marcar migrations antigas como aplicadas (uma por uma)
npx prisma migrate resolve --applied 20250101000000_add_discart_item_category_enum
npx prisma migrate resolve --applied 20250101000001_refactor_categories_unified_enum
npx prisma migrate resolve --applied 20250124120000_add_contact_phone_and_donated_status
npx prisma migrate resolve --applied 20250124130000_add_comments_and_ratings
npx prisma migrate resolve --applied 20251119001739_baseline
npx prisma migrate resolve --applied 20251124151554_add_discart_item_category_enum
npx prisma migrate resolve --applied 20251124154127_refactor_categories_unified_enum
npx prisma migrate resolve --applied 20251128225159_add_contact_phone_and_donated_status
npx prisma migrate resolve --applied 20251129130414_add_comments_and_ratings

# Depois aplicar apenas a migration de apps
npx prisma migrate deploy
```

### Opção 2: Usar db push (RÁPIDO mas não cria migration)

Se você só precisa criar as tabelas App e UserAppAccess:

```bash
# Isso sincroniza o schema com o banco sem usar migrations
npx prisma db push

# Depois executar o seed
npx ts-node prisma/seed.apps.ts
```

### Opção 3: Criar migration apenas para App e UserAppAccess

Se você quer criar uma migration limpa apenas para as novas tabelas:

```bash
# Criar migration apenas para App e UserAppAccess
npx prisma migrate dev --name add_apps_multiapp_only --create-only

# Editar a migration criada para remover referências a tabelas que não existem
# Depois aplicar:
npx prisma migrate deploy
```

## Verificar Estado Atual

```bash
# Ver status das migrations
npx prisma migrate status

# Ver quais tabelas existem no banco
npx prisma db execute --stdin <<< "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' ORDER BY table_name;"
```

## Recomendação

Para produção, use a **Opção 2 (`db push`)** se você só precisa criar as tabelas App e UserAppAccess rapidamente:

```bash
npx prisma db push
npx ts-node prisma/seed.apps.ts
pm2 restart khub
```

Isso é seguro porque:
- ✅ Não modifica tabelas existentes
- ✅ Apenas cria as novas tabelas App e UserAppAccess
- ✅ Não mexe nas migrations antigas

