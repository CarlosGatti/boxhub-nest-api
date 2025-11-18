# 🔧 Solução: "ufw: command not found"

> **Guia rápido** para instalar e configurar o UFW (firewall) na VPS.

---

## ❌ Erro que você está vendo:

```
sudo: ufw: command not found
```

**Isso acontece quando:** O UFW (Uncomplicated Firewall) não está instalado na VPS.

---

## ✅ SOLUÇÃO: Instalar UFW

### Passo 1: Instalar UFW

```bash
# Na VPS (como root ou com sudo)
sudo apt update
sudo apt install -y ufw
```

### Passo 2: Configurar Regras Básicas

```bash
# Permitir SSH (IMPORTANTE - não bloquear!)
sudo ufw allow 22/tcp

# Permitir HTTP
sudo ufw allow 80/tcp

# Permitir HTTPS
sudo ufw allow 443/tcp
```

### Passo 3: Habilitar Firewall

```bash
# Habilitar firewall
sudo ufw enable

# Vai perguntar se você tem certeza - digite "y" e Enter
```

### Passo 4: Verificar Status

```bash
# Ver regras ativas
sudo ufw status

# Deve mostrar:
# Status: active
# 22/tcp                     ALLOW       Anywhere
# 80/tcp                     ALLOW       Anywhere
# 443/tcp                    ALLOW       Anywhere
```

---

## ⚠️ IMPORTANTE: Não Bloquear SSH!

**SEMPRE permita a porta 22 (SSH) antes de habilitar o firewall!**

Se você bloquear a porta 22, não conseguirá mais conectar na VPS via SSH.

**Se isso acontecer:**
- Use o console web do painel da VPSdime para acessar
- Ou desabilite o firewall: `sudo ufw disable`

---

## 📝 Comandos Úteis do UFW

```bash
# Ver status
sudo ufw status

# Ver status detalhado
sudo ufw status verbose

# Desabilitar firewall (se necessário)
sudo ufw disable

# Habilitar firewall
sudo ufw enable

# Permitir porta específica
sudo ufw allow 3000/tcp

# Bloquear porta específica
sudo ufw deny 3000/tcp

# Remover regra
sudo ufw delete allow 3000/tcp

# Resetar todas as regras
sudo ufw reset
```

---

## ✅ Próximo Passo

**Após instalar e configurar o UFW, continue com:**

Siga o guia: `DEPLOY_PASSO_A_PASSO.md` - Próximo passo

---

**✅ Resumo:** Execute `sudo apt install -y ufw` e depois configure as regras! 🚀

