import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding apps...');

  await prisma.app.createMany({
    data: [
      {
        code: 'DISCARD_ME',
        name: 'Discart-me',
        description: 'Condo marketplace para compra, venda e doação',
      },
      {
        code: 'BOXHUB',
        name: 'BoxHub',
        description: 'Gerenciamento de containers e itens com QR Code',
      },
      {
        code: 'RH',
        name: 'RH Solution Center',
        description: 'Ferramentas de RH e entrevistas de desligamento',
      },
    ],
    skipDuplicates: true,
  });

  console.log('✅ Apps seeded successfully');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding apps:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

