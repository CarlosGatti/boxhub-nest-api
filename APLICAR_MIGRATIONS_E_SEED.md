# 📋 Como Aplicar Migrations e Seed

## Problema Identificado

O seed está falhando porque a tabela `App` ainda não existe no banco de dados. Isso acontece porque as migrations ainda não foram aplicadas.

## Solução

### Passo 1: Aplicar Migrations

**Em desenvolvimento (local):**
```bash
npx prisma migrate dev
```

**Em produção (servidor):**
```bash
npx prisma migrate deploy
```

### Passo 2: Executar Seed

Após aplicar as migrations, execute o seed:

```bash
npx ts-node prisma/seed.apps.ts
```

## Verificação

Após aplicar as migrations e executar o seed, verifique:

```sql
-- Verificar se as tabelas foram criadas
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
  AND table_name IN ('App', 'UserAppAccess');

-- Verificar se os apps foram criados
SELECT id, code, name FROM "App" ORDER BY code;
```

## Ordem Correta no Servidor

1. **Fazer deploy do código**
   ```bash
   git pull origin main
   npm ci --production=false
   npm run build
   ```

2. **Aplicar migrations**
   ```bash
   npx prisma generate
   npx prisma migrate deploy
   ```

3. **Executar seed**
   ```bash
   npx ts-node prisma/seed.apps.ts
   ```

4. **Reiniciar servidor**
   ```bash
   pm2 restart khub
   ```

## Importante

⚠️ **NÃO execute `prisma migrate dev` em produção!** Use `prisma migrate deploy` no servidor.

O `migrate dev` cria novas migrations e pode causar problemas em produção. O `migrate deploy` apenas aplica as migrations existentes.

