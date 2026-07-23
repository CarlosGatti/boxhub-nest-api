import {
  DefinedAcademyCareerJourneyStatus,
  DefinedAcademyCareerStageContentType,
  DefinedAcademyCourseStatus,
  PrismaClient,
} from '@prisma/client';

const prisma = new PrismaClient();

const ACADEMY_SLUG = process.env.ACADEMY_SEED_SLUG || 're-quest-academy';
const COURSE_SLUG = process.env.ACADEMY_SEED_COURSE_SLUG || 'first-90-days-real-estate';

const CAREER_STAGES = [
  {
    slug: 'thinking-about-real-estate',
    title: 'Thinking about Real Estate',
    summary: 'Explore whether a real estate career is right for you.',
    iconKey: 'compass',
  },
  {
    slug: 'choose-school',
    title: 'Choose School',
    summary: 'Select the right pre-licensing education path.',
    iconKey: 'school',
  },
  {
    slug: 'get-licensed',
    title: 'Get Licensed',
    summary: 'Prepare for and pass your licensing exam.',
    iconKey: 'license',
  },
  {
    slug: 'first-brokerage',
    title: 'First Brokerage',
    summary: 'Join your first brokerage and learn the business.',
    iconKey: 'building',
  },
  {
    slug: 'first-listing',
    title: 'First Listing',
    summary: 'Take your first listing and learn the listing process.',
    iconKey: 'home',
  },
  {
    slug: 'first-closing',
    title: 'First Closing',
    summary: 'Close your first transaction and build confidence.',
    iconKey: 'key',
  },
  {
    slug: 'build-brand',
    title: 'Build Brand',
    summary: 'Develop your personal brand and market presence.',
    iconKey: 'spark',
  },
  {
    slug: 'marketing',
    title: 'Marketing',
    summary: 'Master lead generation and marketing systems.',
    iconKey: 'megaphone',
  },
  {
    slug: 'grow-business',
    title: 'Grow Business',
    summary: 'Scale production and improve operational systems.',
    iconKey: 'chart',
  },
  {
    slug: 'team',
    title: 'Team',
    summary: 'Build or join a team to expand capacity.',
    iconKey: 'users',
  },
  {
    slug: 'broker',
    title: 'Broker',
    summary: 'Advance toward broker leadership responsibilities.',
    iconKey: 'briefcase',
  },
  {
    slug: 'coach',
    title: 'Coach',
    summary: 'Mentor and coach other agents.',
    iconKey: 'message',
  },
  {
    slug: 'instructor',
    title: 'Instructor',
    summary: 'Teach and train the next generation of professionals.',
    iconKey: 'graduation',
  },
];

async function main() {
  console.log('🌱 Seeding Defined Academy Career Journey...');

  const academy = await prisma.definedAcademy.findUnique({
    where: { slug: ACADEMY_SLUG },
  });
  if (!academy) {
    throw new Error(
      `Academy "${ACADEMY_SLUG}" not found. Run seed:academy first.`,
    );
  }

  const journey = await prisma.definedAcademyCareerJourney.upsert({
    where: { academyId: academy.id },
    update: {
      title: 'RE-Quest Career Journey',
      description:
        'A long-term path from exploring real estate to teaching and leading others.',
      status: DefinedAcademyCareerJourneyStatus.ACTIVE,
    },
    create: {
      academyId: academy.id,
      title: 'RE-Quest Career Journey',
      slug: 're-career-journey',
      description:
        'A long-term path from exploring real estate to teaching and leading others.',
      status: DefinedAcademyCareerJourneyStatus.ACTIVE,
    },
  });

  for (let i = 0; i < CAREER_STAGES.length; i += 1) {
    const stage = CAREER_STAGES[i];
    await prisma.definedAcademyCareerStage.upsert({
      where: {
        journeyId_slug: { journeyId: journey.id, slug: stage.slug },
      },
      update: {
        title: stage.title,
        summary: stage.summary,
        iconKey: stage.iconKey,
        sortOrder: i,
      },
      create: {
        journeyId: journey.id,
        title: stage.title,
        slug: stage.slug,
        summary: stage.summary,
        iconKey: stage.iconKey,
        sortOrder: i,
      },
    });
  }

  const course = await prisma.definedAcademyCourse.findFirst({
    where: {
      academyId: academy.id,
      slug: COURSE_SLUG,
      status: DefinedAcademyCourseStatus.PUBLISHED,
    },
  });

  if (course) {
    const firstBrokerageStage = await prisma.definedAcademyCareerStage.findUnique({
      where: {
        journeyId_slug: {
          journeyId: journey.id,
          slug: 'first-brokerage',
        },
      },
    });

    if (firstBrokerageStage) {
      const existingLink =
        await prisma.definedAcademyCareerStageContent.findFirst({
          where: {
            stageId: firstBrokerageStage.id,
            courseId: course.id,
          },
        });

      if (!existingLink) {
        await prisma.definedAcademyCareerStageContent.create({
          data: {
            stageId: firstBrokerageStage.id,
            contentType: DefinedAcademyCareerStageContentType.COURSE,
            courseId: course.id,
            label: 'Recommended program',
            sortOrder: 0,
          },
        });
      }
    }
  }

  console.log(`   ✅ Career journey "${journey.title}" with ${CAREER_STAGES.length} stages`);
  console.log('✅ Career journey seed completed');
}

main()
  .catch((error) => {
    console.error('❌ Error seeding career journey:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
