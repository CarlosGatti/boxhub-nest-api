import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { FeedSourceCountOrderByAggregateInput } from './feed-source-count-order-by-aggregate.input';
import { FeedSourceAvgOrderByAggregateInput } from './feed-source-avg-order-by-aggregate.input';
import { FeedSourceMaxOrderByAggregateInput } from './feed-source-max-order-by-aggregate.input';
import { FeedSourceMinOrderByAggregateInput } from './feed-source-min-order-by-aggregate.input';
import { FeedSourceSumOrderByAggregateInput } from './feed-source-sum-order-by-aggregate.input';

@InputType()
export class FeedSourceOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    collectionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    url?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isActive?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    includeShorts?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    fetchEveryMin?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    lastFetchedAt?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    failureCount?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    metadata?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => FeedSourceCountOrderByAggregateInput, {nullable:true})
    _count?: FeedSourceCountOrderByAggregateInput;

    @Field(() => FeedSourceAvgOrderByAggregateInput, {nullable:true})
    _avg?: FeedSourceAvgOrderByAggregateInput;

    @Field(() => FeedSourceMaxOrderByAggregateInput, {nullable:true})
    _max?: FeedSourceMaxOrderByAggregateInput;

    @Field(() => FeedSourceMinOrderByAggregateInput, {nullable:true})
    _min?: FeedSourceMinOrderByAggregateInput;

    @Field(() => FeedSourceSumOrderByAggregateInput, {nullable:true})
    _sum?: FeedSourceSumOrderByAggregateInput;
}
