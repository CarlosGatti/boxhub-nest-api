# 📘 Como Configurar pgAdmin para Acessar o PostgreSQL na VPS

> **Guia passo a passo** para configurar o pgAdmin e conectar ao banco de dados PostgreSQL na sua VPS.

---

## ✅ Informações do Banco de Dados

**Baseado na configuração que você fez:**
- **Host (VPS):** `104.237.3.199`
- **Porta SSH:** `22`
- **Porta PostgreSQL:** `5432`
- **Database:** `khub`
- **Username:** `gatti`
- **Password:** `asdf1234`

---

## 🚀 Opção 1: Usar Túnel SSH (Recomendado - Mais Seguro)

**Use esta opção se você configurou o túnel SSH no pgAdmin.**

### Aba "General"

1. **Name:** `BoxHub VPS` (ou qualquer nome que você preferir)
   - ⚠️ **Este campo é obrigatório** - não pode estar vazio!

### Aba "SSH Tunnel"

1. **Use SSH tunneling:** ✅ **Ativar** (toggle ON - azul)

2. **Tunnel host:** `104.237.3.199`

3. **Tunnel port:** `22`

4. **Username:** `root` (ou o usuário que você usa para SSH na VPS)

5. **Authentication:** Escolha uma opção:

   **Opção A: Password (mais simples)**
   - Selecione: **Password**
   - **Password:** Digite a senha do seu usuário SSH na VPS
   - **Save password?:** ✅ Ativar se quiser salvar (recomendado)

   **Opção B: Identity file (mais seguro)**
   - Selecione: **Identity file**
   - **Identity file:** Selecione o arquivo da sua chave SSH privada (geralmente `~/.ssh/id_ed25519` ou `~/.ssh/id_rsa`)
   - **Passphrase:** Se sua chave SSH tem senha, digite aqui

6. **Keep alive (seconds):** `60` (opcional, mas recomendado)

### Aba "Connection"

1. **Host name/address:** `localhost` ⚠️ **Não use o IP da VPS aqui!**
   - Como está usando túnel SSH, use `localhost`

2. **Port:** `5432`

3. **Maintenance database:** `khub` (ou `postgres` se não conseguir conectar)

4. **Username:** `gatti`

5. **Password:** `asdf1234`

6. **Save password?:** ✅ Ativar se quiser salvar (recomendado)

7. **Role:** Deixe vazio

8. **Service:** Deixe vazio

### Salvar

1. Clique em **Save** (botão azul no canto inferior direito)

2. Se tudo estiver correto, a conexão será estabelecida!

---

## 🌐 Opção 2: Acesso Direto (Menos Seguro)

**⚠️ ATENÇÃO:** Esta opção é menos segura e requer configuração adicional na VPS.

**Use esta opção apenas se:**
- Você não conseguiu configurar o túnel SSH
- Você precisa de acesso direto sem SSH

### Primeiro: Configurar acesso remoto na VPS

```bash
# Na VPS (conectado via SSH)
sudo nano /etc/postgresql/15/main/postgresql.conf
```

**Descomentar/ajustar:**
```
listen_addresses = '*'
```

```bash
sudo nano /etc/postgresql/15/main/pg_hba.conf
```

**Adicionar no final:**
```
# Permitir acesso do seu IP
host    khub    gatti    SEU_IP_AQUI/32    md5
```

**Substitua `SEU_IP_AQUI` pelo seu IP público atual!**

Para descobrir seu IP:
```bash
# No seu computador local
curl ifconfig.me
```

```bash
# Reiniciar PostgreSQL na VPS
sudo systemctl restart postgresql

# Abrir porta no firewall
sudo ufw allow from SEU_IP_AQUI to any port 5432
```

### Aba "General"

1. **Name:** `BoxHub VPS Direto`

### Aba "Connection"

1. **Host name/address:** `104.237.3.199`

2. **Port:** `5432`

3. **Maintenance database:** `khub`

4. **Username:** `gatti`

5. **Password:** `asdf1234`

6. **Save password?:** ✅ Ativar se quiser salvar

### Aba "SSH Tunnel"

1. **Use SSH tunneling:** ❌ **Desativar** (toggle OFF - cinza)
   - Deixe todos os outros campos vazios

### Salvar

1. Clique em **Save**

---

## ❌ Problemas Comuns

### Erro: "'Name' cannot be empty"

**Solução:** Preencha o campo **Name** na aba "General" antes de salvar.

### Erro: "could not connect to server"

**Possíveis causas:**

1. **Túnel SSH não configurado corretamente**
   - Verifique se o usuário SSH está correto
   - Verifique se a senha/chave SSH está correta
   - Verifique se o IP da VPS está correto

2. **PostgreSQL não está rodando na VPS**
   ```bash
   # Na VPS
   sudo systemctl status postgresql
   ```

3. **Firewall bloqueando conexão**
   - Se usando túnel SSH, não precisa abrir porta 5432
   - Se usando acesso direto, verifique: `sudo ufw status`

### Erro: "password authentication failed"

**Solução:** Verifique se:
- Username está correto: `gatti`
- Password está correto: `asdf1234`
- Banco existe: `khub`

### Erro: "database does not exist"

**Solução:** 
- Use `postgres` como **Maintenance database** primeiro
- Depois de conectar, você verá todos os bancos, incluindo `khub`

---

## ✅ Verificação Rápida

**Para testar se tudo está funcionando:**

1. Conecte via pgAdmin
2. Expanda o servidor `BoxHub VPS` na lista lateral
3. Expanda **Databases**
4. Você deve ver o banco `khub` na lista
5. Clique com botão direito em `khub` > **Query Tool**
6. Execute: `SELECT version();`
7. Se retornar a versão do PostgreSQL, está tudo certo! 🎉

---

## 📝 Resumo Rápido (Opção 1 - Túnel SSH)

**Aba General:**
- Name: `BoxHub VPS`

**Aba SSH Tunnel:**
- Use SSH tunneling: ✅ ON
- Tunnel host: `104.237.3.199`
- Tunnel port: `22`
- Username: `root` (ou seu usuário SSH)
- Authentication: Password ou Identity file

**Aba Connection:**
- Host: `localhost` ⚠️
- Port: `5432`
- Database: `khub`
- Username: `gatti`
- Password: `asdf1234`

**Salvar:** Clique em **Save** ✅

---

**✅ Pronto!** Agora você pode gerenciar seu banco de dados PostgreSQL via pgAdmin! 🚀

