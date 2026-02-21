import { PrismaClient } from '@prisma/client';
import { hashSync } from 'bcryptjs';

const prisma = new PrismaClient();

const DEV_USER_EMAIL = process.env.DEV_SEED_EMAIL || 'eduardo.gf@hotmail.com';
const DEFAULT_PASSWORD = 'DevSeed2026!';

/**
 * Creates dev user (if not exists) and grants access to ALL apps.
 * Run after seed:apps. Use for local development when DB is reset.
 */
async function main() {
  console.log('🌱 Seeding dev user (all apps access)...');

  let user = await prisma.user.findUnique({ where: { email: DEV_USER_EMAIL } });
  if (!user) {
    const hashedPassword = hashSync(DEFAULT_PASSWORD, 10);
    user = await prisma.user.create({
      data: {
        email: DEV_USER_EMAIL,
        password: hashedPassword,
        firstName: 'Eduardo',
        lastName: 'Gatti',
        nickname: 'eduardogf',
        public: true,
        emailVerified: true,
        profilePicture: null,
      },
    });
    console.log(`   👤 Created user: ${user.email}`);
    console.log(`   🔑 Default password (dev only): ${DEFAULT_PASSWORD}`);
  } else {
    console.log(`   👤 Using existing user: ${user.email}`);
  }

  const apps = await prisma.app.findMany({ select: { id: true, code: true } });
  let granted = 0;
  for (const app of apps) {
    await prisma.userAppAccess.upsert({
      where: { userId_appId: { userId: user.id, appId: app.id } },
      update: {},
      create: { userId: user.id, appId: app.id },
    });
    granted++;
  }

  console.log(`   ✅ Granted access to ${granted} apps: ${apps.map((a) => a.code).join(', ')}`);
  console.log('✅ Dev user seed completed');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding dev user:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
