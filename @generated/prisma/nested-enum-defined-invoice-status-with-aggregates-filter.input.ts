import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedInvoiceStatus } from './defined-invoice-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumDefinedInvoiceStatusFilter } from './nested-enum-defined-invoice-status-filter.input';

@InputType()
export class NestedEnumDefinedInvoiceStatusWithAggregatesFilter {

    @Field(() => DefinedInvoiceStatus, {nullable:true})
    equals?: keyof typeof DefinedInvoiceStatus;

    @Field(() => [DefinedInvoiceStatus], {nullable:true})
    in?: Array<keyof typeof DefinedInvoiceStatus>;

    @Field(() => [DefinedInvoiceStatus], {nullable:true})
    notIn?: Array<keyof typeof DefinedInvoiceStatus>;

    @Field(() => NestedEnumDefinedInvoiceStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDefinedInvoiceStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumDefinedInvoiceStatusFilter, {nullable:true})
    _min?: NestedEnumDefinedInvoiceStatusFilter;

    @Field(() => NestedEnumDefinedInvoiceStatusFilter, {nullable:true})
    _max?: NestedEnumDefinedInvoiceStatusFilter;
}
