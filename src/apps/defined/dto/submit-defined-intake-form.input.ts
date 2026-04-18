import { Field, InputType, Int } from '@nestjs/graphql';
import { IsArray, IsInt, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { DefinedIntakeAnswerInput } from './defined-intake-answer.input';

@InputType()
export class SubmitDefinedIntakeFormInput {
  @Field(() => Int)
  @IsInt()
  @Type(() => Number)
  intakeFormId: number;

  @Field(() => [DefinedIntakeAnswerInput])
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DefinedIntakeAnswerInput)
  answers: DefinedIntakeAnswerInput[];
}
