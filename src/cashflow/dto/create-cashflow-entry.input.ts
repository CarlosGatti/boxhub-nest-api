import { Field, InputType, Int, Float } from '@nestjs/graphql';
import { IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, Min } from 'class-validator';
import { CashflowType } from '../../../@generated/prisma/cashflow-type.enum';
import { Type } from 'class-transformer';

@InputType()
export class CreateCashflowEntryInput {
  @Field(() => Int)
  @IsInt()
  @IsNotEmpty()
  @Type(() => Number)
  categoryId: number;

  @Field(() => CashflowType)
  @IsEnum(CashflowType)
  @IsNotEmpty()
  type: CashflowType;

  @Field(() => Float)
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Type(() => Number)
  amount: number;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  @MaxLength(500)
  description?: string;

  @Field(() => Date, { nullable: true })
  @IsOptional()
  date?: Date;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  @MaxLength(1000)
  notes?: string;
}

