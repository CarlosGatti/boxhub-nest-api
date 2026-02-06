import { Field, InputType, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';

@InputType()
export class CreateHoldingInput {
  @Field(() => Int)
  @IsInt()
  @IsNotEmpty()
  assetId: number;

  @Field(() => Number)
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  quantity: number;

  @Field(() => Number)
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  averageCost: number;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  notes?: string;
}

