import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { BucketGoalCountOrderByAggregateInput } from './bucket-goal-count-order-by-aggregate.input';
import { BucketGoalAvgOrderByAggregateInput } from './bucket-goal-avg-order-by-aggregate.input';
import { BucketGoalMaxOrderByAggregateInput } from './bucket-goal-max-order-by-aggregate.input';
import { BucketGoalMinOrderByAggregateInput } from './bucket-goal-min-order-by-aggregate.input';
import { BucketGoalSumOrderByAggregateInput } from './bucket-goal-sum-order-by-aggregate.input';

@InputType()
export class BucketGoalOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    priority?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    details?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    detailsSchemaVersion?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    coverUrl?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    tags?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    targetDate?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    completedAt?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => BucketGoalCountOrderByAggregateInput, {nullable:true})
    _count?: BucketGoalCountOrderByAggregateInput;

    @Field(() => BucketGoalAvgOrderByAggregateInput, {nullable:true})
    _avg?: BucketGoalAvgOrderByAggregateInput;

    @Field(() => BucketGoalMaxOrderByAggregateInput, {nullable:true})
    _max?: BucketGoalMaxOrderByAggregateInput;

    @Field(() => BucketGoalMinOrderByAggregateInput, {nullable:true})
    _min?: BucketGoalMinOrderByAggregateInput;

    @Field(() => BucketGoalSumOrderByAggregateInput, {nullable:true})
    _sum?: BucketGoalSumOrderByAggregateInput;
}
