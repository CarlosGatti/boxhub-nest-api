import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedInvoiceItemWhereInput } from './defined-invoice-item-where.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedInvoiceItemListRelationFilter {

    @Field(() => DefinedInvoiceItemWhereInput, {nullable:true})
    @Type(() => DefinedInvoiceItemWhereInput)
    every?: DefinedInvoiceItemWhereInput;

    @Field(() => DefinedInvoiceItemWhereInput, {nullable:true})
    @Type(() => DefinedInvoiceItemWhereInput)
    some?: DefinedInvoiceItemWhereInput;

    @Field(() => DefinedInvoiceItemWhereInput, {nullable:true})
    @Type(() => DefinedInvoiceItemWhereInput)
    none?: DefinedInvoiceItemWhereInput;
}
