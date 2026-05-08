import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DefinedInvoiceItemCountAggregate } from './defined-invoice-item-count-aggregate.output';
import { DefinedInvoiceItemAvgAggregate } from './defined-invoice-item-avg-aggregate.output';
import { DefinedInvoiceItemSumAggregate } from './defined-invoice-item-sum-aggregate.output';
import { DefinedInvoiceItemMinAggregate } from './defined-invoice-item-min-aggregate.output';
import { DefinedInvoiceItemMaxAggregate } from './defined-invoice-item-max-aggregate.output';

@ObjectType()
export class AggregateDefinedInvoiceItem {

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
