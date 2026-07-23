import { Field, InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerJourneyStatus } from '@generated/prisma/defined-academy-career-journey-status.enum';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
} from 'class-validator';

@InputType()
export class CreateDefinedAcademyCareerJourneyInput {
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
  description?: string;

  @Field(() => DefinedAcademyCareerJourneyStatus, { nullable: true })
  @IsOptional()
  @IsEnum(DefinedAcademyCareerJourneyStatus)
  status?: DefinedAcademyCareerJourneyStatus;
}
