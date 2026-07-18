import { Field, InputType, Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Type } from 'class-transformer';
import {
  Allow,
  IsInt,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { DefinedAcademyReferralCampaignStatus } from '@generated/prisma/defined-academy-referral-campaign-status.enum';
import { DefinedAcademyReferralSourceType } from '@generated/prisma/defined-academy-referral-source-type.enum';

@InputType()
export class UpdateDefinedAcademyReferralCampaignInput {
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(180)
  name?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(64)
  code?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(10000)
  description?: string;

  @Field(() => DefinedAcademyReferralSourceType, { nullable: true })
  @IsOptional()
  sourceType?: DefinedAcademyReferralSourceType;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  partnerId?: number | null;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  courseId?: number | null;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  resourceId?: number | null;

  @Field(() => DefinedAcademyReferralCampaignStatus, { nullable: true })
  @IsOptional()
  status?: DefinedAcademyReferralCampaignStatus;

  @Field(() => Date, { nullable: true })
  @IsOptional()
  startsAt?: Date | null;

  @Field(() => Date, { nullable: true })
  @IsOptional()
  endsAt?: Date | null;

  @Field(() => GraphQLJSON, { nullable: true })
  @IsOptional()
  @Allow()
  metadata?: unknown;
}
