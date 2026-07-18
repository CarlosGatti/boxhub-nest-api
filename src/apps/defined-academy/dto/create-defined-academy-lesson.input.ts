import { Field, InputType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
} from 'class-validator';
import { DefinedAcademyCourseVisibility } from '@generated/prisma/defined-academy-course-visibility.enum';
import { DefinedAcademyLessonType } from '@generated/prisma/defined-academy-lesson-type.enum';

@InputType()
export class CreateDefinedAcademyLessonInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @MaxLength(180)
  title: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @MaxLength(180)
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
  slug: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(10000)
  summary?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(50000)
  description?: string;

  @Field(() => DefinedAcademyLessonType, { nullable: true })
  @IsOptional()
  lessonType?: DefinedAcademyLessonType;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(1000)
  videoUrl?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  videoProvider?: string;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  videoDurationSeconds?: number;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(50000)
  bodyContent?: string;

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
  isPreview?: boolean;
}
