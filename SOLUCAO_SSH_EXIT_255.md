# 🔧 Solução: SSH Exit Code 255 no GitHub Actions

> **Guia rápido** para resolver erro "exit code 255" no comando SSH do deploy.

---

## ❌ Erro que você está vendo:

```
ssh @ "mkdir -p /home/boxhub/boxhub-api-deploy"
usage: ssh [options...] [user@]hostname [command]
Error: Process completed with exit code 255.
```

**Problema:** Os secrets `VPS_USER` ou `VPS_HOST` estão vazios ou não configurados no GitHub.

---

## ✅ SOLUÇÃO: Verificar e Configurar Secrets

### Passo 1: Acessar Secrets no GitHub

1. **Acesse:** https://github.com/CarlosGatti/boxhub-nest-api/settings/secrets/actions

2. **Clique em:** "New repository secret" para adicionar secrets

3. **Verifique se os secrets existem:**

   | Secret Name | Valor Correto | Exemplo |
   |-------------|---------------|---------|
   | `VPS_HOST` | IP da VPS (sem https:// ou porta) | `104.237.3.199` |
   | `VPS_USER` | Usuário SSH na VPS | `root` ou `boxhub` |
   | `VPS_SSH_PRIVATE_KEY` | Chave SSH privada completa | `-----BEGIN OPENSSH...` |

---

### Passo 2: Configurar VPS_HOST

**Secret Name:** `VPS_HOST`

**Valor:** Apenas o IP ou hostname da VPS
- ✅ **Correto:** `104.237.3.199`
- ✅ **Correto:** `gatti.vpsdime.com` (se tiver hostname)
- ❌ **Errado:** `https://104.237.3.199`
- ❌ **Errado:** `ssh://104.237.3.199`
- ❌ **Errado:** `104.237.3.199:22`

---

### Passo 3: Configurar VPS_USER

**Secret Name:** `VPS_USER`

**Valor:** Usuário SSH na VPS
- ✅ **Correto:** `root`
- ✅ **Correto:** `boxhub` (se usar usuário específico)

---

### Passo 4: Configurar VPS_SSH_PRIVATE_KEY

**Secret Name:** `VPS_SSH_PRIVATE_KEY`

**Valor:** Chave SSH privada completa (do arquivo `~/.ssh/id_ed25519` ou similar)

**Como obter a chave SSH privada:**

```bash
# No seu computador local (não na VPS)
cat ~/.ssh/id_ed25519

# Ou:
cat ~/.ssh/id_rsa

# Deve mostrar algo como:
# -----BEGIN OPENSSH PRIVATE KEY-----
# b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAABlwAAAAdzc2gtcn
# ...
# -----END OPENSSH PRIVATE KEY-----

# Copie TODO o conteúdo (incluindo as linhas BEGIN e END)
```

**⚠️ IMPORTANTE:**
- Copie TODO o conteúdo do arquivo (incluindo `-----BEGIN` e `-----END`)
- Não compartilhe essa chave publicamente (ela é privada!)
- Use apenas nos Secrets do GitHub

---

## ✅ Correções Aplicadas no Workflow

### 1. Validação de Secrets (Novo)

Adicionei um passo para validar se os secrets existem antes de usar:

```yaml
- name: Validate secrets
  run: |
    if [ -z "${{ secrets.VPS_HOST }}" ]; then
      echo "❌ Error: VPS_HOST secret is not set"
      exit 1
    fi
    if [ -z "${{ secrets.VPS_USER }}" ]; then
      echo "❌ Error: VPS_USER secret is not set"
      exit 1
    fi
    if [ -z "${{ secrets.VPS_SSH_PRIVATE_KEY }}" ]; then
      echo "❌ Error: VPS_SSH_PRIVATE_KEY secret is not set"
      exit 1
    fi
    echo "✅ Secrets validated"
```

### 2. Teste de Conexão SSH (Novo)

Adicionei um passo para testar a conexão SSH antes de usar:

```yaml
- name: Test SSH connection
  run: |
    ssh -o ConnectTimeout=10 -o StrictHostKeyChecking=no ${{ secrets.VPS_USER }}@${{ secrets.VPS_HOST }} "echo 'SSH connection successful'"
```

### 3. Opções SSH Melhoradas

Adicionei opções SSH em todos os comandos:
- `-o ConnectTimeout=10` → Timeout de conexão
- `-o StrictHostKeyChecking=no` → Não pedir confirmação de host

---

## ✅ Verificar Secrets no GitHub

### Passo 1: Acessar Secrets

1. **Acesse:** https://github.com/CarlosGatti/boxhub-nest-api/settings/secrets/actions

2. **Verifique se os secrets existem:**
   - ✅ `VPS_HOST`
   - ✅ `VPS_USER`
   - ✅ `VPS_SSH_PRIVATE_KEY`

### Passo 2: Se não existirem, criar:

1. **Clique em:** "New repository secret"

2. **Para cada secret:**
   - **Name:** `VPS_HOST`
   - **Secret:** `104.237.3.199`
   - **Add secret**

   - **Name:** `VPS_USER`
   - **Secret:** `root`
   - **Add secret**

   - **Name:** `VPS_SSH_PRIVATE_KEY`
   - **Secret:** (cole o conteúdo completo da chave SSH privada)
   - **Add secret**

---

## ✅ Testar SSH Localmente

**No seu computador local, testar conexão:**

```bash
# Testar conexão SSH
ssh root@104.237.3.199 "echo 'SSH connection successful'"

# Deve conectar e mostrar: SSH connection successful

# Se pedir senha, a chave SSH não está configurada corretamente
# Configure a chave SSH primeiro antes de usar no GitHub Actions
```

---

## ✅ Gerar Nova Chave SSH (Se necessário)

**Se você não tem chave SSH configurada:**

```bash
# No seu computador local
ssh-keygen -t ed25519 -C "github-actions" -f ~/.ssh/github_vps

# Copiar chave pública para VPS
ssh-copy-id -i ~/.ssh/github_vps.pub root@104.237.3.199

# Ou manualmente na VPS:
# 1. Copiar conteúdo de ~/.ssh/github_vps.pub
# 2. Na VPS: nano ~/.ssh/authorized_keys
# 3. Colar a chave pública
# 4. Salvar: Ctrl+O, Enter, Ctrl+X

# Adicionar chave privada no GitHub Secrets:
cat ~/.ssh/github_vps

# Copiar TODO o conteúdo e adicionar em VPS_SSH_PRIVATE_KEY
```

---

## ✅ Resumo das Correções

1. ✅ **Validação de secrets** antes de usar
2. ✅ **Teste de conexão SSH** para identificar problemas
3. ✅ **Opções SSH melhoradas** em todos os comandos
4. ✅ **Timeout e StrictHostKeyChecking** configurados

---

## 🚀 Próximos Passos

1. **Verificar Secrets no GitHub:**
   - Vá em: Settings > Secrets and variables > Actions
   - Verifique se `VPS_HOST`, `VPS_USER`, e `VPS_SSH_PRIVATE_KEY` existem

2. **Se não existirem, criar:**
   - `VPS_HOST`: `104.237.3.199`
   - `VPS_USER`: `root`
   - `VPS_SSH_PRIVATE_KEY`: (conteúdo completo da chave SSH privada)

3. **Commit e push:**
   ```bash
   git add .github/workflows/deploy.yml
   git commit -m "fix: adicionar validação de secrets e melhorar SSH no deploy"
   git push
   ```

4. **Testar deploy novamente:**
   - Vá em: Actions > Deploy to VPS > Run workflow
   - O passo "Validate secrets" vai mostrar se há algum problema

---

## ⚠️ IMPORTANTE

**Exit code 255 do SSH geralmente significa:**

1. ❌ **Secrets não configurados** → Configurar no GitHub
2. ❌ **Chave SSH incorreta** → Verificar formato da chave
3. ❌ **Permissões SSH** → Verificar na VPS
4. ❌ **Firewall bloqueando** → Verificar porta 22 aberta

**A validação de secrets vai identificar o problema mais rápido!**

---

**Execute os passos acima!** 🚀

