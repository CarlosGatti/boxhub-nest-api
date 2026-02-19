import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { BucketVisionBoardCountOrderByAggregateInput } from './bucket-vision-board-count-order-by-aggregate.input';
import { BucketVisionBoardAvgOrderByAggregateInput } from './bucket-vision-board-avg-order-by-aggregate.input';
import { BucketVisionBoardMaxOrderByAggregateInput } from './bucket-vision-board-max-order-by-aggregate.input';
import { BucketVisionBoardMinOrderByAggregateInput } from './bucket-vision-board-min-order-by-aggregate.input';
import { BucketVisionBoardSumOrderByAggregateInput } from './bucket-vision-board-sum-order-by-aggregate.input';

@InputType()
export class BucketVisionBoardOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    periodType?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    year?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    periodKey?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    startDate?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    endDate?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    theme?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    layoutMode?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    coverUrl?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => BucketVisionBoardCountOrderByAggregateInput, {nullable:true})
    _count?: BucketVisionBoardCountOrderByAggregateInput;

    @Field(() => BucketVisionBoardAvgOrderByAggregateInput, {nullable:true})
    _avg?: BucketVisionBoardAvgOrderByAggregateInput;

    @Field(() => BucketVisionBoardMaxOrderByAggregateInput, {nullable:true})
    _max?: BucketVisionBoardMaxOrderByAggregateInput;

    @Field(() => BucketVisionBoardMinOrderByAggregateInput, {nullable:true})
    _min?: BucketVisionBoardMinOrderByAggregateInput;

    @Field(() => BucketVisionBoardSumOrderByAggregateInput, {nullable:true})
    _sum?: BucketVisionBoardSumOrderByAggregateInput;
}
