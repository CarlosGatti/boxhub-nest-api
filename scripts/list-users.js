// Script para listar todos os usuários
// Uso: node scripts/list-users.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    console.log('🔍 Buscando todos os usuários...\n');

    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        isAdmin: true,
        isApprovedResident: true,
        createdAt: true,
      },
      orderBy: {
        id: 'asc',
      },
    });

    if (users.length === 0) {
      console.log('❌ Nenhum usuário encontrado no banco de dados.');
      return;
    }

    console.log(`✅ Encontrados ${users.length} usuário(s):\n`);
    console.log('─'.repeat(100));
    console.log(
      'ID'.padEnd(5) +
      'Email'.padEnd(35) +
      'Nome'.padEnd(25) +
      'Admin'.padEnd(8) +
      'Aprovado'.padEnd(10) +
      'Criado em'
    );
    console.log('─'.repeat(100));

    users.forEach((user) => {
      const adminStatus = user.isAdmin ? '✅ Sim' : '❌ Não';
      const approvedStatus = user.isApprovedResident ? '✅ Sim' : '⏳ Não';
      const createdAt = new Date(user.createdAt).toLocaleDateString('pt-BR');

      console.log(
        String(user.id).padEnd(5) +
        (user.email || '').padEnd(35) +
        `${user.firstName} ${user.lastName}`.padEnd(25) +
        adminStatus.padEnd(8) +
        approvedStatus.padEnd(10) +
        createdAt
      );
    });

    console.log('─'.repeat(100));
    console.log('\n💡 Para tornar um usuário admin, execute:');
    console.log('   node scripts/make-admin.js email@exemplo.com\n');
  } catch (error) {
    console.error('❌ Erro:', error.message);
    if (error.code === 'P1001') {
      console.error('   Não foi possível conectar ao banco de dados.');
      console.error('   Verifique se o DATABASE_URL está correto no .env');
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
    await prisma.$disconnect();
  });

