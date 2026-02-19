import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { BucketGoalStatus } from '@generated/prisma/bucket-goal-status.enum';
import { BucketGoalType } from '@generated/prisma/bucket-goal-type.enum';

@ObjectType()
export class BucketStatusCounts {
  @Field(() => Int)
  IDEA: number;

  @Field(() => Int)
  PLANNED: number;

  @Field(() => Int)
  IN_PROGRESS: number;

  @Field(() => Int)
  DONE: number;

  @Field(() => Int)
  DROPPED: number;
}

@ObjectType()
export class BucketTypeCounts {
  @Field(() => Int)
  GENERAL: number;

  @Field(() => Int)
  TRAVEL: number;

  @Field(() => Int)
  EVENT: number;

  @Field(() => Int)
  PLACE_COLLECTION: number;

  @Field(() => Int)
  ACHIEVEMENT: number;

  @Field(() => Int)
  GAME: number;

  @Field(() => Int)
  MOVIE: number;

  @Field(() => Int)
  TV_SHOW: number;

  @Field(() => Int)
  BOOK: number;
}

@ObjectType()
export class BucketDashboardSummary {
  @Field(() => Int)
  totalGoals: number;

  @Field(() => BucketStatusCounts)
  byStatus: BucketStatusCounts;

  @Field(() => BucketTypeCounts)
  byType: BucketTypeCounts;

  @Field(() => Float, {
    description: 'DONE / totalGoals, 0 if no goals',
  })
  completionRate: number;
}
