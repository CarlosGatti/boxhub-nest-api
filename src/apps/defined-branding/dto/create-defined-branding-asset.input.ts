import { Field, InputType, Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Type } from 'class-transformer';
import {
  Allow,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { DefinedBrandingAssetType } from '@generated/prisma/defined-branding-asset-type.enum';

@InputType()
export class CreateDefinedBrandingAssetInput {
  @Field(() => Int)
  @IsInt()
  @Type(() => Number)
  brandingProjectId: number;

  @Field(() => DefinedBrandingAssetType)
  @IsEnum(DefinedBrandingAssetType)
  type: DefinedBrandingAssetType;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @MaxLength(180)
  name: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @MaxLength(1000)
  fileUrl: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  fileName?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(120)
  mimeType?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(10000)
  notes?: string;

  @Field(() => GraphQLJSON, { nullable: true })
  @IsOptional()
  @Allow()
  metadata?: unknown;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  order?: number;
}
