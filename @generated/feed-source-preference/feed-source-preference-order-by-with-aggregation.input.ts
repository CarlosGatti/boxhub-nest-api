import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { FeedSourcePreferenceCountOrderByAggregateInput } from './feed-source-preference-count-order-by-aggregate.input';
import { FeedSourcePreferenceAvgOrderByAggregateInput } from './feed-source-preference-avg-order-by-aggregate.input';
import { FeedSourcePreferenceMaxOrderByAggregateInput } from './feed-source-preference-max-order-by-aggregate.input';
import { FeedSourcePreferenceMinOrderByAggregateInput } from './feed-source-preference-min-order-by-aggregate.input';
import { FeedSourcePreferenceSumOrderByAggregateInput } from './feed-source-preference-sum-order-by-aggregate.input';

@InputType()
export class FeedSourcePreferenceOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sourceId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    notifyOnNew?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isMuted?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    mutedUntil?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    consecutiveSkips?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    lastInteractedAt?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => FeedSourcePreferenceCountOrderByAggregateInput, {nullable:true})
    _count?: FeedSourcePreferenceCountOrderByAggregateInput;

    @Field(() => FeedSourcePreferenceAvgOrderByAggregateInput, {nullable:true})
    _avg?: FeedSourcePreferenceAvgOrderByAggregateInput;

    @Field(() => FeedSourcePreferenceMaxOrderByAggregateInput, {nullable:true})
    _max?: FeedSourcePreferenceMaxOrderByAggregateInput;

    @Field(() => FeedSourcePreferenceMinOrderByAggregateInput, {nullable:true})
    _min?: FeedSourcePreferenceMinOrderByAggregateInput;

    @Field(() => FeedSourcePreferenceSumOrderByAggregateInput, {nullable:true})
    _sum?: FeedSourcePreferenceSumOrderByAggregateInput;
}
