# ⚠️ CÓDIGO COMPILADO DESATUALIZADO NA VPS

## 🔴 Problema Crítico

O erro nos logs mostra que o código compilado na VPS está com a **versão ANTIGA**:
```
Error: Not allowed by CORS
    at origin (/home/boxhub/boxhub-api/dist/src/main.js:52:26)
```

**O código fonte está correto**, mas o `dist/src/main.js` na VPS ainda tem a versão antiga que bloqueia CORS.

## ✅ Solução: Rebuild Completo

### Passo 1: Commit e Push (se ainda não fez)

```bash
# Na sua máquina local
git add src/main.ts
git commit -m "Fix CORS: Allow all origins temporarily for debugging with Cloudflare"
git push origin main
```

### Passo 2: Na VPS - Rebuild Completo

```bash
# Conectar na VPS
ssh root@104.251.216.111

# Ir para o diretório
cd /home/boxhub/boxhub-api

# Fazer pull
git pull origin main

# IMPORTANTE: Limpar o dist completamente (garante rebuild limpo)
rm -rf dist

# Rebuild completo
npm run build

# Verificar se o build foi bem-sucedido
ls -la dist/src/main.js

# Verificar se tem o código novo (deve aparecer)
grep -A 5 "TEMP: Allowing all origins" dist/src/main.js

# Se aparecer, está correto! Se não aparecer, o build não pegou o código novo

# Reiniciar PM2
pm2 restart khub

# Ver logs
pm2 logs khub --lines 50
```

### Passo 3: Verificar se Funcionou

Procure nos logs por:

✅ **Deve aparecer:**
- `🔒 CORS allowed origins: ...`
- `📥 POST /graphql` ou `📥 OPTIONS /graphql` (requisições chegando)
- `✅ CORS: Allowing origin: ...` ou `⚠️  TEMP: Allowing all origins for debugging`

❌ **NÃO deve aparecer:**
- `Error: Not allowed by CORS`
- Se aparecer esse erro, significa que o código compilado ainda está antigo!

### Passo 4: Se Ainda Não Funcionar

Verificar qual versão do código está compilada:

```bash
# Na VPS
grep -n "callback(new Error" dist/src/main.js

# Se aparecer, o código ainda está antigo
# Nesse caso, tentar:
cd /home/boxhub/boxhub-api
rm -rf dist node_modules/.cache
npm run build
pm2 restart khub
```

## 🔍 Como Saber se Está Funcionando

1. **Ver logs em tempo real:**
   ```bash
   pm2 logs khub --lines 0
   ```

2. **Fazer uma requisição de teste** e ver se aparece:
   - `📥 OPTIONS /graphql` (preflight)
   - `✅ CORS: Allowing origin: ...` ou `⚠️ TEMP: Allowing all origins`

3. **Se aparecer `Error: Not allowed by CORS`**, o código compilado ainda está antigo e precisa fazer rebuild novamente.

## 💡 Por Que Isso Aconteceu?

1. ✅ O código fonte (`src/main.ts`) foi atualizado
2. ❌ Mas o código compilado (`dist/src/main.js`) na VPS não foi atualizado
3. ❌ O PM2 está rodando o código compilado antigo
4. ❌ Por isso ainda bloqueia CORS mesmo com código fonte correto

## 🎯 Solução Rápida (Alternativa)

Se o rebuild na VPS não funcionar, compilar localmente e copiar:

```bash
# Na sua máquina local
npm run build

# Verificar se compilou corretamente
grep -A 5 "TEMP: Allowing all origins" dist/src/main.js

# Se aparecer, copiar para VPS
scp -r dist root@104.251.216.111:/home/boxhub/boxhub-api/

# Na VPS, reiniciar
ssh root@104.251.216.111
cd /home/boxhub/boxhub-api
pm2 restart khub
pm2 logs khub --lines 50
```

## 📝 Checklist

- [ ] Código fonte atualizado e commitado
- [ ] Push feito para o repositório
- [ ] Na VPS: git pull executado
- [ ] Na VPS: dist/ removido (rm -rf dist)
- [ ] Na VPS: build executado (npm run build)
- [ ] Na VPS: código compilado verificado (grep)
- [ ] Na VPS: PM2 reiniciado
- [ ] Logs mostrando requisições e CORS permitindo
