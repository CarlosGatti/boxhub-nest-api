import { Field, InputType, Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Type } from 'class-transformer';
import {
  Allow,
  IsArray,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { CreateDefinedProposalPricingOptionInput } from './create-defined-proposal-pricing-option.input';
import { CreateDefinedProposalSectionInput } from './create-defined-proposal-section.input';

@InputType()
export class CreateDefinedProposalInput {
  @Field(() => Int)
  @IsInt()
  @Type(() => Number)
  clientId: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  projectId?: number;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @MaxLength(180)
  title: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(240)
  subtitle?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(10000)
  summary?: string;

  @Field(() => String, { nullable: true, defaultValue: 'USD' })
  @IsOptional()
  @IsString()
  @MaxLength(12)
  currency?: string;

  @Field(() => GraphQLJSON, { nullable: true })
  @IsOptional()
  @Allow()
  contentJson?: unknown;

  @Field(() => [CreateDefinedProposalSectionInput], { nullable: true })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateDefinedProposalSectionInput)
  sections?: CreateDefinedProposalSectionInput[];

  @Field(() => [CreateDefinedProposalPricingOptionInput], { nullable: true })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateDefinedProposalPricingOptionInput)
  pricingOptions?: CreateDefinedProposalPricingOptionInput[];
}
