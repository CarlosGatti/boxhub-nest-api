# 🔐 Adicionar Secrets no GitHub - Passo a Passo

> **Guia visual** para adicionar os secrets necessários no GitHub Actions.

---

## ❌ Erro Atual

```
Error: VPS_HOST secret is not set
```

**Isso significa:** Você precisa adicionar os secrets no GitHub **AGORA**.

---

## ✅ Passo a Passo COMPLETO

### Passo 1: Acessar Secrets no GitHub

1. **Abra o navegador**
2. **Acesse:** https://github.com/CarlosGatti/boxhub-nest-api/settings/secrets/actions
3. **Ou:**
   - Vá em: https://github.com/CarlosGatti/boxhub-nest-api
   - Clique em: **Settings** (no topo do repositório)
   - No menu lateral esquerdo: **Secrets and variables** > **Actions**
   - Clique no botão: **New repository secret** (botão verde/azul)

---

## 📝 Secret 1: VPS_HOST

1. **Campo "Name":** Digite: `VPS_HOST`
   - Tudo maiúsculo
   - Exatamente assim: `VPS_HOST`

2. **Campo "Secret":** Digite: `104.237.3.199`
   - Apenas o IP
   - Sem `https://`
   - Sem `http://`
   - Sem `ssh://`
   - Sem porta `:22`

3. **Clique em:** "Add secret" (botão verde/azul na parte inferior)

---

## 📝 Secret 2: VPS_USER

1. **Clique em:** "New repository secret" novamente

2. **Campo "Name":** Digite: `VPS_USER`
   - Tudo maiúsculo
   - Exatamente assim: `VPS_USER`

3. **Campo "Secret":** Digite: `root`
   - Ou `boxhub` se você usar outro usuário

4. **Clique em:** "Add secret"

---

## 📝 Secret 3: VPS_SSH_PRIVATE_KEY

1. **Clique em:** "New repository secret" novamente

2. **Campo "Name":** Digite: `VPS_SSH_PRIVATE_KEY`
   - Tudo maiúsculo
   - Exatamente assim: `VPS_SSH_PRIVATE_KEY`

3. **Campo "Secret":** Cole a chave privada

**No terminal do seu computador local, execute:**

```bash
cat ~/.ssh/id_ed25519
```

**Ou se não tiver:**

```bash
cat ~/.ssh/id_rsa
```

**Copie TODO o conteúdo que aparecer, incluindo:**
- A linha `-----BEGIN OPENSSH PRIVATE KEY-----`
- Todas as linhas do meio
- A linha `-----END OPENSSH PRIVATE KEY-----`

**Cole no campo "Secret" do GitHub.**

4. **Clique em:** "Add secret"

---

## ✅ Verificar se Adicionou Corretamente

**Depois de adicionar, na página de Secrets você deve ver 3 itens:**

| Name | Last updated |
|------|--------------|
| `VPS_HOST` | (data/hora) |
| `VPS_USER` | (data/hora) |
| `VPS_SSH_PRIVATE_KEY` | (data/hora) |

**⚠️ Os valores ficam ocultos (`••••`), isso é normal por segurança!**

---

## ✅ Testar Deploy Novamente

1. **Vá em:** Actions (no topo do repositório)

2. **Clique em:** "Deploy to VPS" (workflow que falhou)

3. **Clique em:** "Run workflow" (botão no canto superior direito)

4. **Ou faça push para `main`:**
   ```bash
   git push
   ```

5. **Verificar logs:**
   - O passo "Validate secrets" deve mostrar:
     ```
     ✅ Secrets validated
     VPS_HOST: 104.237.3.199
     VPS_USER: root
     ```

---

## ⚠️ Se Ainda Der Erro

### Verificar se os secrets estão corretos:

1. **Na página de Secrets, verifique:**
   - ✅ Tem 3 secrets? (`VPS_HOST`, `VPS_USER`, `VPS_SSH_PRIVATE_KEY`)
   - ✅ Nomes estão exatamente assim (maiúsculo)?
   - ✅ Valores não estão vazios?

2. **Se algum secret não aparecer:**
   - Adicione novamente (clique em "New repository secret")

3. **Se os secrets existem mas ainda dá erro:**
   - Verifique se os nomes estão exatamente assim:
     - `VPS_HOST` (não `vps_host`, não `Vps_Host`)
     - `VPS_USER` (não `vps_user`, não `Vps_User`)
     - `VPS_SSH_PRIVATE_KEY` (não `VPS_SSH_PRIVATE_KEY_`, não com espaço)

---

## 📝 Resumo Rápido

1. ✅ **Acesse:** https://github.com/CarlosGatti/boxhub-nest-api/settings/secrets/actions
2. ✅ **Clique em:** "New repository secret"
3. ✅ **Adicione 3 secrets:**
   - Name: `VPS_HOST` → Secret: `104.237.3.199`
   - Name: `VPS_USER` → Secret: `root`
   - Name: `VPS_SSH_PRIVATE_KEY` → Secret: (cole chave privada completa)
4. ✅ **Teste deploy:** Actions > Deploy to VPS > Run workflow

---

**⚠️ IMPORTANTE:** Você precisa adicionar os secrets no GitHub **AGORA** para o deploy funcionar! 🚀

