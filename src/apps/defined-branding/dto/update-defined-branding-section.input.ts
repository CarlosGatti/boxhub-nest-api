import { Field, InputType, Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Type } from 'class-transformer';
import {
  Allow,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { DefinedBrandingSectionType } from '@generated/prisma/defined-branding-section-type.enum';

@InputType()
export class UpdateDefinedBrandingSectionInput {
  @Field(() => DefinedBrandingSectionType, { nullable: true })
  @IsOptional()
  @IsEnum(DefinedBrandingSectionType)
  type?: DefinedBrandingSectionType;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(180)
  title?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(10000)
  body?: string;

  @Field(() => GraphQLJSON, { nullable: true })
  @IsOptional()
  @Allow()
  contentJson?: unknown;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  order?: number;
}
