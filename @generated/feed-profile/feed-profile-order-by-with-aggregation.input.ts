import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { FeedProfileCountOrderByAggregateInput } from './feed-profile-count-order-by-aggregate.input';
import { FeedProfileAvgOrderByAggregateInput } from './feed-profile-avg-order-by-aggregate.input';
import { FeedProfileMaxOrderByAggregateInput } from './feed-profile-max-order-by-aggregate.input';
import { FeedProfileMinOrderByAggregateInput } from './feed-profile-min-order-by-aggregate.input';
import { FeedProfileSumOrderByAggregateInput } from './feed-profile-sum-order-by-aggregate.input';

@InputType()
export class FeedProfileOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    timezone?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    language?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => FeedProfileCountOrderByAggregateInput, {nullable:true})
    _count?: FeedProfileCountOrderByAggregateInput;

    @Field(() => FeedProfileAvgOrderByAggregateInput, {nullable:true})
    _avg?: FeedProfileAvgOrderByAggregateInput;

    @Field(() => FeedProfileMaxOrderByAggregateInput, {nullable:true})
    _max?: FeedProfileMaxOrderByAggregateInput;

    @Field(() => FeedProfileMinOrderByAggregateInput, {nullable:true})
    _min?: FeedProfileMinOrderByAggregateInput;

    @Field(() => FeedProfileSumOrderByAggregateInput, {nullable:true})
    _sum?: FeedProfileSumOrderByAggregateInput;
}
