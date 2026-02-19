import { Field, InputType, Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { IsEnum, IsInt, IsOptional, IsString, MaxLength, Min } from 'class-validator';
import { BucketVisionSectionType } from '@generated/prisma/bucket-vision-section-type.enum';

@InputType()
export class UpsertBucketVisionSectionInput {
  @Field(() => BucketVisionSectionType)
  @IsEnum(BucketVisionSectionType)
  type: BucketVisionSectionType;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  @MaxLength(255)
  title?: string;

  @Field(() => GraphQLJSON, { nullable: true, description: 'Section content. Null/undefined for empty sections.' })
  @IsOptional()
  content?: Record<string, unknown> | null;

  @Field(() => Int, { nullable: true, defaultValue: 0 })
  @IsInt()
  @Min(0)
  @IsOptional()
  order?: number;
}
