import { Field, InputType, Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import {
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';
import { BucketVisionItemType } from '@generated/prisma/bucket-vision-item-type.enum';

@InputType()
export class UpdateBucketVisionItemInput {
  @Field(() => BucketVisionItemType, { nullable: true })
  @IsEnum(BucketVisionItemType)
  @IsOptional()
  type?: BucketVisionItemType;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  @MaxLength(2000)
  text?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  @MaxLength(2048)
  url?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  @MaxLength(20)
  color?: string;

  @Field(() => GraphQLJSON, { nullable: true })
  @IsOptional()
  metadata?: Record<string, unknown>;

  @Field(() => Int, { nullable: true })
  @IsInt()
  @Min(0)
  @IsOptional()
  order?: number;

  @Field(() => GraphQLJSON, { nullable: true })
  @IsOptional()
  layout?: Record<string, unknown>;
}
