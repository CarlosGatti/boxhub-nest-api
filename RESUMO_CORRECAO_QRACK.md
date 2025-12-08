# ✅ Resumo: Correção do Registro QRACK

## O que foi corrigido

1. ✅ **Adicionado app QRACK no seed** (`prisma/seed.apps.ts`)
2. ✅ **Removido mapeamento incorreto** (QRACK → BOXHUB)
3. ✅ **Logs detalhados** para diagnosticar problemas
4. ✅ **Scripts SQL** para correção manual

## Ações necessárias no servidor

### 1. Fazer deploy do código atualizado
```bash
git pull origin main
npm run build
npx prisma generate
```

### 2. Executar seed para criar o app QRACK
```bash
npx ts-node prisma/seed.apps.ts
```

### 3. Adicionar acesso ao QRACK para usuário existente
Execute no banco de dados:

```sql
-- Verificar se o app QRACK existe
SELECT id, code, name FROM "App" WHERE code = 'QRACK';

-- Se não existir, criar:
INSERT INTO "App" (code, name, description, "createdAt", "updatedAt")
VALUES ('QRACK', 'Qrack', 'Sistema de gestão de containers e itens com QR Code', NOW(), NOW())
ON CONFLICT (code) DO NOTHING;

-- Adicionar acesso ao QRACK para eduardo.gf@hotmail.com
INSERT INTO "UserAppAccess" ("userId", "appId", "createdAt", "updatedAt")
SELECT 
    u.id,
    a.id,
    NOW(),
    NOW()
FROM "User" u
CROSS JOIN "App" a
WHERE u.email = 'eduardo.gf@hotmail.com'
  AND a.code = 'QRACK'
  AND NOT EXISTS (
      SELECT 1 
      FROM "UserAppAccess" uaa 
      WHERE uaa."userId" = u.id 
        AND uaa."appId" = a.id
  );

-- Verificar se funcionou
SELECT 
    u.email,
    a.code AS app_code,
    a.name AS app_name
FROM "User" u
INNER JOIN "UserAppAccess" uaa ON u.id = uaa."userId"
INNER JOIN "App" a ON uaa."appId" = a.id
WHERE u.email = 'eduardo.gf@hotmail.com'
ORDER BY a.code;
```

### 4. Reiniciar o servidor
```bash
pm2 restart khub
pm2 logs khub --lines 50
```

## Verificação

Após fazer as correções, teste o registro novamente e verifique:

1. **Logs do backend** devem mostrar:
   - `📝 AppCode received from frontend: "QRACK"`
   - `✅ Added access to QRACK for new user`

2. **Resposta do registro** deve incluir:
   ```json
   {
     "user": {
       "id": 3,
       "email": "eduardo.gf@hotmail.com",
       "apps": ["DISCARD_ME", "QRACK"]
     }
   }
   ```

3. **No banco de dados**, o usuário deve ter acesso a ambos os apps:
   - DISCARD_ME
   - QRACK

## Importante para o Frontend

O frontend **DEVE** enviar `appCode: "QRACK"` na mutation `register`:

```graphql
mutation Register($user: RegisterUserInput!, $appCode: String) {
  register(user: $user, appCode: $appCode) {
    user {
      id
      email
      apps
    }
    token
  }
}
```

**Variáveis:**
```json
{
  "user": { ... },
  "appCode": "QRACK"
}
```

## Arquivos criados/modificados

- ✅ `prisma/seed.apps.ts` - Adicionado QRACK
- ✅ `src/user/user.resolver.ts` - Removido mapeamento incorreto, adicionados logs
- ✅ `adicionar-qrack.sql` - Script SQL para adicionar manualmente
- ✅ `INSTRUCOES_QRACK.md` - Guia completo
- ✅ `RESUMO_CORRECAO_QRACK.md` - Este arquivo

## Próximo passo

Execute os comandos acima no servidor e teste o registro novamente. Se ainda não funcionar, verifique os logs do backend para ver o que está sendo recebido do frontend.

