import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DefinedInvoiceCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    projectId!: number;

    @Field(() => Int, {nullable:false})
    clientId!: number;

    @Field(() => Int, {nullable:false})
    invoiceNumber!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    paymentStatus!: number;

    @Field(() => Int, {nullable:false})
    currency!: number;

    @Field(() => Int, {nullable:false})
    issueDate!: number;

    @Field(() => Int, {nullable:false})
    dueDate!: number;

    @Field(() => Int, {nullable:false})
    sentAt!: number;

    @Field(() => Int, {nullable:false})
    paidAt!: number;

    @Field(() => Int, {nullable:false})
    subtotal!: number;

    @Field(() => Int, {nullable:false})
    discountAmount!: number;

    @Field(() => Int, {nullable:false})
    taxAmount!: number;

    @Field(() => Int, {nullable:false})
    total!: number;

    @Field(() => Int, {nullable:false})
    paymentInstructions!: number;

    @Field(() => Int, {nullable:false})
    notes!: number;

    @Field(() => Int, {nullable:false})
    terms!: number;

    @Field(() => Int, {nullable:false})
    publicToken!: number;

    @Field(() => Int, {nullable:false})
    pdfUrl!: number;

    @Field(() => Int, {nullable:false})
    createdById!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
