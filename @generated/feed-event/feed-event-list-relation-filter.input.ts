import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedEventWhereInput } from './feed-event-where.input';

@InputType()
export class FeedEventListRelationFilter {

    @Field(() => FeedEventWhereInput, {nullable:true})
    every?: FeedEventWhereInput;

    @Field(() => FeedEventWhereInput, {nullable:true})
    some?: FeedEventWhereInput;

    @Field(() => FeedEventWhereInput, {nullable:true})
    none?: FeedEventWhereInput;
}
