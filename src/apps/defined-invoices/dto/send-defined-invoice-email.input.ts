import { Field, InputType } from '@nestjs/graphql';
import { IsArray, IsBoolean, IsEmail, IsOptional, IsString } from 'class-validator';

@InputType()
export class SendDefinedInvoiceEmailInput {
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsEmail()
  to?: string;

  @Field(() => [String], { nullable: true })
  @IsOptional()
  @IsArray()
  @IsEmail({}, { each: true })
  cc?: string[];

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  subject?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  message?: string;

  @Field(() => Boolean, { nullable: true, defaultValue: true })
  @IsOptional()
  @IsBoolean()
  attachPdf?: boolean;
}
