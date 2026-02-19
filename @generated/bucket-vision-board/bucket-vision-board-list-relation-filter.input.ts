import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionBoardWhereInput } from './bucket-vision-board-where.input';

@InputType()
export class BucketVisionBoardListRelationFilter {

    @Field(() => BucketVisionBoardWhereInput, {nullable:true})
    every?: BucketVisionBoardWhereInput;

    @Field(() => BucketVisionBoardWhereInput, {nullable:true})
    some?: BucketVisionBoardWhereInput;

    @Field(() => BucketVisionBoardWhereInput, {nullable:true})
    none?: BucketVisionBoardWhereInput;
}
