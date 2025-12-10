# 🔧 Resolver Erro de Shadow Database

## Problema

O erro `P3006` ocorre quando o Prisma tenta validar uma migration usando um shadow database que não tem as tabelas necessárias.

## Solução: Usar `db push` ao invés de `migrate dev`

Como já sincronizamos o schema com `db push` localmente, vamos usar a mesma abordagem no servidor.

### No Servidor (Produção)

```bash
# 1. Gerar Prisma Client
npx prisma generate

# 2. Sincronizar schema (cria apenas App e UserAppAccess)
npx prisma db push

# 3. Executar seed
npx ts-node prisma/seed.apps.ts

# 4. Reiniciar servidor
pm2 restart khub
```

### Alternativa: Marcar Migration como Aplicada

Se você já aplicou a migration manualmente ou via `db push`, pode marcar como aplicada:

```bash
npx prisma migrate resolve --applied 20250130000000_add_apps_multiapp
```

## Por que `db push` é melhor aqui?

- ✅ Não usa shadow database
- ✅ Sincroniza diretamente com o banco de produção
- ✅ Apenas cria/modifica o que é necessário
- ✅ Evita problemas com migrations antigas

## Atualizar GitHub Actions (Opcional)

Se quiser atualizar o workflow de deploy para usar `db push`:

```yaml
- name: Deploy to VPS
  uses: appleboy/ssh-action@v0.1.7
  with:
    script: |
      cd /home/boxhub/boxhub-api || cd /var/www/khub
      git pull origin main
      npm ci --production=false
      npm run build
      npx prisma generate
      npx prisma db push  # ← Mudar de migrate deploy para db push
      npx ts-node prisma/seed.apps.ts || echo "Seed may already be applied"
      pm2 restart khub || pm2 start ecosystem.config.js --env homolog
      pm2 save
```

## Verificação

Após executar no servidor:

```sql
-- Verificar se as tabelas foram criadas
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
  AND table_name IN ('App', 'UserAppAccess');

-- Verificar apps criados
SELECT id, code, name FROM "App" ORDER BY code;
```

