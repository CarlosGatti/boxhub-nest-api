# 🚨 CHECKLIST COMPLETO - DNS Cloudflare discart.me

## ⚠️ PROBLEMA CRÍTICO: IPs Diferentes!

**Descoberta:**
- **DNS Cloudflare mostra:** `104.237.3.199` (A Record)
- **Config VPS mostra:** `104.251.216.111` (ecosystem.config.js)
- **Estes IPs são DIFERENTES!** ⚠️

**Isso precisa ser verificado AGORA!**

## ✅ Passo 1: Verificar IP Real da VPS

```bash
# Conectar na VPS
ssh root@104.251.216.111

# Verificar IP público real
curl ifconfig.me
# ou
curl ifconfig.co
# ou
hostname -I

# ANOTE O IP QUE APARECER!
```

**Qual IP apareceu?**
- Se for `104.251.216.111` → DNS está ERRADO
- Se for `104.237.3.199` → DNS pode estar certo, mas precisa verificar

## 📋 Checklist Completo DNS Cloudflare

### ✅ 1. A Record `discart.me` ⚠️ CRÍTICO

**Status Atual:**
- IP: `104.237.3.199`
- Proxy: DNS only (cinza) ❌

**Ação Necessária:**
1. Verificar IP correto (comando acima)
2. Editar o A Record
3. Alterar IP para o correto da VPS
4. **HABILITAR PROXY** → Proxied (🟠 nuvem laranja)
5. Salvar

**Configuração Final:**
```
Type: A
Name: discart.me
Content: [IP CORRETO DA VPS] ← Verificar!
Proxy: Proxied 🟠 ← IMPORTANTE!
TTL: Auto
```

### ✅ 2. CNAME `www` ✅ CORRETO

**Status Atual:**
- Target: `discart.me` ✅
- Proxy: Proxied 🟠 ✅

**Ação:** Já está correto! Não precisa mexer.

### ✅ 3. NS Records ✅ OK

**Status Atual:**
- ns01.domaincontrol.com
- ns02.domaincontrol.com
- Proxy: DNS only ⚪

**Ação:** Está correto. Não mexer.

### ⚠️ 4. TXT `_vercel` ⚠️ REVISAR

**Status Atual:**
- Nome: `_vercel`
- Conteúdo: `"vc-domain-verify=di..."`
- Proxy: DNS only ⚪

**Perguntas:**
- ✅ Você usa Vercel para algo?
- ❌ Se NÃO usa: **DELETE este registro** (pode causar conflitos)
- ✅ Se usa: Deixe como está, mas pode interferir

**Recomendação:**
- Se o backend está na VPS e frontend em Vercel → Deixe
- Se tudo está na VPS → DELETE

### ✅ 5. TXT `_dmarc` ✅ OK

**Status Atual:**
- Nome: `_dmarc`
- Conteúdo: `"v=DMARC1; p=reject..."`
- Proxy: DNS only ⚪

**Ação:** Está correto (segurança de email). Não mexer.

### ✅ 6. TXT `discart.me` ✅ OK

**Status Atual:**
- Nome: `discart.me`
- Conteúdo: `"discart.me"`
- Proxy: DNS only ⚪

**Ação:** Está correto. Não mexer.

## 🎯 Configuração Final Recomendada

### Registros que DEVEM estar "Proxied" 🟠:

1. **A Record `discart.me`**
   - Type: A
   - Name: discart.me
   - Content: **[IP CORRETO]** ← Verificar primeiro!
   - Proxy: **Proxied** 🟠

2. **CNAME `www`**
   - Type: CNAME
   - Name: www
   - Content: discart.me
   - Proxy: **Proxied** 🟠 ✅ (já está correto)

### Registros que DEVEM estar "DNS only" ⚪:

- NS records (nameservers)
- TXT `_dmarc` (email security)
- TXT `discart.me` (verificação)
- TXT `_vercel` (se usar Vercel)

## 🔧 Correções Imediatas

### 1. Verificar IP da VPS

```bash
ssh root@104.251.216.111
curl ifconfig.me
```

### 2. Corrigir A Record no Cloudflare

1. Acesse: Cloudflare Dashboard → discart.me → DNS → Records
2. Encontre: A Record `discart.me`
3. Clique: Edit
4. Altere:
   - **Content:** Coloque o IP verificado acima
   - **Proxy status:** Mude para **Proxied** 🟠
5. Salve

### 3. Revisar `_vercel`

- **Se NÃO usa Vercel:** DELETE este registro
- **Se usa Vercel:** Deixe como está (DNS only)

## 🧪 Testes Após Correções

### 1. Testar DNS

```bash
# Aguardar 2-5 minutos após salvar
nslookup discart.me
nslookup www.discart.me

# Deve retornar IPs do Cloudflare (não IP direto da VPS)
# IPs começando com 104.x, 172.x, etc
```

### 2. Testar HTTPS

```bash
curl -I https://discart.me/graphql
curl -I https://www.discart.me/graphql

# Deve retornar 200, 400 ou 405 (não 502/503)
```

### 3. Testar CORS

```bash
curl -X OPTIONS https://www.discart.me/graphql \
  -H "Origin: https://www.carlosgatti.com" \
  -H "Access-Control-Request-Method: POST" \
  -v

# Deve retornar headers:
# Access-Control-Allow-Origin: https://www.carlosgatti.com
# Access-Control-Allow-Credentials: true
```

### 4. Testar no Navegador

1. Abra: `https://www.discart.me/graphql`
2. Deve carregar algo (mesmo que erro GraphQL, significa que DNS funciona)
3. Console não deve mostrar `ERR_NAME_NOT_RESOLVED`

## 📊 Resumo de Ações

### 🔴 Urgente (Fazer AGORA):

1. ✅ Verificar IP real da VPS (`curl ifconfig.me`)
2. ✅ Corrigir A Record `discart.me`:
   - IP correto
   - Proxy habilitado 🟠
3. ⚠️ Revisar TXT `_vercel` (deletar se não usar)

### ✅ Já Está Correto:

- CNAME `www` → `discart.me` (Proxied)
- NS records
- TXT `_dmarc`

### 📝 Após Correções:

1. Aguardar 2-5 minutos (propagação DNS)
2. Testar DNS (`nslookup`)
3. Testar HTTPS (`curl -I`)
4. Testar CORS (OPTIONS request)
5. Testar no navegador

## 💡 Por Que Proxy Importa?

**Com Proxy 🟠 (Proxied):**
- ✅ Cloudflare gerencia SSL/TLS
- ✅ Proteção DDoS
- ✅ Headers corretos (CF-Connecting-IP, etc)
- ✅ Funciona com CORS
- ✅ Cache e performance

**Sem Proxy ⚪ (DNS only):**
- ❌ Acesso direto à VPS
- ❌ Precisa configurar SSL manualmente
- ❌ Sem proteção Cloudflare
- ⚠️ Pode causar problemas com CORS

**Recomendação:** SEMPRE use Proxied 🟠 para registros que você acessa via HTTPS.

---

**Ação Imediata:** Verifique o IP da VPS e corrija o A Record!

