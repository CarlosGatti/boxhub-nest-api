import { Field, InputType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { DefinedAcademyCourseVisibility } from '@generated/prisma/defined-academy-course-visibility.enum';
import { DefinedAcademyResourceType } from '@generated/prisma/defined-academy-resource-type.enum';

@InputType()
export class CreateDefinedAcademyResourceInput {
  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  lessonId?: number;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @MaxLength(180)
  title: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(10000)
  description?: string;

  @Field(() => DefinedAcademyResourceType)
  type: DefinedAcademyResourceType;

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
  visibility?: DefinedAcademyCourseVisibility;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  @IsBoolean()
  downloadable?: boolean;
}
