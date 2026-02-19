import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionItemWhereInput } from './bucket-vision-item-where.input';

@InputType()
export class BucketVisionItemListRelationFilter {

    @Field(() => BucketVisionItemWhereInput, {nullable:true})
    every?: BucketVisionItemWhereInput;

    @Field(() => BucketVisionItemWhereInput, {nullable:true})
    some?: BucketVisionItemWhereInput;

    @Field(() => BucketVisionItemWhereInput, {nullable:true})
    none?: BucketVisionItemWhereInput;
}
