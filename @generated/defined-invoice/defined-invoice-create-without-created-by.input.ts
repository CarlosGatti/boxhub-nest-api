import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedInvoiceStatus } from '../prisma/defined-invoice-status.enum';
import { DefinedInvoicePaymentStatus } from '../prisma/defined-invoice-payment-status.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { DefinedProjectCreateNestedOneWithoutInvoicesInput } from '../defined-project/defined-project-create-nested-one-without-invoices.input';
import { DefinedClientCreateNestedOneWithoutInvoicesInput } from '../defined-client/defined-client-create-nested-one-without-invoices.input';
import { DefinedInvoiceItemCreateNestedManyWithoutInvoiceInput } from '../defined-invoice-item/defined-invoice-item-create-nested-many-without-invoice.input';

@InputType()
export class DefinedInvoiceCreateWithoutCreatedByInput {

    @Field(() => String, {nullable:false})
    invoiceNumber!: string;

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

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    subtotal!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    discountAmount?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    taxAmount?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
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

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => DefinedProjectCreateNestedOneWithoutInvoicesInput, {nullable:false})
    @Type(() => DefinedProjectCreateNestedOneWithoutInvoicesInput)
    project!: DefinedProjectCreateNestedOneWithoutInvoicesInput;

    @Field(() => DefinedClientCreateNestedOneWithoutInvoicesInput, {nullable:false})
    @Type(() => DefinedClientCreateNestedOneWithoutInvoicesInput)
    client!: DefinedClientCreateNestedOneWithoutInvoicesInput;

    @Field(() => DefinedInvoiceItemCreateNestedManyWithoutInvoiceInput, {nullable:true})
    @Type(() => DefinedInvoiceItemCreateNestedManyWithoutInvoiceInput)
    items?: DefinedInvoiceItemCreateNestedManyWithoutInvoiceInput;
}
