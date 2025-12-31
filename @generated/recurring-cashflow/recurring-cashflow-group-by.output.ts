import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CashflowType } from '../prisma/cashflow-type.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { RecurrenceFrequency } from '../prisma/recurrence-frequency.enum';
import { RecurringCashflowCountAggregate } from './recurring-cashflow-count-aggregate.output';
import { RecurringCashflowAvgAggregate } from './recurring-cashflow-avg-aggregate.output';
import { RecurringCashflowSumAggregate } from './recurring-cashflow-sum-aggregate.output';
import { RecurringCashflowMinAggregate } from './recurring-cashflow-min-aggregate.output';
import { RecurringCashflowMaxAggregate } from './recurring-cashflow-max-aggregate.output';

@ObjectType()
export class RecurringCashflowGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    categoryId!: number;

    @Field(() => CashflowType, {nullable:false})
    type!: keyof typeof CashflowType;

    @Field(() => GraphQLDecimal, {nullable:false})
    amount!: Decimal;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => RecurrenceFrequency, {nullable:false})
    frequency!: keyof typeof RecurrenceFrequency;

    @Field(() => Date, {nullable:false})
    startDate!: Date | string;

    @Field(() => Date, {nullable:true})
    endDate?: Date | string;

    @Field(() => Date, {nullable:false})
    nextDueDate!: Date | string;

    @Field(() => String, {nullable:true})
    notes?: string;

    @Field(() => Boolean, {nullable:false})
    isActive!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
