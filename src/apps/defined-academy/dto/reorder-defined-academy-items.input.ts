import { Field, InputType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsInt,
  ValidateNested,
} from 'class-validator';

@InputType()
export class ReorderDefinedAcademyItemInput {
  @Field(() => Int)
  @IsInt()
  @Type(() => Number)
  id: number;

  @Field(() => Int)
  @IsInt()
  @Type(() => Number)
  sortOrder: number;
}

@InputType()
export class ReorderDefinedAcademyItemsInput {
  @Field(() => Int)
  @IsInt()
  @Type(() => Number)
  parentId: number;

  @Field(() => [ReorderDefinedAcademyItemInput])
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => ReorderDefinedAcademyItemInput)
  items: ReorderDefinedAcademyItemInput[];
}
