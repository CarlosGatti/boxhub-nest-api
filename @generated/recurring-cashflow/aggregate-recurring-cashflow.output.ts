import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RecurringCashflowCountAggregate } from './recurring-cashflow-count-aggregate.output';
import { RecurringCashflowAvgAggregate } from './recurring-cashflow-avg-aggregate.output';
import { RecurringCashflowSumAggregate } from './recurring-cashflow-sum-aggregate.output';
import { RecurringCashflowMinAggregate } from './recurring-cashflow-min-aggregate.output';
import { RecurringCashflowMaxAggregate } from './recurring-cashflow-max-aggregate.output';

@ObjectType()
export class AggregateRecurringCashflow {

    @Field(() => RecurringCashflowCountAggregate, {nullable:true})
    _count?: RecurringCashflowCountAggregate;

    @Field(() => RecurringCashflowAvgAggregate, {nullable:true})
    _avg?: RecurringCashflowAvgAggregate;

    @Field(() => RecurringCashflowSumAggregate, {nullable:true})
    _sum?: RecurringCashflowSumAggregate;

    @Field(() => RecurringCashflowMinAggregate, {nullable:true})
    _min?: RecurringCashflowMinAggregate;

    @Field(() => RecurringCashflowMaxAggregate, {nullable:true})
    _max?: RecurringCashflowMaxAggregate;
}
