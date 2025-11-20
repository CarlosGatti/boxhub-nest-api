# Diagnóstico Rápido: DNS + CORS

## 🚨 Problema Identificado

Você está tendo **2 problemas**:

1. **`ERR_NAME_NOT_RESOLVED`** - DNS não está resolvendo `www.discart.me`
2. **CORS Error** - O frontend não consegue se conectar ao backend

## ✅ Solução Passo a Passo

### PASSO 1: Corrigir DNS no Cloudflare (CRÍTICO)

**O problema principal é DNS, não CORS!**

1. Acesse **Cloudflare Dashboard** → **discart.me** → **DNS** → **Records**

2. **Verificar o registro `www`:**
   - Se está apontando para um UUID estranho → **DELETAR**
   - Se não existe → **CRIAR**

3. **Criar/Corrigir o registro:**
   ```
   Type: CNAME
   Name: www
   Target: discart.me
   Proxy status: 🟠 Proxied (cloud laranja)
   TTL: Auto
   ```

4. **Salvar e aguardar 2-5 minutos** para propagação

5. **Testar DNS:**
   ```bash
   # No terminal ou use: https://dnschecker.org
   nslookup www.discart.me
   # ou
   dig www.discart.me
   ```
   
   Deve retornar um IP do Cloudflare (começando com 104, 172, etc)

### PASSO 2: Verificar Configuração no Cloudflare

#### Headers HTTP (que você mostrou na imagem)

No painel que você mostrou (**Rules** → **Transform Rules** → **Modify Request/Response Header**), **NÃO precisa habilitar nada** para CORS funcionar.

**IMPORTANTE:** CORS é configurado no **backend**, não no Cloudflare. O Cloudflare apenas faz proxy das requisições. Os headers CORS (`Access-Control-Allow-Origin`, etc) são adicionados pelo NestJS/Express no backend.

**O que você viu na imagem:**
- Todas as opções estão OFF - **isso está OK!**
- Não precisa habilitar "Add security headers" ou outros
- O backend já está configurado para enviar os headers CORS corretos

**Exception:** Se você quiser adicionar headers customizados, pode criar uma regra de "Modify Response Header", mas geralmente não é necessário.

#### Verificações Importantes:

1. **SSL/TLS** → **Overview**
   - ✅ Modo: **Full** ou **Full (strict)**

2. **SSL/TLS** → **Edge Certificates**
   - ✅ **Always Use HTTPS**: ON
   - ✅ **Automatic HTTPS Rewrites**: ON

3. **Network**
   - ✅ **HTTP/2**: Enabled
   - ✅ **HTTP/3 (with QUIC)**: Enabled (opcional)

### PASSO 3: Atualizar Backend na VPS

```bash
# Conectar na VPS
ssh root@104.251.216.111

# Ir para o diretório do projeto
cd /var/www/khub

# Fazer pull das mudanças
git pull origin main

# Rebuild (IMPORTANTE!)
npm run build

# Verificar se o build foi bem-sucedido
ls -la dist/src/main.js

# Reiniciar PM2
pm2 restart khub

# Verificar logs
pm2 logs khub --lines 50
```

**O que procurar nos logs:**
- `🔒 CORS allowed origins: ...` - Lista de origens permitidas
- `📥 POST /graphql` - Requisições chegando
- `✅ CORS: Allowing origin: ...` - CORS permitindo

### PASSO 4: Testar

#### Teste 1: Verificar DNS
```bash
# No navegador, tente abrir:
https://www.discart.me/graphql

# Deve carregar (mesmo que retorne erro GraphQL, significa que DNS funciona)
```

#### Teste 2: Testar CORS do Navegador
Abra o console do navegador (F12) em `https://www.carlosgatti.com`:

```javascript
fetch('https://www.discart.me/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  credentials: 'include',
  body: JSON.stringify({ query: '{ __typename }' })
})
.then(r => {
  console.log('✅ Status:', r.status);
  console.log('✅ Headers:', Object.fromEntries(r.headers));
  return r.json();
})
.then(data => console.log('✅ Data:', data))
.catch(err => console.error('❌ Error:', err));
```

#### Teste 3: Verificar Headers CORS
No Network tab do DevTools:
- Veja a requisição OPTIONS (preflight)
- Deve ter header: `Access-Control-Allow-Origin: https://www.carlosgatti.com`
- Deve ter header: `Access-Control-Allow-Credentials: true`

### PASSO 5: Se Ainda Não Funcionar

#### Debug Avançado

1. **Verificar logs do backend:**
   ```bash
   pm2 logs khub --lines 100 | grep -i cors
   ```

2. **Verificar se o servidor está acessível:**
   ```bash
   curl -I https://www.discart.me/graphql
   ```

3. **Testar requisição OPTIONS:**
   ```bash
   curl -X OPTIONS https://www.discart.me/graphql \
     -H "Origin: https://www.carlosgatti.com" \
     -H "Access-Control-Request-Method: POST" \
     -v
   ```

4. **Verificar no Cloudflare:**
   - Acesse **Analytics** → **Web Traffic**
   - Veja se as requisições estão chegando
   - Veja se há bloqueios no **Security** → **Events**

## 🎯 Checklist Final

- [ ] DNS `www.discart.me` configurado corretamente (CNAME → discart.me, proxied)
- [ ] DNS propagado (testado com nslookup/dig)
- [ ] Código atualizado no backend
- [ ] Build executado (`npm run build`)
- [ ] PM2 reiniciado (`pm2 restart khub`)
- [ ] Logs mostrando requisições chegando
- [ ] SSL/TLS no Cloudflare em modo Full
- [ ] Teste do navegador funcionando

## 📝 Notas Importantes

1. **O problema principal é DNS**, não CORS. Corrija o DNS primeiro!

2. **O backend agora permite todas as origens temporariamente** (para debug). Depois de funcionar, podemos restringir novamente.

3. **Cloudflare proxy não interfere no CORS** quando configurado corretamente. O backend deve enviar os headers CORS corretamente.

4. **Se o DNS não resolver**, o navegador nem consegue fazer a requisição, então o erro de CORS é secundário nesse caso.

## 🔍 Como Saber se É DNS ou CORS?

### É DNS se:
- ❌ `ERR_NAME_NOT_RESOLVED`
- ❌ Não aparece requisição no Network tab
- ❌ `nslookup www.discart.me` não retorna IP

### É CORS se:
- ✅ DNS resolve (site abre)
- ✅ Requisição aparece no Network tab
- ✅ Requisição retorna 200/400/etc mas navegador bloqueia
- ✅ Console mostra: "CORS policy blocked"

## 💡 Dica Final

**Teste primeiro sem Cloudflare:**
1. Desative o proxy no DNS (cloud cinza = DNS only)
2. Acesse diretamente o IP da VPS
3. Se funcionar, o problema é Cloudflare
4. Se não funcionar, o problema é backend/VPS

