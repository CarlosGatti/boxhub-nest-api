import { UseGuards } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DefinedAcademyEnrollment } from '@generated/defined-academy-enrollment/defined-academy-enrollment.model';
import { DefinedAcademyLessonProgress } from '@generated/defined-academy-lesson-progress/defined-academy-lesson-progress.model';
import { DefinedAcademyReferral } from '@generated/defined-academy-referral/defined-academy-referral.model';
import { User } from '@generated/user/user.model';
import { JwtAuthGuard } from '../../core/auth/guards/jwt-auth.guard';
import { CurrentUser } from '../../domains/user/current-user.decorator';
import { DefinedAcademyLearnerService } from './defined-academy-learner.service';
import { DefinedAcademyReferralService } from './defined-academy-referral.service';
import { AttachDefinedAcademyReferralInput } from './dto/attach-defined-academy-referral.input';
import { UpdateDefinedAcademyLessonProgressInput } from './dto/update-defined-academy-lesson-progress.input';
import { DefinedAcademyCourseProgress } from './types/defined-academy-course-progress.type';

@Resolver()
@UseGuards(JwtAuthGuard)
export class DefinedAcademyLearnerResolver {
  constructor(
    private readonly definedAcademyLearnerService: DefinedAcademyLearnerService,
    private readonly definedAcademyReferralService: DefinedAcademyReferralService,
  ) {}

  @Query(() => [DefinedAcademyEnrollment], {
    name: 'myDefinedAcademyEnrollments',
  })
  async myDefinedAcademyEnrollments(
    @CurrentUser() user: User,
    @Args('academyId', { type: () => Int, nullable: true }) academyId?: number,
  ) {
    return this.definedAcademyLearnerService.myEnrollments(user.id, academyId);
  }

  @Query(() => DefinedAcademyEnrollment, {
    name: 'myDefinedAcademyEnrollment',
  })
  async myDefinedAcademyEnrollment(
    @CurrentUser() user: User,
    @Args('enrollmentId', { type: () => Int }) enrollmentId: number,
  ) {
    return this.definedAcademyLearnerService.myEnrollment(user.id, enrollmentId);
  }

  @Query(() => DefinedAcademyCourseProgress, {
    name: 'myDefinedAcademyCourseProgress',
  })
  async myDefinedAcademyCourseProgress(
    @CurrentUser() user: User,
    @Args('courseId', { type: () => Int }) courseId: number,
  ) {
    return this.definedAcademyLearnerService.getCourseProgress(user.id, courseId);
  }

  @Query(() => DefinedAcademyLessonProgress, {
    name: 'myDefinedAcademyLessonProgress',
  })
  async myDefinedAcademyLessonProgress(
    @CurrentUser() user: User,
    @Args('enrollmentId', { type: () => Int }) enrollmentId: number,
    @Args('lessonId', { type: () => Int }) lessonId: number,
  ) {
    return this.definedAcademyLearnerService.getLessonProgress(
      user.id,
      enrollmentId,
      lessonId,
    );
  }

  @Mutation(() => DefinedAcademyEnrollment, {
    name: 'enrollInDefinedAcademyCourse',
  })
  async enrollInDefinedAcademyCourse(
    @CurrentUser() user: User,
    @Args('courseId', { type: () => Int }) courseId: number,
  ) {
    return this.definedAcademyLearnerService.enrollInCourse(user.id, courseId);
  }

  @Mutation(() => DefinedAcademyLessonProgress, {
    name: 'startDefinedAcademyLesson',
  })
  async startDefinedAcademyLesson(
    @CurrentUser() user: User,
    @Args('enrollmentId', { type: () => Int }) enrollmentId: number,
    @Args('lessonId', { type: () => Int }) lessonId: number,
  ) {
    return this.definedAcademyLearnerService.startLesson(
      user.id,
      enrollmentId,
      lessonId,
    );
  }

  @Mutation(() => DefinedAcademyLessonProgress, {
    name: 'updateDefinedAcademyLessonProgress',
  })
  async updateDefinedAcademyLessonProgress(
    @CurrentUser() user: User,
    @Args('enrollmentId', { type: () => Int }) enrollmentId: number,
    @Args('lessonId', { type: () => Int }) lessonId: number,
    @Args('input') input: UpdateDefinedAcademyLessonProgressInput,
  ) {
    return this.definedAcademyLearnerService.updateLessonProgress(
      user.id,
      enrollmentId,
      lessonId,
      input,
    );
  }

  @Mutation(() => DefinedAcademyLessonProgress, {
    name: 'completeDefinedAcademyLesson',
  })
  async completeDefinedAcademyLesson(
    @CurrentUser() user: User,
    @Args('enrollmentId', { type: () => Int }) enrollmentId: number,
    @Args('lessonId', { type: () => Int }) lessonId: number,
  ) {
    return this.definedAcademyLearnerService.completeLesson(
      user.id,
      enrollmentId,
      lessonId,
    );
  }

  @Mutation(() => DefinedAcademyReferral, {
    name: 'attachDefinedAcademyReferralToCurrentUser',
    nullable: true,
  })
  async attachDefinedAcademyReferralToCurrentUser(
    @CurrentUser() user: User,
    @Args('input') input: AttachDefinedAcademyReferralInput,
  ) {
    return this.definedAcademyReferralService.attachReferralToUser(
      user.id,
      input.referralCode,
    );
  }
}
