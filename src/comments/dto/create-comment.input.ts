import { Field, InputType, Int } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsOptional, IsInt, MinLength, MaxLength } from 'class-validator';

@InputType()
export class CreateCommentInput {
  @Field(() => Int)
  @IsInt()
  discartItemId!: number;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(2000)
  content!: string;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  parentId?: number;
}

