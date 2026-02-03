import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HomeOpsWeeklyPlanCountOrderByAggregateInput } from './home-ops-weekly-plan-count-order-by-aggregate.input';
import { HomeOpsWeeklyPlanAvgOrderByAggregateInput } from './home-ops-weekly-plan-avg-order-by-aggregate.input';
import { HomeOpsWeeklyPlanMaxOrderByAggregateInput } from './home-ops-weekly-plan-max-order-by-aggregate.input';
import { HomeOpsWeeklyPlanMinOrderByAggregateInput } from './home-ops-weekly-plan-min-order-by-aggregate.input';
import { HomeOpsWeeklyPlanSumOrderByAggregateInput } from './home-ops-weekly-plan-sum-order-by-aggregate.input';

@InputType()
export class HomeOpsWeeklyPlanOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    householdId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    weekStartDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => HomeOpsWeeklyPlanCountOrderByAggregateInput, {nullable:true})
    _count?: HomeOpsWeeklyPlanCountOrderByAggregateInput;

    @Field(() => HomeOpsWeeklyPlanAvgOrderByAggregateInput, {nullable:true})
    _avg?: HomeOpsWeeklyPlanAvgOrderByAggregateInput;

    @Field(() => HomeOpsWeeklyPlanMaxOrderByAggregateInput, {nullable:true})
    _max?: HomeOpsWeeklyPlanMaxOrderByAggregateInput;

    @Field(() => HomeOpsWeeklyPlanMinOrderByAggregateInput, {nullable:true})
    _min?: HomeOpsWeeklyPlanMinOrderByAggregateInput;

    @Field(() => HomeOpsWeeklyPlanSumOrderByAggregateInput, {nullable:true})
    _sum?: HomeOpsWeeklyPlanSumOrderByAggregateInput;
}
