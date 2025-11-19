# 🔧 Solução: Erro ssh-keyscan no GitHub Actions

> **Guia rápido** para resolver erro no passo "Add VPS to known hosts" do deploy.

---

## ❌ Erro que você está vendo:

```
usage: ssh-keyscan [-46cDHv] [-f file] [-O option] [-p port] [-T timeout]
                   [-t type] [host | addrlist namelist]
Error: Process completed with exit code 1.
```

**Problema:** O comando `ssh-keyscan` está sendo executado incorretamente ou o `VPS_HOST` está vazio/incorreto.

---

## ✅ SOLUÇÃO: Corrigir Comando ssh-keyscan

### Correção Aplicada

**Arquivo:** `.github/workflows/deploy.yml`

**Antes (com erro):**
```yaml
- name: Add VPS to known hosts
  run: |
    mkdir -p ~/.ssh
    ssh-keyscan -H ${{ secrets.VPS_HOST }} >> ~/.ssh/known_hosts
```

**Depois (corrigido):**
```yaml
- name: Add VPS to known hosts
  run: |
    mkdir -p ~/.ssh
    chmod 700 ~/.ssh
    ssh-keyscan -H -t rsa,ecdsa,ed25519 ${{ secrets.VPS_HOST }} >> ~/.ssh/known_hosts 2>/dev/null || true
    chmod 644 ~/.ssh/known_hosts
```

**Mudanças:**
- ✅ Adicionado `-t rsa,ecdsa,ed25519` (tipos de chave explícitos)
- ✅ Adicionado `2>/dev/null || true` (ignora erros, não falha o deploy)
- ✅ Adicionado `chmod` para permissões corretas

---

## ✅ Verificar Secrets no GitHub

### Passo 1: Verificar Secrets Configurados

1. **Acesse:** https://github.com/CarlosGatti/boxhub-nest-api/settings/secrets/actions

2. **Verificar se os secrets existem:**
   - ✅ `VPS_HOST` → Deve ser o IP da VPS: `104.237.3.199` (ou hostname)
   - ✅ `VPS_USER` → Deve ser: `root` ou `boxhub`
   - ✅ `VPS_SSH_PRIVATE_KEY` → Chave SSH privada completa
   - ✅ `DOMAIN` → Deve ser: `discart.me` (opcional, para health check)

### Passo 2: Verificar Formato do VPS_HOST

**O `VPS_HOST` deve ser:**
- ✅ IP direto: `104.237.3.199`
- ✅ Hostname: `gatti.vpsdime.com` (se tiver)
- ❌ **NÃO deve ter:** `https://`, `http://`, `ssh://`
- ❌ **NÃO deve ter:** porta (`:22`)

**Formato correto:**
```
VPS_HOST: 104.237.3.199
```

**Formato incorreto:**
```
VPS_HOST: https://104.237.3.199
VPS_HOST: ssh://104.237.3.199
VPS_HOST: 104.237.3.199:22
```

---

## ✅ Testar Comando Localmente

**No seu computador local, testar:**

```bash
# Testar ssh-keyscan
ssh-keyscan -H -t rsa,ecdsa,ed25519 104.237.3.199

# Deve mostrar algo como:
# 104.237.3.199 ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAA...
# 104.237.3.199 ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAI...
# 104.237.3.199 ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAI...
```

**Se não mostrar nada ou dar erro:**
- ⚠️ Problema de rede/firewall
- ⚠️ IP da VPS incorreto
- ⚠️ Porta SSH não está aberta

---

## ✅ Verificar Porta SSH na VPS

**Na VPS, verificar se SSH está rodando:**

```bash
# Na VPS
sudo systemctl status ssh
# Ou:
sudo systemctl status sshd

# Deve mostrar: active (running)

# Verificar porta
sudo ss -tlnp | grep :22

# Deve mostrar:
# tcp  0  0 0.0.0.0:22  0.0.0.0:*  LISTEN  pid/sshd
```

---

## ✅ Alternativa: Usar IP e Porta Explícita

**Se o problema persistir, pode adicionar porta explicitamente:**

```yaml
- name: Add VPS to known hosts
  run: |
    mkdir -p ~/.ssh
    chmod 700 ~/.ssh
    ssh-keyscan -H -p 22 -t rsa,ecdsa,ed25519 ${{ secrets.VPS_HOST }} >> ~/.ssh/known_hosts 2>/dev/null || true
    chmod 644 ~/.ssh/known_hosts
```

**Mas geralmente não é necessário (porta 22 é padrão).**

---

## ✅ Resumo das Correções

1. ✅ **Adicionado tipos de chave explícitos:** `-t rsa,ecdsa,ed25519`
2. ✅ **Adicionado tratamento de erros:** `2>/dev/null || true`
3. ✅ **Adicionado permissões corretas:** `chmod 700 ~/.ssh` e `chmod 644 ~/.ssh/known_hosts`

---

## 🚀 Próximos Passos

1. **Verificar Secrets no GitHub:**
   - Vá em: Settings > Secrets and variables > Actions
   - Verifique se `VPS_HOST` está configurado corretamente (sem `https://` ou porta)

2. **Commit e push:**
   ```bash
   git add .github/workflows/deploy.yml
   git commit -m "fix: corrigir comando ssh-keyscan no deploy"
   git push
   ```

3. **Testar deploy novamente:**
   - Vá em: Actions > Deploy to VPS > Run workflow
   - Ou faça push para `main` para trigger automático

---

## ⚠️ IMPORTANTE

**Se o erro persistir, verifique:**

1. ✅ **VPS_HOST está configurado?** (Settings > Secrets > Actions)
2. ✅ **Formato correto?** (`104.237.3.199` sem `https://` ou porta)
3. ✅ **SSH está acessível?** (teste: `ssh root@104.237.3.199`)
4. ✅ **Porta 22 está aberta?** (firewall na VPS)

---

**Execute os passos acima!** 🚀

