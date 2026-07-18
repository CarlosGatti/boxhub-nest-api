import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DefinedAcademyAnalyticsSummary {
  @Field(() => Int)
  enrollments: number;

  @Field(() => Int)
  courseStarts: number;

  @Field(() => Int)
  lessonCompletions: number;

  @Field(() => Int)
  courseCompletions: number;

  @Field(() => Int)
  shortLinkVisits: number;

  @Field(() => Int)
  referralVisits: number;

  @Field(() => Int)
  referralRegistrations: number;

  @Field(() => Int)
  referralEnrollments: number;

  @Field(() => Int)
  activePartners: number;

  @Field(() => Int)
  publishedCourses: number;
}
