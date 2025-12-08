# 🔧 Correção: Registro no Sistema Qrack/BoxHub

## Problema Identificado

O registro está funcionando, mas o usuário não está recebendo acesso ao BOXHUB. Os logs do frontend mostram:
- ✅ Registro bem-sucedido
- ❌ Usuário registrado SEM acesso ao BOXHUB
- ❌ Login falha porque não tem acesso

## Causa Provável

O frontend pode não estar enviando o parâmetro `appCode` corretamente na mutation `register`, ou está enviando um código incorreto.

## Solução Implementada no Backend

1. ✅ **Logs detalhados** para identificar o que está sendo recebido
2. ✅ **Mapeamento automático** de "QRACK" → "BOXHUB" (caso o frontend envie o nome errado)
3. ✅ **Validação explícita** se o app existe antes de adicionar acesso

## Como Corrigir no Frontend

### Opção 1: Enviar appCode Corretamente (RECOMENDADO)

Certifique-se de que a mutation `register` está enviando o parâmetro `appCode` com o valor `"BOXHUB"`:

```graphql
mutation Register($user: RegisterUserInput!, $appCode: String) {
  register(user: $user, appCode: $appCode) {
    user {
      id
      email
      firstName
      lastName
      apps  # Verificar se retorna ["BOXHUB"]
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
  "appCode": "BOXHUB"  // ← IMPORTANTE: Deve ser "BOXHUB" (não "QRACK")
}
```

### Opção 2: Verificar o Código Atual

Verifique se o frontend está:
1. ✅ Enviando o parâmetro `appCode` na mutation
2. ✅ Usando o valor correto: `"BOXHUB"` (não "QRACK" ou outro)
3. ✅ Verificando o array `apps` na resposta para confirmar que inclui "BOXHUB"

### Exemplo de Código Frontend (React/TypeScript)

```typescript
const registerUser = async (userData: RegisterUserInput) => {
  const REGISTER_MUTATION = gql`
    mutation Register($user: RegisterUserInput!, $appCode: String) {
      register(user: $user, appCode: $appCode) {
        user {
          id
          email
          firstName
          lastName
          apps  # Array de strings: ["BOXHUB"] ou ["DISCARD_ME", "BOXHUB"]
        }
        token
      }
    }
  `;

  const { data } = await client.mutate({
    mutation: REGISTER_MUTATION,
    variables: {
      user: userData,
      appCode: "BOXHUB"  // ← IMPORTANTE: Deve ser "BOXHUB"
    }
  });

  // Verificar se o usuário tem acesso ao BOXHUB
  const hasBoxHubAccess = data.register.user.apps?.includes("BOXHUB");
  
  if (!hasBoxHubAccess) {
    console.error("User registered but does not have BOXHUB access");
    // Tratar erro ou solicitar acesso manualmente
  }

  return data.register;
};
```

## Verificação no Banco de Dados

Execute esta query SQL para verificar o estado atual:

```sql
-- Verificar se o usuário tem acesso ao BOXHUB
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
LEFT JOIN "App" a ON uaa."appId" = a.id AND a.code = 'BOXHUB'
WHERE u.email = 'eduardo.gf@hotmail.com';
```

## Logs do Backend

Após fazer o deploy, verifique os logs do backend para ver o que está sendo recebido:

```bash
pm2 logs khub --lines 50
```

Procure por:
- `📝 AppCode received from frontend:` - mostra o que foi recebido
- `📝 Final targetAppCode:` - mostra o código final usado
- `✅ Added access to BOXHUB for new user` - confirma que o acesso foi adicionado
- `❌ ERROR: App '...' not found` - indica código incorreto

## Apps Disponíveis no Banco

Os códigos de apps disponíveis são:
- `DISCARD_ME` - Discart-me (condo marketplace)
- `BOXHUB` - BoxHub (sistema de containers/QR Code) ← **Use este para Qrack**
- `RH` - RH Solution Center

## Próximos Passos

1. ✅ **Backend atualizado** com logs e mapeamento
2. ⏳ **Frontend precisa enviar** `appCode: "BOXHUB"` na mutation
3. ⏳ **Testar registro** e verificar logs
4. ⏳ **Verificar no banco** se o acesso foi criado

## Solução Temporária (SQL)

Se precisar adicionar acesso manualmente enquanto corrige o frontend:

```sql
INSERT INTO "UserAppAccess" ("userId", "appId", "createdAt", "updatedAt")
SELECT 
    u.id,
    a.id,
    NOW(),
    NOW()
FROM "User" u
CROSS JOIN "App" a
WHERE u.email = 'eduardo.gf@hotmail.com'
  AND a.code = 'BOXHUB'
  AND NOT EXISTS (
      SELECT 1 
      FROM "UserAppAccess" uaa 
      WHERE uaa."userId" = u.id 
        AND uaa."appId" = a.id
  );
```

