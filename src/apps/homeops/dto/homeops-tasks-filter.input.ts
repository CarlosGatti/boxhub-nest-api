import { Field, ID, InputType } from '@nestjs/graphql';

import { HomeOpsTaskRangeInput } from './homeops-task-range.input';
import { HomeOpsTaskStatus } from '@generated/prisma/home-ops-task-status.enum';
import { IsEnum, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@InputType()
export class HomeOpsTasksFilterInput {

  @Field(() => ID, { nullable: true })
  @IsOptional()
  @IsString()
  householdId?: string;

  @Field(() => HomeOpsTaskRangeInput, { nullable: true })
  @IsOptional()
  @ValidateNested()
  @Type(() => HomeOpsTaskRangeInput)
  range?: HomeOpsTaskRangeInput;

  @Field(() => HomeOpsTaskStatus, { nullable: true })
  @IsOptional()
  @IsEnum(HomeOpsTaskStatus)
  status?: HomeOpsTaskStatus;

  @Field(() => ID, { nullable: true })
  @IsOptional()
  @IsString()
  assigneeId?: string;
}
