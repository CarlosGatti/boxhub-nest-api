# 🚀 Deploy: Correção do Campo `apps` no GraphQL

## ✅ Mudanças Feitas

1. ✅ Adicionado `@ResolveField` no `UserResolver` para expor `apps` como `[String]`
2. ✅ Atualizado `MeDto` para ter `apps` como `[String]`
3. ✅ Build local passou sem erros

## 🔄 Próximos Passos: Deploy no Servidor

### No Servidor (SSH):

```bash
# 1. Conectar ao servidor
ssh root@104.251.216.111

# 2. Ir para o diretório
cd /var/www/khub
# ou
cd /home/boxhub/boxhub-api

# 3. Fazer pull das mudanças
git pull origin main

# 4. Fazer build
npm run build

# 5. Regenerar Prisma Client (se necessário)
npx prisma generate

# 6. Reiniciar PM2
pm2 restart khub

# 7. Verificar logs
pm2 logs khub --lines 30 --nostream
```

### Ou usar o script de deploy:

```bash
# No servidor
cd /var/www/khub
./deploy-vps.sh
```

## ✅ Verificação

Após reiniciar, verificar nos logs:

1. ✅ Não deve haver erros sobre "Undefined type error"
2. ✅ Deve aparecer "Nest application successfully started"
3. ✅ Testar no GraphQL Playground que `apps` funciona como `[String]`

## 🧪 Teste Rápido no GraphQL Playground

Após o deploy, testar:

```graphql
mutation {
  login(user: { email: "test@example.com", password: "password" }) {
    user {
      id
      email
      apps  # Deve funcionar sem erro agora
    }
    token
  }
}
```

Se funcionar sem erro e retornar `apps` como array de strings, está tudo certo! ✅

---

**Importante:** Sempre reiniciar o PM2 após mudanças no código para que as alterações tenham efeito.

