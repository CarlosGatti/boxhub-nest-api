# 🔧 Resolver Conflito de server_name no Nginx

## ⚠️ Problema Identificado

Os avisos indicam:
- **Conflicting server name "www.discart.me"** - Múltiplas configurações com o mesmo server_name
- **Protocol options redefined** - Configuração SSL duplicada

## 🔍 Diagnosticar o Problema

### Passo 1: Ver Todas as Configurações com "discart.me"

```bash
# Procurar por "discart.me" em todas as configurações
grep -r "discart.me" /etc/nginx/sites-available/
grep -r "discart.me" /etc/nginx/sites-enabled/

# Ver server_name de cada arquivo habilitado
grep -h "server_name" /etc/nginx/sites-enabled/*

# Ver listen de cada arquivo
grep -h "listen" /etc/nginx/sites-enabled/*
```

### Passo 2: Ver Conteúdo Completo de Cada Configuração

```bash
# Ver boxhub-api
cat /etc/nginx/sites-available/boxhub-api

# Ver discart.me
cat /etc/nginx/sites-available/discart.me

# Ver default
cat /etc/nginx/sites-available/default
```

## ✅ Solução

### Opção 1: Se `boxhub-api` Também Tem `discart.me`

Se `boxhub-api` também está configurado para `discart.me`, você precisa:

```bash
# Desabilitar boxhub-api (se for configuração antiga)
rm /etc/nginx/sites-enabled/boxhub-api

# Manter apenas discart.me
# Testar novamente
nginx -t
```

### Opção 2: Se Há Duplicação Dentro de `discart.me`

Se o arquivo `discart.me` tem múltiplos blocos `server` com o mesmo `server_name`:

```bash
# Ver quantos blocos server tem
grep -c "server {" /etc/nginx/sites-available/discart.me

# Ver todos os server_name
grep "server_name" /etc/nginx/sites-available/discart.me
```

**Solução:** Remover blocos duplicados ou consolidar em um único bloco.

### Opção 3: Se `default` Tem `discart.me`

```bash
# Verificar default
grep "discart.me" /etc/nginx/sites-available/default

# Se tiver, desabilitar default
rm /etc/nginx/sites-enabled/default
```

## 🔧 Configuração Correta (Sem Duplicação)

### Configuração Limpa para `discart.me`

```nginx
# HTTP - Redirecionar para HTTPS
server {
    listen 80;
    listen [::]:80;
    server_name discart.me www.discart.me;

    location / {
        return 301 https://$host$request_uri;
    }
}

# HTTPS - Configuração Principal
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name discart.me www.discart.me;

    # SSL (será preenchido pelo Certbot)
    # ssl_certificate /etc/letsencrypt/live/discart.me/fullchain.pem;
    # ssl_certificate_key /etc/letsencrypt/live/discart.me/privkey.pem;

    # SSL Security
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers off;

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

## 📋 Passos para Resolver

### 1. Identificar Qual Arquivo Está Causando Conflito

```bash
# Ver todos os server_name
grep -r "server_name.*discart.me" /etc/nginx/sites-enabled/
```

### 2. Desabilitar Configurações Duplicadas

```bash
# Se boxhub-api tem discart.me, desabilitar
rm /etc/nginx/sites-enabled/boxhub-api

# Se default tem discart.me, desabilitar
rm /etc/nginx/sites-enabled/default

# Verificar o que ficou
ls -la /etc/nginx/sites-enabled/
```

### 3. Verificar Conteúdo de `discart.me`

```bash
# Ver se há duplicação dentro do arquivo
cat /etc/nginx/sites-available/discart.me

# Se houver múltiplos blocos server com mesmo server_name, remover duplicados
```

### 4. Corrigir Arquivo `discart.me` (Se Necessário)

```bash
# Editar
nano /etc/nginx/sites-available/discart.me

# Garantir que há apenas:
# - 1 bloco server para HTTP (porta 80)
# - 1 bloco server para HTTPS (porta 443)
# - Ambos com server_name discart.me www.discart.me
```

### 5. Testar

```bash
# Testar configuração
nginx -t

# Se não houver mais avisos de conflito, está OK!
# Recarregar
systemctl reload nginx
```

## 🎯 Comandos Rápidos para Diagnosticar

```bash
# Ver todos os server_name habilitados
grep -h "server_name" /etc/nginx/sites-enabled/* | sort | uniq

# Ver todos os listen habilitados
grep -h "listen" /etc/nginx/sites-enabled/* | sort | uniq

# Ver quais arquivos têm "discart.me"
grep -l "discart.me" /etc/nginx/sites-enabled/*

# Ver configuração completa de cada arquivo habilitado
for file in /etc/nginx/sites-enabled/*; do
    echo "=== $(basename $file) ==="
    cat $file
    echo ""
done
```

## 💡 Solução Rápida (Se Não Sabe Qual Remover)

```bash
# 1. Desabilitar tudo
rm /etc/nginx/sites-enabled/*

# 2. Habilitar apenas discart.me
ln -s /etc/nginx/sites-available/discart.me /etc/nginx/sites-enabled/

# 3. Verificar conteúdo de discart.me (garantir que não tem duplicação)
cat /etc/nginx/sites-available/discart.me

# 4. Testar
nginx -t

# 5. Recarregar
systemctl reload nginx
```

## 📝 Resumo

**Problema:** Múltiplas configurações com mesmo `server_name "www.discart.me"`

**Solução:**
1. Identificar qual arquivo está duplicado
2. Desabilitar configurações antigas (boxhub-api, default)
3. Garantir que `discart.me` não tem duplicação interna
4. Testar e recarregar

**Execute os comandos de diagnóstico acima para identificar exatamente qual arquivo está causando o conflito!**

