import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecurringCashflowWhereInput } from './recurring-cashflow-where.input';
import { Type } from 'class-transformer';
import { RecurringCashflowOrderByWithAggregationInput } from './recurring-cashflow-order-by-with-aggregation.input';
import { RecurringCashflowScalarFieldEnum } from './recurring-cashflow-scalar-field.enum';
import { RecurringCashflowScalarWhereWithAggregatesInput } from './recurring-cashflow-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { RecurringCashflowCountAggregateInput } from './recurring-cashflow-count-aggregate.input';
import { RecurringCashflowAvgAggregateInput } from './recurring-cashflow-avg-aggregate.input';
import { RecurringCashflowSumAggregateInput } from './recurring-cashflow-sum-aggregate.input';
import { RecurringCashflowMinAggregateInput } from './recurring-cashflow-min-aggregate.input';
import { RecurringCashflowMaxAggregateInput } from './recurring-cashflow-max-aggregate.input';

@ArgsType()
export class RecurringCashflowGroupByArgs {

    @Field(() => RecurringCashflowWhereInput, {nullable:true})
    @Type(() => RecurringCashflowWhereInput)
    where?: RecurringCashflowWhereInput;

    @Field(() => [RecurringCashflowOrderByWithAggregationInput], {nullable:true})
    @Type(() => RecurringCashflowOrderByWithAggregationInput)
    orderBy?: Array<RecurringCashflowOrderByWithAggregationInput>;

    @Field(() => [RecurringCashflowScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof RecurringCashflowScalarFieldEnum>;

    @Field(() => RecurringCashflowScalarWhereWithAggregatesInput, {nullable:true})
    @Type(() => RecurringCashflowScalarWhereWithAggregatesInput)
    having?: RecurringCashflowScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RecurringCashflowCountAggregateInput, {nullable:true})
    @Type(() => RecurringCashflowCountAggregateInput)
    _count?: RecurringCashflowCountAggregateInput;

    @Field(() => RecurringCashflowAvgAggregateInput, {nullable:true})
    @Type(() => RecurringCashflowAvgAggregateInput)
    _avg?: RecurringCashflowAvgAggregateInput;

    @Field(() => RecurringCashflowSumAggregateInput, {nullable:true})
    @Type(() => RecurringCashflowSumAggregateInput)
    _sum?: RecurringCashflowSumAggregateInput;

    @Field(() => RecurringCashflowMinAggregateInput, {nullable:true})
    @Type(() => RecurringCashflowMinAggregateInput)
    _min?: RecurringCashflowMinAggregateInput;

    @Field(() => RecurringCashflowMaxAggregateInput, {nullable:true})
    @Type(() => RecurringCashflowMaxAggregateInput)
    _max?: RecurringCashflowMaxAggregateInput;
}
