# 🔧 Solução: Loop de Redirecionamento no Postman

> **Guia rápido** para resolver erro "Exceeded maxRedirects" no Postman.

---

## ❌ Erro que você está vendo:

```
Error: Exceeded maxRedirects. Probably stuck in a redirect loop
https://discart.me/graphql/
```

**Isso acontece quando:** Há múltiplos redirecionamentos HTTP → HTTPS configurados (Nginx + Cloudflare).

---

## ✅ SOLUÇÃO: Ajustar Configuração do Nginx

### Problema Comum

**Se o Cloudflare Proxy estiver HABILITADO (laranja):**
- Cloudflare já fornece HTTPS automaticamente
- Se o Nginx também redirecionar HTTP → HTTPS, pode causar loop

---

## 🔧 Solução 1: Se Proxy Cloudflare estiver HABILITADO (laranja)

### Passo 1: Editar Nginx

```bash
# Na VPS
sudo nano /etc/nginx/sites-available/boxhub-api
```

### Passo 2: Configuração Corrigida

**Se usar SSL do Cloudflare (Flexible ou Full):**

```nginx
server {
    listen 80;
    server_name discart.me;
    
    # NÃO redirecionar HTTP para HTTPS se Cloudflare já faz isso
    # Comentar ou remover esta linha:
    # return 301 https://$server_name$request_uri;
    
    # Upload size limit
    client_max_body_size 10M;
    
    # Proxy para aplicação Node.js
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
    
    # Servir arquivos estáticos (uploads)
    location /uploads/ {
        alias /home/boxhub/boxhub-api/uploads/;
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}

# Se você tem certificado SSL configurado, mantenha o bloco HTTPS também:
server {
    listen 443 ssl http2;
    server_name discart.me;
    
    ssl_certificate /etc/letsencrypt/live/discart.me/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/discart.me/privkey.pem;
    
    client_max_body_size 10M;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-Proto https;  # ← Importante!
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_cache_bypass $http_upgrade;
    }
    
    location /uploads/ {
        alias /home/boxhub/boxhub-api/uploads/;
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}
```

**Salvar:** `Ctrl+O`, `Enter`, `Ctrl+X`

### Passo 3: Testar e Recarregar

```bash
# Testar configuração
sudo nginx -t

# Recarregar Nginx
sudo systemctl reload nginx
```

---

## 🔧 Solução 2: Se Proxy Cloudflare estiver DESABILITADO (cinza)

**Se você está usando SSL do Let's Encrypt diretamente na VPS:**

```nginx
server {
    listen 80;
    server_name discart.me;
    
    # Redirecionar HTTP para HTTPS (OK se não usar Cloudflare Proxy)
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name discart.me;
    
    ssl_certificate /etc/letsencrypt/live/discart.me/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/discart.me/privkey.pem;
    
    client_max_body_size 10M;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_cache_bypass $http_upgrade;
    }
    
    location /uploads/ {
        alias /home/boxhub/boxhub-api/uploads/;
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}
```

---

## 🔧 Solução 3: Configuração Mais Simples (Recomendada)

**Se usar Cloudflare Proxy HABILITADO + SSL Flexible:**

**Use apenas HTTP (porta 80) no Nginx:**

```nginx
server {
    listen 80;
    server_name discart.me;
    
    # NÃO redirecionar - Cloudflare já faz isso
    # return 301 https://$server_name$request_uri;  ← Comentar esta linha
    
    client_max_body_size 10M;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
    
    location /uploads/ {
        alias /home/boxhub/boxhub-api/uploads/;
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}
```

**Não precisa do bloco HTTPS se usar Cloudflare Flexible!**

---

## ✅ Verificar Configuração do Cloudflare

1. **Acesse:** https://dash.cloudflare.com
2. **Selecione:** `discart.me`
3. **Vá em:** SSL/TLS > Overview
4. **Verifique o modo:**
   - **Flexible:** Cloudflare → Cliente = HTTPS, Cloudflare → VPS = HTTP
   - **Full:** Cloudflare → Cliente = HTTPS, Cloudflare → VPS = HTTPS
   - **Full (strict):** Cloudflare → Cliente = HTTPS, Cloudflare → VPS = HTTPS (certificado válido)

**Se usar Flexible:**
- ✅ Nginx só precisa HTTP (porta 80)
- ❌ Não precisa redirecionar HTTP → HTTPS no Nginx

**Se usar Full ou Full (strict):**
- ✅ Nginx precisa HTTPS (porta 443)
- ⚠️ Pode precisar ajustar redirecionamento

---

## ✅ Testar no Postman

**Depois de ajustar:**

1. **URL no Postman:**
   - `https://discart.me/graphql` (sem barra no final)
   - Ou: `https://discart.me/graphql/` (com barra)

2. **Método:** POST

3. **Headers:**
   - `Content-Type: application/json`

4. **Body (GraphQL):**
   ```json
   {
     "query": "{ __typename }"
   }
   ```

**Deve funcionar sem loop!** ✅

---

## 📝 Resumo Rápido

**Problema:** Loop de redirecionamento HTTP → HTTPS

**Solução:**
1. ✅ **Se Cloudflare Proxy HABILITADO:** Remover/comentar `return 301 https://...` no Nginx
2. ✅ **Se Cloudflare SSL Flexible:** Usar apenas HTTP (porta 80) no Nginx
3. ✅ **Testar:** `sudo nginx -t` e `sudo systemctl reload nginx`

---

## ⚠️ IMPORTANTE

**Ordem de verificação:**

1. ✅ Verificar modo SSL/TLS no Cloudflare
2. ✅ Ajustar Nginx conforme o modo
3. ✅ Recarregar Nginx
4. ✅ Testar no Postman

**Execute os passos acima!** 🚀

