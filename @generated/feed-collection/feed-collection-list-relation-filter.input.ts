import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedCollectionWhereInput } from './feed-collection-where.input';

@InputType()
export class FeedCollectionListRelationFilter {

    @Field(() => FeedCollectionWhereInput, {nullable:true})
    every?: FeedCollectionWhereInput;

    @Field(() => FeedCollectionWhereInput, {nullable:true})
    some?: FeedCollectionWhereInput;

    @Field(() => FeedCollectionWhereInput, {nullable:true})
    none?: FeedCollectionWhereInput;
}
