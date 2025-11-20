# 🚨 DNS ESTÁ ERRADO - CORRIJA AGORA!

## ❌ PROBLEMA IDENTIFICADO NA IMAGEM DO CLOUDFLARE

O registro `www` está **INCORRETO**:
- **Atual (ERRADO):** CNAME `www` → `2fc60268-57a1-4d41-...` (UUID estranho)
- **Correto:** CNAME `www` → `discart.me`

**Por isso o `ERR_NAME_NOT_RESOLVED` continua acontecendo!**

## ✅ SOLUÇÃO PASSO A PASSO

### Passo 1: Corrigir o Registro `www` no Cloudflare

1. **Acesse:** Cloudflare Dashboard → discart.me → **DNS** → **Records**

2. **Encontre o registro CNAME `www`** (a linha que mostra o UUID)

3. **Clique em "Edit"** (ícone de seta à direita)

4. **Altere:**
   - **Type:** `CNAME` (já está correto)
   - **Name:** `www` (já está correto)
   - **Target/Content:** Mude de `2fc60268-57a1-4d41-...` para **`discart.me`** ⚠️ **MUDE ISSO!**
   - **Proxy status:** Mude para **Proxied** (cloud laranja 🟠) ⚠️ **IMPORTANTE!**
   - **TTL:** `Auto` (ou mantenha como está)

5. **Clique em "Save"**

### Passo 2: Verificar o Registro Principal `discart.me`

O registro A também deve ter o proxy habilitado:

1. **Encontre o registro A `discart.me`**
2. **Clique em "Edit"**
3. **Altere:**
   - **Proxy status:** Mude para **Proxied** (cloud laranja 🟠) ⚠️ **IMPORTANTE!**
4. **Salve**

### Passo 3: Aguardar Propagação DNS

Após salvar, aguarde **2-5 minutos** para propagação.

### Passo 4: Testar DNS

```bash
# Testar se DNS resolve
nslookup www.discart.me

# Deve retornar um IP do Cloudflare (não o IP direto da VPS)
# Se retornar IPs começando com 104.x, 172.x, etc, está correto
```

Ou use: https://dnschecker.org/#A/www.discart.me

### Passo 5: Testar no Navegador

Após a propagação:
1. Abra `https://www.discart.me/graphql` no navegador
2. Deve carregar algo (mesmo que retorne erro GraphQL, significa que DNS funciona)
3. Se ainda der `ERR_NAME_NOT_RESOLVED`, aguarde mais alguns minutos

## 🔍 Por Que Isso Resolve?

### Cenário Atual (ERRADO):
```
www.discart.me → CNAME → 2fc60268-57a1-4d41-... (UUID inválido)
                  ↓
              DNS não resolve
                  ↓
         ERR_NAME_NOT_RESOLVED
```

### Cenário Correto:
```
www.discart.me → CNAME → discart.me (proxied 🟠)
                     ↓
              discart.me → A → 104.237.3.199 (proxied 🟠)
                           ↓
                    Cloudflare Proxy
                           ↓
                    VPS (104.251.216.111)
```

## 📋 Checklist Final

- [ ] CNAME `www` apontando para `discart.me` (não para UUID!)
- [ ] Registro A `discart.me` com proxy habilitado (🟠 Proxied)
- [ ] Registro CNAME `www` com proxy habilitado (🟠 Proxied)
- [ ] Aguardado 2-5 minutos para propagação
- [ ] Testado com `nslookup www.discart.me` - deve retornar IP do Cloudflare
- [ ] Testado no navegador - `https://www.discart.me/graphql` deve carregar

## ⚠️ IMPORTANTE: Proxy Status

**TODOS os registros que você quer acessar via HTTPS devem estar com Proxy habilitado (🟠 Proxied):**
- ✅ `discart.me` (A record) → **Proxied**
- ✅ `www` (CNAME) → **Proxied**

**Por que?**
- O Cloudflare protege contra DDoS
- Gerencia SSL/TLS automaticamente
- Melhora performance com cache
- Funciona corretamente com CORS quando configurado

## 🐛 Se Ainda Não Funcionar Após Corrigir DNS

1. **Verificar se o backend está rodando:**
   ```bash
   ssh root@104.251.216.111
   pm2 status
   pm2 logs khub --lines 20
   ```

2. **Verificar se porta 3000 está acessível:**
   ```bash
   curl http://localhost:3000/graphql
   ```

3. **Verificar firewall:**
   ```bash
   sudo ufw status
   ```

4. **Limpar cache do navegador** (Ctrl+Shift+Delete)

5. **Testar em modo anônimo** para evitar cache

## 💡 Dica Extra

Se você quiser testar **sem Cloudflare** temporariamente:
1. Desabilite o proxy (nuvem cinza - DNS only)
2. Acesse diretamente pelo IP: `http://104.251.216.111:3000/graphql`
3. Se funcionar, o problema é Cloudflare/DNS
4. Se não funcionar, o problema é backend/VPS

---

**Resumo:** O DNS está ERRADO! Corrija o CNAME `www` para apontar para `discart.me` e habilite o proxy em ambos os registros. Isso deve resolver o `ERR_NAME_NOT_RESOLVED`.

