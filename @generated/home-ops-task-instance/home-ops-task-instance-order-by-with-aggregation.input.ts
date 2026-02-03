import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { HomeOpsTaskInstanceCountOrderByAggregateInput } from './home-ops-task-instance-count-order-by-aggregate.input';
import { HomeOpsTaskInstanceAvgOrderByAggregateInput } from './home-ops-task-instance-avg-order-by-aggregate.input';
import { HomeOpsTaskInstanceMaxOrderByAggregateInput } from './home-ops-task-instance-max-order-by-aggregate.input';
import { HomeOpsTaskInstanceMinOrderByAggregateInput } from './home-ops-task-instance-min-order-by-aggregate.input';
import { HomeOpsTaskInstanceSumOrderByAggregateInput } from './home-ops-task-instance-sum-order-by-aggregate.input';

@InputType()
export class HomeOpsTaskInstanceOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    householdId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    templateId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    weeklyPlanId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    sourceKey?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    category?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    points?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    effortWeight?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    estimatedMinutes?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    dueDate?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    slotLabel?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    windowStart?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    windowEnd?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    assigneeId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    completedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    completedById?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    skippedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    skipReason?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => HomeOpsTaskInstanceCountOrderByAggregateInput, {nullable:true})
    _count?: HomeOpsTaskInstanceCountOrderByAggregateInput;

    @Field(() => HomeOpsTaskInstanceAvgOrderByAggregateInput, {nullable:true})
    _avg?: HomeOpsTaskInstanceAvgOrderByAggregateInput;

    @Field(() => HomeOpsTaskInstanceMaxOrderByAggregateInput, {nullable:true})
    _max?: HomeOpsTaskInstanceMaxOrderByAggregateInput;

    @Field(() => HomeOpsTaskInstanceMinOrderByAggregateInput, {nullable:true})
    _min?: HomeOpsTaskInstanceMinOrderByAggregateInput;

    @Field(() => HomeOpsTaskInstanceSumOrderByAggregateInput, {nullable:true})
    _sum?: HomeOpsTaskInstanceSumOrderByAggregateInput;
}
