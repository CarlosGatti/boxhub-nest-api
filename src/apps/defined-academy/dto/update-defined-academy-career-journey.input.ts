import { Field, InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerJourneyStatus } from '@generated/prisma/defined-academy-career-journey-status.enum';
import { IsEnum, IsOptional, IsString, MaxLength } from 'class-validator';

@InputType()
export class UpdateDefinedAcademyCareerJourneyInput {
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

  @Field(() => DefinedAcademyCareerJourneyStatus, { nullable: true })
  @IsOptional()
  @IsEnum(DefinedAcademyCareerJourneyStatus)
  status?: DefinedAcademyCareerJourneyStatus;
}
