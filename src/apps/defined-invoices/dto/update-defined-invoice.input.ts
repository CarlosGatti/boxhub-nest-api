import { Field, InputType } from '@nestjs/graphql';
import { IsDate, IsEnum, IsOptional, IsString, ValidateNested, IsArray } from 'class-validator';
import { Type } from 'class-transformer';
import { DefinedInvoiceStatus } from '@generated/prisma/defined-invoice-status.enum';
import { CreateDefinedInvoiceItemInput } from './create-defined-invoice-item.input';

@InputType()
export class UpdateDefinedInvoiceInput {
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
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

  @Field(() => DefinedInvoiceStatus, { nullable: true })
  @IsOptional()
  @IsEnum(DefinedInvoiceStatus)
  status?: DefinedInvoiceStatus;

  @Field(() => [CreateDefinedInvoiceItemInput], { nullable: true })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateDefinedInvoiceItemInput)
  items?: CreateDefinedInvoiceItemInput[];
}
