import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🔄 Starting backfill of user app access...');

  const discartApp = await prisma.app.findUnique({
    where: { code: 'DISCARD_ME' },
  });

  if (!discartApp) {
    throw new Error(
      'App DISCARD_ME not found. Please run seed.apps.ts first.',
    );
  }

  console.log(`📦 Found app: ${discartApp.name} (ID: ${discartApp.id})`);

  const users = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
    },
  });

  console.log(`👥 Found ${users.length} users to process`);

  let linked = 0;
  let skipped = 0;

  for (const user of users) {
    try {
      await prisma.userAppAccess.upsert({
        where: {
          userId_appId: {
            userId: user.id,
            appId: discartApp.id,
          },
        },
        update: {},
        create: {
          userId: user.id,
          appId: discartApp.id,
        },
      });
      linked++;
    } catch (error) {
      console.error(`⚠️ Error linking user ${user.email}:`, error);
      skipped++;
    }
  }

  console.log(`✅ Backfill completed:`);
  console.log(`   - Linked: ${linked} users`);
  console.log(`   - Skipped: ${skipped} users`);
  console.log(`   - Total users processed: ${users.length}`);
}

main()
  .catch((e) => {
    console.error('❌ Error during backfill:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

