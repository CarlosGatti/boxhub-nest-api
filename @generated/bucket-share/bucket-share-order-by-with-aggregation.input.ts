import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BucketShareCountOrderByAggregateInput } from './bucket-share-count-order-by-aggregate.input';
import { BucketShareAvgOrderByAggregateInput } from './bucket-share-avg-order-by-aggregate.input';
import { BucketShareMaxOrderByAggregateInput } from './bucket-share-max-order-by-aggregate.input';
import { BucketShareMinOrderByAggregateInput } from './bucket-share-min-order-by-aggregate.input';
import { BucketShareSumOrderByAggregateInput } from './bucket-share-sum-order-by-aggregate.input';

@InputType()
export class BucketShareOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    token?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    payload?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => BucketShareCountOrderByAggregateInput, {nullable:true})
    _count?: BucketShareCountOrderByAggregateInput;

    @Field(() => BucketShareAvgOrderByAggregateInput, {nullable:true})
    _avg?: BucketShareAvgOrderByAggregateInput;

    @Field(() => BucketShareMaxOrderByAggregateInput, {nullable:true})
    _max?: BucketShareMaxOrderByAggregateInput;

    @Field(() => BucketShareMinOrderByAggregateInput, {nullable:true})
    _min?: BucketShareMinOrderByAggregateInput;

    @Field(() => BucketShareSumOrderByAggregateInput, {nullable:true})
    _sum?: BucketShareSumOrderByAggregateInput;
}
