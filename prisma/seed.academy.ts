import {
  DefinedAcademyContentStatus,
  DefinedAcademyCourseStatus,
  DefinedAcademyCourseVisibility,
  DefinedAcademyLessonType,
  DefinedAcademyStatus,
  PrismaClient,
} from '@prisma/client';

const prisma = new PrismaClient();

const ACADEMY_SLUG = process.env.ACADEMY_SEED_SLUG || 're-quest-academy';
const COURSE_SLUG = process.env.ACADEMY_SEED_COURSE_SLUG || 'first-90-days-real-estate';

async function main() {
  console.log('🌱 Seeding Defined Academy (development)...');

  const academyApp = await prisma.app.findUnique({ where: { code: 'ACADEMY' } });

  const academy = await prisma.definedAcademy.upsert({
    where: { slug: ACADEMY_SLUG },
    update: {
      name: 'RE-Quest Academy',
      description: 'Professional growth resources for real estate professionals.',
      status: DefinedAcademyStatus.ACTIVE,
      publishedAt: new Date(),
      appId: academyApp?.id,
    },
    create: {
      name: 'RE-Quest Academy',
      slug: ACADEMY_SLUG,
      description: 'Professional growth resources for real estate professionals.',
      status: DefinedAcademyStatus.ACTIVE,
      publishedAt: new Date(),
      appId: academyApp?.id,
      logoUrl: null,
    },
  });

  const course = await prisma.definedAcademyCourse.upsert({
    where: {
      academyId_slug: { academyId: academy.id, slug: COURSE_SLUG },
    },
    update: {
      title: 'Your First 90 Days as a Real Estate Professional',
      summary: 'Foundations for business, technology, marketing, and growth.',
      status: DefinedAcademyCourseStatus.PUBLISHED,
      visibility: DefinedAcademyCourseVisibility.PUBLIC,
      publishedAt: new Date(),
      sortOrder: 1,
    },
    create: {
      academyId: academy.id,
      title: 'Your First 90 Days as a Real Estate Professional',
      slug: COURSE_SLUG,
      summary: 'Foundations for business, technology, marketing, and growth.',
      description:
        'A structured learning path for new real estate professionals covering business foundation, productivity, visibility, and growth.',
      status: DefinedAcademyCourseStatus.PUBLISHED,
      visibility: DefinedAcademyCourseVisibility.PUBLIC,
      level: 'Beginner',
      estimatedDurationMinutes: 540,
      sortOrder: 1,
      publishedAt: new Date(),
    },
  });

  const moduleTitles = [
    'Business Foundation',
    'Technology and Productivity',
    'Marketing and Visibility',
    'Business Growth',
  ];

  for (let i = 0; i < moduleTitles.length; i += 1) {
    const title = moduleTitles[i];
    const existing = await prisma.definedAcademyModule.findFirst({
      where: { courseId: course.id, title },
    });

    const module =
      existing ??
      (await prisma.definedAcademyModule.create({
        data: {
          courseId: course.id,
          title,
          description: `${title} module for the first 90 days program.`,
          sortOrder: i + 1,
          status: DefinedAcademyContentStatus.PUBLISHED,
        },
      }));

    const lessonSlug = `${title.toLowerCase().replace(/\s+/g, '-')}-overview`;
    await prisma.definedAcademyLesson.upsert({
      where: {
        moduleId_slug: { moduleId: module.id, slug: lessonSlug },
      },
      update: {
        title: `${title} Overview`,
        status: DefinedAcademyContentStatus.PUBLISHED,
        isPreview: i === 0,
        publishedAt: new Date(),
      },
      create: {
        moduleId: module.id,
        title: `${title} Overview`,
        slug: lessonSlug,
        summary: `Introduction to ${title}.`,
        lessonType: DefinedAcademyLessonType.ARTICLE,
        bodyContent: `Welcome to the ${title} module.`,
        sortOrder: 1,
        status: DefinedAcademyContentStatus.PUBLISHED,
        visibility: DefinedAcademyCourseVisibility.PUBLIC,
        isPreview: i === 0,
        publishedAt: new Date(),
      },
    });
  }

  console.log(`✅ Academy seeded: ${academy.slug} / course: ${course.slug}`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
