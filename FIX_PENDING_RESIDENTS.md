# 🔧 Fix: pendingResidents Query Not Found

O erro indica que o schema GraphQL no servidor não foi atualizado. Siga estes passos:

## 🚀 Solução Rápida (No Servidor)

### Passo 1: Conectar ao servidor
```bash
ssh seu-usuario@seu-servidor
```

### Passo 2: Ir para o diretório e atualizar código
```bash
cd /home/boxhub/boxhub-api

# Carregar ambiente Node.js
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" || true
nvm use 18

# Atualizar código
git pull origin main

# Instalar dependências (se necessário)
yarn install --frozen-lockfile

# Rebuild native modules
yarn rebuild || npm rebuild || true
```

### Passo 3: Fazer build e reiniciar
```bash
# Fazer build (isso regenera o schema GraphQL)
yarn build

# Verificar se o build gerou o schema
ls -la schema.gql 2>/dev/null || echo "Schema será gerado em memória"

# Parar PM2
pm2 stop khub || pm2 delete khub || true

# Iniciar PM2
pm2 start ecosystem.config.js --update-env

# Aguardar alguns segundos
sleep 5

# Verificar logs
pm2 logs khub --lines 20 --nostream
```

### Passo 4: Verificar se funcionou
```bash
# Testar a query diretamente
curl -X POST http://127.0.0.1:3000/graphql \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer SEU_TOKEN_JWT" \
  -d '{"query":"query { __schema { queryType { fields { name } } } }"}' | grep -i pending
```

---

## 🔍 Verificar se o Código Está no Servidor

### No servidor, verifique se o arquivo tem a query:
```bash
cd /home/boxhub/boxhub-api
grep -n "pendingResidents" src/user/user.resolver.ts
```

Deve mostrar a linha 99 com `@Query(() => [User], { name: "pendingResidents" })`

### Verificar se AdminGuard existe:
```bash
ls -la src/auth/guards/admin.guard.ts
```

---

## 🛠️ Se Ainda Não Funcionar

### Opção 1: Limpar e Rebuild Completo
```bash
cd /home/boxhub/boxhub-api

# Limpar tudo
rm -rf dist node_modules/.cache

# Reinstalar
yarn install --frozen-lockfile

# Rebuild
yarn build

# Reiniciar
pm2 restart khub
```

### Opção 2: Verificar Schema GraphQL Gerado
```bash
cd /home/boxhub/boxhub-api

# O NestJS com autoSchemaFile: true gera o schema em memória
# Mas podemos forçar regeneração deletando cache
rm -rf dist
yarn build

# Verificar se o build foi bem-sucedido
ls -la dist/src/user/user.resolver.js
```

### Opção 3: Verificar Logs do PM2
```bash
pm2 logs khub --lines 50
```

Procure por erros relacionados a:
- GraphQL schema generation
- AdminGuard not found
- UserResolver errors

---

## ✅ Teste Final

Após seguir os passos acima, teste no GraphQL Playground:

```graphql
query {
  pendingResidents {
    id
    email
    firstName
    lastName
    apartment
    isApprovedResident
  }
}
```

**Importante:** Certifique-se de estar autenticado como admin (token JWT de um usuário com `isAdmin: true`).

---

## 🆘 Se Nada Funcionar

1. Verifique se o código foi realmente deployado:
   ```bash
   cd /home/boxhub/boxhub-api
   git log --oneline -5
   ```

2. Verifique se há erros de compilação:
   ```bash
   yarn build 2>&1 | grep -i error
   ```

3. Verifique se o AdminGuard está sendo importado corretamente:
   ```bash
   grep -r "AdminGuard" src/
   ```

4. Reinicie o servidor completamente:
   ```bash
   pm2 delete khub
   pm2 start ecosystem.config.js
   ```

---

**O código está correto localmente. O problema é que o servidor precisa ser atualizado e reiniciado.**

