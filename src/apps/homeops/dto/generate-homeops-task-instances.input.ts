import { Field, ID, InputType } from '@nestjs/graphql';
import { Type, Transform } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { HomeOpsTaskRangeInput } from './homeops-task-range.input';

@InputType()
export class GenerateHomeOpsTaskInstancesInput {
  @Field(() => ID)
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => String(value))
  householdId: string;

  @Field(() => HomeOpsTaskRangeInput)
  @ValidateNested()
  @Type(() => HomeOpsTaskRangeInput)
  range: HomeOpsTaskRangeInput;
}
