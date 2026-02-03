import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HomeOpsWorkloadLedgerCountOrderByAggregateInput } from './home-ops-workload-ledger-count-order-by-aggregate.input';
import { HomeOpsWorkloadLedgerAvgOrderByAggregateInput } from './home-ops-workload-ledger-avg-order-by-aggregate.input';
import { HomeOpsWorkloadLedgerMaxOrderByAggregateInput } from './home-ops-workload-ledger-max-order-by-aggregate.input';
import { HomeOpsWorkloadLedgerMinOrderByAggregateInput } from './home-ops-workload-ledger-min-order-by-aggregate.input';
import { HomeOpsWorkloadLedgerSumOrderByAggregateInput } from './home-ops-workload-ledger-sum-order-by-aggregate.input';

@InputType()
export class HomeOpsWorkloadLedgerOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    householdId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    weekStart?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pointsCompleted?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    minutesCompleted?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tasksCompleted?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => HomeOpsWorkloadLedgerCountOrderByAggregateInput, {nullable:true})
    _count?: HomeOpsWorkloadLedgerCountOrderByAggregateInput;

    @Field(() => HomeOpsWorkloadLedgerAvgOrderByAggregateInput, {nullable:true})
    _avg?: HomeOpsWorkloadLedgerAvgOrderByAggregateInput;

    @Field(() => HomeOpsWorkloadLedgerMaxOrderByAggregateInput, {nullable:true})
    _max?: HomeOpsWorkloadLedgerMaxOrderByAggregateInput;

    @Field(() => HomeOpsWorkloadLedgerMinOrderByAggregateInput, {nullable:true})
    _min?: HomeOpsWorkloadLedgerMinOrderByAggregateInput;

    @Field(() => HomeOpsWorkloadLedgerSumOrderByAggregateInput, {nullable:true})
    _sum?: HomeOpsWorkloadLedgerSumOrderByAggregateInput;
}
