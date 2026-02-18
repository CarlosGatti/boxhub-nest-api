import { Field, InputType, Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import {
  IsArray,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';
import { BucketGoalType } from '@generated/prisma/bucket-goal-type.enum';
import { BucketGoalStatus } from '@generated/prisma/bucket-goal-status.enum';

@InputType()
export class CreateBucketGoalInput {
  @Field(() => String)
  @IsString()
  @MaxLength(255)
  title: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  @MaxLength(2000)
  description?: string;

  @Field(() => BucketGoalType, { nullable: true, defaultValue: BucketGoalType.GENERAL })
  @IsEnum(BucketGoalType)
  @IsOptional()
  type?: BucketGoalType;

  @Field(() => BucketGoalStatus, { nullable: true, defaultValue: BucketGoalStatus.IDEA })
  @IsEnum(BucketGoalStatus)
  @IsOptional()
  status?: BucketGoalStatus;

  @Field(() => Int, { nullable: true, defaultValue: 0 })
  @IsInt()
  @Min(0)
  @IsOptional()
  priority?: number;

  @Field(() => GraphQLJSON, { nullable: true })
  @IsOptional()
  details?: Record<string, unknown>;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  @MaxLength(2048)
  coverUrl?: string;

  @Field(() => [String], { nullable: true, defaultValue: [] })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  tags?: string[];

  @Field(() => Date, { nullable: true })
  @IsOptional()
  targetDate?: Date;

  @Field(() => Date, { nullable: true })
  @IsOptional()
  completedAt?: Date;
}
