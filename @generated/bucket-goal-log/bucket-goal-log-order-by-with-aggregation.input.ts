import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BucketGoalLogCountOrderByAggregateInput } from './bucket-goal-log-count-order-by-aggregate.input';
import { BucketGoalLogAvgOrderByAggregateInput } from './bucket-goal-log-avg-order-by-aggregate.input';
import { BucketGoalLogMaxOrderByAggregateInput } from './bucket-goal-log-max-order-by-aggregate.input';
import { BucketGoalLogMinOrderByAggregateInput } from './bucket-goal-log-min-order-by-aggregate.input';
import { BucketGoalLogSumOrderByAggregateInput } from './bucket-goal-log-sum-order-by-aggregate.input';

@InputType()
export class BucketGoalLogOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    goalId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    note?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    happenedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => BucketGoalLogCountOrderByAggregateInput, {nullable:true})
    _count?: BucketGoalLogCountOrderByAggregateInput;

    @Field(() => BucketGoalLogAvgOrderByAggregateInput, {nullable:true})
    _avg?: BucketGoalLogAvgOrderByAggregateInput;

    @Field(() => BucketGoalLogMaxOrderByAggregateInput, {nullable:true})
    _max?: BucketGoalLogMaxOrderByAggregateInput;

    @Field(() => BucketGoalLogMinOrderByAggregateInput, {nullable:true})
    _min?: BucketGoalLogMinOrderByAggregateInput;

    @Field(() => BucketGoalLogSumOrderByAggregateInput, {nullable:true})
    _sum?: BucketGoalLogSumOrderByAggregateInput;
}
