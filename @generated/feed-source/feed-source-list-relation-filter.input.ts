import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedSourceWhereInput } from './feed-source-where.input';

@InputType()
export class FeedSourceListRelationFilter {

    @Field(() => FeedSourceWhereInput, {nullable:true})
    every?: FeedSourceWhereInput;

    @Field(() => FeedSourceWhereInput, {nullable:true})
    some?: FeedSourceWhereInput;

    @Field(() => FeedSourceWhereInput, {nullable:true})
    none?: FeedSourceWhereInput;
}
