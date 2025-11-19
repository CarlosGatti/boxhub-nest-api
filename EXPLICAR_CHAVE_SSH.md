# 🔐 Entendendo Chaves SSH para GitHub Actions

> **Explicação** sobre onde obter a chave SSH para GitHub Actions.

---

## 🤔 Como Funciona o SSH

### O Fluxo SSH:

1. **GitHub Actions** (servidor do GitHub)
2. → Usa **chave SSH PRIVADA** (no GitHub Secrets)
3. → Conecta via SSH na **VPS**
4. → VPS verifica a **chave SSH PÚBLICA** correspondente
5. → Se a chave pública estiver autorizada → Conexão permitida ✅

---

## ✅ Duas Opções para Chave SSH

### OPÇÃO 1: Usar Chave SSH Local (Se já tem acesso à VPS)

**Situação:** Você já consegue fazer `ssh root@104.237.3.199` do seu computador local.

**O que fazer:**

1. **Chave privada local → GitHub Secrets:**
   - Use a chave privada do seu computador local
   - Cole no GitHub Secret `VPS_SSH_PRIVATE_KEY`

2. **Chave pública local → VPS (já deve estar):**
   - Se você já consegue conectar na VPS, a chave pública já está autorizada
   - Verifique: `cat ~/.ssh/authorized_keys` na VPS

**Vantagem:** ✅ Rápido - usa a chave que já funciona

**Desvantagem:** ⚠️ Mesma chave para acesso pessoal e CI/CD

---

### OPÇÃO 2: Gerar Chave Nova Específica para GitHub Actions (Recomendado)

**Situação:** Criar uma chave SSH específica apenas para GitHub Actions.

**O que fazer:**

1. **Gerar nova chave no seu computador local:**
   ```bash
   # No seu computador local (NÃO na VPS)
   ssh-keygen -t ed25519 -C "github-actions-boxhub" -f ~/.ssh/github_vps
   
   # Não colocar senha (Enter duas vezes)
   # Vai criar:
   # - ~/.ssh/github_vps (chave PRIVADA - vai para GitHub Secrets)
   # - ~/.ssh/github_vps.pub (chave PÚBLICA - vai para VPS)
   ```

2. **Copiar chave pública para VPS:**
   ```bash
   # No seu computador local
   cat ~/.ssh/github_vps.pub
   
   # Copie o conteúdo (começa com ssh-ed25519 ...)
   ```

3. **Na VPS, adicionar chave pública:**
   ```bash
   # Na VPS
   mkdir -p ~/.ssh
   chmod 700 ~/.ssh
   nano ~/.ssh/authorized_keys
   
   # Cole a chave pública (a que começa com ssh-ed25519 ...)
   # Salvar: Ctrl+O, Enter, Ctrl+X
   
   chmod 600 ~/.ssh/authorized_keys
   ```

4. **Chave privada no GitHub Secrets:**
   ```bash
   # No seu computador local
   cat ~/.ssh/github_vps
   
   # Copie TODO o conteúdo (incluindo BEGIN e END)
   # Cole no GitHub Secret: VPS_SSH_PRIVATE_KEY
   ```

**Vantagem:** ✅ Separação - chave específica para CI/CD
**Vantagem:** ✅ Pode revogar facilmente (apenas remover da VPS)
**Desvantagem:** ⚠️ Precisa configurar chave pública na VPS

---

## ✅ Verificar se Chave Local Funciona na VPS

**No seu computador local:**

```bash
# Testar conexão SSH
ssh root@104.237.3.199

# Se conectar sem senha → Chave pública já está autorizada ✅
# Se pedir senha → Chave pública não está autorizada ❌
```

**Se conectar sem senha:**
- ✅ Pode usar a chave privada local no GitHub Secrets
- ✅ Não precisa fazer nada na VPS

**Se pedir senha:**
- ⚠️ Precisa adicionar chave pública na VPS (Opção 2)

---

## 🔍 Verificar Qual Chave Está Sendo Usada

**No seu computador local:**

```bash
# Ver qual chave está sendo usada
ssh -v root@104.237.3.199 2>&1 | grep -i "identity"

# Vai mostrar algo como:
# debug1: Offering public key: /Users/carlosgatti/.ssh/id_ed25519 ED25519 SHA256:...
```

**A chave mostrada é a que você pode usar no GitHub Secrets.**

---

## 📝 Resumo

### Se você já consegue conectar na VPS sem senha:

1. ✅ Use a chave privada local (`~/.ssh/id_ed25519`)
2. ✅ Cole no GitHub Secret `VPS_SSH_PRIVATE_KEY`
3. ✅ Pronto!

### Se você NÃO consegue conectar na VPS sem senha:

1. ✅ Gere nova chave específica para GitHub Actions
2. ✅ Adicione chave pública na VPS (`~/.ssh/authorized_keys`)
3. ✅ Adicione chave privada no GitHub Secrets
4. ✅ Teste conexão

---

## ⚠️ IMPORTANTE

**A chave SSH PRIVADA no GitHub Secrets:**
- ✅ Pode ser da sua máquina local (se já tem acesso à VPS)
- ✅ Ou pode ser uma chave nova gerada especificamente para CI/CD

**O importante é que a chave PÚBLICA correspondente esteja na VPS!**

---

## ✅ Testar se Funciona

**Depois de adicionar a chave no GitHub Secrets:**

1. **No GitHub:** Actions > Deploy to VPS > Run workflow

2. **Verificar passo "Test SSH connection":**
   - Deve mostrar: `SSH connection successful` ✅
   - Se der erro → Chave pública não está na VPS

3. **Se der erro de autenticação:**
   - Adicione chave pública na VPS (passo 3 da Opção 2)

---

**Resposta direta:** A chave SSH privada pode ser do seu computador local (se já conecta na VPS) OU uma nova gerada. O importante é que a chave pública correspondente esteja autorizada na VPS! 🚀

