import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DefinedInvoiceCountAggregate } from './defined-invoice-count-aggregate.output';
import { DefinedInvoiceAvgAggregate } from './defined-invoice-avg-aggregate.output';
import { DefinedInvoiceSumAggregate } from './defined-invoice-sum-aggregate.output';
import { DefinedInvoiceMinAggregate } from './defined-invoice-min-aggregate.output';
import { DefinedInvoiceMaxAggregate } from './defined-invoice-max-aggregate.output';

@ObjectType()
export class AggregateDefinedInvoice {

    @Field(() => DefinedInvoiceCountAggregate, {nullable:true})
    _count?: DefinedInvoiceCountAggregate;

    @Field(() => DefinedInvoiceAvgAggregate, {nullable:true})
    _avg?: DefinedInvoiceAvgAggregate;

    @Field(() => DefinedInvoiceSumAggregate, {nullable:true})
    _sum?: DefinedInvoiceSumAggregate;

    @Field(() => DefinedInvoiceMinAggregate, {nullable:true})
    _min?: DefinedInvoiceMinAggregate;

    @Field(() => DefinedInvoiceMaxAggregate, {nullable:true})
    _max?: DefinedInvoiceMaxAggregate;
}
