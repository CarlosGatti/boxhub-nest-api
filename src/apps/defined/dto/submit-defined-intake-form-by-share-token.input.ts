import { Field, InputType } from '@nestjs/graphql';
import { IsArray, IsString, MaxLength, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { DefinedIntakeAnswerInput } from './defined-intake-answer.input';

@InputType()
export class SubmitDefinedIntakeFormByShareTokenInput {
  @Field(() => String)
  @IsString()
  @MaxLength(255)
  token: string;

  @Field(() => [DefinedIntakeAnswerInput])
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DefinedIntakeAnswerInput)
  answers: DefinedIntakeAnswerInput[];
}
