import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { FeedCollectionCountOrderByAggregateInput } from './feed-collection-count-order-by-aggregate.input';
import { FeedCollectionAvgOrderByAggregateInput } from './feed-collection-avg-order-by-aggregate.input';
import { FeedCollectionMaxOrderByAggregateInput } from './feed-collection-max-order-by-aggregate.input';
import { FeedCollectionMinOrderByAggregateInput } from './feed-collection-min-order-by-aggregate.input';
import { FeedCollectionSumOrderByAggregateInput } from './feed-collection-sum-order-by-aggregate.input';

@InputType()
export class FeedCollectionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    profileId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    icon?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    color?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    keywords?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    blocked?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    preferredDomains?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isActive?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => FeedCollectionCountOrderByAggregateInput, {nullable:true})
    _count?: FeedCollectionCountOrderByAggregateInput;

    @Field(() => FeedCollectionAvgOrderByAggregateInput, {nullable:true})
    _avg?: FeedCollectionAvgOrderByAggregateInput;

    @Field(() => FeedCollectionMaxOrderByAggregateInput, {nullable:true})
    _max?: FeedCollectionMaxOrderByAggregateInput;

    @Field(() => FeedCollectionMinOrderByAggregateInput, {nullable:true})
    _min?: FeedCollectionMinOrderByAggregateInput;

    @Field(() => FeedCollectionSumOrderByAggregateInput, {nullable:true})
    _sum?: FeedCollectionSumOrderByAggregateInput;
}
