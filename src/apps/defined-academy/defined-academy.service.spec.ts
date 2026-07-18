import { BadRequestException, NotFoundException } from '@nestjs/common';
import {
  DefinedAcademyCourseStatus,
  DefinedAcademyCourseVisibility,
  DefinedAcademyStatus,
  DefinedAcademyContentStatus,
} from '@prisma/client';
import { createLog } from '../../core/services/create-log';
import { DefinedAcademyService } from './defined-academy.service';

jest.mock('../../core/services/create-log', () => ({
  createLog: jest.fn().mockResolvedValue(undefined),
}));

describe('DefinedAcademyService', () => {
  const makeService = () => {
    const prisma = {
      definedAcademy: {
        findMany: jest.fn(),
        findUnique: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
      },
      definedAcademyCourse: {
        findMany: jest.fn(),
        findUnique: jest.fn(),
        findFirst: jest.fn(),
        update: jest.fn(),
      },
      definedAcademyLesson: {
        findFirst: jest.fn(),
      },
      app: { findUnique: jest.fn() },
      $transaction: jest.fn((arg: unknown) =>
        Array.isArray(arg) ? Promise.all(arg) : arg,
      ),
    };
    return { service: new DefinedAcademyService(prisma as any), prisma };
  };

  it('returns null for draft academy on public slug lookup', async () => {
    const { service, prisma } = makeService();
    prisma.definedAcademy.findUnique.mockResolvedValue({
      id: 1,
      slug: 're-quest-academy',
      status: DefinedAcademyStatus.DRAFT,
    });

    const result = await service.getPublicAcademyBySlug('re-quest-academy');
    expect(result).toBeNull();
  });

  it('returns active academy on public slug lookup', async () => {
    const { service, prisma } = makeService();
    prisma.definedAcademy.findUnique.mockResolvedValue({
      id: 1,
      slug: 're-quest-academy',
      status: DefinedAcademyStatus.ACTIVE,
      name: 'RE-Quest Academy',
    });

    const result = await service.getPublicAcademyBySlug('re-quest-academy');
    expect(result?.status).toBe(DefinedAcademyStatus.ACTIVE);
  });

  it('filters authenticated-only courses for anonymous public list', async () => {
    const { service, prisma } = makeService();
    prisma.definedAcademy.findUnique.mockResolvedValue({
      id: 1,
      slug: 're-quest-academy',
      status: DefinedAcademyStatus.ACTIVE,
    });
    prisma.definedAcademyCourse.findMany.mockResolvedValue([
      {
        id: 1,
        visibility: DefinedAcademyCourseVisibility.PUBLIC,
        status: DefinedAcademyCourseStatus.PUBLISHED,
      },
      {
        id: 2,
        visibility: DefinedAcademyCourseVisibility.AUTHENTICATED,
        status: DefinedAcademyCourseStatus.PUBLISHED,
      },
    ]);

    const result = await service.listPublicCourses('re-quest-academy', false);
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(1);
  });

  it('throws when publishing course for non-active academy', async () => {
    const { service, prisma } = makeService();
    prisma.definedAcademy.findUnique.mockResolvedValue({
      id: 1,
      status: DefinedAcademyStatus.DRAFT,
    });
    prisma.definedAcademyCourse.findUnique.mockResolvedValue({
      id: 10,
      academyId: 1,
    });

    await expect(service.publishCourse(1, 10)).rejects.toBeInstanceOf(
      BadRequestException,
    );
  });

  it('blocks cross-academy course access in ensureCourse', async () => {
    const { service, prisma } = makeService();
    prisma.definedAcademyCourse.findUnique.mockResolvedValue({
      id: 10,
      academyId: 2,
    });

    await expect(service.ensureCourse(1, 10)).rejects.toBeInstanceOf(
      NotFoundException,
    );
  });

  it('hides draft lessons from public slug lookup', async () => {
    const { service, prisma } = makeService();
    jest.spyOn(service, 'getPublicCourseBySlug').mockResolvedValue({
      id: 5,
      status: DefinedAcademyCourseStatus.PUBLISHED,
      visibility: DefinedAcademyCourseVisibility.PUBLIC,
    } as any);
    jest.spyOn(service, 'getPublicAcademyBySlug').mockResolvedValue({
      id: 1,
      status: DefinedAcademyStatus.ACTIVE,
    } as any);
    prisma.definedAcademyLesson.findFirst.mockResolvedValue({
      id: 99,
      slug: 'intro',
      isPreview: false,
      visibility: DefinedAcademyCourseVisibility.PUBLIC,
      status: DefinedAcademyContentStatus.DRAFT,
      module: { status: DefinedAcademyContentStatus.PUBLISHED },
      resources: [],
    });

    const result = await service.getPublicLessonBySlug(
      're-quest-academy',
      'first-90-days',
      'intro',
      false,
    );
    expect(result).toBeNull();
  });
});
