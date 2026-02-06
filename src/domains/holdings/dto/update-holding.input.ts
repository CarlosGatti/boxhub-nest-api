import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsOptional, IsString, Min } from 'class-validator';

@InputType()
export class UpdateHoldingInput {
  @Field(() => Number, { nullable: true })
  @IsNumber()
  @IsOptional()
  @Min(0)
  quantity?: number;

  @Field(() => Number, { nullable: true })
  @IsNumber()
  @IsOptional()
  @Min(0)
  averageCost?: number;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  notes?: string;
}

