import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemStateWhereInput } from './feed-item-state-where.input';

@InputType()
export class FeedItemStateListRelationFilter {

    @Field(() => FeedItemStateWhereInput, {nullable:true})
    every?: FeedItemStateWhereInput;

    @Field(() => FeedItemStateWhereInput, {nullable:true})
    some?: FeedItemStateWhereInput;

    @Field(() => FeedItemStateWhereInput, {nullable:true})
    none?: FeedItemStateWhereInput;
}
