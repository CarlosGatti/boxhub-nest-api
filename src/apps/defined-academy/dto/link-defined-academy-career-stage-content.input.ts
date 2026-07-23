import { Field, InputType, Int } from '@nestjs/graphql';
import { DefinedAcademyCareerStageContentType } from '@generated/prisma/defined-academy-career-stage-content-type.enum';
import { Type } from 'class-transformer';
import {
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

@InputType()
export class LinkDefinedAcademyCareerStageContentInput {
  @Field(() => DefinedAcademyCareerStageContentType)
  @IsEnum(DefinedAcademyCareerStageContentType)
  contentType: DefinedAcademyCareerStageContentType;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  courseId?: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  resourceId?: number;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(240)
  label?: string;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  sortOrder?: number;
}
