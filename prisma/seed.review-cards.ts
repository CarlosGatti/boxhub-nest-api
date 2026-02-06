import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const templates = [
  {
    key: 'minimal_01',
    name: 'Minimal Clean',
    category: 'minimal',
    aspect: 'portrait',
    schemaVersion: 1,
    previewImageUrl: null,
    defaultDesignJson: {
      title: 'Leave us a review',
      subtitle: 'Scan to review',
      colors: { background: '#FFFFFF', text: '#111111', accent: '#3B82F6' },
    },
    editableFieldsJson: {
      fields: ['title', 'subtitle', 'colors.background', 'colors.text', 'colors.accent'],
    },
    constraintsJson: {
      logo: { required: false },
    },
  },
  {
    key: 'minimal_02',
    name: 'Minimal Dark',
    category: 'minimal',
    aspect: 'square',
    schemaVersion: 1,
    previewImageUrl: null,
    defaultDesignJson: {
      title: 'Review us on Google',
      subtitle: 'Scan the QR code',
      colors: { background: '#0F172A', text: '#FFFFFF', accent: '#22C55E' },
    },
    editableFieldsJson: {
      fields: ['title', 'subtitle', 'colors.background', 'colors.text', 'colors.accent'],
    },
    constraintsJson: {
      logo: { required: false },
    },
  },
  {
    key: 'photo_01',
    name: 'Photo Banner',
    category: 'photo',
    aspect: 'portrait',
    schemaVersion: 1,
    previewImageUrl: null,
    defaultDesignJson: {
      title: 'How was your visit?',
      subtitle: 'Scan to share feedback',
      imageStyle: 'banner',
      colors: { background: '#FFFFFF', text: '#0F172A', accent: '#F59E0B' },
    },
    editableFieldsJson: {
      fields: ['title', 'subtitle', 'imageStyle', 'colors.accent'],
    },
    constraintsJson: {
      image: { required: true, aspectRatio: '16:9' },
    },
  },
  {
    key: 'photo_02',
    name: 'Photo Center',
    category: 'photo',
    aspect: 'square',
    schemaVersion: 1,
    previewImageUrl: null,
    defaultDesignJson: {
      title: 'Tell us what you think',
      subtitle: 'Quick 10-second review',
      imageStyle: 'center',
      colors: { background: '#F8FAFC', text: '#1E293B', accent: '#6366F1' },
    },
    editableFieldsJson: {
      fields: ['title', 'subtitle', 'imageStyle', 'colors.background', 'colors.accent'],
    },
    constraintsJson: {
      image: { required: true, aspectRatio: '1:1' },
    },
  },
  {
    key: 'print_a6_01',
    name: 'Print A6',
    category: 'print',
    aspect: 'print_a6',
    schemaVersion: 1,
    previewImageUrl: null,
    defaultDesignJson: {
      title: 'Review us',
      subtitle: 'Scan the QR code',
      colors: { background: '#FFFFFF', text: '#111827', accent: '#EF4444' },
    },
    editableFieldsJson: {
      fields: ['title', 'subtitle', 'colors.text', 'colors.accent'],
    },
    constraintsJson: {
      print: { bleed: '3mm' },
    },
  },
  {
    key: 'print_a6_02',
    name: 'Print A6 Soft',
    category: 'print',
    aspect: 'print_a6',
    schemaVersion: 1,
    previewImageUrl: null,
    defaultDesignJson: {
      title: 'Love our service?',
      subtitle: 'Leave a quick review',
      colors: { background: '#FFFBEB', text: '#7C2D12', accent: '#F97316' },
    },
    editableFieldsJson: {
      fields: ['title', 'subtitle', 'colors.background', 'colors.text', 'colors.accent'],
    },
    constraintsJson: {
      print: { bleed: '3mm' },
    },
  },
  {
    key: 'modern_01',
    name: 'Modern Gradient',
    category: 'modern',
    aspect: 'portrait',
    schemaVersion: 1,
    previewImageUrl: null,
    defaultDesignJson: {
      title: 'Your review matters',
      subtitle: 'Scan to rate',
      colors: { background: '#1F2937', text: '#F9FAFB', accent: '#38BDF8' },
    },
    editableFieldsJson: {
      fields: ['title', 'subtitle', 'colors.background', 'colors.text', 'colors.accent'],
    },
    constraintsJson: {},
  },
  {
    key: 'modern_02',
    name: 'Modern Light',
    category: 'modern',
    aspect: 'square',
    schemaVersion: 1,
    previewImageUrl: null,
    defaultDesignJson: {
      title: 'Share your experience',
      subtitle: 'Scan for Google review',
      colors: { background: '#F1F5F9', text: '#0F172A', accent: '#0EA5E9' },
    },
    editableFieldsJson: {
      fields: ['title', 'subtitle', 'colors.background', 'colors.text', 'colors.accent'],
    },
    constraintsJson: {},
  },
];

async function run() {
  for (const template of templates) {
    await prisma.reviewCardTemplate.upsert({
      where: { key: template.key },
      update: {
        name: template.name,
        category: template.category,
        aspect: template.aspect,
        schemaVersion: template.schemaVersion,
        isActive: true,
        previewImageUrl: template.previewImageUrl,
        defaultDesignJson: template.defaultDesignJson,
        editableFieldsJson: template.editableFieldsJson,
        constraintsJson: template.constraintsJson,
      },
      create: {
        key: template.key,
        name: template.name,
        category: template.category,
        aspect: template.aspect,
        schemaVersion: template.schemaVersion,
        isActive: true,
        previewImageUrl: template.previewImageUrl,
        defaultDesignJson: template.defaultDesignJson,
        editableFieldsJson: template.editableFieldsJson,
        constraintsJson: template.constraintsJson,
      },
    });
  }
}

run()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
