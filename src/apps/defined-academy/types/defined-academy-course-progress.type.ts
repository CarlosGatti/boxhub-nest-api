import { Field, Int, ObjectType } from '@nestjs/graphql';
import { DefinedAcademyEnrollmentStatus } from '@generated/prisma/defined-academy-enrollment-status.enum';

@ObjectType()
export class DefinedAcademyCourseProgress {
  @Field(() => Int)
  enrollmentId: number;

  @Field(() => Int)
  courseId: number;

  @Field(() => Int)
  completedLessons: number;

  @Field(() => Int)
  totalLessons: number;

  @Field(() => Int)
  progressPercentage: number;

  @Field(() => DefinedAcademyEnrollmentStatus)
  enrollmentStatus: keyof typeof DefinedAcademyEnrollmentStatus;
}
