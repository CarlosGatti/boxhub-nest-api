import { BadRequestException } from '@nestjs/common';
import { DefinedBrandingProjectStatus } from '@prisma/client';
import { createLog } from '../../core/services/create-log';
import { DefinedBrandingService } from './defined-branding.service';

jest.mock('../../core/services/create-log', () => ({
  createLog: jest.fn().mockResolvedValue(undefined),
}));

const makePublicProject = (overrides: Record<string, unknown> = {}) => ({
  id: 1,
  clientId: 1,
  projectId: null,
  title: 'Branding Public Project',
  slug: 'branding-public-project',
  description: 'Description',
  concept: 'Concept',
  status: DefinedBrandingProjectStatus.COMPLETED,
  isPublic: true,
  publishedAt: new Date('2026-05-01T00:00:00.000Z'),
  isFeatured: false,
  coverImageUrl: 'https://cdn.example.com/cover.png',
  brandManualPdfUrl: 'https://cdn.example.com/manual.pdf',
  sourcePdfFileName: 'manual.pdf',
  metadata: { private: true },
  createdAt: new Date('2026-04-01T00:00:00.000Z'),
  updatedAt: new Date('2026-05-10T00:00:00.000Z'),
  client: {
    companyName: 'Defined Studio',
    contactName: 'Defined',
    email: 'hello@defined.one',
  },
  project: {
    name: 'Project A',
  },
  sections: [
    {
      id: 20,
      type: 'COLORS',
      title: 'Colors',
      body: null,
      contentJson: { palette: [] },
      order: 2,
    },
    {
      id: 10,
      type: 'OVERVIEW',
      title: 'Overview',
      body: 'Body',
      contentJson: null,
      order: 1,
    },
  ],
  assets: [
    {
      id: 200,
      type: 'IMAGE',
      name: 'Image',
      fileUrl: 'https://cdn.example.com/image.png',
      fileName: 'image.png',
      mimeType: 'image/png',
      notes: 'private note',
      metadata: { internal: true },
      order: 2,
    },
    {
      id: 100,
      type: 'PDF_MANUAL',
      name: 'Manual',
      fileUrl: 'https://cdn.example.com/manual.pdf',
      fileName: 'manual.pdf',
      mimeType: 'application/pdf',
      notes: null,
      metadata: null,
      order: 1,
    },
  ],
  ...overrides,
});

describe('DefinedBrandingService public portfolio', () => {
  const makeService = () => {
    const prisma = {
      definedBrandingProject: {
        findMany: jest.fn(),
        findUnique: jest.fn(),
        update: jest.fn(),
      },
    };
    const service = new DefinedBrandingService(prisma as any);
    return { service, prisma };
  };

  it('does not return private projects in public list', async () => {
    const { service, prisma } = makeService();
    prisma.definedBrandingProject.findMany.mockResolvedValue([
      makePublicProject({ id: 1, isPublic: true }),
    ]);

    const result = await service.listPublicBrandingProjects();

    expect(result).toHaveLength(1);
    expect(prisma.definedBrandingProject.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({
          isPublic: true,
          status: { in: ['ACTIVE', 'COMPLETED'] },
        }),
      }),
    );
  });

  it('returns sanitized payload ordered by section/asset order', async () => {
    const { service, prisma } = makeService();
    prisma.definedBrandingProject.findMany.mockResolvedValue([makePublicProject()]);

    const [result] = await service.listPublicBrandingProjects();

    expect((result as any).metadata).toBeUndefined();
    expect((result.assets[0] as any).notes).toBeUndefined();
    expect(result.sections.map((item) => item.id)).toEqual([10, 20]);
    expect(result.assets.map((item) => item.id)).toEqual([100, 200]);
  });

  it('returns null for slug when project is private', async () => {
    const { service, prisma } = makeService();
    prisma.definedBrandingProject.findUnique.mockResolvedValue(
      makePublicProject({ isPublic: false }),
    );

    const result = await service.getPublicBrandingProjectBySlug('test-slug');

    expect(result).toBeNull();
  });

  it('returns null for slug when status is not public', async () => {
    const { service, prisma } = makeService();
    prisma.definedBrandingProject.findUnique.mockResolvedValue(
      makePublicProject({ status: DefinedBrandingProjectStatus.DRAFT }),
    );

    const result = await service.getPublicBrandingProjectBySlug('test-slug');

    expect(result).toBeNull();
  });

  it('throws for invalid requested public status', async () => {
    const { service } = makeService();
    await expect(
      service.listPublicBrandingProjects(DefinedBrandingProjectStatus.DRAFT),
    ).rejects.toBeInstanceOf(BadRequestException);
  });

  it('updates visibility through admin mutation method', async () => {
    const { service, prisma } = makeService();
    prisma.definedBrandingProject.findUnique.mockResolvedValue(makePublicProject());
    prisma.definedBrandingProject.update.mockResolvedValue(
      makePublicProject({ isPublic: true, isFeatured: true }),
    );

    const result = await service.updateBrandingProjectVisibility(1, {
      isPublic: true,
      isFeatured: true,
    });

    expect(result.isPublic).toBe(true);
    expect(result.isFeatured).toBe(true);
    expect(createLog).toHaveBeenCalled();
  });
});
