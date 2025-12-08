# 🔧 Correção: Registro no Sistema QRACK

## Problema Identificado

O usuário está sendo registrado mas só recebe acesso ao `DISCARD_ME`, não ao `QRACK`. O frontend mostra:
```javascript
apps: Array(1) 
  0: "DISCARD_ME"
```

## Solução

### Passo 1: Adicionar o App QRACK no Banco de Dados

Execute o seed atualizado ou use o SQL direto:

**Opção A: Executar o seed atualizado**
```bash
npx ts-node prisma/seed.apps.ts
```

**Opção B: Executar SQL direto**
```sql
INSERT INTO "App" (code, name, description, "createdAt", "updatedAt")
VALUES ('QRACK', 'Qrack', 'Sistema de gestão de containers e itens com QR Code', NOW(), NOW())
ON CONFLICT (code) DO NOTHING;
```

### Passo 2: Verificar se o Frontend está Enviando appCode

O frontend **DEVE** enviar o parâmetro `appCode` com o valor `"QRACK"` na mutation `register`:

```graphql
mutation Register($user: RegisterUserInput!, $appCode: String) {
  register(user: $user, appCode: $appCode) {
    user {
      id
      email
      apps  # Deve retornar ["DISCARD_ME", "QRACK"]
    }
    token
  }
}
```

**Variáveis:**
```json
{
  "user": {
    "email": "usuario@exemplo.com",
    "password": "senha123",
    "firstName": "Nome",
    "lastName": "Sobrenome"
  },
  "appCode": "QRACK"  // ← IMPORTANTE: Deve ser "QRACK"
}
```

### Passo 3: Adicionar Acesso Manualmente (Solução Temporária)

Se o usuário já foi criado sem acesso ao QRACK, execute:

```sql
-- Adicionar acesso ao QRACK para o usuário eduardo.gf@hotmail.com
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
```

### Passo 4: Verificar Logs do Backend

Após fazer o deploy, verifique os logs:

```bash
pm2 logs khub --lines 50
```

Procure por:
- `📝 AppCode received from frontend:` - mostra o que foi recebido
- `📝 Final targetAppCode:` - mostra o código final usado
- `✅ Added access to QRACK for new user` - confirma que o acesso foi adicionado
- `❌ ERROR: App '...' not found` - indica que o app não existe no banco

## Apps Disponíveis

- `DISCARD_ME` - Discart-me (condo marketplace)
- `QRACK` - Qrack (sistema de gestão de containers/QR Code) ← **Use este**
- `BOXHUB` - BoxHub (projeto futuro)
- `RH` - RH Solution Center

## Verificação

Execute esta query para verificar se o usuário tem acesso ao QRACK:

```sql
SELECT 
    u.email,
    a.code AS app_code,
    a.name AS app_name,
    CASE 
        WHEN uaa.id IS NOT NULL THEN '✅ TEM ACESSO'
        ELSE '❌ SEM ACESSO'
    END AS status
FROM "User" u
LEFT JOIN "UserAppAccess" uaa ON u.id = uaa."userId"
LEFT JOIN "App" a ON uaa."appId" = a.id AND a.code = 'QRACK'
WHERE u.email = 'eduardo.gf@hotmail.com';
```

