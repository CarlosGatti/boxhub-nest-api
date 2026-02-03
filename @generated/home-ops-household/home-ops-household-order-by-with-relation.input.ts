import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { AppOrderByWithRelationInput } from '../app/app-order-by-with-relation.input';
import { HomeOpsHouseholdMemberOrderByRelationAggregateInput } from '../home-ops-household-member/home-ops-household-member-order-by-relation-aggregate.input';
import { HomeOpsTaskTemplateOrderByRelationAggregateInput } from '../home-ops-task-template/home-ops-task-template-order-by-relation-aggregate.input';
import { HomeOpsTaskInstanceOrderByRelationAggregateInput } from '../home-ops-task-instance/home-ops-task-instance-order-by-relation-aggregate.input';
import { HomeOpsWorkloadLedgerOrderByRelationAggregateInput } from '../home-ops-workload-ledger/home-ops-workload-ledger-order-by-relation-aggregate.input';
import { HomeOpsWeeklyPlanOrderByRelationAggregateInput } from '../home-ops-weekly-plan/home-ops-weekly-plan-order-by-relation-aggregate.input';

@InputType()
export class HomeOpsHouseholdOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ownerId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    appId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    owner?: UserOrderByWithRelationInput;

    @Field(() => AppOrderByWithRelationInput, {nullable:true})
    app?: AppOrderByWithRelationInput;

    @Field(() => HomeOpsHouseholdMemberOrderByRelationAggregateInput, {nullable:true})
    members?: HomeOpsHouseholdMemberOrderByRelationAggregateInput;

    @Field(() => HomeOpsTaskTemplateOrderByRelationAggregateInput, {nullable:true})
    templates?: HomeOpsTaskTemplateOrderByRelationAggregateInput;

    @Field(() => HomeOpsTaskInstanceOrderByRelationAggregateInput, {nullable:true})
    taskInstances?: HomeOpsTaskInstanceOrderByRelationAggregateInput;

    @Field(() => HomeOpsWorkloadLedgerOrderByRelationAggregateInput, {nullable:true})
    workloadLedgers?: HomeOpsWorkloadLedgerOrderByRelationAggregateInput;

    @Field(() => HomeOpsWeeklyPlanOrderByRelationAggregateInput, {nullable:true})
    weeklyPlans?: HomeOpsWeeklyPlanOrderByRelationAggregateInput;
}
