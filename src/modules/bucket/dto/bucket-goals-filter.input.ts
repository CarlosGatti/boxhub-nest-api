import { Field, InputType } from '@nestjs/graphql';
import { IsArray, IsEnum, IsOptional, IsString, MaxLength } from 'class-validator';
import { BucketGoalType } from '@generated/prisma/bucket-goal-type.enum';
import { BucketGoalStatus } from '@generated/prisma/bucket-goal-status.enum';

@InputType()
export class BucketGoalsFilterInput {
  /** Single type filter (backward compatible) */
  @Field(() => BucketGoalType, { nullable: true })
  @IsEnum(BucketGoalType)
  @IsOptional()
  type?: BucketGoalType;

  /** Filter by multiple types (e.g. [GAME], [MOVIE, TV_SHOW] for watchlist) */
  @Field(() => [BucketGoalType], { nullable: true })
  @IsArray()
  @IsEnum(BucketGoalType, { each: true })
  @IsOptional()
  typeIn?: BucketGoalType[];

  /** Single status filter (backward compatible) */
  @Field(() => BucketGoalStatus, { nullable: true })
  @IsEnum(BucketGoalStatus)
  @IsOptional()
  status?: BucketGoalStatus;

  /** Filter by multiple statuses */
  @Field(() => [BucketGoalStatus], { nullable: true })
  @IsArray()
  @IsEnum(BucketGoalStatus, { each: true })
  @IsOptional()
  statusIn?: BucketGoalStatus[];

  /** Goals that have at least one of these tags */
  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  tagsHasAny?: string[];

  /** Search in title and description (case-insensitive) */
  @Field(() => String, { nullable: true, description: 'Search in title and description' })
  @IsString()
  @IsOptional()
  @MaxLength(100)
  search?: string;
}
