import { Field, Float, InputType, Int } from '@nestjs/graphql';
import { DefinedProjectServiceType } from '@generated/prisma/defined-project-service-type.enum';
import { DefinedProjectStatus } from '@generated/prisma/defined-project-status.enum';
import {
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';

@InputType()
export class CreateDefinedProjectInput {
  @Field(() => Int)
  @IsInt()
  @Type(() => Number)
  clientId: number;

  @Field(() => String)
  @IsString()
  @MaxLength(160)
  name: string;

  @Field(() => DefinedProjectServiceType)
  @IsEnum(DefinedProjectServiceType)
  serviceType: DefinedProjectServiceType;

  @Field(() => DefinedProjectStatus, { nullable: true })
  @IsOptional()
  @IsEnum(DefinedProjectStatus)
  status?: DefinedProjectStatus;

  @Field(() => Float, { nullable: true })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  budget?: number;

  @Field(() => Date, { nullable: true })
  @IsOptional()
  deadline?: Date;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(120)
  source?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(120)
  assignedTo?: string;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  supplierId?: number;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(5000)
  notes?: string;
}
