import { Field, InputType, Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Type } from 'class-transformer';
import {
  Allow,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

@InputType()
export class CaptureDefinedAcademyReferralInput {
  @Field(() => Int)
  @IsInt()
  @Type(() => Number)
  academyId: number;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
  referralCode: string;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  campaignId?: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  referrerUserId?: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  partnerId?: number;

  @Field(() => GraphQLJSON, { nullable: true })
  @IsOptional()
  @Allow()
  metadata?: unknown;
}
