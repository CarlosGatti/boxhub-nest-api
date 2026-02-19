import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BucketVisionProgressSummary {
  @Field(() => Int)
  linkedGoalsCount: number;

  @Field(() => Int)
  doneGoalsCount: number;

  @Field(() => Float, {
    description: 'doneGoalsCount / linkedGoalsCount, 0 if no linked goals',
  })
  completionRate: number;

  @Field(() => Int)
  ideaCount: number;

  @Field(() => Int)
  plannedCount: number;

  @Field(() => Int)
  inProgressCount: number;

  @Field(() => Int)
  droppedCount: number;
}
