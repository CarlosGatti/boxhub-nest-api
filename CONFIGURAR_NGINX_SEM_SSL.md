# 🔧 Configurar Nginx Sem SSL (Temporário)

## ⚠️ Problema

O nginx está configurado para SSL mas os certificados ainda não existem:
```
no "ssl_certificate" is defined for the "listen ... ssl" directive
```

## ✅ Solução: Configuração Temporária Sem SSL

### Opção 1: Configuração HTTP Apenas (Para Testar)

Edite o arquivo `discart.me` para funcionar sem SSL primeiro:

```bash
nano /etc/nginx/sites-available/discart.me
```

**Substitua por esta configuração (SEM SSL):**

```nginx
# Configuração HTTP (sem SSL) - Temporário para testar
server {
    listen 80;
    listen [::]:80;
    server_name discart.me www.discart.me;

    # Headers para proxy
    add_header X-Real-IP $remote_addr always;
    add_header X-Forwarded-For $proxy_add_x_forwarded_for always;
    add_header X-Forwarded-Proto $scheme always;

    # Proxy para backend
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Host $host;
        proxy_set_header X-Forwarded-Port $server_port;
        
        # CRÍTICO: Preservar Origin para CORS
        proxy_set_header Origin $http_origin;
        proxy_pass_header Origin;
        
        proxy_cache_bypass $http_upgrade;
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # Arquivos estáticos
    location /uploads/ {
        alias /home/boxhub/boxhub-api/uploads/;
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    client_max_body_size 50M;
    access_log /var/log/nginx/discart.me.access.log;
    error_log /var/log/nginx/discart.me.error.log;
}
```

**Salvar:** `Ctrl+X`, `Y`, `Enter`

### Testar

```bash
# Testar configuração
nginx -t

# Se OK, recarregar
systemctl reload nginx

# Verificar status
systemctl status nginx

# Testar acesso
curl -I http://discart.me/graphql
```

## 🔒 Depois: Adicionar SSL

Após confirmar que funciona sem SSL, adicione SSL:

### Passo 1: Instalar Certbot

```bash
apt install certbot python3-certbot-nginx -y
```

### Passo 2: Obter Certificado

```bash
# Obter certificado SSL
certbot --nginx -d discart.me -d www.discart.me

# O Certbot vai:
# 1. Modificar automaticamente o arquivo discart.me
# 2. Adicionar configuração SSL
# 3. Configurar redirecionamento HTTP -> HTTPS
```

### Passo 3: Verificar

```bash
# Testar
nginx -t
systemctl reload nginx

# Testar HTTPS
curl -I https://discart.me/graphql
```

## 🔄 Opção 2: Configuração Completa com SSL (Comentado)

Se preferir, pode usar esta configuração com SSL comentado:

```nginx
# HTTP - Redirecionar para HTTPS (quando SSL estiver configurado)
# server {
#     listen 80;
#     listen [::]:80;
#     server_name discart.me www.discart.me;
#     return 301 https://$host$request_uri;
# }

# HTTPS - Configuração Principal
server {
    listen 80;  # Temporário: mudar para 443 ssl depois
    # listen 443 ssl http2;  # Descomentar quando tiver certificado
    # listen [::]:443 ssl http2;  # Descomentar quando tiver certificado
    listen [::]:80;  # Temporário
    server_name discart.me www.discart.me;

    # SSL (comentar até ter certificado)
    # ssl_certificate /etc/letsencrypt/live/discart.me/fullchain.pem;
    # ssl_certificate_key /etc/letsencrypt/live/discart.me/privkey.pem;
    # ssl_protocols TLSv1.2 TLSv1.3;
    # ssl_prefer_server_ciphers off;

    # Headers para proxy
    add_header X-Real-IP $remote_addr always;
    add_header X-Forwarded-For $proxy_add_x_forwarded_for always;
    add_header X-Forwarded-Proto $scheme always;

    # Proxy para backend
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Host $host;
        proxy_set_header X-Forwarded-Port $server_port;
        
        # CRÍTICO: Preservar Origin para CORS
        proxy_set_header Origin $http_origin;
        proxy_pass_header Origin;
        
        proxy_cache_bypass $http_upgrade;
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # Arquivos estáticos
    location /uploads/ {
        alias /home/boxhub/boxhub-api/uploads/;
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    client_max_body_size 50M;
    access_log /var/log/nginx/discart.me.access.log;
    error_log /etc/nginx/discart.me.error.log;
}
```

## 📋 Checklist

- [ ] Editar `/etc/nginx/sites-available/discart.me`
- [ ] Remover/Comentar configuração SSL
- [ ] Usar apenas HTTP (porta 80) temporariamente
- [ ] Testar: `nginx -t`
- [ ] Recarregar: `systemctl reload nginx`
- [ ] Testar acesso: `curl http://discart.me/graphql`
- [ ] Depois: Instalar Certbot e adicionar SSL

## 🎯 Recomendação

**Use a Opção 1** (configuração HTTP simples) primeiro para testar se tudo funciona. Depois adicione SSL com Certbot.

**Depois de funcionar, execute:**
```bash
certbot --nginx -d discart.me -d www.discart.me
```

O Certbot vai modificar automaticamente o arquivo e adicionar SSL!


