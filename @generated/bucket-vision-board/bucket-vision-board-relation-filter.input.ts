import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionBoardWhereInput } from './bucket-vision-board-where.input';

@InputType()
export class BucketVisionBoardRelationFilter {

    @Field(() => BucketVisionBoardWhereInput, {nullable:true})
    is?: BucketVisionBoardWhereInput;

    @Field(() => BucketVisionBoardWhereInput, {nullable:true})
    isNot?: BucketVisionBoardWhereInput;
}
