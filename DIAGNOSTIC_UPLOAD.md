# 🔍 Diagnóstico de Upload de Imagens

## Endpoint de Upload

**URL:** `POST /uploads/discart-items`  
**Autenticação:** Requerida (JWT Bearer Token)  
**Content-Type:** `multipart/form-data`  
**Campo:** `files` (array de arquivos)

## Checklist de Diagnóstico

### 1. Verificar se o endpoint está acessível

```bash
# No servidor
curl -X POST http://127.0.0.1:3000/uploads/discart-items \
  -H "Authorization: Bearer SEU_TOKEN_JWT" \
  -F "files=@/caminho/para/imagem.jpg"
```

### 2. Verificar logs do servidor

```bash
pm2 logs khub --lines 50 | grep -i "upload\|discart"
```

### 3. Verificar se a pasta existe e tem permissões

```bash
cd /home/boxhub/boxhub-api
ls -la uploads/discart-items/
touch uploads/discart-items/test.txt && rm uploads/discart-items/test.txt
```

### 4. Verificar no frontend

**URL correta:** `https://www.discart.me/uploads/discart-items` ou `https://www.carlosgatti.com/api/uploads/discart-items`

**Headers necessários:**
- `Authorization: Bearer <token>`
- `Content-Type: multipart/form-data` (não definir manualmente, o browser faz)

**FormData:**
```javascript
const formData = new FormData();
formData.append('files', file1);
formData.append('files', file2);

fetch('https://www.discart.me/uploads/discart-items', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${token}`
    // NÃO incluir Content-Type - o browser define automaticamente com boundary
  },
  body: formData
})
```

## Problemas Comuns

### ❌ Erro 405 (Method Not Allowed)
- **Causa:** Preflight OPTIONS não está sendo tratado
- **Solução:** CORS já configurado no main.ts

### ❌ Erro 401 (Unauthorized)
- **Causa:** Token JWT não está sendo enviado ou é inválido
- **Solução:** Verificar se o token está no header `Authorization: Bearer <token>`

### ❌ Erro 400 (Bad Request)
- **Causa:** Arquivo muito grande, tipo inválido, ou pasta sem permissão
- **Solução:** Verificar logs do servidor para detalhes

### ❌ Erro CORS
- **Causa:** Nginx não está configurado corretamente ou backend não está respondendo CORS
- **Solução:** Verificar configuração do Nginx e logs do backend

## Teste Manual Completo

```bash
# 1. Criar pasta se não existir
mkdir -p /home/boxhub/boxhub-api/uploads/discart-items
chmod 755 /home/boxhub/boxhub-api/uploads/discart-items

# 2. Testar endpoint localmente
curl -X POST http://127.0.0.1:3000/uploads/discart-items \
  -H "Authorization: Bearer SEU_TOKEN" \
  -F "files=@test.jpg"

# 3. Verificar resposta
# Deve retornar: {"urls": ["/uploads/discart-items/arquivo.jpg"]}
```

