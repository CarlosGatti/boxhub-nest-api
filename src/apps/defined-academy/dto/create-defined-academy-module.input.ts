import { Field, InputType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { DefinedAcademyContentStatus } from '@generated/prisma/defined-academy-content-status.enum';

@InputType()
export class CreateDefinedAcademyModuleInput {
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

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  sortOrder?: number;

  @Field(() => DefinedAcademyContentStatus, { nullable: true })
  @IsOptional()
  status?: DefinedAcademyContentStatus;
}
