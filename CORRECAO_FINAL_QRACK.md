# 🔧 Correção Final: Registro QRACK

## Problema Identificado

O usuário está tentando se registrar para QRACK, mas:
1. A resposta mostra `apps: ["DISCARD_ME"]` apenas
2. Isso indica que o acesso ao QRACK não está sendo adicionado
3. O frontend pode não estar enviando `appCode="QRACK"` na mutation

## Correção Implementada

### Mudança na Lógica

**ANTES:**
- Se usuário já tem acesso ao app solicitado → Lança erro
- Se usuário não tem acesso → Adiciona acesso

**AGORA:**
- Se usuário já tem acesso ao app solicitado → Retorna sucesso com login (não lança erro)
- Se usuário não tem acesso → Adiciona acesso e retorna sucesso

### Comportamento Atual

**Cenário 1: Usuário existe + Senha correta + JÁ TEM acesso ao QRACK**
- ✅ Retorna sucesso com token de login
- ✅ Lista todos os apps que tem acesso (incluindo QRACK)

**Cenário 2: Usuário existe + Senha correta + NÃO TEM acesso ao QRACK**
- ✅ Adiciona acesso ao QRACK automaticamente
- ✅ Retorna sucesso com token de login
- ✅ Lista todos os apps que tem acesso (incluindo QRACK)

**Cenário 3: Usuário existe + Senha incorreta**
- ❌ Retorna erro informando projetos que já tem acesso
- ❌ Informa para fazer login

**Cenário 4: Usuário não existe**
- ✅ Cria novo usuário
- ✅ Adiciona acesso ao DISCARD_ME (padrão)
- ✅ Se `appCode` for QRACK, adiciona acesso ao QRACK também

## IMPORTANTE: Frontend deve enviar appCode

O frontend **DEVE** enviar `appCode: "QRACK"` na mutation `register`:

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
    "email": "eduardo.gf@hotmail.com",
    "password": "...",
    "firstName": "Carlos",
    "lastName": "Gatti"
  },
  "appCode": "QRACK"  // ← CRÍTICO: Deve ser "QRACK"
}
```

## Verificação

Após o deploy, verifique os logs do backend:

```bash
pm2 logs khub --lines 50
```

Procure por:
- `📝 AppCode received from frontend:` - deve mostrar `"QRACK"`
- `✅ Added access to QRACK for existing user` - confirma que adicionou acesso
- `✅ User retrieved with updated apps:` - deve mostrar `["DISCARD_ME", "QRACK"]`

## Teste

1. Tente registrar com email existente (eduardo.gf@hotmail.com)
2. Use a senha correta
3. Envie `appCode: "QRACK"` na mutation
4. Deve retornar sucesso com `apps: ["DISCARD_ME", "QRACK"]`

