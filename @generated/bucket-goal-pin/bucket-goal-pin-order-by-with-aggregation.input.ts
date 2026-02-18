import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { BucketGoalPinCountOrderByAggregateInput } from './bucket-goal-pin-count-order-by-aggregate.input';
import { BucketGoalPinAvgOrderByAggregateInput } from './bucket-goal-pin-avg-order-by-aggregate.input';
import { BucketGoalPinMaxOrderByAggregateInput } from './bucket-goal-pin-max-order-by-aggregate.input';
import { BucketGoalPinMinOrderByAggregateInput } from './bucket-goal-pin-min-order-by-aggregate.input';
import { BucketGoalPinSumOrderByAggregateInput } from './bucket-goal-pin-sum-order-by-aggregate.input';

@InputType()
export class BucketGoalPinOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    goalId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lat?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lng?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    label?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    source?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    placeId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    address?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    raw?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => BucketGoalPinCountOrderByAggregateInput, {nullable:true})
    _count?: BucketGoalPinCountOrderByAggregateInput;

    @Field(() => BucketGoalPinAvgOrderByAggregateInput, {nullable:true})
    _avg?: BucketGoalPinAvgOrderByAggregateInput;

    @Field(() => BucketGoalPinMaxOrderByAggregateInput, {nullable:true})
    _max?: BucketGoalPinMaxOrderByAggregateInput;

    @Field(() => BucketGoalPinMinOrderByAggregateInput, {nullable:true})
    _min?: BucketGoalPinMinOrderByAggregateInput;

    @Field(() => BucketGoalPinSumOrderByAggregateInput, {nullable:true})
    _sum?: BucketGoalPinSumOrderByAggregateInput;
}
