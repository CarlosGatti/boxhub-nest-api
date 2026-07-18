import { BadRequestException } from '@nestjs/common';
import {
  DefinedAcademyEnrollmentStatus,
  DefinedAcademyCourseStatus,
  DefinedAcademyCourseVisibility,
} from '@prisma/client';
import { DefinedAcademyLearnerService } from './defined-academy-learner.service';
import { DefinedAcademyReferralService } from './defined-academy-referral.service';

jest.mock('../../core/services/create-log', () => ({
  createLog: jest.fn().mockResolvedValue(undefined),
}));

describe('DefinedAcademyLearnerService', () => {
  const makeService = () => {
    const prisma = {
      definedAcademyCourse: { findUnique: jest.fn() },
      definedAcademyEnrollment: {
        findUnique: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
        findFirst: jest.fn(),
        findMany: jest.fn(),
      },
      definedAcademyLesson: { findFirst: jest.fn(), count: jest.fn() },
      definedAcademyLessonProgress: {
        findUnique: jest.fn(),
        count: jest.fn(),
        upsert: jest.fn(),
      },
    };
    const referralService = {
      markReferralEnrolled: jest.fn().mockResolvedValue(undefined),
    } as unknown as DefinedAcademyReferralService;

    const service = new DefinedAcademyLearnerService(
      prisma as any,
      referralService,
    );
    return { service, prisma, referralService };
  };

  it('prevents duplicate active enrollment', async () => {
    const { service, prisma } = makeService();
    prisma.definedAcademyCourse.findUnique.mockResolvedValue({
      id: 1,
      status: DefinedAcademyCourseStatus.PUBLISHED,
      visibility: DefinedAcademyCourseVisibility.PUBLIC,
      academy: { id: 1 },
    });
    prisma.definedAcademyEnrollment.findUnique.mockResolvedValue({
      id: 50,
      status: DefinedAcademyEnrollmentStatus.ENROLLED,
    });

    await expect(service.enrollInCourse(7, 1)).rejects.toBeInstanceOf(
      BadRequestException,
    );
  });

  it('reactivates cancelled enrollment', async () => {
    const { service, prisma } = makeService();
    prisma.definedAcademyCourse.findUnique.mockResolvedValue({
      id: 1,
      status: DefinedAcademyCourseStatus.PUBLISHED,
      visibility: DefinedAcademyCourseVisibility.PUBLIC,
      academy: { id: 1 },
    });
    prisma.definedAcademyEnrollment.findUnique.mockResolvedValue({
      id: 50,
      status: DefinedAcademyEnrollmentStatus.CANCELLED,
    });
    prisma.definedAcademyEnrollment.update.mockResolvedValue({
      id: 50,
      status: DefinedAcademyEnrollmentStatus.ENROLLED,
    });

    const result = await service.enrollInCourse(7, 1);
    expect(result.status).toBe(DefinedAcademyEnrollmentStatus.ENROLLED);
  });

  it('calculates course progress percentage', async () => {
    const { service } = makeService();
    expect((service as any).calculateCourseProgress(2, 4)).toBe(50);
    expect((service as any).calculateCourseProgress(0, 0)).toBe(0);
  });
});
