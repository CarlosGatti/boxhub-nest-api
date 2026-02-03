import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding HomeOps templates (if households exist)...');

  const households = await prisma.homeOpsHousehold.findMany({
    select: { id: true, ownerId: true },
  });

  if (households.length === 0) {
    console.log('ℹ️  No households found. Skipping HomeOps template seed.');
    return;
  }

  const defaultTemplates = [
    {
      title: 'Walk Nala',
      effortWeight: 2,
      slots: [
        { label: 'Morning', windowStart: '06:00', windowEnd: '10:00', order: 1 },
        { label: 'Evening', windowStart: '17:00', windowEnd: '22:00', order: 2 },
      ],
    },
    {
      title: 'Trash Out / In',
      effortWeight: 1,
      slots: [
        { label: 'Morning', windowStart: '07:00', windowEnd: '09:00', order: 1 },
        { label: 'Evening', windowStart: '18:00', windowEnd: '21:00', order: 2 },
      ],
    },
    {
      title: 'Bathroom Clean',
      effortWeight: 5,
      slots: [{ label: 'Anytime', windowStart: '09:00', windowEnd: '18:00', order: 1 }],
    },
  ];

  for (const household of households) {
    for (const template of defaultTemplates) {
      const exists = await prisma.homeOpsTaskTemplate.findFirst({
        where: {
          householdId: household.id,
          title: template.title,
        },
      });

      if (exists) {
        continue;
      }

      await prisma.homeOpsTaskTemplate.create({
        data: {
          householdId: household.id,
          title: template.title,
          points: template.effortWeight,
          effortWeight: template.effortWeight,
          frequency: 'DAILY',
          assignmentMode: 'ROUND_ROBIN',
          createdById: household.ownerId,
          slots: {
            createMany: {
              data: template.slots,
            },
          },
        },
      });
    }
  }

  console.log('✅ HomeOps template seed completed');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding HomeOps:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
