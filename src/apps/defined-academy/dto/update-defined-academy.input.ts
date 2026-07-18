import { Field, InputType, Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Type } from 'class-transformer';
import {
  Allow,
  IsInt,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
} from 'class-validator';
import { DefinedAcademyStatus } from '@generated/prisma/defined-academy-status.enum';

@InputType()
export class UpdateDefinedAcademyInput {
  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  appId?: number;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(180)
  name?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(180)
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
  slug?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(10000)
  description?: string;

  @Field(() => DefinedAcademyStatus, { nullable: true })
  @IsOptional()
  status?: DefinedAcademyStatus;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(1000)
  logoUrl?: string;

  @Field(() => GraphQLJSON, { nullable: true })
  @IsOptional()
  @Allow()
  settings?: unknown;
}
