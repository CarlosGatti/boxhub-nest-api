// Script para verificar conexão e status do banco
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('🔍 Verificando conexão com o banco de dados...\n');

  try {
    // Testar conexão
    await prisma.$connect();
    console.log('✅ Conectado ao banco de dados!\n');

    // Contar usuários
    const userCount = await prisma.user.count();
    console.log(`📊 Total de usuários no banco: ${userCount}\n`);

    if (userCount === 0) {
      console.log('⚠️  Nenhum usuário encontrado no banco.');
      console.log('💡 Você precisa criar um usuário primeiro via signup/login.\n');
      return;
    }

    // Listar todos os usuários
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

    console.log('👥 Usuários encontrados:\n');
    console.log('─'.repeat(80));
    users.forEach((user, index) => {
      console.log(`${index + 1}. ID: ${user.id}`);
      console.log(`   Email: ${user.email}`);
      console.log(`   Nome: ${user.firstName} ${user.lastName}`);
      console.log(`   Admin: ${user.isAdmin ? '✅ Sim' : '❌ Não'}`);
      console.log(`   Aprovado: ${user.isApprovedResident ? '✅ Sim' : '⏳ Não'}`);
      console.log('');
    });
    console.log('─'.repeat(80));

    // Verificar se há admins
    const adminCount = await prisma.user.count({
      where: { isAdmin: true },
    });

    if (adminCount === 0) {
      console.log('\n⚠️  Nenhum admin encontrado!');
      console.log('💡 Para tornar um usuário admin, execute:');
      console.log('   node scripts/make-admin.js email@exemplo.com\n');
    } else {
      console.log(`\n✅ ${adminCount} admin(s) encontrado(s).\n`);
    }
  } catch (error) {
    console.error('❌ Erro ao conectar ao banco:', error.message);
    
    if (error.code === 'P1001') {
      console.error('\n💡 O banco de dados não está acessível.');
      console.error('   Verifique:');
      console.error('   1. O banco está rodando?');
      console.error('   2. O DATABASE_URL no .env está correto?');
      console.error('   3. As credenciais estão corretas?');
    } else if (error.code === 'P1017') {
      console.error('\n💡 O servidor fechou a conexão.');
      console.error('   Verifique se o banco está rodando.');
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

