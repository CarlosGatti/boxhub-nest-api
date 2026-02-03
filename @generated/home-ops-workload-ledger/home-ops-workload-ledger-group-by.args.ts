import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsWorkloadLedgerWhereInput } from './home-ops-workload-ledger-where.input';
import { Type } from 'class-transformer';
import { HomeOpsWorkloadLedgerOrderByWithAggregationInput } from './home-ops-workload-ledger-order-by-with-aggregation.input';
import { HomeOpsWorkloadLedgerScalarFieldEnum } from './home-ops-workload-ledger-scalar-field.enum';
import { HomeOpsWorkloadLedgerScalarWhereWithAggregatesInput } from './home-ops-workload-ledger-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { HomeOpsWorkloadLedgerCountAggregateInput } from './home-ops-workload-ledger-count-aggregate.input';
import { HomeOpsWorkloadLedgerAvgAggregateInput } from './home-ops-workload-ledger-avg-aggregate.input';
import { HomeOpsWorkloadLedgerSumAggregateInput } from './home-ops-workload-ledger-sum-aggregate.input';
import { HomeOpsWorkloadLedgerMinAggregateInput } from './home-ops-workload-ledger-min-aggregate.input';
import { HomeOpsWorkloadLedgerMaxAggregateInput } from './home-ops-workload-ledger-max-aggregate.input';

@ArgsType()
export class HomeOpsWorkloadLedgerGroupByArgs {

    @Field(() => HomeOpsWorkloadLedgerWhereInput, {nullable:true})
    @Type(() => HomeOpsWorkloadLedgerWhereInput)
    where?: HomeOpsWorkloadLedgerWhereInput;

    @Field(() => [HomeOpsWorkloadLedgerOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<HomeOpsWorkloadLedgerOrderByWithAggregationInput>;

    @Field(() => [HomeOpsWorkloadLedgerScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof HomeOpsWorkloadLedgerScalarFieldEnum>;

    @Field(() => HomeOpsWorkloadLedgerScalarWhereWithAggregatesInput, {nullable:true})
    having?: HomeOpsWorkloadLedgerScalarWhereWithAggregatesInput;

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
