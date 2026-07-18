import { Field, InputType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
} from 'class-validator';

@InputType()
export class CreateDefinedAcademyShortLinkInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @IsUrl()
  @MaxLength(1000)
  destinationUrl: string;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  resourceId?: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  courseId?: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  partnerId?: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  referralCampaignId?: number;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(64)
  customCode?: string;

  @Field(() => Date, { nullable: true })
  @IsOptional()
  expiresAt?: Date;
}
