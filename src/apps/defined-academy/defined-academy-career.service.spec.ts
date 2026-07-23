import { BadRequestException, NotFoundException } from '@nestjs/common';
import {
  DefinedAcademyCareerJourneyStatus,
  DefinedAcademyCareerStageContentType,
  DefinedAcademyCourseStatus,
  DefinedAcademyStatus,
} from '@prisma/client';
import { DefinedAcademyCareerService } from './defined-academy-career.service';

jest.mock('../../core/services/create-log', () => ({
  createLog: jest.fn().mockResolvedValue(undefined),
}));

describe('DefinedAcademyCareerService', () => {
  const makeService = () => {
    const prisma = {
      definedAcademy: { findUnique: jest.fn() },
      definedAcademyCareerJourney: {
        findUnique: jest.fn(),
        findFirst: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
      },
      definedAcademyCareerStage: {
        findUnique: jest.fn(),
        findMany: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
      },
      definedAcademyCareerStageContent: {
        findFirst: jest.fn(),
        create: jest.fn(),
        delete: jest.fn(),
      },
      definedAcademyCourse: { findFirst: jest.fn() },
      definedAcademyResource: { findFirst: jest.fn() },
      definedAcademyUserCareerProfile: {
        findUnique: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
      },
      definedAcademyUserCareerStageCompletion: { upsert: jest.fn() },
    };
    return {
      service: new DefinedAcademyCareerService(prisma as any),
      prisma,
    };
  };

  it('returns null for inactive academy public journey lookup', async () => {
    const { service, prisma } = makeService();
    prisma.definedAcademy.findUnique.mockResolvedValue({
      id: 1,
      slug: 're-quest-academy',
      status: DefinedAcademyStatus.DRAFT,
    });

    const result = await service.getPublicCareerJourneyByAcademySlug(
      're-quest-academy',
    );
    expect(result).toBeNull();
  });

  it('returns active public journey with stages', async () => {
    const { service, prisma } = makeService();
    prisma.definedAcademy.findUnique.mockResolvedValue({
      id: 1,
      slug: 're-quest-academy',
      status: DefinedAcademyStatus.ACTIVE,
    });
    prisma.definedAcademyCareerJourney.findFirst.mockResolvedValue({
      id: 10,
      academyId: 1,
      title: 'RE-Quest Career Journey',
      status: DefinedAcademyCareerJourneyStatus.ACTIVE,
      stages: [{ id: 100, slug: 'first-brokerage', sortOrder: 3 }],
    });

    const result = await service.getPublicCareerJourneyByAcademySlug(
      're-quest-academy',
    );
    expect(result?.stages).toHaveLength(1);
  });

  it('initializes learner career profile on active journey', async () => {
    const { service, prisma } = makeService();
    prisma.definedAcademy.findUnique.mockResolvedValue({
      id: 1,
      status: DefinedAcademyStatus.ACTIVE,
    });
    prisma.definedAcademyCareerJourney.findFirst.mockResolvedValue({
      id: 10,
      academyId: 1,
      stages: [{ id: 100, sortOrder: 0 }],
    });
    prisma.definedAcademyUserCareerProfile.findUnique.mockResolvedValue(null);
    prisma.definedAcademyUserCareerProfile.create.mockResolvedValue({
      id: 1,
      userId: 5,
      academyId: 1,
      journeyId: 10,
      currentStageId: 100,
    });

    const result = await service.initializeMyCareerProfile(5, 1, 100);
    expect(result.currentStageId).toBe(100);
  });

  it('rejects invalid stage when linking course content', async () => {
    const { service, prisma } = makeService();
    prisma.definedAcademyCareerJourney.findUnique.mockResolvedValue({
      id: 10,
      academyId: 1,
      stages: [{ id: 100, journeyId: 10 }],
    });

    await expect(
      service.linkCareerStageContent(1, 999, {
        contentType: DefinedAcademyCareerStageContentType.COURSE,
        courseId: 50,
      }),
    ).rejects.toBeInstanceOf(NotFoundException);
  });

  it('filters published courses in recommendations', async () => {
    const { service, prisma } = makeService();
    prisma.definedAcademy.findUnique.mockResolvedValue({ id: 1 });
    prisma.definedAcademyUserCareerProfile.findUnique.mockResolvedValue({
      id: 1,
      userId: 5,
      academyId: 1,
      currentStageId: 100,
    });
    prisma.definedAcademyCareerStage.findUnique.mockResolvedValue({
      id: 100,
      contentLinks: [
        {
          contentType: DefinedAcademyCareerStageContentType.COURSE,
          course: {
            id: 1,
            status: DefinedAcademyCourseStatus.PUBLISHED,
            title: 'First 90 Days',
          },
          resource: null,
        },
        {
          contentType: DefinedAcademyCareerStageContentType.COURSE,
          course: {
            id: 2,
            status: DefinedAcademyCourseStatus.DRAFT,
            title: 'Draft course',
          },
          resource: null,
        },
      ],
    });

    const result = await service.myCareerRecommendations(5, 1);
    expect(result.courses).toHaveLength(1);
    expect(result.courses[0].title).toBe('First 90 Days');
  });

  it('throws when creating duplicate journey', async () => {
    const { service, prisma } = makeService();
    prisma.definedAcademy.findUnique.mockResolvedValue({ id: 1 });
    prisma.definedAcademyCareerJourney.findUnique.mockResolvedValue({ id: 10 });

    await expect(
      service.createCareerJourney(1, {
        title: 'Journey',
        slug: 'journey',
      }),
    ).rejects.toBeInstanceOf(BadRequestException);
  });
});
