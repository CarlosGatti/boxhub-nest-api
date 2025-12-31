import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CashflowEntryCountAggregate } from './cashflow-entry-count-aggregate.output';
import { CashflowEntryAvgAggregate } from './cashflow-entry-avg-aggregate.output';
import { CashflowEntrySumAggregate } from './cashflow-entry-sum-aggregate.output';
import { CashflowEntryMinAggregate } from './cashflow-entry-min-aggregate.output';
import { CashflowEntryMaxAggregate } from './cashflow-entry-max-aggregate.output';

@ObjectType()
export class AggregateCashflowEntry {

    @Field(() => CashflowEntryCountAggregate, {nullable:true})
    _count?: CashflowEntryCountAggregate;

    @Field(() => CashflowEntryAvgAggregate, {nullable:true})
    _avg?: CashflowEntryAvgAggregate;

    @Field(() => CashflowEntrySumAggregate, {nullable:true})
    _sum?: CashflowEntrySumAggregate;

    @Field(() => CashflowEntryMinAggregate, {nullable:true})
    _min?: CashflowEntryMinAggregate;

    @Field(() => CashflowEntryMaxAggregate, {nullable:true})
    _max?: CashflowEntryMaxAggregate;
}
