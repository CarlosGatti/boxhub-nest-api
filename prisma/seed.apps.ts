import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding apps...');

  const apps = [
    {
      code: 'DISCARD_ME',
      name: 'Discart-me',
      description: 'Marketplace interno da comunidade',
    },
    {
      code: 'SIGNALBOARD',
      name: 'SignalBoard',
      description: 'Personal content dashboard',
    },
    {
      code: 'TJ_PASS',
      name: 'TJ Pass',
      description: 'Tokenized discount card demo',
    },
    {
      code: 'NEWS_PORTAL',
      name: 'News Portal',
      description: 'Personal news portal',
    },
    {
      code: 'PERSONAL_SITE',
      name: 'Personal Site',
      description: 'carlosgatti.com',
    },
    {
      code: 'HOMEOPS',
      name: 'HomeOps',
      description: 'Family and home task management',
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
    {
      code: 'WEALTH_TRACKER',
      name: 'Wealth Tracker',
      description: 'Investment portfolio and net worth tracking',
    },
  ];

  for (const app of apps) {
    await prisma.app.upsert({
      where: { code: app.code },
      update: { name: app.name, description: app.description },
      create: app,
    });
  }

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

