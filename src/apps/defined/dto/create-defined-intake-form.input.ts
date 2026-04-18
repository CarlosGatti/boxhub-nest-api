import { Field, InputType, Int } from '@nestjs/graphql';
import { DefinedIntakeFormStatus } from '@generated/prisma/defined-intake-form-status.enum';
import { DefinedIntakeFormType } from '@generated/prisma/defined-intake-form-type.enum';
import {
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { Type } from 'class-transformer';

@InputType()
export class CreateDefinedIntakeFormInput {
  @Field(() => Int)
  @IsInt()
  @Type(() => Number)
  clientId: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  projectId?: number;

  @Field(() => DefinedIntakeFormType)
  @IsEnum(DefinedIntakeFormType)
  formType: DefinedIntakeFormType;

  @Field(() => DefinedIntakeFormStatus, { nullable: true })
  @IsOptional()
  @IsEnum(DefinedIntakeFormStatus)
  status?: DefinedIntakeFormStatus;

  @Field(() => String)
  @IsString()
  @MaxLength(180)
  title: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(1000)
  description?: string;
}
