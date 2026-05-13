import { Field, InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import {
  Allow,
  IsArray,
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { DefinedProposalStatus } from '@generated/prisma/defined-proposal-status.enum';
import { CreateDefinedProposalPricingOptionInput } from './create-defined-proposal-pricing-option.input';
import { CreateDefinedProposalSectionInput } from './create-defined-proposal-section.input';

@InputType()
export class UpdateDefinedProposalInput {
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(180)
  title?: string;

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

  @Field(() => DefinedProposalStatus, { nullable: true })
  @IsOptional()
  @IsEnum(DefinedProposalStatus)
  status?: DefinedProposalStatus;

  @Field(() => String, { nullable: true })
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
