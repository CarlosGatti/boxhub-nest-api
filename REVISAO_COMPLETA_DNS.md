# 🔍 Revisão Completa DNS Cloudflare - discart.me

## 📊 Situação Atual (Conforme Imagem)

### ✅ Correto:
- **CNAME `www`** → `discart.me` (Proxied 🟠) ✅ **AGORA ESTÁ CORRETO!**

### ⚠️ Precisam Atenção:

#### 1. **A Record `discart.me`** ⚠️
- **IP Atual:** `104.237.3.199`
- **Proxy Status:** DNS only (cinza)
- **Problema:** 
  - Se o servidor backend está em `104.251.216.111`, o IP está ERRADO!
  - Deveria estar **Proxied** (🟠) se você quer usar Cloudflare

#### 2. **Registro TXT `_vercel`** ⚠️
- **Nome:** `_vercel`
- **Conteúdo:** `"vc-domain-verify=di..."`
- **Problema:** 
  - Este é um registro de verificação do Vercel
  - Se você não está usando Vercel, pode estar interferindo
  - Pode estar causando conflitos

#### 3. **NS Records** ✅
- São os nameservers do domínio
- Normalmente devem estar como estão (DNS only)

#### 4. **TXT `_dmarc`** ✅
- Registro de segurança de email
- Está OK, não interfere

## 🔧 Configuração Recomendada

### Para Usar Cloudflare Proxy (Recomendado):

```
1. A Record `discart.me`
   - Type: A
   - Name: discart.me
   - Content: 104.251.216.111 (ou o IP correto da sua VPS)
   - Proxy status: Proxied 🟠 (HABILITAR!)
   - TTL: Auto

2. CNAME `www`
   - Type: CNAME
   - Name: www
   - Content: discart.me
   - Proxy status: Proxied 🟠 (já está correto)
   - TTL: Auto
```

### Registros que DEVEM ficar "DNS only":

- ✅ NS records (nameservers)
- ✅ TXT `_dmarc` (email security)
- ✅ Outros TXT records de verificação (se necessário)

### Registros para REMOVER (se não usar):

- ❌ TXT `_vercel` - **REMOVER se não estiver usando Vercel**
- ❌ Outros registros de serviços não utilizados

## ⚠️ PROBLEMA CRÍTICO: IP Incorreto?

O A record mostra `104.237.3.199`, mas o servidor backend está em `104.251.216.111`?

**Isso precisa ser verificado!**

### Como Verificar:

```bash
# Na VPS, verificar IP público
curl ifconfig.me

# Ou
hostname -I

# Verificar se o servidor está acessível neste IP
```

## 📋 Checklist de Correção

### Passo 1: Verificar IP Correto da VPS

```bash
# Conectar na VPS
ssh root@104.251.216.111

# Verificar IP público
curl ifconfig.me
```

**Anote o IP retornado!**

### Passo 2: Corrigir A Record no Cloudflare

1. **Acesse:** Cloudflare Dashboard → discart.me → DNS → Records
2. **Encontre:** A Record `discart.me` com IP `104.237.3.199`
3. **Clique em "Edit"**
4. **Altere:**
   - **Content/IP:** Coloque o IP correto da VPS (verificado no passo 1)
   - **Proxy status:** Mude para **Proxied** 🟠 (cloud laranja)
5. **Salve**

### Passo 3: Verificar Registro `_vercel`

**Se você NÃO está usando Vercel:**

1. **Encontre:** TXT Record `_vercel`
2. **Clique em "Edit"** ou **Delete**
3. **Se não usa Vercel, DELETE este registro**
4. **Isso pode estar causando conflitos**

**Se você ESTÁ usando Vercel:**

- Deixe como está (DNS only)
- Mas verifique se não está interferindo

### Passo 4: Configuração Final Recomendada

```
DNS Records para discart.me:
┌─────────────────────────────────────────────────────────┐
│ Type    │ Name      │ Content          │ Proxy │ Ação   │
├─────────────────────────────────────────────────────────┤
│ A       │ discart.me│ [IP DA VPS]      │ 🟠 Sim│ Corrigir│
│ CNAME   │ www       │ discart.me       │ 🟠 Sim│ OK ✅   │
│ NS      │ discart.me│ ns01/ns02...     │ ⚪ Não│ OK ✅   │
│ TXT     │ discart.me│ "discart.me"     │ ⚪ Não│ OK ✅   │
│ TXT     │ _dmarc    │ "v=DMARC1..."    │ ⚪ Não│ OK ✅   │
│ TXT     │ _vercel   │ "vc-domain..."   │ ⚪ Não│ ⚠️ Revisar│
└─────────────────────────────────────────────────────────┘
```

## 🔍 Verificações Adicionais

### 1. Verificar se DNS Resolve Corretamente

```bash
# Testar DNS após correções
nslookup discart.me
nslookup www.discart.me

# Deve retornar IPs do Cloudflare (não IP direto da VPS)
# Se retornar IPs começando com 104.x, 172.x, etc (Cloudflare), está correto
```

### 2. Verificar SSL/TLS no Cloudflare

1. **Acesse:** SSL/TLS → Overview
2. **Modo:** Deve estar **Full** ou **Full (strict)**
3. **Edge Certificates:**
   - ✅ Always Use HTTPS: ON
   - ✅ Automatic HTTPS Rewrites: ON

### 3. Verificar Page Rules (se necessário)

1. **Acesse:** Rules → Page Rules
2. **Verificar se há regras conflitantes:**
   - Regras que redirecionam `/graphql`
   - Regras que alteram cache para API
   - Regras que modificam headers

### 4. Verificar Firewall Rules

1. **Acesse:** Security → WAF
2. **Verificar se há regras bloqueando:**
   - Requisições OPTIONS (preflight)
   - Requisições para `/graphql`
   - Origem `www.carlosgatti.com`

## 🎯 Resumo das Correções Necessárias

### ✅ Já Corrigido:
- CNAME `www` → `discart.me` (Proxied)

### ⚠️ Precisa Corrigir:
1. **A Record `discart.me`:**
   - Verificar se IP está correto (`104.237.3.199` vs `104.251.216.111`)
   - Habilitar proxy (Proxied 🟠)

2. **TXT `_vercel`:**
   - Remover se não usa Vercel
   - Ou deixar se usa (mas pode causar conflitos)

3. **SSL/TLS:**
   - Verificar se está em modo Full

## 🧪 Testes Após Correções

```bash
# 1. Testar DNS
nslookup www.discart.me
# Deve retornar IPs do Cloudflare

# 2. Testar acesso HTTPS
curl -I https://www.discart.me/graphql
# Deve retornar 200 ou 400 (não 502/503)

# 3. Testar CORS
curl -X OPTIONS https://www.discart.me/graphql \
  -H "Origin: https://www.carlosgatti.com" \
  -H "Access-Control-Request-Method: POST" \
  -v
# Deve retornar headers CORS corretos

# 4. Testar no navegador
# Abrir: https://www.discart.me/graphql
# Deve carregar (mesmo que erro GraphQL, significa que DNS funciona)
```

## 💡 Dica Importante

Se você usar **Vercel para frontend** e **VPS para backend**:

- Backend (`discart.me`): A Record → IP da VPS (Proxied)
- Frontend (se for Vercel): Pode ter subdomínio separado ou usar Vercel direto
- O registro `_vercel` deve ficar apenas para verificação do Vercel, não interfere no backend

---

**Ação Imediata:** Verifique o IP correto da VPS e corrija o A Record `discart.me` para esse IP e habilite o proxy!

