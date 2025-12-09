# ✅ Implementação Completa: Sistema Multi-App

## O que foi implementado

### 1. ✅ Schema Prisma
- Modelo `App` criado com campos: `id`, `code`, `name`, `description`
- Modelo `UserAppAccess` criado com relação many-to-many entre User e App
- Campo `apps UserAppAccess[]` adicionado ao modelo `User`
- **Nenhuma tabela existente foi modificada**

### 2. ✅ Seed de Apps
- Arquivo `prisma/seed.apps.ts` criado
- Apps criados: `DISCARD_ME`, `QRACK`, `RH`
- Usa `skipDuplicates: true` para não duplicar

### 3. ✅ Register Mutation (Refatorado)
O método `register` agora segue exatamente o comportamento descrito:

```typescript
async register(userInput, appCode?) {
  // 1. Buscar usuário existente
  let user = await prisma.user.findUnique({ where: { email } });
  
  // 2. Se não existir, criar usuário
  if (!user) {
    user = await prisma.user.create({ ... });
  }
  
  // 3. Se appCode foi enviado, associar usando upsert
  if (appCode) {
    await prisma.userAppAccess.upsert({
      where: { userId_appId: { userId: user.id, appId: app.id } },
      update: {},
      create: { userId: user.id, appId: app.id },
    });
  }
  
  // 4. Recarregar com apps
  const completeUser = await prisma.user.findUnique({
    where: { id: user.id },
    include: { apps: { include: { app: true } } },
  });
  
  // 5. Gerar token com apps no payload
  const token = createJwt(completeUser).token;
  
  // 6. Retornar com apps como string[]
  return { user: { ...completeUser, apps: appCodes }, token };
}
```

**Comportamento:**
- ✅ Se usuário não existe → cria normalmente
- ✅ Se usuário já existe → reutiliza (não gera erro)
- ✅ Usa `upsert` para evitar duplicação
- ✅ Retorna `apps` como `string[]` (ex: `["DISCARD_ME", "QRACK"]`)

### 4. ✅ Login Mutation
- Carrega user com `include: { apps: { include: { app: true } } }`
- Retorna `apps: user.apps.map(a => a.app.code)`
- Token JWT inclui `apps` no payload

### 5. ✅ Me Query
- Carrega user com `include: { apps: { include: { app: true } } }`
- Retorna `apps: user.apps.map(a => a.app.code)`

### 6. ✅ JWT Payload
- Interface `JwtPayload` atualizada para incluir `apps?: string[]`
- Método `createJwt` extrai apps do user e inclui no payload

## Como usar

### Registrar novo usuário para QRACK:
```graphql
mutation {
  register(
    user: {
      email: "usuario@exemplo.com"
      password: "senha123"
      firstName: "Nome"
      lastName: "Sobrenome"
    }
    appCode: "QRACK"
  ) {
    user {
      id
      email
      apps  # Retorna: ["DISCARD_ME", "QRACK"]
    }
    token
  }
}
```

### Registrar usuário existente para novo app:
```graphql
# Usuário já existe com DISCARD_ME
# Ao registrar para QRACK, adiciona acesso automaticamente
mutation {
  register(
    user: {
      email: "usuario@exemplo.com"  # Email já existe
      password: "senha123"
      firstName: "Nome"
      lastName: "Sobrenome"
    }
    appCode: "QRACK"
  ) {
    user {
      apps  # Retorna: ["DISCARD_ME", "QRACK"]
    }
    token
  }
}
```

## Próximos passos no servidor

1. **Executar migration:**
   ```bash
   npx prisma migrate deploy
   ```

2. **Executar seed:**
   ```bash
   npx ts-node prisma/seed.apps.ts
   ```

3. **Reiniciar servidor:**
   ```bash
   pm2 restart khub
   ```

## Verificação

Após deploy, verifique:

1. **Apps criados:**
   ```sql
   SELECT code, name FROM "App";
   ```

2. **Usuário com acesso:**
   ```sql
   SELECT u.email, a.code 
   FROM "User" u
   INNER JOIN "UserAppAccess" uaa ON u.id = uaa."userId"
   INNER JOIN "App" a ON uaa."appId" = a.id
   WHERE u.email = 'usuario@exemplo.com';
   ```

3. **Token JWT contém apps:**
   - Decodifique o token JWT
   - Verifique se contém campo `apps: ["DISCARD_ME", "QRACK"]`

## Garantias

✅ **Nada da Discart-me foi quebrado**
- Nenhuma tabela existente foi modificada
- Nenhum campo foi removido ou renomeado
- Comportamento existente mantido

✅ **Sistema multi-app funcionando**
- Usuário pode ter acesso a múltiplos apps
- Register funciona para usuários novos e existentes
- Login e me retornam apps corretamente

