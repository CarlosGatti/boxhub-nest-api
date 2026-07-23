import { Field, InputType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { DefinedAcademyCourseVisibility } from '@generated/prisma/defined-academy-course-visibility.enum';
import { DefinedAcademyResourceStatus } from '@generated/prisma/defined-academy-resource-status.enum';
import { DefinedAcademyResourceType } from '@generated/prisma/defined-academy-resource-type.enum';

@InputType()
export class UpdateDefinedAcademyResourceInput {
  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  lessonId?: number | null;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(180)
  title?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(10000)
  description?: string;

  @Field(() => DefinedAcademyResourceType, { nullable: true })
  @IsOptional()
  @IsEnum(DefinedAcademyResourceType)
  type?: DefinedAcademyResourceType;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(1000)
  fileUrl?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(1000)
  externalUrl?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(50000)
  textContent?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  mimeType?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  fileName?: string;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  fileSize?: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  sortOrder?: number;

  @Field(() => DefinedAcademyCourseVisibility, { nullable: true })
  @IsOptional()
  @IsEnum(DefinedAcademyCourseVisibility)
  visibility?: DefinedAcademyCourseVisibility;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  @IsBoolean()
  downloadable?: boolean;

  @Field(() => DefinedAcademyResourceStatus, { nullable: true })
  @IsOptional()
  @IsEnum(DefinedAcademyResourceStatus)
  status?: DefinedAcademyResourceStatus;
}
