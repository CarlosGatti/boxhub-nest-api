import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedInvoicePaymentStatus } from './defined-invoice-payment-status.enum';

@InputType()
export class NestedEnumDefinedInvoicePaymentStatusFilter {

    @Field(() => DefinedInvoicePaymentStatus, {nullable:true})
    equals?: keyof typeof DefinedInvoicePaymentStatus;

    @Field(() => [DefinedInvoicePaymentStatus], {nullable:true})
    in?: Array<keyof typeof DefinedInvoicePaymentStatus>;

    @Field(() => [DefinedInvoicePaymentStatus], {nullable:true})
    notIn?: Array<keyof typeof DefinedInvoicePaymentStatus>;

    @Field(() => NestedEnumDefinedInvoicePaymentStatusFilter, {nullable:true})
    not?: NestedEnumDefinedInvoicePaymentStatusFilter;
}
