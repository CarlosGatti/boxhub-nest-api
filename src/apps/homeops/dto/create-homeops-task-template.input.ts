import { Field, ID, InputType, Int } from '@nestjs/graphql';
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  Matches,
  Max,
  MaxLength,
  Min,
  ValidateNested,
} from 'class-validator';
import { HomeOpsAssignmentMode } from '@generated/prisma/home-ops-assignment-mode.enum';
import { HomeOpsFrequency } from '@generated/prisma/home-ops-frequency.enum';
import { HomeOpsWeekday } from '@generated/prisma/home-ops-weekday.enum';
import { Type } from 'class-transformer';

@InputType()
export class HomeOpsTemplateSlotInput {
  @Field(() => String)
  @IsString()
  @MaxLength(80)
  label: string;

  @Field(() => String)
  @IsString()
  @Matches(/^\d{2}:\d{2}$/)
  windowStart: string;

  @Field(() => String)
  @IsString()
  @Matches(/^\d{2}:\d{2}$/)
  windowEnd: string;

  @Field(() => Int)
  @IsInt()
  @Min(1)
  order: number;
}

@InputType()
export class CreateHomeOpsTaskTemplateInput {
  @Field(() => ID)
  @IsString()
  householdId: string;

  @Field(() => String)
  @IsString()
  @MaxLength(200)
  title: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(2000)
  description?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(120)
  category?: string;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(10)
  effortWeight?: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Min(1)
  points?: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Min(1)
  estimatedMinutes?: number;

  @Field(() => HomeOpsFrequency)
  @IsEnum(HomeOpsFrequency)
  frequency: HomeOpsFrequency;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Min(1)
  interval?: number;

  @Field(() => [HomeOpsWeekday], { nullable: true })
  @IsOptional()
  @IsArray()
  @IsEnum(HomeOpsWeekday, { each: true })
  daysOfWeek?: HomeOpsWeekday[];

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Min(1)
  dayOfMonth?: number;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  timezone?: string;

  @Field(() => HomeOpsAssignmentMode, { nullable: true })
  @IsOptional()
  assignmentMode?: HomeOpsAssignmentMode;

  @Field(() => ID, { nullable: true })
  @IsOptional()
  fixedAssigneeId?: string;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Min(1)
  occurrences?: number;

  @Field(() => [HomeOpsTemplateSlotInput], { nullable: true })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => HomeOpsTemplateSlotInput)
  slots?: HomeOpsTemplateSlotInput[];
}
