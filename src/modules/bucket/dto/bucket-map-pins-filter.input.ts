import { Field, InputType } from '@nestjs/graphql';
import { IsEnum, IsOptional } from 'class-validator';
import { BucketGoalStatus } from '@generated/prisma/bucket-goal-status.enum';

@InputType()
export class BucketMapPinsFilterInput {
  @Field(() => BucketGoalStatus, {
    nullable: true,
    description: 'Filter pins by goal status (e.g. only DONE for visited places)',
  })
  @IsEnum(BucketGoalStatus)
  @IsOptional()
  goalStatus?: BucketGoalStatus;
}
