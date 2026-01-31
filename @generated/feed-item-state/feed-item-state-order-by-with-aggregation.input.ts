import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { FeedItemStateCountOrderByAggregateInput } from './feed-item-state-count-order-by-aggregate.input';
import { FeedItemStateAvgOrderByAggregateInput } from './feed-item-state-avg-order-by-aggregate.input';
import { FeedItemStateMaxOrderByAggregateInput } from './feed-item-state-max-order-by-aggregate.input';
import { FeedItemStateMinOrderByAggregateInput } from './feed-item-state-min-order-by-aggregate.input';
import { FeedItemStateSumOrderByAggregateInput } from './feed-item-state-sum-order-by-aggregate.input';

@InputType()
export class FeedItemStateOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    itemId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    readStatus?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    saveStatus?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    visibility?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    readAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    savedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    hiddenAt?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => FeedItemStateCountOrderByAggregateInput, {nullable:true})
    _count?: FeedItemStateCountOrderByAggregateInput;

    @Field(() => FeedItemStateAvgOrderByAggregateInput, {nullable:true})
    _avg?: FeedItemStateAvgOrderByAggregateInput;

    @Field(() => FeedItemStateMaxOrderByAggregateInput, {nullable:true})
    _max?: FeedItemStateMaxOrderByAggregateInput;

    @Field(() => FeedItemStateMinOrderByAggregateInput, {nullable:true})
    _min?: FeedItemStateMinOrderByAggregateInput;

    @Field(() => FeedItemStateSumOrderByAggregateInput, {nullable:true})
    _sum?: FeedItemStateSumOrderByAggregateInput;
}
