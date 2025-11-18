# ⚡ INÍCIO RÁPIDO - Conectar e Começar

> **Guia rápido** para conectar na sua VPS e começar o deploy agora mesmo.

---

## 🔌 Conectar na VPS (SSH)

### No seu terminal:

```bash
ssh root@104.237.3.199
```

**Senha:** Pegue no painel da VPSdime (botão "Root Password")

**Na primeira vez, digite `yes` quando perguntar sobre autenticidade do host.**

---

## 📋 Checklist Inicial

Após conectar na VPS, verifique o que já está instalado:

```bash
# Verificar sistema
cat /etc/os-release
uname -a

# Verificar o que já está instalado
which node      # Node.js instalado?
which psql      # PostgreSQL instalado?
which redis-cli # Redis instalado?
which nginx     # Nginx instalado?
which pm2       # PM2 instalado?
```

**Provavelmente nada está instalado ainda** - vamos instalar tudo agora!

---

## 🚀 Próximo Passo

**Siga o guia:** `DEPLOY_PASSO_A_PASSO.md`

**Ordem:**
1. ✅ Conectar via SSH (você está aqui!)
2. ⏭️ Instalar PostgreSQL + Redis (Próximo)
3. ⏭️ Configurar pgAdmin
4. ⏭️ Instalar Node.js + PM2
5. ⏭️ Fazer deploy da aplicação
6. ⏭️ Configurar Nginx
7. ⏭️ Configurar HTTPS com Cloudflare

---

## 💡 Dica: Configurar Alias SSH

**Para facilitar conexões futuras:**

```bash
# No seu computador local
nano ~/.ssh/config
```

**Adicionar:**
```
Host boxhub-vps
    HostName 104.237.3.199
    User root
    ServerAliveInterval 60
```

**Salvar e usar:**
```bash
ssh boxhub-vps  # Muito mais fácil!
```

---

**✅ Pronto para começar!** Conecte na VPS e siga os próximos passos! 🚀

