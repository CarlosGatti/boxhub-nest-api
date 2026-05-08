import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedInvoicePaymentStatus } from './defined-invoice-payment-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumDefinedInvoicePaymentStatusFilter } from './nested-enum-defined-invoice-payment-status-filter.input';

@InputType()
export class NestedEnumDefinedInvoicePaymentStatusWithAggregatesFilter {

    @Field(() => DefinedInvoicePaymentStatus, {nullable:true})
    equals?: keyof typeof DefinedInvoicePaymentStatus;

    @Field(() => [DefinedInvoicePaymentStatus], {nullable:true})
    in?: Array<keyof typeof DefinedInvoicePaymentStatus>;

    @Field(() => [DefinedInvoicePaymentStatus], {nullable:true})
    notIn?: Array<keyof typeof DefinedInvoicePaymentStatus>;

    @Field(() => NestedEnumDefinedInvoicePaymentStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDefinedInvoicePaymentStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumDefinedInvoicePaymentStatusFilter, {nullable:true})
    _min?: NestedEnumDefinedInvoicePaymentStatusFilter;

    @Field(() => NestedEnumDefinedInvoicePaymentStatusFilter, {nullable:true})
    _max?: NestedEnumDefinedInvoicePaymentStatusFilter;
}
