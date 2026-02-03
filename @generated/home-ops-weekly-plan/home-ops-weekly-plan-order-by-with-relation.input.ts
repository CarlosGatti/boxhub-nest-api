import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HomeOpsHouseholdOrderByWithRelationInput } from '../home-ops-household/home-ops-household-order-by-with-relation.input';
import { HomeOpsTaskInstanceOrderByRelationAggregateInput } from '../home-ops-task-instance/home-ops-task-instance-order-by-relation-aggregate.input';

@InputType()
export class HomeOpsWeeklyPlanOrderByWithRelationInput {

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

    @Field(() => HomeOpsHouseholdOrderByWithRelationInput, {nullable:true})
    household?: HomeOpsHouseholdOrderByWithRelationInput;

    @Field(() => HomeOpsTaskInstanceOrderByRelationAggregateInput, {nullable:true})
    tasks?: HomeOpsTaskInstanceOrderByRelationAggregateInput;
}
