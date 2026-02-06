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
import { HomeOpsTemplateSlotInput } from './create-homeops-task-template.input';

@InputType()
export class UpdateHomeOpsTaskTemplateInput {
  @Field(() => ID)
  @IsString()
  id: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(200)
  title?: string;

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

  @Field(() => HomeOpsFrequency, { nullable: true })
  @IsOptional()
  @IsEnum(HomeOpsFrequency)
  frequency?: HomeOpsFrequency;

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
