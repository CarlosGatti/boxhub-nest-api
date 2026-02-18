import { Field, InputType } from '@nestjs/graphql';
import { IsEnum, IsOptional, IsString, MaxLength } from 'class-validator';
import { BucketGoalType } from '@generated/prisma/bucket-goal-type.enum';
import { BucketGoalStatus } from '@generated/prisma/bucket-goal-status.enum';

@InputType()
export class BucketGoalsFilterInput {
  @Field(() => BucketGoalType, { nullable: true })
  @IsEnum(BucketGoalType)
  @IsOptional()
  type?: BucketGoalType;

  @Field(() => BucketGoalStatus, { nullable: true })
  @IsEnum(BucketGoalStatus)
  @IsOptional()
  status?: BucketGoalStatus;

  @Field(() => String, { nullable: true, description: 'Search in title and description' })
  @IsString()
  @IsOptional()
  @MaxLength(100)
  search?: string;
}
