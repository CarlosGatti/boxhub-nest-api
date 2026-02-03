import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HomeOpsWorkloadLedgerCountAggregate } from './home-ops-workload-ledger-count-aggregate.output';
import { HomeOpsWorkloadLedgerAvgAggregate } from './home-ops-workload-ledger-avg-aggregate.output';
import { HomeOpsWorkloadLedgerSumAggregate } from './home-ops-workload-ledger-sum-aggregate.output';
import { HomeOpsWorkloadLedgerMinAggregate } from './home-ops-workload-ledger-min-aggregate.output';
import { HomeOpsWorkloadLedgerMaxAggregate } from './home-ops-workload-ledger-max-aggregate.output';

@ObjectType()
export class HomeOpsWorkloadLedgerGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    householdId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Date, {nullable:false})
    weekStart!: Date | string;

    @Field(() => Int, {nullable:false})
    pointsCompleted!: number;

    @Field(() => Int, {nullable:false})
    minutesCompleted!: number;

    @Field(() => Int, {nullable:false})
    tasksCompleted!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => HomeOpsWorkloadLedgerCountAggregate, {nullable:true})
    _count?: HomeOpsWorkloadLedgerCountAggregate;

    @Field(() => HomeOpsWorkloadLedgerAvgAggregate, {nullable:true})
    _avg?: HomeOpsWorkloadLedgerAvgAggregate;

    @Field(() => HomeOpsWorkloadLedgerSumAggregate, {nullable:true})
    _sum?: HomeOpsWorkloadLedgerSumAggregate;

    @Field(() => HomeOpsWorkloadLedgerMinAggregate, {nullable:true})
    _min?: HomeOpsWorkloadLedgerMinAggregate;

    @Field(() => HomeOpsWorkloadLedgerMaxAggregate, {nullable:true})
    _max?: HomeOpsWorkloadLedgerMaxAggregate;
}
