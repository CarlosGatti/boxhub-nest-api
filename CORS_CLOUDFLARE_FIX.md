# Correção de CORS com Cloudflare Proxy

## Mudanças Implementadas

### 1. Configuração de Trust Proxy
- Adicionado `app.set('trust proxy', true)` para reconhecer headers do Cloudflare
- Isso permite que o Express confie nos headers `X-Forwarded-*` e `CF-*` do Cloudflare

### 2. CORS Robusto
- Configuração de CORS que funciona tanto com proxy quanto sem proxy
- Suporte aos headers específicos do Cloudflare (`CF-Connecting-IP`, `CF-Ray`, `CF-Visitor`)
- Logging detalhado para debug

### 3. Headers Cloudflare Suportados
- `X-Forwarded-For`
- `CF-Connecting-IP`
- `CF-Ray`
- `CF-Visitor`

## ⚠️ PROBLEMA CRÍTICO: DNS `ERR_NAME_NOT_RESOLVED`

O erro `ERR_NAME_NOT_RESOLVED` indica que o DNS não está resolvendo `www.discart.me`.

### Como Resolver no Cloudflare DNS:

1. **Acesse: DNS > Records**

2. **Verificar/Corrigir o registro `www`:**
   - ❌ **ERRADO**: CNAME apontando para UUID estranho
   - ✅ **CORRETO**: CNAME `www` → `discart.me` (proxied/cloud laranja)
   - ✅ **OU**: A record `www` → `104.237.3.199` (mesmo IP do `discart.me`)

3. **Configuração Recomendada:**
   ```
   Type: CNAME
   Name: www
   Target: discart.me
   Proxy status: Proxied (cloud laranja) ✅
   TTL: Auto
   ```

4. **Depois de corrigir, aguardar propagação DNS (pode levar alguns minutos)**

## Configurações Necessárias no Cloudflare

### 1. Page Rules (Recomendado)
Acesse: **Rules** > **Page Rules**

Criar uma regra para `discart.me/*` ou `api.discart.me/*`:
- **Settings:**
  - ✅ **Cache Level**: Bypass (para desenvolvimento) ou Standard
  - ✅ **Disable Apps**: Off
  - ✅ **Disable Performance**: Off
  - ✅ **Forwarding URL**: Não configurar

### 2. Firewall Rules (Se necessário)
Acesse: **Security** > **WAF**

Verificar se não há regras bloqueando:
- Requisições OPTIONS (preflight)
- Headers `Origin`
- Headers `Authorization`

### 3. SSL/TLS Settings
Acesse: **SSL/TLS** > **Overview**

- **Encryption mode**: Full ou Full (strict)
- Verificar se o certificado está válido

### 4. Network Settings
Acesse: **Network**

Verificar:
- ✅ **HTTP/2**: Enabled
- ✅ **HTTP/2 to Origin**: Enabled (recomendado)
- ✅ **HTTP/3 (with QUIC)**: Enabled (opcional)

### 5. Headers Customizados (Se necessário)
Acesse: **Rules** > **Transform Rules** > **Modify Response Header**

Se precisar adicionar headers customizados, criar regra:
- **Header name**: `Access-Control-Allow-Origin`
- **Operation**: Set dynamic
- **Value**: `*` (ou origens específicas)

**NOTA:** Geralmente não é necessário, pois o NestJS já configura isso.

## Verificações na VPS

### 1. Rebuild e Restart

```bash
# Na VPS, navegar até o diretório do projeto
cd /var/www/khub

# Fazer pull das mudanças
git pull origin main

# Rebuild do projeto
npm run build

# Reiniciar PM2 para carregar o novo código
pm2 restart khub

# Verificar logs
pm2 logs khub --lines 50
```

### 2. Verificar se o Servidor Está Rodando

```bash
# Verificar status do PM2
pm2 status

# Verificar porta 3000
netstat -tlnp | grep 3000
# ou
ss -tlnp | grep 3000
```

### 3. Verificar Firewall

```bash
# Verificar se a porta está aberta
sudo ufw status

# Se necessário, abrir porta 3000
sudo ufw allow 3000/tcp
```

### 4. Testar CORS Localmente

```bash
# Testar OPTIONS request
curl -X OPTIONS http://localhost:3000/graphql \
  -H "Origin: https://discart.me" \
  -H "Access-Control-Request-Method: POST" \
  -H "Access-Control-Request-Headers: Content-Type,Authorization" \
  -v

# Deve retornar headers CORS:
# Access-Control-Allow-Origin: https://discart.me
# Access-Control-Allow-Methods: GET,POST,PUT,PATCH,DELETE,OPTIONS,HEAD
# Access-Control-Allow-Headers: ...
# Access-Control-Allow-Credentials: true
```

### 5. Verificar Logs

Os logs agora devem mostrar:
- `🔒 CORS allowed origins: ...` - na inicialização
- `🔵 OPTIONS request: ...` - quando houver requisições OPTIONS
- `⚠️  CORS blocked origin: ...` - quando uma origin for bloqueada

## Testes

### Teste 1: Requisição Preflight (OPTIONS)
```bash
curl -X OPTIONS https://discart.me/graphql \
  -H "Origin: https://discart.me" \
  -H "Access-Control-Request-Method: POST" \
  -H "Access-Control-Request-Headers: Content-Type,Authorization" \
  -v
```

### Teste 2: Requisição Real (POST)
```bash
curl -X POST https://discart.me/graphql \
  -H "Origin: https://discart.me" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"query": "{ __typename }"}' \
  -v
```

### Teste 3: Do Navegador
Abra o console do navegador (F12) e execute:
```javascript
fetch('https://discart.me/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_TOKEN'
  },
  credentials: 'include',
  body: JSON.stringify({ query: '{ __typename }' })
})
.then(r => r.json())
.then(console.log)
.catch(console.error);
```

## Troubleshooting

### Problema: CORS ainda não funciona após as mudanças

1. **Verificar se o código foi compilado:**
   ```bash
   # Na VPS
   cd /var/www/khub
   ls -la dist/src/main.js
   # Verificar data de modificação
   ```

2. **Verificar se PM2 está rodando o código correto:**
   ```bash
   pm2 describe khub
   # Verificar o script sendo executado
   ```

3. **Limpar cache do Cloudflare:**
   - Acesse: **Caching** > **Purge Everything**
   - Ou criar Page Rule para bypass de cache

4. **Verificar logs do servidor:**
   ```bash
   pm2 logs khub --lines 100
   # Procurar por mensagens de CORS
   ```

### Problema: Cloudflare bloqueando requisições

1. Verificar **Security** > **Events** no Cloudflare
2. Verificar se há rate limiting muito restritivo
3. Verificar se o IP da VPS não está em blacklist

### Problema: Erro 502 Bad Gateway

1. Verificar se o servidor está rodando:
   ```bash
   pm2 status
   ```

2. Verificar logs de erro:
   ```bash
   pm2 logs khub --err
   ```

3. Verificar se a porta está correta no Cloudflare DNS

## Checklist Final

- [ ] Código atualizado e commitado
- [ ] Build executado na VPS
- [ ] PM2 reiniciado
- [ ] Porta 3000 acessível
- [ ] Firewall configurado
- [ ] Cloudflare Page Rules configuradas (se necessário)
- [ ] Cloudflare SSL/TLS em modo Full
- [ ] Teste OPTIONS funcionando
- [ ] Teste POST funcionando
- [ ] Logs mostrando requisições corretamente

