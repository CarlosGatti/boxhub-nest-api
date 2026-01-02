import { Field, InputType } from '@nestjs/graphql';
import { IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { CashflowType } from '../../../@generated/prisma/cashflow-type.enum';

@InputType()
export class CreateCashflowCategoryInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  name: string;

  @Field(() => CashflowType)
  @IsEnum(CashflowType)
  @IsNotEmpty()
  type: CashflowType;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  @MaxLength(500)
  description?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  @MaxLength(7)
  color?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  @MaxLength(50)
  icon?: string;
}

