import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { BucketGoalStatus } from '@generated/prisma/bucket-goal-status.enum';
import { BucketGoalType } from '@generated/prisma/bucket-goal-type.enum';

@ObjectType()
export class BucketMapPinOutput {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  goalId: number;

  @Field(() => Float)
  lat: number;

  @Field(() => Float)
  lng: number;

  @Field(() => String, { nullable: true })
  label: string | null;

  @Field(() => String)
  goalTitle: string;

  @Field(() => BucketGoalStatus)
  goalStatus: BucketGoalStatus;

  @Field(() => BucketGoalType)
  goalType: BucketGoalType;

  @Field(() => String, { nullable: true })
  coverUrl: string | null;
}
