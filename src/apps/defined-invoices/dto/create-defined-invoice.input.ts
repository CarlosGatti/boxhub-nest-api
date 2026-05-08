import { Field, InputType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsDate,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateDefinedInvoiceItemInput } from './create-defined-invoice-item.input';

@InputType()
export class CreateDefinedInvoiceInput {
  @Field(() => Int)
  @IsInt()
  @Type(() => Number)
  projectId: number;

  @Field(() => String, { nullable: true, defaultValue: 'USD' })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  currency?: string;

  @Field(() => Date, { nullable: true })
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  issueDate?: Date;

  @Field(() => Date, { nullable: true })
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  dueDate?: Date;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  paymentInstructions?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  notes?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  terms?: string;

  @Field(() => [CreateDefinedInvoiceItemInput])
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => CreateDefinedInvoiceItemInput)
  items: CreateDefinedInvoiceItemInput[];
}
