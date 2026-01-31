import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { FeedItemCreateNestedOneWithoutSummaryInput } from '../feed-item/feed-item-create-nested-one-without-summary.input';

@InputType()
export class FeedItemSummaryCreateInput {

    @Field(() => String, {nullable:true})
    summary?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => FeedItemCreateNestedOneWithoutSummaryInput, {nullable:false})
    item!: FeedItemCreateNestedOneWithoutSummaryInput;
}
