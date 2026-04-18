import { Field, InputType, Int } from '@nestjs/graphql';
import { IsInt } from 'class-validator';
import { Type } from 'class-transformer';

@InputType()
export class MarkDefinedIntakeFormReviewedInput {
  @Field(() => Int)
  @IsInt()
  @Type(() => Number)
  intakeFormId: number;
}
