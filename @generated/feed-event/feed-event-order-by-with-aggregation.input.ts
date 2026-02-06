import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FeedEventCountOrderByAggregateInput } from './feed-event-count-order-by-aggregate.input';
import { FeedEventAvgOrderByAggregateInput } from './feed-event-avg-order-by-aggregate.input';
import { FeedEventMaxOrderByAggregateInput } from './feed-event-max-order-by-aggregate.input';
import { FeedEventMinOrderByAggregateInput } from './feed-event-min-order-by-aggregate.input';
import { FeedEventSumOrderByAggregateInput } from './feed-event-sum-order-by-aggregate.input';

@InputType()
export class FeedEventOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    itemId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sourceId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    action?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => FeedEventCountOrderByAggregateInput, {nullable:true})
    _count?: FeedEventCountOrderByAggregateInput;

    @Field(() => FeedEventAvgOrderByAggregateInput, {nullable:true})
    _avg?: FeedEventAvgOrderByAggregateInput;

    @Field(() => FeedEventMaxOrderByAggregateInput, {nullable:true})
    _max?: FeedEventMaxOrderByAggregateInput;

    @Field(() => FeedEventMinOrderByAggregateInput, {nullable:true})
    _min?: FeedEventMinOrderByAggregateInput;

    @Field(() => FeedEventSumOrderByAggregateInput, {nullable:true})
    _sum?: FeedEventSumOrderByAggregateInput;
}
