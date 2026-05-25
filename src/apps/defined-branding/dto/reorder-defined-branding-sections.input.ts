import { Field, InputType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsInt,
  ValidateNested,
} from 'class-validator';

@InputType()
export class ReorderDefinedBrandingSectionItemInput {
  @Field(() => Int)
  @IsInt()
  @Type(() => Number)
  id: number;

  @Field(() => Int)
  @IsInt()
  @Type(() => Number)
  order: number;
}

@InputType()
export class ReorderDefinedBrandingSectionsInput {
  @Field(() => Int)
  @IsInt()
  @Type(() => Number)
  brandingProjectId: number;

  @Field(() => [ReorderDefinedBrandingSectionItemInput])
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => ReorderDefinedBrandingSectionItemInput)
  items: ReorderDefinedBrandingSectionItemInput[];
}
