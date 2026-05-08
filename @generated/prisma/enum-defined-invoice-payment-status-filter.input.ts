import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedInvoicePaymentStatus } from './defined-invoice-payment-status.enum';
import { NestedEnumDefinedInvoicePaymentStatusFilter } from './nested-enum-defined-invoice-payment-status-filter.input';

@InputType()
export class EnumDefinedInvoicePaymentStatusFilter {

    @Field(() => DefinedInvoicePaymentStatus, {nullable:true})
    equals?: keyof typeof DefinedInvoicePaymentStatus;

    @Field(() => [DefinedInvoicePaymentStatus], {nullable:true})
    in?: Array<keyof typeof DefinedInvoicePaymentStatus>;

    @Field(() => [DefinedInvoicePaymentStatus], {nullable:true})
    notIn?: Array<keyof typeof DefinedInvoicePaymentStatus>;

    @Field(() => NestedEnumDefinedInvoicePaymentStatusFilter, {nullable:true})
    not?: NestedEnumDefinedInvoicePaymentStatusFilter;
}
