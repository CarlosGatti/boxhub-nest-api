import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedInvoiceStatus } from '../prisma/defined-invoice-status.enum';
import { DefinedInvoicePaymentStatus } from '../prisma/defined-invoice-payment-status.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { DefinedInvoiceCountAggregate } from './defined-invoice-count-aggregate.output';
import { DefinedInvoiceAvgAggregate } from './defined-invoice-avg-aggregate.output';
import { DefinedInvoiceSumAggregate } from './defined-invoice-sum-aggregate.output';
import { DefinedInvoiceMinAggregate } from './defined-invoice-min-aggregate.output';
import { DefinedInvoiceMaxAggregate } from './defined-invoice-max-aggregate.output';

@ObjectType()
export class DefinedInvoiceGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    projectId!: number;

    @Field(() => Int, {nullable:false})
    clientId!: number;

    @Field(() => String, {nullable:false})
    invoiceNumber!: string;

    @Field(() => DefinedInvoiceStatus, {nullable:false})
    status!: keyof typeof DefinedInvoiceStatus;

    @Field(() => DefinedInvoicePaymentStatus, {nullable:false})
    paymentStatus!: keyof typeof DefinedInvoicePaymentStatus;

    @Field(() => String, {nullable:false})
    currency!: string;

    @Field(() => Date, {nullable:false})
    issueDate!: Date | string;

    @Field(() => Date, {nullable:true})
    dueDate?: Date | string;

    @Field(() => Date, {nullable:true})
    sentAt?: Date | string;

    @Field(() => Date, {nullable:true})
    paidAt?: Date | string;

    @Field(() => GraphQLDecimal, {nullable:false})
    subtotal!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    discountAmount!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    taxAmount!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    total!: Decimal;

    @Field(() => String, {nullable:true})
    paymentInstructions?: string;

    @Field(() => String, {nullable:true})
    notes?: string;

    @Field(() => String, {nullable:true})
    terms?: string;

    @Field(() => String, {nullable:true})
    publicToken?: string;

    @Field(() => String, {nullable:true})
    pdfUrl?: string;

    @Field(() => Int, {nullable:true})
    createdById?: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
