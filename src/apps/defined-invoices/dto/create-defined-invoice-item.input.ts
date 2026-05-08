import { Field, Float, InputType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';

@InputType()
export class CreateDefinedInvoiceItemInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  description: string;

  @Field(() => Float)
  @IsNumber()
  @Min(0.01)
  @Type(() => Number)
  quantity: number;

  @Field(() => Float)
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  unitPrice: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @Type(() => Number)
  sortOrder?: number;
}
