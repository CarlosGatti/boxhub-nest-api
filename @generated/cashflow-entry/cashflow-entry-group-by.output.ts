import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CashflowType } from '../prisma/cashflow-type.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { CashflowEntryCountAggregate } from './cashflow-entry-count-aggregate.output';
import { CashflowEntryAvgAggregate } from './cashflow-entry-avg-aggregate.output';
import { CashflowEntrySumAggregate } from './cashflow-entry-sum-aggregate.output';
import { CashflowEntryMinAggregate } from './cashflow-entry-min-aggregate.output';
import { CashflowEntryMaxAggregate } from './cashflow-entry-max-aggregate.output';

@ObjectType()
export class CashflowEntryGroupBy {

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
    source?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:false})
    date!: Date | string;

    @Field(() => String, {nullable:true})
    notes?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
