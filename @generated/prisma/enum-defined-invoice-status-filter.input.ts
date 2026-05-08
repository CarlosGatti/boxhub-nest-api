import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedInvoiceStatus } from './defined-invoice-status.enum';
import { NestedEnumDefinedInvoiceStatusFilter } from './nested-enum-defined-invoice-status-filter.input';

@InputType()
export class EnumDefinedInvoiceStatusFilter {

    @Field(() => DefinedInvoiceStatus, {nullable:true})
    equals?: keyof typeof DefinedInvoiceStatus;

    @Field(() => [DefinedInvoiceStatus], {nullable:true})
    in?: Array<keyof typeof DefinedInvoiceStatus>;

    @Field(() => [DefinedInvoiceStatus], {nullable:true})
    notIn?: Array<keyof typeof DefinedInvoiceStatus>;

    @Field(() => NestedEnumDefinedInvoiceStatusFilter, {nullable:true})
    not?: NestedEnumDefinedInvoiceStatusFilter;
}
