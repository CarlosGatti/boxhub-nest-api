import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketShareWhereInput } from './bucket-share-where.input';

@InputType()
export class BucketShareListRelationFilter {

    @Field(() => BucketShareWhereInput, {nullable:true})
    every?: BucketShareWhereInput;

    @Field(() => BucketShareWhereInput, {nullable:true})
    some?: BucketShareWhereInput;

    @Field(() => BucketShareWhereInput, {nullable:true})
    none?: BucketShareWhereInput;
}
