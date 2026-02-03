import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsWorkloadLedgerWhereInput } from './home-ops-workload-ledger-where.input';
import { Type } from 'class-transformer';
import { HomeOpsWorkloadLedgerOrderByWithRelationInput } from './home-ops-workload-ledger-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { HomeOpsWorkloadLedgerWhereUniqueInput } from './home-ops-workload-ledger-where-unique.input';
import { Int } from '@nestjs/graphql';
import { HomeOpsWorkloadLedgerCountAggregateInput } from './home-ops-workload-ledger-count-aggregate.input';
import { HomeOpsWorkloadLedgerAvgAggregateInput } from './home-ops-workload-ledger-avg-aggregate.input';
import { HomeOpsWorkloadLedgerSumAggregateInput } from './home-ops-workload-ledger-sum-aggregate.input';
import { HomeOpsWorkloadLedgerMinAggregateInput } from './home-ops-workload-ledger-min-aggregate.input';
import { HomeOpsWorkloadLedgerMaxAggregateInput } from './home-ops-workload-ledger-max-aggregate.input';

@ArgsType()
export class HomeOpsWorkloadLedgerAggregateArgs {

    @Field(() => HomeOpsWorkloadLedgerWhereInput, {nullable:true})
    @Type(() => HomeOpsWorkloadLedgerWhereInput)
    where?: HomeOpsWorkloadLedgerWhereInput;

    @Field(() => [HomeOpsWorkloadLedgerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<HomeOpsWorkloadLedgerOrderByWithRelationInput>;

    @Field(() => HomeOpsWorkloadLedgerWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<HomeOpsWorkloadLedgerWhereUniqueInput, 'id' | 'householdId_userId_weekStart'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => HomeOpsWorkloadLedgerCountAggregateInput, {nullable:true})
    _count?: HomeOpsWorkloadLedgerCountAggregateInput;

    @Field(() => HomeOpsWorkloadLedgerAvgAggregateInput, {nullable:true})
    _avg?: HomeOpsWorkloadLedgerAvgAggregateInput;

    @Field(() => HomeOpsWorkloadLedgerSumAggregateInput, {nullable:true})
    _sum?: HomeOpsWorkloadLedgerSumAggregateInput;

    @Field(() => HomeOpsWorkloadLedgerMinAggregateInput, {nullable:true})
    _min?: HomeOpsWorkloadLedgerMinAggregateInput;

    @Field(() => HomeOpsWorkloadLedgerMaxAggregateInput, {nullable:true})
    _max?: HomeOpsWorkloadLedgerMaxAggregateInput;
}
