import { Field, InputType, Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Type } from 'class-transformer';
import {
  Allow,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { DefinedProposalSectionType } from '@generated/prisma/defined-proposal-section-type.enum';

@InputType()
export class CreateDefinedProposalSectionInput {
  @Field(() => DefinedProposalSectionType, { nullable: true })
  @IsOptional()
  @IsEnum(DefinedProposalSectionType)
  type?: DefinedProposalSectionType;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @MaxLength(160)
  title: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(10000)
  body?: string;

  @Field(() => GraphQLJSON, { nullable: true })
  @IsOptional()
  @Allow()
  contentJson?: unknown;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  order?: number;
}
