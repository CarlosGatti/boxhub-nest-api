import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { BucketVisionGoalLinkCountOrderByAggregateInput } from './bucket-vision-goal-link-count-order-by-aggregate.input';
import { BucketVisionGoalLinkAvgOrderByAggregateInput } from './bucket-vision-goal-link-avg-order-by-aggregate.input';
import { BucketVisionGoalLinkMaxOrderByAggregateInput } from './bucket-vision-goal-link-max-order-by-aggregate.input';
import { BucketVisionGoalLinkMinOrderByAggregateInput } from './bucket-vision-goal-link-min-order-by-aggregate.input';
import { BucketVisionGoalLinkSumOrderByAggregateInput } from './bucket-vision-goal-link-sum-order-by-aggregate.input';

@InputType()
export class BucketVisionGoalLinkOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    boardId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    goalId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    label?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => BucketVisionGoalLinkCountOrderByAggregateInput, {nullable:true})
    _count?: BucketVisionGoalLinkCountOrderByAggregateInput;

    @Field(() => BucketVisionGoalLinkAvgOrderByAggregateInput, {nullable:true})
    _avg?: BucketVisionGoalLinkAvgOrderByAggregateInput;

    @Field(() => BucketVisionGoalLinkMaxOrderByAggregateInput, {nullable:true})
    _max?: BucketVisionGoalLinkMaxOrderByAggregateInput;

    @Field(() => BucketVisionGoalLinkMinOrderByAggregateInput, {nullable:true})
    _min?: BucketVisionGoalLinkMinOrderByAggregateInput;

    @Field(() => BucketVisionGoalLinkSumOrderByAggregateInput, {nullable:true})
    _sum?: BucketVisionGoalLinkSumOrderByAggregateInput;
}
