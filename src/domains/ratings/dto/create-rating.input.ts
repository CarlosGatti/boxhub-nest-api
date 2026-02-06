import { Field, InputType, Int } from '@nestjs/graphql';
import { IsInt, IsString, IsOptional, Min, Max, MaxLength } from 'class-validator';

@InputType()
export class CreateRatingInput {
  @Field(() => Int)
  @IsInt()
  sellerId!: number;

  @Field(() => Int)
  @IsInt()
  @Min(1)
  @Max(5)
  stars!: number;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  comment?: string;
}

