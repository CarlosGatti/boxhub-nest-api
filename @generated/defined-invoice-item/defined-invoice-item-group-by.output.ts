import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { DefinedInvoiceItemCountAggregate } from './defined-invoice-item-count-aggregate.output';
import { DefinedInvoiceItemAvgAggregate } from './defined-invoice-item-avg-aggregate.output';
import { DefinedInvoiceItemSumAggregate } from './defined-invoice-item-sum-aggregate.output';
import { DefinedInvoiceItemMinAggregate } from './defined-invoice-item-min-aggregate.output';
import { DefinedInvoiceItemMaxAggregate } from './defined-invoice-item-max-aggregate.output';

@ObjectType()
export class DefinedInvoiceItemGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    invoiceId!: number;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    quantity!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    unitPrice!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    total!: Decimal;

    @Field(() => Int, {nullable:false})
    sortOrder!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => DefinedInvoiceItemCountAggregate, {nullable:true})
    _count?: DefinedInvoiceItemCountAggregate;

    @Field(() => DefinedInvoiceItemAvgAggregate, {nullable:true})
    _avg?: DefinedInvoiceItemAvgAggregate;

    @Field(() => DefinedInvoiceItemSumAggregate, {nullable:true})
    _sum?: DefinedInvoiceItemSumAggregate;

    @Field(() => DefinedInvoiceItemMinAggregate, {nullable:true})
    _min?: DefinedInvoiceItemMinAggregate;

    @Field(() => DefinedInvoiceItemMaxAggregate, {nullable:true})
    _max?: DefinedInvoiceItemMaxAggregate;
}
