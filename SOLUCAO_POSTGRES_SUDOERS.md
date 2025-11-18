# 🔧 Solução: "postgres is not in the sudoers file"

> **Guia rápido** para resolver o erro ao tentar acessar o PostgreSQL.

---

## ❌ Erro que você está vendo:

```
postgres is not in the sudoers file
```

**Isso acontece quando:** Você tenta usar `sudo -u postgres` mas está conectado como um usuário sem permissões sudo adequadas.

---

## ✅ SOLUÇÃO: Usar `su - postgres` ao invés de `sudo`

### Se você está conectado como ROOT:

```bash
# Trocar para o usuário postgres
su - postgres

# Agora você está como usuário postgres
# Não precisa mais usar sudo!
psql

# Criar banco e usuário
CREATE DATABASE boxhub_db;
CREATE USER boxhub_user WITH PASSWORD 'SUA_SENHA_FORTE_AQUI';
GRANT ALL PRIVILEGES ON DATABASE boxhub_db TO boxhub_user;
ALTER USER boxhub_user CREATEDB;
\q

# Sair do usuário postgres
exit
```

**✅ Pronto!** Banco criado com sucesso.

---

## 🔍 Verificar quem você está usando

**Para verificar em qual usuário você está:**

```bash
# Verificar usuário atual
whoami

# Se mostrar "root" - use "su - postgres"
# Se mostrar outro nome - veja solução abaixo
```

---

## ✅ SOLUÇÃO Alternativa: Se não estiver como root

### Se você está como usuário normal (não root):

**Opção 1: Trocar para root primeiro**

```bash
# Trocar para root
su -

# Digite a senha do root quando solicitado

# Agora trocar para postgres
su - postgres

# Acessar PostgreSQL
psql

# Criar banco...
CREATE DATABASE boxhub_db;
CREATE USER boxhub_user WITH PASSWORD 'SUA_SENHA_FORTE_AQUI';
GRANT ALL PRIVILEGES ON DATABASE boxhub_db TO boxhub_user;
ALTER USER boxhub_user CREATEDB;
\q

# Sair
exit
exit  # Sair do root também
```

**Opção 2: Conectar como root diretamente**

```bash
# Desconectar da VPS
exit

# Conectar novamente como root
ssh root@104.237.3.199

# Agora usar su - postgres
su - postgres
psql
# ... criar banco ...
```

---

## 📝 Comandos Corretos (Copiar e Colar)

**Se você está como ROOT:**

```bash
su - postgres
psql
```

**Dentro do psql, execute:**

```sql
CREATE DATABASE boxhub_db;
CREATE USER boxhub_user WITH PASSWORD 'SUA_SENHA_FORTE_AQUI';
GRANT ALL PRIVILEGES ON DATABASE boxhub_db TO boxhub_user;
ALTER USER boxhub_user CREATEDB;
\q
```

```bash
exit
```

---

## ✅ Testar Conexão

**Depois de criar o banco, teste a conexão:**

```bash
# Testar conexão com o novo usuário
psql -U boxhub_user -d boxhub_db -h localhost

# Vai pedir a senha que você criou
# Se conectar, está tudo certo!
\q
```

---

## 🎯 Próximo Passo

**Após criar o banco com sucesso, continue com:**

Siga o guia: `DEPLOY_PASSO_A_PASSO.md` - Passo 3.3 (Configurar acesso local)

---

**✅ Resumo:** Use `su - postgres` ao invés de `sudo -u postgres` quando estiver como root! 🚀

