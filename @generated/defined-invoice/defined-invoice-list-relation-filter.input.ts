import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedInvoiceWhereInput } from './defined-invoice-where.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedInvoiceListRelationFilter {

    @Field(() => DefinedInvoiceWhereInput, {nullable:true})
    @Type(() => DefinedInvoiceWhereInput)
    every?: DefinedInvoiceWhereInput;

    @Field(() => DefinedInvoiceWhereInput, {nullable:true})
    @Type(() => DefinedInvoiceWhereInput)
    some?: DefinedInvoiceWhereInput;

    @Field(() => DefinedInvoiceWhereInput, {nullable:true})
    @Type(() => DefinedInvoiceWhereInput)
    none?: DefinedInvoiceWhereInput;
}
