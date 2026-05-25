import {
  DefinedBrandingAssetType,
  DefinedBrandingProjectStatus,
  DefinedBrandingSectionType,
  DefinedProjectServiceType,
  PrismaClient,
} from '@prisma/client';

const prisma = new PrismaClient();

const SAMPLE_CLIENT_EMAIL =
  process.env.BRANDING_SEED_CLIENT_EMAIL || 'branding.demo@defined.one';
const SAMPLE_SLUG = process.env.BRANDING_SEED_SLUG || 'quest-home-branding';

async function ensureSampleClient() {
  const existing = await prisma.definedClient.findFirst({
    where: { email: SAMPLE_CLIENT_EMAIL },
  });

  if (existing) {
    return existing;
  }

  return prisma.definedClient.create({
    data: {
      type: 'BUSINESS',
      contactName: 'RE-Quest Team',
      companyName: 'RE-Quest',
      email: SAMPLE_CLIENT_EMAIL,
      phone: '+1 000 000 0000',
      website: 'https://request.example',
      notes: 'Seed client for branding module demo.',
    },
  });
}

async function ensureSampleProject(clientId: number) {
  const existing = await prisma.definedProject.findFirst({
    where: {
      clientId,
      name: 'RE-Quest Brand Identity',
    },
  });

  if (existing) {
    return existing;
  }

  return prisma.definedProject.create({
    data: {
      clientId,
      name: 'RE-Quest Brand Identity',
      serviceType: DefinedProjectServiceType.BRANDING,
      status: 'IN_PROGRESS',
      notes: 'Seed project for branding module demo.',
    },
  });
}

async function main() {
  console.log('🌱 Seeding defined branding project example...');

  const client = await ensureSampleClient();
  const project = await ensureSampleProject(client.id);

  const brandingProject = await prisma.definedBrandingProject.upsert({
    where: { slug: SAMPLE_SLUG },
    update: {
      clientId: client.id,
      projectId: project.id,
      title: 'RE-Quest Brand Identity Portfolio',
      description:
        'Brand identity project with palette, typography and real-world applications.',
      concept:
        'Cinematic, trustworthy and emotionally grounded visual system for the home-buying journey.',
      status: DefinedBrandingProjectStatus.COMPLETED,
      isPublic: true,
      isFeatured: true,
      publishedAt: new Date(),
      coverImageUrl: 'https://cdn.defined.one/branding/re-quest/cover.jpg',
      brandManualPdfUrl: 'https://cdn.defined.one/branding/re-quest/manual.pdf',
      sourcePdfFileName: 'RE-Quest-Brand-Manual-v1.pdf',
      metadata: {
        source: 'seed.branding.ts',
        tags: ['branding', 'portfolio', 'demo'],
      },
    },
    create: {
      clientId: client.id,
      projectId: project.id,
      title: 'RE-Quest Brand Identity Portfolio',
      slug: SAMPLE_SLUG,
      description:
        'Brand identity project with palette, typography and real-world applications.',
      concept:
        'Cinematic, trustworthy and emotionally grounded visual system for the home-buying journey.',
      status: DefinedBrandingProjectStatus.COMPLETED,
      isPublic: true,
      isFeatured: true,
      publishedAt: new Date(),
      coverImageUrl: 'https://cdn.defined.one/branding/re-quest/cover.jpg',
      brandManualPdfUrl: 'https://cdn.defined.one/branding/re-quest/manual.pdf',
      sourcePdfFileName: 'RE-Quest-Brand-Manual-v1.pdf',
      metadata: {
        source: 'seed.branding.ts',
        tags: ['branding', 'portfolio', 'demo'],
      },
    },
  });

  await prisma.$transaction([
    prisma.definedBrandingSection.deleteMany({
      where: { brandingProjectId: brandingProject.id },
    }),
    prisma.definedBrandingAsset.deleteMany({
      where: { brandingProjectId: brandingProject.id },
    }),
  ]);

  await prisma.definedBrandingSection.createMany({
    data: [
      {
        brandingProjectId: brandingProject.id,
        type: DefinedBrandingSectionType.OVERVIEW,
        title: 'Overview',
        body:
          'Brand refresh focused on trust, clarity and emotional connection for first-time home buyers.',
        order: 0,
      },
      {
        brandingProjectId: brandingProject.id,
        type: DefinedBrandingSectionType.CONCEPT,
        title: 'Brand Concept',
        body:
          'Path to Home: visual storytelling around confidence and guidance across the buyer journey.',
        order: 1,
      },
      {
        brandingProjectId: brandingProject.id,
        type: DefinedBrandingSectionType.COLORS,
        title: 'Color Palette',
        contentJson: {
          palette: [
            {
              name: 'Midnight Blue',
              hex: '#0A0F2C',
              usage: 'Primary backgrounds and headers',
            },
            {
              name: 'Electric Blue',
              hex: '#1E5BFF',
              usage: 'Primary actions and links',
            },
            {
              name: 'Warm Gold',
              hex: '#D4AF37',
              usage: 'Highlights and accents',
            },
            {
              name: 'Cloud White',
              hex: '#F8FAFC',
              usage: 'Neutral background',
            },
          ],
        },
        order: 2,
      },
      {
        brandingProjectId: brandingProject.id,
        type: DefinedBrandingSectionType.TYPOGRAPHY,
        title: 'Typography',
        contentJson: {
          primary: 'Poppins',
          secondary: 'Inter',
          scale: {
            h1: '48px',
            h2: '36px',
            body: '16px',
          },
        },
        order: 3,
      },
      {
        brandingProjectId: brandingProject.id,
        type: DefinedBrandingSectionType.APPLICATIONS,
        title: 'Applications & Mockups',
        body:
          'Visual system applied to website hero, social templates, brochure and yard sign mockups.',
        order: 4,
      },
    ],
  });

  await prisma.definedBrandingAsset.createMany({
    data: [
      {
        brandingProjectId: brandingProject.id,
        type: DefinedBrandingAssetType.PDF_MANUAL,
        name: 'Brand Manual v1',
        fileUrl: 'https://cdn.defined.one/branding/re-quest/manual.pdf',
        fileName: 'RE-Quest-Brand-Manual-v1.pdf',
        mimeType: 'application/pdf',
        order: 0,
      },
      {
        brandingProjectId: brandingProject.id,
        type: DefinedBrandingAssetType.LOGO,
        name: 'Primary Logo',
        fileUrl: 'https://cdn.defined.one/branding/re-quest/logo-primary.svg',
        fileName: 'logo-primary.svg',
        mimeType: 'image/svg+xml',
        order: 1,
      },
      {
        brandingProjectId: brandingProject.id,
        type: DefinedBrandingAssetType.MOCKUP,
        name: 'Website Hero Mockup',
        fileUrl: 'https://cdn.defined.one/branding/re-quest/mockup-hero.jpg',
        fileName: 'mockup-hero.jpg',
        mimeType: 'image/jpeg',
        order: 2,
      },
      {
        brandingProjectId: brandingProject.id,
        type: DefinedBrandingAssetType.COLOR_PALETTE,
        name: 'Palette Board',
        fileUrl: 'https://cdn.defined.one/branding/re-quest/palette-board.png',
        fileName: 'palette-board.png',
        mimeType: 'image/png',
        order: 3,
      },
    ],
  });

  console.log('✅ Branding example seeded successfully');
  console.log(`   • Client: ${client.companyName ?? client.contactName} (#${client.id})`);
  console.log(`   • Project: ${project.name} (#${project.id})`);
  console.log(`   • Branding slug: ${brandingProject.slug}`);
}

main()
  .catch((e) => {
    console.error('❌ Error seeding branding project example:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
