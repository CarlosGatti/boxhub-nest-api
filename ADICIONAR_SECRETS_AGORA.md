# ⚠️ AÇÃO URGENTE: Adicionar Secrets no GitHub

> **Você PRECISA adicionar os secrets agora para o deploy funcionar!**

---

## 🔗 Link Direto para Adicionar Secrets

**👉 CLIQUE AQUI AGORA:**
https://github.com/CarlosGatti/boxhub-nest-api/settings/secrets/actions

---

## 📋 Checklist - 3 Secrets Obrigatórios

Você precisa adicionar **EXATAMENTE 3 secrets**:

- [ ] `VPS_HOST` → Valor: `104.237.3.199`
- [ ] `VPS_USER` → Valor: `root`
- [ ] `VPS_SSH_PRIVATE_KEY` → Valor: (cole a chave privada abaixo)

---

## 🔑 Chave SSH Privada (Cole Isso)

```
-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW
QyNTUxOQAAACDt7CpKqa2CyCiA3JBAcV1KIRXYZ1oWUPjoNO7P5pNJvAAAAJBtTQ4/bU0O
PwAAAAtzc2gtZWQyNTUxOQAAACDt7CpKqa2CyCiA3JBAcV1KIRXYZ1oWUPjoNO7P5pNJvA
AAAEAIs4Z5U/qu/LFrDYD/H3S+ABesCxwjTixkf4JQEemuMu3sKkqprYLIKIDckEBxXUoh
FdhnWhZQ+Og07s/mk0m8AAAACnZwcy1ib3hodWIBAgM=
-----END OPENSSH PRIVATE KEY-----
```

**⚠️ IMPORTANTE:** Copie TODO o conteúdo acima, incluindo as linhas `-----BEGIN` e `-----END`!

---

## ✅ Passo a Passo Rápido

### 1️⃣ Acessar Secrets

1. **Clique no link:** https://github.com/CarlosGatti/boxhub-nest-api/settings/secrets/actions
2. **Ou navegue:**
   - Vá em: https://github.com/CarlosGatti/boxhub-nest-api
   - Clique em: **Settings** (no topo do repositório)
   - No menu esquerdo: **Secrets and variables** → **Actions**
   - Clique em: **New repository secret** (botão verde/azul)

---

### 2️⃣ Adicionar Secret 1: VPS_HOST

**Campo "Name":**
```
VPS_HOST
```

**Campo "Secret":**
```
104.237.3.199
```

**Clique em:** "Add secret"

---

### 3️⃣ Adicionar Secret 2: VPS_USER

**Clique em:** "New repository secret" novamente

**Campo "Name":**
```
VPS_USER
```

**Campo "Secret":**
```
root
```

**Clique em:** "Add secret"

---

### 4️⃣ Adicionar Secret 3: VPS_SSH_PRIVATE_KEY

**Clique em:** "New repository secret" novamente

**Campo "Name":**
```
VPS_SSH_PRIVATE_KEY
```

**Campo "Secret":** Cole a chave completa acima (a que começa com `-----BEGIN OPENSSH PRIVATE KEY-----`)

**Clique em:** "Add secret"

---

## ✅ Verificar se Adicionou Corretamente

**Na página de Secrets, você deve ver:**

| Name | Last updated |
|------|--------------|
| `VPS_HOST` | (data/hora) |
| `VPS_USER` | (data/hora) |
| `VPS_SSH_PRIVATE_KEY` | (data/hora) |

**⚠️ Os valores aparecem como `••••` (ocultos) - isso é normal!**

---

## 🚀 Testar Deploy

**Depois de adicionar os 3 secrets:**

1. **Faça push:** 
   ```bash
   git add .
   git commit -m "Update workflow validation"
   git push
   ```

2. **Ou acione manualmente:**
   - Vá em: https://github.com/CarlosGatti/boxhub-nest-api/actions
   - Clique em: "Deploy to VPS"
   - Clique em: "Run workflow"

3. **Verificar logs:**
   - O passo "Validate secrets" deve mostrar:
     ```
     ✅ VPS_HOST: Configurado
     ✅ VPS_USER: Configurado
     ✅ VPS_SSH_PRIVATE_KEY: Configurado
     ✅ Todos os secrets estão configurados!
     ```

---

## ❌ Se Ainda Der Erro

### Verificar:

1. ✅ **Os 3 secrets existem?**
   - Vá em: https://github.com/CarlosGatti/boxhub-nest-api/settings/secrets/actions
   - Confirme que aparecem 3 secrets na lista

2. ✅ **Os nomes estão corretos?**
   - `VPS_HOST` (não `vps_host`, não `Vps_Host`)
   - `VPS_USER` (não `vps_user`, não `Vps_User`)
   - `VPS_SSH_PRIVATE_KEY` (não `VPS_SSH_PRIVATE_KEY_`, não com espaço)

3. ✅ **Os valores não estão vazios?**
   - VPS_HOST deve ter: `104.237.3.199`
   - VPS_USER deve ter: `root`
   - VPS_SSH_PRIVATE_KEY deve ter a chave completa

---

## 📝 Resumo

1. ✅ **Acesse:** https://github.com/CarlosGatti/boxhub-nest-api/settings/secrets/actions
2. ✅ **Clique em:** "New repository secret"
3. ✅ **Adicione 3 secrets:**
   - `VPS_HOST` = `104.237.3.199`
   - `VPS_USER` = `root`
   - `VPS_SSH_PRIVATE_KEY` = (cole a chave acima)
4. ✅ **Faça push:** `git push`
5. ✅ **Verifique:** Actions > Deploy to VPS

---

**🚨 ATENÇÃO:** O deploy NÃO vai funcionar até você adicionar os 3 secrets no GitHub! Faça isso AGORA! 🚀

