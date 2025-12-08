# ✅ Melhorias Implementadas: Registro QRACK

## O que foi corrigido

### 1. Verificação de Email Existente
Quando um usuário tenta se registrar com um email que já existe:

- ✅ **Verifica a senha** primeiro
- ✅ **Lista todos os apps** que o usuário já tem acesso
- ✅ **Informa ao usuário** quais projetos ele já possui acesso

### 2. Lógica de Acesso ao QRACK

**Cenário A: Email existe + Senha correta + JÁ TEM acesso ao QRACK**
- Retorna erro informando: "Você já está registrado no projeto QRACK. Você tem acesso aos seguintes projetos: [lista]. Por favor, faça login para acessar."

**Cenário B: Email existe + Senha correta + NÃO TEM acesso ao QRACK**
- Adiciona acesso ao QRACK automaticamente
- Retorna sucesso com token de login
- Usuário pode fazer login imediatamente

**Cenário C: Email existe + Senha incorreta**
- Retorna erro informando: "Este email já está registrado no sistema com acesso aos seguintes projetos: [lista]. Por favor, faça login com sua senha para acessar."

**Cenário D: Email não existe**
- Cria novo usuário
- Adiciona acesso ao DISCARD_ME (padrão)
- Se `appCode` for diferente de DISCARD_ME, adiciona acesso ao app solicitado também

### 3. Mensagens de Erro Melhoradas

- ✅ Incluem QRACK na lista de apps disponíveis
- ✅ Informam quais projetos o usuário já tem acesso
- ✅ Mensagens em português mais claras

## Exemplos de Respostas

### Usuário já tem acesso ao QRACK:
```json
{
  "errors": [{
    "message": "Você já está registrado no projeto QRACK. Você tem acesso aos seguintes projetos: DISCARD_ME, QRACK. Por favor, faça login para acessar."
  }]
}
```

### Usuário existe mas senha incorreta:
```json
{
  "errors": [{
    "message": "Este email já está registrado no sistema com acesso aos seguintes projetos: DISCARD_ME. Por favor, faça login com sua senha para acessar."
  }]
}
```

### Sucesso - Acesso adicionado:
```json
{
  "data": {
    "register": {
      "user": {
        "id": 3,
        "email": "usuario@exemplo.com",
        "apps": ["DISCARD_ME", "QRACK"]
      },
      "token": "jwt_token_here"
    }
  }
}
```

## Fluxo de Registro Atualizado

```
1. Usuário tenta registrar com email + senha + appCode="QRACK"
   ↓
2. Backend verifica se email existe
   ↓
3a. Se NÃO existe:
    → Cria novo usuário
    → Adiciona acesso ao DISCARD_ME (padrão)
    → Adiciona acesso ao QRACK (se appCode for QRACK)
    → Retorna sucesso
   
3b. Se EXISTE:
    → Busca apps que o usuário já tem acesso
    → Verifica senha
    ↓
    3b1. Senha INCORRETA:
        → Retorna erro listando projetos que o usuário já tem acesso
        → Informa para fazer login
    3b2. Senha CORRETA:
        → Verifica se já tem acesso ao QRACK
        ↓
        3b2a. JÁ TEM acesso ao QRACK:
            → Retorna erro informando que já está registrado
            → Lista todos os projetos que tem acesso
        3b2b. NÃO TEM acesso ao QRACK:
            → Adiciona acesso ao QRACK
            → Retorna sucesso com token
```

## Logs do Backend

Os logs agora mostram:
- ✅ Apps que o usuário já tem acesso
- ✅ Verificação de senha (correta/incorreta)
- ✅ Verificação de acesso ao app solicitado
- ✅ Ação tomada (adicionar acesso ou informar que já tem)

## Testes Recomendados

1. **Novo usuário registrando para QRACK**
   - Deve criar usuário e adicionar acesso ao QRACK

2. **Usuário existente (DISCARD_ME) registrando para QRACK**
   - Deve adicionar acesso ao QRACK sem criar novo usuário

3. **Usuário existente (QRACK) tentando registrar novamente**
   - Deve informar que já está registrado

4. **Usuário existente com senha incorreta**
   - Deve informar que o email já existe e listar projetos

## Arquivos Modificados

- ✅ `src/user/user.resolver.ts` - Lógica de registro melhorada
- ✅ Mensagens de erro atualizadas
- ✅ Logs detalhados adicionados

