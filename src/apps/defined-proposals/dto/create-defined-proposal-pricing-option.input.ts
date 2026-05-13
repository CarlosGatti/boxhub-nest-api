import { Field, Float, InputType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';
import { DefinedProposalPricingType } from '@generated/prisma/defined-proposal-pricing-type.enum';

@InputType()
export class CreateDefinedProposalPricingOptionInput {
  @Field(() => String)
  @IsString()
  @MaxLength(160)
  title: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(10000)
  description?: string;

  @Field(() => DefinedProposalPricingType, { nullable: true })
  @IsOptional()
  @IsEnum(DefinedProposalPricingType)
  type?: DefinedProposalPricingType;

  @Field(() => Float, { nullable: true })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  amount?: number;

  @Field(() => String, { nullable: true, defaultValue: 'USD' })
  @IsOptional()
  @IsString()
  @MaxLength(12)
  currency?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(1000)
  billingNote?: string;

  @Field(() => [String], { nullable: true })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  features?: string[];

  @Field(() => Boolean, { nullable: true, defaultValue: false })
  @IsOptional()
  @IsBoolean()
  isRecommended?: boolean;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  order?: number;
}
