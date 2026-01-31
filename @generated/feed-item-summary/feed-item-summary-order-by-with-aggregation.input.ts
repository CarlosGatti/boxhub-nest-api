import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { FeedItemSummaryCountOrderByAggregateInput } from './feed-item-summary-count-order-by-aggregate.input';
import { FeedItemSummaryAvgOrderByAggregateInput } from './feed-item-summary-avg-order-by-aggregate.input';
import { FeedItemSummaryMaxOrderByAggregateInput } from './feed-item-summary-max-order-by-aggregate.input';
import { FeedItemSummaryMinOrderByAggregateInput } from './feed-item-summary-min-order-by-aggregate.input';
import { FeedItemSummarySumOrderByAggregateInput } from './feed-item-summary-sum-order-by-aggregate.input';

@InputType()
export class FeedItemSummaryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    itemId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    summary?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    metadata?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => FeedItemSummaryCountOrderByAggregateInput, {nullable:true})
    _count?: FeedItemSummaryCountOrderByAggregateInput;

    @Field(() => FeedItemSummaryAvgOrderByAggregateInput, {nullable:true})
    _avg?: FeedItemSummaryAvgOrderByAggregateInput;

    @Field(() => FeedItemSummaryMaxOrderByAggregateInput, {nullable:true})
    _max?: FeedItemSummaryMaxOrderByAggregateInput;

    @Field(() => FeedItemSummaryMinOrderByAggregateInput, {nullable:true})
    _min?: FeedItemSummaryMinOrderByAggregateInput;

    @Field(() => FeedItemSummarySumOrderByAggregateInput, {nullable:true})
    _sum?: FeedItemSummarySumOrderByAggregateInput;
}
