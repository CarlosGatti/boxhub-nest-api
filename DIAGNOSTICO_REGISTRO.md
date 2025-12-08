# 🔍 Diagnóstico: Problema de Registro no Sistema Qrack/BoxHub

## Problema Relatado
Quando tenta criar um usuário para o sistema "qrack" (BoxHub - gestão de QR Code), o frontend mostra sucesso mas o usuário não aparece no banco de dados.

## Possíveis Causas

### 1. **App Code Incorreto**
O frontend pode estar enviando um `appCode` que não existe no banco (ex: "QRACK" ao invés de "BOXHUB").

**Verificação:**
```sql
SELECT code, name FROM "App" ORDER BY code;
```

**Apps disponíveis:**
- `DISCARD_ME` - Discart-me
- `BOXHUB` - BoxHub (sistema de containers/QR Code)
- `RH` - RH Solution Center

### 2. **Usuário Já Existe com Senha Diferente**
Se o email já existe no Discart-me e o usuário tenta registrar com senha diferente, o sistema deveria retornar erro, mas pode estar retornando sucesso incorretamente.

### 3. **Erro Silencioso no Backend**
O backend pode estar retornando sucesso mesmo quando há erro na criação do registro.

### 4. **Transação Não Commitada**
A transação pode estar sendo revertida após o retorno de sucesso.

## Logs Adicionados

Adicionei logs detalhados no `user.resolver.ts` para rastrear:

- ✅ Verificação se usuário existe
- ✅ Verificação de senha (correta/incorreta)
- ✅ Busca do app pelo código
- ✅ Verificação de acesso existente
- ✅ Criação de UserAppAccess
- ✅ Busca do usuário após criação/atualização
- ✅ Apps retornados no LoginResult

## Como Investigar

### Passo 1: Verificar Logs do Backend
Quando tentar registrar, verifique os logs do PM2:

```bash
pm2 logs khub --lines 50
```

Procure por:
- `📝 Registering user with email:` - confirma início do registro
- `🔍 User check result:` - mostra se usuário existe
- `🔐 Password verification result:` - mostra se senha está correta
- `🔍 App found:` - mostra se o app foi encontrado
- `✅ User created successfully` ou `✅ Added access to` - confirma sucesso
- `❌ ERROR:` - mostra erros

### Passo 2: Verificar no Banco de Dados

Execute estas queries:

```sql
-- Verificar se o usuário foi criado
SELECT id, email, "firstName", "lastName", "createdAt" 
FROM "User" 
WHERE email = 'email_do_usuario@exemplo.com';

-- Verificar se tem acesso ao BoxHub
SELECT 
    u.email,
    a.code AS app_code,
    a.name AS app_name,
    uaa."createdAt" AS acesso_concedido_em
FROM "User" u
INNER JOIN "UserAppAccess" uaa ON u.id = uaa."userId"
INNER JOIN "App" a ON uaa."appId" = a.id
WHERE u.email = 'email_do_usuario@exemplo.com'
ORDER BY a.code;
```

### Passo 3: Verificar Frontend

No console do navegador, verifique:

1. **Request GraphQL:**
   - O `appCode` está sendo enviado corretamente?
   - O valor é `"BOXHUB"` ou outro?

2. **Response:**
   - O que está sendo retornado no `user.id`?
   - O que está em `user.apps`?
   - Há algum erro na resposta?

### Passo 4: Testar Cenários

#### Cenário A: Usuário Novo
- Email não existe no banco
- Deve criar novo usuário
- Deve adicionar acesso ao BoxHub

#### Cenário B: Usuário Existente (Discart-me) - Senha Correta
- Email já existe
- Senha está correta
- Deve adicionar acesso ao BoxHub
- Deve retornar sucesso

#### Cenário C: Usuário Existente - Senha Incorreta
- Email já existe
- Senha está incorreta
- Deve retornar erro: "An account with this email already exists. Please login with your password instead."

#### Cenário D: App Code Incorreto
- App code não existe (ex: "QRACK")
- Deve retornar erro: "App 'QRACK' not found. Available apps: DISCARD_ME, BOXHUB, RH"

## Correções Implementadas

1. ✅ **Logs detalhados** em cada etapa do processo
2. ✅ **Validação explícita** se o app existe antes de continuar
3. ✅ **Erro claro** se o app não for encontrado
4. ✅ **Verificação** se usuário foi criado/atualizado corretamente
5. ✅ **Tratamento de erro** não crítico no envio de email

## Próximos Passos

1. **Testar o registro** e coletar os logs
2. **Compartilhar os logs** para análise
3. **Verificar no banco** se o registro foi criado
4. **Verificar o frontend** se está enviando o `appCode` correto

## Query SQL para Verificar Acesso

```sql
-- Verificar acesso do usuário ao BoxHub
SELECT 
    u.email,
    a.code AS app_code,
    a.name AS app_name,
    CASE 
        WHEN uaa.id IS NOT NULL THEN '✅ TEM ACESSO'
        ELSE '❌ SEM ACESSO'
    END AS status_acesso
FROM "User" u
LEFT JOIN "UserAppAccess" uaa ON u.id = uaa."userId"
LEFT JOIN "App" a ON uaa."appId" = a.id AND a.code = 'BOXHUB'
WHERE u.email = 'eduardo.gf@hotmail.com';
```

