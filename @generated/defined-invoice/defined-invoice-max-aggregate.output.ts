import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedInvoiceStatus } from '../prisma/defined-invoice-status.enum';
import { DefinedInvoicePaymentStatus } from '../prisma/defined-invoice-payment-status.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class DefinedInvoiceMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    projectId?: number;

    @Field(() => Int, {nullable:true})
    clientId?: number;

    @Field(() => String, {nullable:true})
    invoiceNumber?: string;

    @Field(() => DefinedInvoiceStatus, {nullable:true})
    status?: keyof typeof DefinedInvoiceStatus;

    @Field(() => DefinedInvoicePaymentStatus, {nullable:true})
    paymentStatus?: keyof typeof DefinedInvoicePaymentStatus;

    @Field(() => String, {nullable:true})
    currency?: string;

    @Field(() => Date, {nullable:true})
    issueDate?: Date | string;

    @Field(() => Date, {nullable:true})
    dueDate?: Date | string;

    @Field(() => Date, {nullable:true})
    sentAt?: Date | string;

    @Field(() => Date, {nullable:true})
    paidAt?: Date | string;

    @Field(() => GraphQLDecimal, {nullable:true})
    subtotal?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    discountAmount?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    taxAmount?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    total?: Decimal;

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

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
