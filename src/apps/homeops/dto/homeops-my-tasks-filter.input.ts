import { Field, InputType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import { HomeOpsTaskStatus } from '@generated/prisma/home-ops-task-status.enum';
import { HomeOpsTaskRangeInput } from './homeops-task-range.input';

@InputType()
export class HomeOpsMyTasksFilterInput {
  @Field(() => HomeOpsTaskRangeInput, { nullable: true })
  @IsOptional()
  range?: HomeOpsTaskRangeInput;

  @Field(() => HomeOpsTaskStatus, { nullable: true })
  @IsOptional()
  status?: HomeOpsTaskStatus;
}
