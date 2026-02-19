import { Field, InputType, Int } from '@nestjs/graphql';
import {
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';
import { BucketVisionPeriodType } from '@generated/prisma/bucket-vision-period-type.enum';
import { BucketVisionLayoutMode } from '@generated/prisma/bucket-vision-layout-mode.enum';

@InputType()
export class UpdateBucketVisionBoardInput {
  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  @MaxLength(255)
  title?: string;

  @Field(() => BucketVisionPeriodType, { nullable: true })
  @IsEnum(BucketVisionPeriodType)
  @IsOptional()
  periodType?: BucketVisionPeriodType;

  @Field(() => Int, { nullable: true })
  @IsInt()
  @Min(2000)
  @IsOptional()
  year?: number;

  @Field(() => Date, { nullable: true })
  @IsOptional()
  startDate?: Date;

  @Field(() => Date, { nullable: true })
  @IsOptional()
  endDate?: Date;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  @MaxLength(255)
  theme?: string;

  @Field(() => BucketVisionLayoutMode, { nullable: true })
  @IsEnum(BucketVisionLayoutMode)
  @IsOptional()
  layoutMode?: BucketVisionLayoutMode;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  @MaxLength(2048)
  coverUrl?: string;
}
