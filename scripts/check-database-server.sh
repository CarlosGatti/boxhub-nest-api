#!/bin/bash

# Script para verificar banco no SERVIDOR
# Uso no servidor: ./scripts/check-database-server.sh

set -e

APP_DIR="/home/boxhub/boxhub-api"

echo "📦 Entrando no diretório da aplicação..."
cd $APP_DIR

# Carregar ambiente Node.js
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" || true
[ -s "$HOME/.bashrc" ] && source "$HOME/.bashrc" || true
[ -s "$HOME/.profile" ] && source "$HOME/.profile" || true
export PATH="$PATH:/usr/bin:/usr/local/bin:$HOME/.local/bin"

command -v nvm >/dev/null 2>&1 && nvm use 18 || true

echo "🔍 Verificando conexão com o banco de dados..."
echo ""

node -e "
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.\$connect();
    console.log('✅ Conectado ao banco de dados!');
    console.log('');

    const userCount = await prisma.user.count();
    console.log(\`📊 Total de usuários no banco: \${userCount}\`);
    console.log('');

    if (userCount === 0) {
      console.log('⚠️  Nenhum usuário encontrado no banco.');
      console.log('💡 Você precisa criar um usuário primeiro via signup/login.');
      return;
    }

    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        isAdmin: true,
        isApprovedResident: true,
      },
      orderBy: { id: 'asc' },
    });

    console.log('👥 Usuários encontrados:');
    console.log('');
    console.log('─'.repeat(80));
    users.forEach((user, index) => {
      console.log(\`\${index + 1}. ID: \${user.id}\`);
      console.log(\`   Email: \${user.email}\`);
      console.log(\`   Nome: \${user.firstName} \${user.lastName}\`);
      console.log(\`   Admin: \${user.isAdmin ? '✅ Sim' : '❌ Não'}\`);
      console.log(\`   Aprovado: \${user.isApprovedResident ? '✅ Sim' : '⏳ Não'}\`);
      console.log('');
    });
    console.log('─'.repeat(80));

    const adminCount = await prisma.user.count({
      where: { isAdmin: true },
    });

    if (adminCount === 0) {
      console.log('');
      console.log('⚠️  Nenhum admin encontrado!');
      console.log('💡 Para tornar um usuário admin, execute:');
      console.log('   ./scripts/make-admin-server.sh email@exemplo.com');
      console.log('');
    } else {
      console.log('');
      console.log(\`✅ \${adminCount} admin(s) encontrado(s).\`);
      console.log('');
    }
  } catch (error) {
    console.error('❌ Erro ao conectar ao banco:', error.message);
    if (error.code === 'P1001') {
      console.error('');
      console.error('💡 O banco de dados não está acessível.');
      console.error('   Verifique o DATABASE_URL no .env');
    }
    process.exit(1);
  }
}

main()
  .catch((e) => {
    console.error('❌ Erro fatal:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.\$disconnect();
  });
"

