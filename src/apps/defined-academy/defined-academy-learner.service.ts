import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  DefinedAcademyContentStatus,
  DefinedAcademyCourseVisibility,
  DefinedAcademyEnrollmentStatus,
  DefinedAcademyLessonProgressStatus,
  LogAction,
} from '@prisma/client';
import { PrismaService } from '../../core/prisma/prisma.service';
import { createLog } from '../../core/services/create-log';
import {
  canAuthenticatedUserAccessCourse,
  PUBLIC_COURSE_STATUSES,
} from './utils/academy-publication.util';
import { DefinedAcademyReferralService } from './defined-academy-referral.service';

@Injectable()
export class DefinedAcademyLearnerService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly referralService: DefinedAcademyReferralService,
  ) {}

  async enrollInCourse(userId: number, courseId: number) {
    const course = await this.prisma.definedAcademyCourse.findUnique({
      where: { id: courseId },
      include: { academy: true },
    });
    if (!course) {
      throw new NotFoundException(`Defined academy course ${courseId} not found`);
    }

    if (!PUBLIC_COURSE_STATUSES.includes(course.status)) {
      throw new BadRequestException('Course is not available for enrollment');
    }

    if (course.visibility === DefinedAcademyCourseVisibility.PRIVATE) {
      throw new ForbiddenException('This course requires an invitation to enroll');
    }

    if (
      !canAuthenticatedUserAccessCourse(course.visibility, true)
    ) {
      throw new ForbiddenException('You must be authenticated to enroll in this course');
    }

    const existing = await this.prisma.definedAcademyEnrollment.findUnique({
      where: { courseId_userId: { courseId, userId } },
    });

    if (
      existing &&
      existing.status !== DefinedAcademyEnrollmentStatus.CANCELLED
    ) {
      throw new BadRequestException('You are already enrolled in this course');
    }

    const enrollment = existing
      ? await this.prisma.definedAcademyEnrollment.update({
          where: { id: existing.id },
          data: {
            status: DefinedAcademyEnrollmentStatus.ENROLLED,
            enrolledAt: new Date(),
            completedAt: null,
            startedAt: null,
            lastAccessedAt: new Date(),
          },
        })
      : await this.prisma.definedAcademyEnrollment.create({
          data: {
            courseId,
            userId,
            status: DefinedAcademyEnrollmentStatus.ENROLLED,
            lastAccessedAt: new Date(),
          },
        });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'Defined academy course enrollment created',
      route: 'enrollInDefinedAcademyCourse',
      metadata: { courseId, enrollmentId: enrollment.id },
    });

    await this.referralService.markReferralEnrolled(userId, courseId);

    return enrollment;
  }

  async myEnrollments(userId: number, academyId?: number) {
    return this.prisma.definedAcademyEnrollment.findMany({
      where: {
        userId,
        ...(academyId ? { course: { academyId } } : {}),
        status: { not: DefinedAcademyEnrollmentStatus.CANCELLED },
      },
      include: {
        course: {
          include: {
            academy: true,
          },
        },
      },
      orderBy: { enrolledAt: 'desc' },
    });
  }

  async myEnrollment(userId: number, enrollmentId: number) {
    const enrollment = await this.prisma.definedAcademyEnrollment.findUnique({
      where: { id: enrollmentId },
      include: {
        course: {
          include: {
            academy: true,
          },
        },
      },
    });

    if (!enrollment || enrollment.userId !== userId) {
      throw new NotFoundException(`Enrollment ${enrollmentId} not found`);
    }

    return enrollment;
  }

  async getCourseProgress(userId: number, courseId: number) {
    const enrollment = await this.ensureActiveEnrollment(userId, courseId);
    const [completedLessons, totalLessons] = await Promise.all([
      this.prisma.definedAcademyLessonProgress.count({
        where: {
          enrollmentId: enrollment.id,
          status: DefinedAcademyLessonProgressStatus.COMPLETED,
        },
      }),
      this.countTrackableLessons(courseId),
    ]);

    return {
      enrollmentId: enrollment.id,
      courseId,
      completedLessons,
      totalLessons,
      progressPercentage: this.calculateCourseProgress(
        completedLessons,
        totalLessons,
      ),
      enrollmentStatus: enrollment.status,
    };
  }

  async getLessonProgress(
    userId: number,
    enrollmentId: number,
    lessonId: number,
  ) {
    const enrollment = await this.myEnrollment(userId, enrollmentId);
    await this.ensureLessonInCourse(lessonId, enrollment.courseId);

    const progress = await this.prisma.definedAcademyLessonProgress.findUnique({
      where: { enrollmentId_lessonId: { enrollmentId, lessonId } },
    });

    if (!progress || progress.userId !== userId) {
      throw new NotFoundException(
        `Lesson progress for lesson ${lessonId} not found`,
      );
    }

    return progress;
  }

  async startLesson(userId: number, enrollmentId: number, lessonId: number) {
    const enrollment = await this.myEnrollment(userId, enrollmentId);
    await this.ensureLessonAccess(userId, enrollment, lessonId);

    const now = new Date();
    const progress = await this.prisma.definedAcademyLessonProgress.upsert({
      where: { enrollmentId_lessonId: { enrollmentId, lessonId } },
      create: {
        enrollmentId,
        lessonId,
        userId,
        status: DefinedAcademyLessonProgressStatus.IN_PROGRESS,
        startedAt: now,
        lastAccessedAt: now,
      },
      update: {
        status: DefinedAcademyLessonProgressStatus.IN_PROGRESS,
        startedAt: now,
        lastAccessedAt: now,
      },
    });

    await this.prisma.definedAcademyEnrollment.update({
      where: { id: enrollmentId },
      data: {
        status: DefinedAcademyEnrollmentStatus.IN_PROGRESS,
        startedAt: enrollment.startedAt ?? now,
        lastAccessedAt: now,
      },
    });

    return progress;
  }

  async updateLessonProgress(
    userId: number,
    enrollmentId: number,
    lessonId: number,
    input: {
      progressPercentage?: number;
      lastPositionSeconds?: number;
    },
  ) {
    const enrollment = await this.myEnrollment(userId, enrollmentId);
    await this.ensureLessonAccess(userId, enrollment, lessonId);

    const progressPercentage = this.normalizeProgressPercentage(
      input.progressPercentage,
    );

    const progress = await this.prisma.definedAcademyLessonProgress.upsert({
      where: { enrollmentId_lessonId: { enrollmentId, lessonId } },
      create: {
        enrollmentId,
        lessonId,
        userId,
        status: DefinedAcademyLessonProgressStatus.IN_PROGRESS,
        progressPercentage,
        lastPositionSeconds: input.lastPositionSeconds,
        startedAt: new Date(),
        lastAccessedAt: new Date(),
      },
      update: {
        status: DefinedAcademyLessonProgressStatus.IN_PROGRESS,
        progressPercentage,
        lastPositionSeconds: input.lastPositionSeconds,
        lastAccessedAt: new Date(),
      },
    });

    await this.prisma.definedAcademyEnrollment.update({
      where: { id: enrollmentId },
      data: { lastAccessedAt: new Date() },
    });

    return progress;
  }

  async completeLesson(userId: number, enrollmentId: number, lessonId: number) {
    const enrollment = await this.myEnrollment(userId, enrollmentId);
    await this.ensureLessonAccess(userId, enrollment, lessonId);

    const now = new Date();
    const progress = await this.prisma.definedAcademyLessonProgress.upsert({
      where: { enrollmentId_lessonId: { enrollmentId, lessonId } },
      create: {
        enrollmentId,
        lessonId,
        userId,
        status: DefinedAcademyLessonProgressStatus.COMPLETED,
        progressPercentage: 100,
        startedAt: now,
        completedAt: now,
        lastAccessedAt: now,
      },
      update: {
        status: DefinedAcademyLessonProgressStatus.COMPLETED,
        progressPercentage: 100,
        completedAt: now,
        lastAccessedAt: now,
      },
    });

    const [completedLessons, totalLessons] = await Promise.all([
      this.prisma.definedAcademyLessonProgress.count({
        where: {
          enrollmentId,
          status: DefinedAcademyLessonProgressStatus.COMPLETED,
        },
      }),
      this.countTrackableLessons(enrollment.courseId),
    ]);

    const courseCompleted =
      totalLessons > 0 && completedLessons >= totalLessons;

    await this.prisma.definedAcademyEnrollment.update({
      where: { id: enrollmentId },
      data: {
        status: courseCompleted
          ? DefinedAcademyEnrollmentStatus.COMPLETED
          : DefinedAcademyEnrollmentStatus.IN_PROGRESS,
        completedAt: courseCompleted ? now : undefined,
        lastAccessedAt: now,
      },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'Defined academy lesson completed',
      route: 'completeDefinedAcademyLesson',
      metadata: { enrollmentId, lessonId, courseCompleted },
    });

    return progress;
  }

  calculateCourseProgress(completedLessons: number, totalLessons: number): number {
    if (totalLessons <= 0) {
      return 0;
    }
    return Math.min(
      100,
      Math.round((completedLessons / totalLessons) * 100),
    );
  }

  private async ensureActiveEnrollment(userId: number, courseId: number) {
    const enrollment = await this.prisma.definedAcademyEnrollment.findUnique({
      where: { courseId_userId: { courseId, userId } },
    });

    if (
      !enrollment ||
      enrollment.status === DefinedAcademyEnrollmentStatus.CANCELLED
    ) {
      throw new ForbiddenException('You must enroll in this course first');
    }

    return enrollment;
  }

  private async ensureLessonInCourse(lessonId: number, courseId: number) {
    const lesson = await this.prisma.definedAcademyLesson.findFirst({
      where: { id: lessonId, module: { courseId } },
    });
    if (!lesson) {
      throw new NotFoundException(
        `Lesson ${lessonId} not found in course ${courseId}`,
      );
    }
    return lesson;
  }

  private async ensureLessonAccess(
    _userId: number,
    enrollment: { courseId: number; course: { visibility: DefinedAcademyCourseVisibility } },
    lessonId: number,
  ) {
    await this.ensureLessonInCourse(lessonId, enrollment.courseId);

    if (enrollment.course.visibility === DefinedAcademyCourseVisibility.PRIVATE) {
      return;
    }
  }

  private async countTrackableLessons(courseId: number) {
    return this.prisma.definedAcademyLesson.count({
      where: {
        module: { courseId },
        status: DefinedAcademyContentStatus.PUBLISHED,
      },
    });
  }

  private normalizeProgressPercentage(value?: number) {
    if (value === undefined || value === null) {
      return 0;
    }
    return Math.min(100, Math.max(0, Math.round(value)));
  }
}
