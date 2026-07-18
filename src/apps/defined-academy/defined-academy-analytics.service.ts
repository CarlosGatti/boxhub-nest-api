import { Injectable, NotFoundException } from '@nestjs/common';
import {
  DefinedAcademyCourseStatus,
  DefinedAcademyEnrollmentStatus,
  DefinedAcademyLessonProgressStatus,
  DefinedAcademyPartnerStatus,
  DefinedAcademyReferralStatus,
} from '@prisma/client';
import { PrismaService } from '../../core/prisma/prisma.service';

export type DefinedAcademyAnalyticsSummary = {
  enrollments: number;
  courseStarts: number;
  lessonCompletions: number;
  courseCompletions: number;
  shortLinkVisits: number;
  referralVisits: number;
  referralRegistrations: number;
  referralEnrollments: number;
  activePartners: number;
  publishedCourses: number;
};

@Injectable()
export class DefinedAcademyAnalyticsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAnalyticsSummary(academyId: number): Promise<DefinedAcademyAnalyticsSummary> {
    await this.ensureAcademy(academyId);

    const [
      enrollments,
      courseStarts,
      lessonCompletions,
      courseCompletions,
      shortLinkAggregate,
      referralVisits,
      referralRegistrations,
      referralEnrollments,
      activePartners,
      publishedCourses,
    ] = await Promise.all([
      this.prisma.definedAcademyEnrollment.count({
        where: {
          course: { academyId },
          status: { not: DefinedAcademyEnrollmentStatus.CANCELLED },
        },
      }),
      this.prisma.definedAcademyEnrollment.count({
        where: {
          course: { academyId },
          startedAt: { not: null },
        },
      }),
      this.prisma.definedAcademyLessonProgress.count({
        where: {
          status: DefinedAcademyLessonProgressStatus.COMPLETED,
          lesson: { module: { course: { academyId } } },
        },
      }),
      this.prisma.definedAcademyEnrollment.count({
        where: {
          course: { academyId },
          status: DefinedAcademyEnrollmentStatus.COMPLETED,
        },
      }),
      this.prisma.definedAcademyShortLink.aggregate({
        where: { academyId },
        _sum: { visitCount: true },
      }),
      this.prisma.definedAcademyReferral.count({
        where: {
          academyId,
          status: DefinedAcademyReferralStatus.VISITED,
        },
      }),
      this.prisma.definedAcademyReferral.count({
        where: {
          academyId,
          status: DefinedAcademyReferralStatus.REGISTERED,
        },
      }),
      this.prisma.definedAcademyReferral.count({
        where: {
          academyId,
          status: DefinedAcademyReferralStatus.ENROLLED,
        },
      }),
      this.prisma.definedAcademyPartner.count({
        where: {
          academyId,
          status: DefinedAcademyPartnerStatus.ACTIVE,
        },
      }),
      this.prisma.definedAcademyCourse.count({
        where: {
          academyId,
          status: DefinedAcademyCourseStatus.PUBLISHED,
        },
      }),
    ]);

    return {
      enrollments,
      courseStarts,
      lessonCompletions,
      courseCompletions,
      shortLinkVisits: shortLinkAggregate._sum.visitCount ?? 0,
      referralVisits,
      referralRegistrations,
      referralEnrollments,
      activePartners,
      publishedCourses,
    };
  }

  private async ensureAcademy(academyId: number) {
    const academy = await this.prisma.definedAcademy.findUnique({
      where: { id: academyId },
    });
    if (!academy) {
      throw new NotFoundException(`Defined academy ${academyId} not found`);
    }
    return academy;
  }
}
