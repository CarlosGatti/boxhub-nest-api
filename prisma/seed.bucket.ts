import {
  BucketGoalType,
  BucketGoalStatus,
  BucketMediaType,
  BucketPinSource,
  BucketVisionSectionType,
  BucketVisionItemType,
  PrismaClient,
} from '@prisma/client';
import { hashSync } from 'bcryptjs';

const prisma = new PrismaClient();

const CARLOS_EMAIL = process.env.BUCKET_SEED_EMAIL || 'eduardo.gf@hotmail.com';
const SEED_TAG = 'seed:Carlos';
const DEFAULT_PASSWORD = 'BucketSeed2026!';

const COVERS = {
  gaming: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80',
  book: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80',
  fitness: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
  tech: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
};

// --- Helper builders (curated, type-safe) ---

function createEventGoal(data: {
  title: string;
  description?: string;
  status?: BucketGoalStatus;
  priority?: number;
  tags: string[];
  coverUrl: string;
  targetDate?: Date;
  details: { artist?: string; venue?: string; city?: string; date?: string; ticketUrl?: string; companions?: string[] };
  pins?: { lat: number; lng: number; label: string }[];
  logs?: { note: string; happenedAt: Date }[];
}) {
  return { ...data, type: BucketGoalType.EVENT };
}

function createBookGoal(data: {
  title: string;
  description?: string;
  status?: BucketGoalStatus;
  priority?: number;
  tags: string[];
  coverUrl: string;
  details: {
    author: string;
    pages?: number;
    format?: string;
    progress?: number;
    startedAt?: string;
    finishedAt?: string;
    rating?: number;
    favoriteQuote?: string;
  };
  logs?: { note: string; happenedAt: Date }[];
}) {
  return { ...data, type: BucketGoalType.BOOK };
}

function createGameGoal(data: {
  title: string;
  description?: string;
  status?: BucketGoalStatus;
  priority?: number;
  tags: string[];
  coverUrl: string;
  details: {
    platform: string[];
    releaseDate?: string;
    status?: string;
    hoursPlayed?: number;
    rating?: number;
    externalIds?: Record<string, string>;
  };
  logs?: { note: string; happenedAt: Date }[];
}) {
  return { ...data, type: BucketGoalType.GAME };
}

function createAchievementGoal(data: {
  title: string;
  description?: string;
  status?: BucketGoalStatus;
  priority?: number;
  tags: string[];
  coverUrl: string;
  targetDate?: Date;
  completedAt?: Date;
  details: { metrics?: Record<string, unknown>; proofLinks?: string[] };
  logs?: { note: string; happenedAt: Date }[];
}) {
  return { ...data, type: BucketGoalType.ACHIEVEMENT };
}

function createGeneralGoal(data: {
  title: string;
  description?: string;
  status?: BucketGoalStatus;
  priority?: number;
  tags: string[];
  coverUrl: string;
  targetDate?: Date;
  details?: Record<string, unknown>;
  logs?: { note: string; happenedAt: Date }[];
}) {
  return { ...data, type: BucketGoalType.GENERAL };
}

async function main() {
  console.log('🌱 Seeding Bucket (curated goals + vision board)...');
  if (process.env.BUCKET_SEED_EMAIL) {
    console.log(`   📧 Target user: ${CARLOS_EMAIL} (from BUCKET_SEED_EMAIL)`);
  }

  const bucketApp = await prisma.app.findUnique({ where: { code: 'BUCKET' } });
  if (!bucketApp) {
    throw new Error('App BUCKET not found. Run seed:apps first.');
  }

  let user = await prisma.user.findUnique({ where: { email: CARLOS_EMAIL } });
  if (!user) {
    if (process.env.BUCKET_SEED_EMAIL) {
      throw new Error(
        `User ${CARLOS_EMAIL} not found. Create an account with this email first, or unset BUCKET_SEED_EMAIL to use fallback (created automatically).`,
      );
    }
    const hashedPassword = hashSync(DEFAULT_PASSWORD, 10);
    user = await prisma.user.create({
      data: {
        email: CARLOS_EMAIL,
        password: hashedPassword,
        firstName: 'Carlos',
        lastName: 'Gatti',
        nickname: 'carlosgatti',
        public: true,
        emailVerified: true,
        profilePicture: null,
      },
    });
    console.log(`   👤 Created user: ${user.email}`);
    console.log(`   🔑 Default password (dev only): ${DEFAULT_PASSWORD}`);
  } else {
    console.log(`   👤 Using user: ${user.email}`);
  }

  await prisma.userAppAccess.upsert({
    where: { userId_appId: { userId: user.id, appId: bucketApp.id } },
    update: {},
    create: { userId: user.id, appId: bucketApp.id },
  });

  const existingGoals = await prisma.bucketGoal.findMany({
    where: { userId: user.id, tags: { has: SEED_TAG } },
    select: { id: true },
  });
  if (existingGoals.length > 0) {
    await prisma.bucketGoal.deleteMany({
      where: { id: { in: existingGoals.map((g) => g.id) } },
    });
    console.log(`   🗑️  Removed ${existingGoals.length} existing seeded goals`);
  }

  const goalsData = [
    createEventGoal({
      title: 'CS2 Major in Texas',
      description: 'Attend the Counter-Strike 2 Major in Texas.',
      status: BucketGoalStatus.PLANNED,
      priority: 9,
      tags: [SEED_TAG, 'gaming', 'esports', 'cs2', 'texas'],
      coverUrl: COVERS.gaming,
      targetDate: new Date('2025-11-15'),
      details: {
        artist: 'CS2 Major',
        venue: 'TBD',
        city: 'Houston',
        date: '2025-11-15',
        companions: ['Friends'],
      },
      pins: [{ lat: 29.7604, lng: -95.3698, label: 'Houston, TX' }],
      logs: [{ note: 'Tickets secured. November can\'t come soon enough.', happenedAt: new Date('2025-01-10') }],
    }),
    createBookGoal({
      title: 'Determined: A Science of Life Without Free Will',
      description: 'Robert M. Sapolsky — behavioral science, determinism.',
      status: BucketGoalStatus.IN_PROGRESS,
      priority: 7,
      tags: [SEED_TAG, 'book', 'psychology', 'behavior', 'sapolsky'],
      coverUrl: COVERS.book,
      details: {
        author: 'Robert M. Sapolsky',
        pages: 528,
        format: 'hardcover',
        progress: 25,
        startedAt: '2025-01-15',
      },
      logs: [{ note: 'Chapter 3 — the biology of behavior is fascinating.', happenedAt: new Date('2025-02-01') }],
    }),
    createGameGoal({
      title: 'Expedition 33',
      description: 'Never finished a game like this. Determined to complete it.',
      status: BucketGoalStatus.IN_PROGRESS,
      priority: 8,
      tags: [SEED_TAG, 'game', 'expedition-33', 'pc', 'playing'],
      coverUrl: COVERS.gaming,
      details: {
        platform: ['PC'],
        releaseDate: '2024',
        status: 'playing',
        hoursPlayed: 12,
        rating: 8.5,
      },
      logs: [{ note: 'Finally getting the hang of it. 12h in.', happenedAt: new Date('2025-02-10') }],
    }),
    createGameGoal({
      title: 'Baldur\'s Gate 3',
      description: 'Larian RPG — high priority backlog.',
      status: BucketGoalStatus.PLANNED,
      priority: 7,
      tags: [SEED_TAG, 'game', 'bg3', 'rpg', 'backlog'],
      coverUrl: COVERS.gaming,
      details: {
        platform: ['PC'],
        releaseDate: '2023-08-03',
        status: 'backlog',
        hoursPlayed: 0,
      },
    }),
    createAchievementGoal({
      title: 'Reach 76kg lean',
      description: 'Build muscle, lose fat, visible abs.',
      status: BucketGoalStatus.IN_PROGRESS,
      priority: 8,
      tags: [SEED_TAG, 'fitness', 'body', 'health'],
      coverUrl: COVERS.fitness,
      details: { metrics: { currentWeight: 80, targetWeight: 76 } },
      logs: [{ note: 'Back on track. First week done.', happenedAt: new Date('2025-01-06') }],
    }),
    createAchievementGoal({
      title: 'Pass all classes this term',
      description: 'Finish the academic period with all classes passed.',
      status: BucketGoalStatus.IN_PROGRESS,
      priority: 9,
      tags: [SEED_TAG, 'school', 'academic', 'grades'],
      coverUrl: COVERS.tech,
      details: { metrics: { classesTotal: 5, completed: 0, targetGPA: 3.5 } },
    }),
    createBookGoal({
      title: 'Deep Work',
      description: 'Cal Newport — rules for focused success.',
      status: BucketGoalStatus.PLANNED,
      priority: 7,
      tags: [SEED_TAG, 'book', 'focus', 'productivity', 'deep-work'],
      coverUrl: COVERS.book,
      details: {
        author: 'Cal Newport',
        pages: 304,
        format: 'paperback',
        progress: 0,
      },
    }),
    createBookGoal({
      title: 'Thinking, Fast and Slow',
      description: 'Daniel Kahneman — psychology of decision making.',
      status: BucketGoalStatus.PLANNED,
      priority: 6,
      tags: [SEED_TAG, 'book', 'psychology', 'behavior', 'kahneman'],
      coverUrl: COVERS.book,
      details: {
        author: 'Daniel Kahneman',
        pages: 499,
        format: 'paperback',
        progress: 0,
      },
    }),
    createGeneralGoal({
      title: 'Ship portfolio apps',
      description: 'Polish and launch Review Cards, Bucket, SignalBoard.',
      status: BucketGoalStatus.IN_PROGRESS,
      priority: 8,
      tags: [SEED_TAG, 'tech', 'portfolio', 'ship'],
      coverUrl: COVERS.tech,
      details: { apps: ['Review Cards', 'Bucket', 'SignalBoard'] },
      logs: [{ note: 'Bucket Vision Board MVP done.', happenedAt: new Date('2025-02-15') }],
    }),
  ];

  let goalsCreated = 0;
  let pinsCreated = 0;
  let logsCreated = 0;
  let mediaCreated = 0;
  const goalIdMap: Record<string, number> = {};

  for (const g of goalsData) {
    const { pins = [], logs = [], ...goalData } = g as any;
    const goal = await prisma.bucketGoal.create({
      data: {
        userId: user.id,
        title: goalData.title,
        description: goalData.description,
        type: goalData.type,
        status: goalData.status,
        priority: goalData.priority,
        tags: goalData.tags,
        coverUrl: goalData.coverUrl,
        details: goalData.details as any,
        targetDate: goalData.targetDate,
        completedAt: goalData.completedAt,
      },
    });
    goalsCreated++;
    goalIdMap[goalData.title] = goal.id;

    for (const pin of pins) {
      await prisma.bucketGoalPin.create({
        data: {
          goalId: goal.id,
          lat: pin.lat,
          lng: pin.lng,
          label: pin.label,
          source: BucketPinSource.MANUAL,
        },
      });
      pinsCreated++;
    }

    for (const log of logs) {
      const logRecord = await prisma.bucketGoalLog.create({
        data: {
          goalId: goal.id,
          note: log.note,
          happenedAt: log.happenedAt,
        },
      });
      logsCreated++;

      if (log === logs[0] && goalData.title === 'Determined: A Science of Life Without Free Will') {
        await prisma.bucketGoalMedia.create({
          data: {
            goalId: null,
            logId: logRecord.id,
            url: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80',
            type: BucketMediaType.IMAGE,
          },
        });
        mediaCreated++;
      }
    }

    if (goalData.title === 'CS2 Major in Texas' && logs.length > 0) {
      await prisma.bucketGoalMedia.create({
        data: {
          goalId: goal.id,
          logId: null,
          url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&q=80',
          type: BucketMediaType.IMAGE,
        },
      });
      mediaCreated++;
    }
  }

  const currentYear = new Date().getFullYear();
  let visionBoard = await prisma.bucketVisionBoard.findUnique({
    where: { userId_year: { userId: user.id, year: currentYear } },
    include: { sections: true, items: true, goalLinks: true },
  });

  if (!visionBoard) {
    visionBoard = await prisma.bucketVisionBoard.create({
      data: {
        userId: user.id,
        title: `Vision ${currentYear}`,
        year: currentYear,
        periodKey: String(currentYear),
        theme: 'Discipline & Expansion',
        sections: {
          create: [
            {
              type: BucketVisionSectionType.LIFE_WELLBEING,
              content: {
                feelMore: 'calm, disciplined',
                buildHabit: 'deep work block',
                letGoHabit: 'late-night scrolling',
                dailyRoutine: 'gym + coding',
              },
              order: 0,
            },
            {
              type: BucketVisionSectionType.SCHOOL_LEARNING,
              content: {
                courseExcited: 'systems / networking',
                skillImprove: 'coding interviews',
                studyHabitBuild: '2h deep study daily',
                progressWhen: 'pass all classes',
              },
              order: 1,
            },
            {
              type: BucketVisionSectionType.DREAM_BIG,
              content: {
                bigDream: 'ship a product that replaces my income',
                whyMatters: 'ownership, stability',
              },
              order: 2,
            },
            {
              type: BucketVisionSectionType.CAREER_GROWTH,
              content: {
                oneStepThisYear: 'portfolio updates',
                skillCertification: 'cloud fundamentals',
              },
              order: 3,
            },
            {
              type: BucketVisionSectionType.VISUAL_INSPIRATION,
              content: {},
              order: 4,
            },
          ],
        },
      },
      include: { sections: true, items: true, goalLinks: true },
    });
  } else {
    await prisma.bucketVisionBoard.update({
      where: { id: visionBoard.id },
      data: {
        periodKey: visionBoard.periodKey ?? String(currentYear),
        theme: 'Discipline & Expansion',
      },
    });
  }

  const visionItems = [
    { type: BucketVisionItemType.QUOTE, text: 'Discipline equals freedom.', order: 0 },
    { type: BucketVisionItemType.QUOTE, text: 'Ship it.', order: 1 },
    { type: BucketVisionItemType.COLOR, color: '#4F46E5', order: 2 },
    { type: BucketVisionItemType.COLOR, color: '#10B981', order: 3 },
    { type: BucketVisionItemType.IMAGE, url: COVERS.book, order: 4 },
    { type: BucketVisionItemType.IMAGE, url: COVERS.tech, order: 5 },
    { type: BucketVisionItemType.LINK, url: 'https://github.com/carlosgatti', text: 'GitHub', order: 6 },
  ];

  const existingItemCount = await prisma.bucketVisionItem.count({
    where: { boardId: visionBoard.id },
  });
  if (existingItemCount === 0) {
    for (const item of visionItems) {
      await prisma.bucketVisionItem.create({
        data: {
          boardId: visionBoard.id,
          type: item.type,
          text: item.text,
          url: item.url,
          color: item.color,
          order: item.order,
        },
      });
    }
  }

  const goalsToLink = [
    'CS2 Major in Texas',
    'Reach 76kg lean',
    'Pass all classes this term',
    'Determined: A Science of Life Without Free Will',
    'Expedition 33',
    'Ship portfolio apps',
  ];

  for (const title of goalsToLink) {
    const goalId = goalIdMap[title];
    if (goalId) {
      await prisma.bucketVisionGoalLink.upsert({
        where: { boardId_goalId: { boardId: visionBoard.id, goalId } },
        update: {},
        create: { boardId: visionBoard.id, goalId },
      });
    }
  }

  console.log('');
  console.log('✅ Bucket seed completed:');
  console.log(`   📧 User: ${user.email}`);
  console.log(`   🎯 Goals: ${goalsCreated}`);
  console.log(`   📍 Pins: ${pinsCreated}`);
  console.log(`   📝 Logs: ${logsCreated}`);
  console.log(`   🖼️  Media: ${mediaCreated}`);
  console.log(`   📋 Vision Board: id=${visionBoard.id}, year=${visionBoard.year}`);
  console.log('');
  console.log('   👉 Log in with this email in the frontend to see the data.');
  if (!process.env.BUCKET_SEED_EMAIL) {
    console.log(`   🔑 Password: ${DEFAULT_PASSWORD}`);
  }
}

main()
  .catch((e) => {
    console.error('❌ Error seeding Bucket:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
