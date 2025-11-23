// Script para tornar um usuário admin
// Uso: node scripts/make-admin.js seu-email@exemplo.com

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const email = process.argv[2];

  if (!email) {
    console.error('❌ Erro: Email não fornecido');
    console.log('Uso: node scripts/make-admin.js seu-email@exemplo.com');
    process.exit(1);
  }

  console.log('🔍 Procurando usuário com email:', email);

  try {
    // Procurar usuário
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      console.error('❌ Usuário não encontrado!');
      console.log('💡 Verifique se o email está correto.');
      process.exit(1);
    }

    console.log('✅ Usuário encontrado:');
    console.log('   Nome:', user.firstName, user.lastName);
    console.log('   Email:', user.email);
    console.log('   Status atual - isAdmin:', user.isAdmin);

    if (user.isAdmin) {
      console.log('⚠️  Usuário já é admin!');
      process.exit(0);
    }

    // Atualizar para admin
    const updated = await prisma.user.update({
      where: { email },
      data: { isAdmin: true },
    });

    console.log('\n✅ SUCESSO! Usuário agora é admin!');
    console.log('📊 Novo status - isAdmin:', updated.isAdmin);
    console.log('\n🎉 Você pode agora acessar o painel admin!');
  } catch (error) {
    console.error('❌ Erro:', error.message);
    
    if (error.code === 'P2002') {
      console.error('   Email duplicado ou problema de constraint');
    } else if (error.code === 'P2025') {
      console.error('   Usuário não encontrado');
    } else {
      console.error('   Detalhes:', error);
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

