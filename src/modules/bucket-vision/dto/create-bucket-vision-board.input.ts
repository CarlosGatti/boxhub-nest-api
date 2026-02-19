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

@InputType()
export class CreateBucketVisionBoardInput {
  @Field(() => String, { nullable: true, defaultValue: 'Your Vision Board' })
  @IsString()
  @IsOptional()
  @MaxLength(255)
  title?: string;

  @Field(() => BucketVisionPeriodType, { nullable: true, defaultValue: BucketVisionPeriodType.YEAR })
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

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  @MaxLength(2048)
  coverUrl?: string;
}
