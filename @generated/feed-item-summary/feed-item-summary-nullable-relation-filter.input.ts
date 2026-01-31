import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemSummaryWhereInput } from './feed-item-summary-where.input';

@InputType()
export class FeedItemSummaryNullableRelationFilter {

    @Field(() => FeedItemSummaryWhereInput, {nullable:true})
    is?: FeedItemSummaryWhereInput;

    @Field(() => FeedItemSummaryWhereInput, {nullable:true})
    isNot?: FeedItemSummaryWhereInput;
}
