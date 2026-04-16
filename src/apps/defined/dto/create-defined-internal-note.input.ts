import { Field, InputType, Int } from '@nestjs/graphql';
import { IsInt, IsOptional, IsString, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';

@InputType()
export class CreateDefinedInternalNoteInput {
  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  clientId?: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  projectId?: number;

  @Field(() => String)
  @IsString()
  @MaxLength(5000)
  body: string;
}
