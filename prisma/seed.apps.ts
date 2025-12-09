import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding apps...');

  await prisma.app.createMany({
    data: [
      {
        code: 'DISCARD_ME',
        name: 'Discart-me',
        description: 'Marketplace interno da comunidade',
      },
      {
        code: 'QRACK',
        name: 'QRACK',
        description: 'Gestão de containers e itens via QR Code',
      },
      {
        code: 'RH',
        name: 'RH Integração',
        description: 'Ferramentas de RH e entrevista de desligamento',
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

