# 🖥️ Comandos para Executar no Servidor

Você está conectado no servidor? Execute estes comandos:

---

## 📋 Passo 1: Verificar Usuários no Banco

```bash
cd /home/boxhub/boxhub-api

node -e "
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      isAdmin: true,
    },
    orderBy: { id: 'asc' },
  });

  console.log('👥 Usuários encontrados:');
  console.log('');
  users.forEach((user) => {
    console.log(\`ID: \${user.id} | Email: \${user.email} | Nome: \${user.firstName} \${user.lastName} | Admin: \${user.isAdmin ? '✅' : '❌'}\`);
  });
}

main().catch(console.error).finally(() => prisma.\$disconnect());
"
```

---

## ✅ Passo 2: Tornar Usuário Admin

**Substitua `eduardo.gf@hotmail.com` pelo email do usuário que você quer tornar admin:**

```bash
cd /home/boxhub/boxhub-api

node -e "
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const email = 'eduardo.gf@hotmail.com';
  
  const user = await prisma.user.findUnique({ where: { email } });
  
  if (!user) {
    console.error('❌ Usuário não encontrado!');
    process.exit(1);
  }
  
  console.log('✅ Usuário encontrado:', user.firstName, user.lastName);
  console.log('📊 Status atual - isAdmin:', user.isAdmin);
  
  if (user.isAdmin) {
    console.log('⚠️  Usuário já é admin!');
    process.exit(0);
  }
  
  const updated = await prisma.user.update({
    where: { email },
    data: { isAdmin: true },
  });
  
  console.log('✅ SUCESSO! Usuário agora é admin!');
  console.log('📊 Novo status - isAdmin:', updated.isAdmin);
}

main().catch(console.error).finally(() => prisma.\$disconnect());
"
```

---

## 🚀 Comando Único (Copiar e Colar)

**Para verificar e tornar admin em um comando só:**

```bash
cd /home/boxhub/boxhub-api && node -e "
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('🔍 Listando usuários...\n');
  const users = await prisma.user.findMany({
    select: { id: true, email: true, firstName: true, lastName: true, isAdmin: true },
    orderBy: { id: 'asc' },
  });
  
  if (users.length === 0) {
    console.log('❌ Nenhum usuário encontrado!');
    return;
  }
  
  users.forEach((u) => {
    console.log(\`ID: \${u.id} | \${u.email} | \${u.firstName} \${u.lastName} | Admin: \${u.isAdmin ? '✅' : '❌'}\`);
  });
  
  console.log('\n💡 Para tornar admin, execute:');
  console.log('   node -e \"const {PrismaClient}=require(\\\"@prisma/client\\\");const p=new PrismaClient();p.user.update({where:{email:\\\"SEU-EMAIL@exemplo.com\\\"},data:{isAdmin:true}}).then(u=>{console.log(\\\"✅ Admin!\\\",u.email);p.\$disconnect();}).catch(e=>{console.error(e);p.\$disconnect();});\"');
}

main().catch(console.error).finally(() => prisma.\$disconnect());
"
```

---

## 📝 Exemplo Prático

**1. Primeiro, veja todos os usuários:**
```bash
cd /home/boxhub/boxhub-api
node -e "const {PrismaClient}=require('@prisma/client');const p=new PrismaClient();p.user.findMany().then(u=>{console.log('Usuários:');u.forEach(x=>console.log(x.id,x.email,x.isAdmin));p.\$disconnect();});"
```

**2. Depois, torne admin (substitua o email):**
```bash
node -e "const {PrismaClient}=require('@prisma/client');const p=new PrismaClient();p.user.update({where:{email:'eduardo.gf@hotmail.com'},data:{isAdmin:true}}).then(u=>{console.log('✅',u.email,'é admin!');p.\$disconnect();}).catch(e=>{console.error('❌',e.message);p.\$disconnect();});"
```

---

## ✅ Verificar se Funcionou

```bash
cd /home/boxhub/boxhub-api

node -e "
const {PrismaClient}=require('@prisma/client');
const p=new PrismaClient();
p.user.findUnique({where:{email:'eduardo.gf@hotmail.com'}}).then(u=>{
  console.log('Email:',u.email);
  console.log('isAdmin:',u.isAdmin?'✅ Sim':'❌ Não');
  p.\$disconnect();
});
"
```

---

**Pronto! Copie e cole os comandos acima no terminal do servidor.**

