import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { BucketGoalMediaCountOrderByAggregateInput } from './bucket-goal-media-count-order-by-aggregate.input';
import { BucketGoalMediaAvgOrderByAggregateInput } from './bucket-goal-media-avg-order-by-aggregate.input';
import { BucketGoalMediaMaxOrderByAggregateInput } from './bucket-goal-media-max-order-by-aggregate.input';
import { BucketGoalMediaMinOrderByAggregateInput } from './bucket-goal-media-min-order-by-aggregate.input';
import { BucketGoalMediaSumOrderByAggregateInput } from './bucket-goal-media-sum-order-by-aggregate.input';

@InputType()
export class BucketGoalMediaOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    goalId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    logId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    url?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    metadata?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => BucketGoalMediaCountOrderByAggregateInput, {nullable:true})
    _count?: BucketGoalMediaCountOrderByAggregateInput;

    @Field(() => BucketGoalMediaAvgOrderByAggregateInput, {nullable:true})
    _avg?: BucketGoalMediaAvgOrderByAggregateInput;

    @Field(() => BucketGoalMediaMaxOrderByAggregateInput, {nullable:true})
    _max?: BucketGoalMediaMaxOrderByAggregateInput;

    @Field(() => BucketGoalMediaMinOrderByAggregateInput, {nullable:true})
    _min?: BucketGoalMediaMinOrderByAggregateInput;

    @Field(() => BucketGoalMediaSumOrderByAggregateInput, {nullable:true})
    _sum?: BucketGoalMediaSumOrderByAggregateInput;
}
