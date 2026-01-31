import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemWhereInput } from './feed-item-where.input';

@InputType()
export class FeedItemListRelationFilter {

    @Field(() => FeedItemWhereInput, {nullable:true})
    every?: FeedItemWhereInput;

    @Field(() => FeedItemWhereInput, {nullable:true})
    some?: FeedItemWhereInput;

    @Field(() => FeedItemWhereInput, {nullable:true})
    none?: FeedItemWhereInput;
}
