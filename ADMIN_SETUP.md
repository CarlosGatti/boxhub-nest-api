# 🔐 Como Tornar um Usuário Admin

## 🌐 EXECUTAR NO SERVIDOR (Recomendado)

O banco de dados está no servidor, então você precisa executar os comandos lá.

### Passo 1: Conectar ao servidor via SSH
```bash
ssh seu-usuario@seu-servidor-ip
```

### Passo 2: Ir para o diretório da aplicação
```bash
cd /home/boxhub/boxhub-api
```

### Passo 3: Verificar usuários no banco
```bash
./scripts/check-database-server.sh
```

Isso vai mostrar todos os usuários e seus status.

### Passo 4: Tornar um usuário admin
```bash
./scripts/make-admin-server.sh eduardo.gf@hotmail.com
```

**Pronto!** O usuário agora é admin no servidor.

---

## 💻 EXECUTAR LOCALMENTE (Se o banco estiver acessível localmente)

Se você tem acesso ao banco do servidor localmente (via VPN, túnel, etc):

### Passo 1: Verificar conexão e listar usuários
```bash
cd /Users/carlosgatti/Documents/projects/boxhub-nest-api
node scripts/check-database.js
```

### Passo 2: Tornar um usuário admin
```bash
node scripts/make-admin.js seu-email@exemplo.com
```

---

## ⚠️ IMPORTANTE: Primeiro Passo

**Se você ainda não tem usuários no banco:**

1. Crie uma conta primeiro via frontend (signup/login)
2. Depois execute os scripts acima

---

## 🚀 Solução Mais Fácil (No Servidor)

### No Servidor (via SSH):

```bash
# 1. Conectar ao servidor
ssh seu-usuario@seu-servidor

# 2. Ir para o diretório
cd /home/boxhub/boxhub-api

# 3. Verificar usuários
./scripts/check-database-server.sh

# 4. Tornar admin
./scripts/make-admin-server.sh eduardo.gf@hotmail.com
```

### Localmente (se tiver acesso ao banco):

```bash
# 1. Verificar usuários
node scripts/check-database.js

# 2. Tornar admin
node scripts/make-admin.js eduardo.gf@hotmail.com
```

---

## 📋 Outras Opções

### Opção 1: Via Prisma Studio (Interface Gráfica)

```bash
# No diretório do projeto
npx prisma studio
```

1. Abra o navegador em `http://localhost:5555`
2. Clique em `User`
3. Encontre o usuário pelo email
4. Clique para editar
5. Marque `isAdmin` como `true`
6. Salve

### Opção 2: Via SQL Direto (Se tiver acesso ao banco)

#### No macOS (PostgreSQL local):
```bash
# Se você instalou PostgreSQL via Homebrew
psql -d seu_database

# Ou se você tem o DATABASE_URL no .env
source .env
psql $DATABASE_URL
```

Depois execute:
```sql
-- Ver todos os usuários
SELECT id, email, "firstName", "lastName", "isAdmin" FROM "User";

-- Tornar admin
UPDATE "User" 
SET "isAdmin" = true 
WHERE email = 'eduardo.gf@hotmail.com';

-- Verificar
SELECT id, email, "isAdmin" FROM "User" WHERE email = 'eduardo.gf@hotmail.com';
```

#### No Servidor Linux:
```bash
# Conectar como postgres
sudo -u postgres psql -d seu_database

# Ou usar o usuário do DATABASE_URL
psql $DATABASE_URL
```

### Opção 3: Via Node.js Direto

```bash
cd /Users/carlosgatti/Documents/projects/boxhub-nest-api

node -e "
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const email = 'eduardo.gf@hotmail.com';
  const user = await prisma.user.update({
    where: { email },
    data: { isAdmin: true },
  });
  console.log('✅ Usuário agora é admin:', user.email);
}

main()
  .catch(console.error)
  .finally(() => prisma.\$disconnect());
"
```

---

## 🔧 Se o Script Não Funcionar

### Verificar conexão com o banco:

1. **Verificar arquivo .env:**
```bash
cat .env | grep DATABASE_URL
```

2. **Testar conexão:**
```bash
node -e "
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

prisma.\$connect()
  .then(() => {
    console.log('✅ Conectado ao banco!');
    return prisma.\$disconnect();
  })
  .catch((e) => {
    console.error('❌ Erro de conexão:', e.message);
    process.exit(1);
  });
"
```

3. **Se não conectar, verifique:**
   - O banco está rodando?
   - O DATABASE_URL está correto?
   - As credenciais estão corretas?

---

## ✅ Verificar se Funcionou

Depois de tornar admin, verifique:

```bash
node scripts/list-users.js
```

O usuário deve aparecer com `Admin: ✅ Sim`.

Ou faça login no frontend e tente acessar:
- Query `pendingResidents` no GraphQL
- Página admin no frontend

---

## 🆘 Problemas Comuns

### Erro: "User not found"
- Verifique se o email está correto
- Use `node scripts/list-users.js` para ver todos os emails

### Erro: "Cannot connect to database"
- Verifique se o banco está rodando
- Verifique o DATABASE_URL no .env
- Se estiver no servidor, verifique se o banco está acessível

### Erro: "Permission denied"
- No servidor, você precisa de permissões no banco
- Veja a seção de permissões abaixo

---

## 🔐 Corrigir Permissões do Banco (Apenas no Servidor)

Se você está no servidor e vê erro de permissão:

```bash
# Conectar como postgres
sudo -u postgres psql -d seu_database

# Dar permissões (substitua 'seu_usuario' pelo usuário do DATABASE_URL)
GRANT USAGE ON SCHEMA public TO seu_usuario;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO seu_usuario;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO seu_usuario;

# Sair
\q
```

---

## 📝 Resumo Rápido

```bash
# 1. Listar usuários
node scripts/list-users.js

# 2. Tornar admin
node scripts/make-admin.js seu-email@exemplo.com

# 3. Verificar
node scripts/list-users.js
```

Pronto! 🎉

