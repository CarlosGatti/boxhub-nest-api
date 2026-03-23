import { Field, Int, ObjectType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { BucketGoalStatus } from '@generated/prisma/bucket-goal-status.enum';
import { BucketGoalType } from '@generated/prisma/bucket-goal-type.enum';

/** Summary of a log for timeline card display. */
@ObjectType()
export class BucketGoalsTimelineLogSummary {
  @Field(() => Int)
  id: number;

  @Field(() => String, { description: 'Log content (alias for note)' })
  content: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => String, {
    nullable: true,
    description: 'First image URL from log media, if any',
  })
  coverImageUrl: string | null;
}

/** Goal card for timeline/social-feed view. */
@ObjectType()
export class BucketGoalsTimelineGoalCard {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  description: string | null;

  @Field(() => BucketGoalType)
  type: BucketGoalType;

  @Field(() => BucketGoalStatus)
  status: BucketGoalStatus;

  @Field(() => Int)
  priority: number;

  @Field(() => [String])
  tags: string[];

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  completedAt: Date | null;

  @Field(() => Date, { nullable: true })
  targetDate: Date | null;

  @Field(() => String, { nullable: true, description: 'Cover image URL' })
  coverUrl: string | null;

  @Field(() => GraphQLJSON, {
    nullable: true,
    description: 'Type-specific details (travel, event, place collection, etc.)',
  })
  details: object | null;

  @Field(() => Int, { description: 'Number of logs' })
  logsCount: number;

  @Field(() => BucketGoalsTimelineLogSummary, {
    nullable: true,
    description: 'Most recent log if any',
  })
  latestLog: BucketGoalsTimelineLogSummary | null;
}

/** Paginated timeline response. */
@ObjectType()
export class BucketGoalsTimelinePage {
  @Field(() => [BucketGoalsTimelineGoalCard])
  items: BucketGoalsTimelineGoalCard[];

  @Field(() => Boolean, { description: 'Whether more pages exist' })
  hasMore: boolean;

  @Field(() => Int, { description: 'Total count of completed goals' })
  total: number;
}
