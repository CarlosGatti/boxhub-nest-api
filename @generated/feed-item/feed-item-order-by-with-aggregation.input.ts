import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { FeedItemCountOrderByAggregateInput } from './feed-item-count-order-by-aggregate.input';
import { FeedItemAvgOrderByAggregateInput } from './feed-item-avg-order-by-aggregate.input';
import { FeedItemMaxOrderByAggregateInput } from './feed-item-max-order-by-aggregate.input';
import { FeedItemMinOrderByAggregateInput } from './feed-item-min-order-by-aggregate.input';
import { FeedItemSumOrderByAggregateInput } from './feed-item-sum-order-by-aggregate.input';

@InputType()
export class FeedItemOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sourceId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    canonicalUrl?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    publishedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    contentText?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    imageUrl?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    metrics?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    contentHash?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => FeedItemCountOrderByAggregateInput, {nullable:true})
    _count?: FeedItemCountOrderByAggregateInput;

    @Field(() => FeedItemAvgOrderByAggregateInput, {nullable:true})
    _avg?: FeedItemAvgOrderByAggregateInput;

    @Field(() => FeedItemMaxOrderByAggregateInput, {nullable:true})
    _max?: FeedItemMaxOrderByAggregateInput;

    @Field(() => FeedItemMinOrderByAggregateInput, {nullable:true})
    _min?: FeedItemMinOrderByAggregateInput;

    @Field(() => FeedItemSumOrderByAggregateInput, {nullable:true})
    _sum?: FeedItemSumOrderByAggregateInput;
}
