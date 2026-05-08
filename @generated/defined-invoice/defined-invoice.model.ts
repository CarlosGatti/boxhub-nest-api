import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedInvoiceStatus } from '../prisma/defined-invoice-status.enum';
import { DefinedInvoicePaymentStatus } from '../prisma/defined-invoice-payment-status.enum';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { DefinedProject } from '../defined-project/defined-project.model';
import { DefinedClient } from '../defined-client/defined-client.model';
import { User } from '../user/user.model';
import { DefinedInvoiceItem } from '../defined-invoice-item/defined-invoice-item.model';
import { DefinedInvoiceCount } from './defined-invoice-count.output';

@ObjectType()
export class DefinedInvoice {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    projectId!: number;

    @Field(() => Int, {nullable:false})
    clientId!: number;

    @Field(() => String, {nullable:false})
    invoiceNumber!: string;

    @Field(() => DefinedInvoiceStatus, {nullable:false,defaultValue:'DRAFT'})
    status!: keyof typeof DefinedInvoiceStatus;

    @Field(() => DefinedInvoicePaymentStatus, {nullable:false,defaultValue:'UNPAID'})
    paymentStatus!: keyof typeof DefinedInvoicePaymentStatus;

    @Field(() => String, {nullable:false,defaultValue:'USD'})
    currency!: string;

    @Field(() => Date, {nullable:false})
    issueDate!: Date;

    @Field(() => Date, {nullable:true})
    dueDate!: Date | null;

    @Field(() => Date, {nullable:true})
    sentAt!: Date | null;

    @Field(() => Date, {nullable:true})
    paidAt!: Date | null;

    @Field(() => GraphQLDecimal, {nullable:false})
    subtotal!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false,defaultValue:0})
    discountAmount!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false,defaultValue:0})
    taxAmount!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    total!: Decimal;

    @Field(() => String, {nullable:true})
    paymentInstructions!: string | null;

    @Field(() => String, {nullable:true})
    notes!: string | null;

    @Field(() => String, {nullable:true})
    terms!: string | null;

    @Field(() => String, {nullable:true})
    publicToken!: string | null;

    @Field(() => String, {nullable:true})
    pdfUrl!: string | null;

    @Field(() => Int, {nullable:true})
    createdById!: number | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => DefinedProject, {nullable:false})
    project?: DefinedProject;

    @Field(() => DefinedClient, {nullable:false})
    client?: DefinedClient;

    @Field(() => User, {nullable:true})
    createdBy?: User | null;

    @Field(() => [DefinedInvoiceItem], {nullable:true})
    items?: Array<DefinedInvoiceItem>;

    @Field(() => DefinedInvoiceCount, {nullable:false})
    _count?: DefinedInvoiceCount;
}
