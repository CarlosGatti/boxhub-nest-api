import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { BucketVisionItemCountOrderByAggregateInput } from './bucket-vision-item-count-order-by-aggregate.input';
import { BucketVisionItemAvgOrderByAggregateInput } from './bucket-vision-item-avg-order-by-aggregate.input';
import { BucketVisionItemMaxOrderByAggregateInput } from './bucket-vision-item-max-order-by-aggregate.input';
import { BucketVisionItemMinOrderByAggregateInput } from './bucket-vision-item-min-order-by-aggregate.input';
import { BucketVisionItemSumOrderByAggregateInput } from './bucket-vision-item-sum-order-by-aggregate.input';

@InputType()
export class BucketVisionItemOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    boardId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    text?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    url?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    color?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    metadata?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    order?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    layout?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => BucketVisionItemCountOrderByAggregateInput, {nullable:true})
    _count?: BucketVisionItemCountOrderByAggregateInput;

    @Field(() => BucketVisionItemAvgOrderByAggregateInput, {nullable:true})
    _avg?: BucketVisionItemAvgOrderByAggregateInput;

    @Field(() => BucketVisionItemMaxOrderByAggregateInput, {nullable:true})
    _max?: BucketVisionItemMaxOrderByAggregateInput;

    @Field(() => BucketVisionItemMinOrderByAggregateInput, {nullable:true})
    _min?: BucketVisionItemMinOrderByAggregateInput;

    @Field(() => BucketVisionItemSumOrderByAggregateInput, {nullable:true})
    _sum?: BucketVisionItemSumOrderByAggregateInput;
}
