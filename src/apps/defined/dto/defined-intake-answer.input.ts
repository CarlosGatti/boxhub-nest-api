import { Field, InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { DefinedIntakeAnswerType } from '@generated/prisma/defined-intake-answer-type.enum';
import {
  Allow,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

@InputType()
export class DefinedIntakeAnswerInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @MaxLength(120)
  questionKey: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(200)
  questionLabel?: string;

  @Field(() => DefinedIntakeAnswerType)
  @IsEnum(DefinedIntakeAnswerType)
  answerType: DefinedIntakeAnswerType;

  @Field(() => GraphQLJSON)
  @Allow()
  answerValue: unknown;
}
