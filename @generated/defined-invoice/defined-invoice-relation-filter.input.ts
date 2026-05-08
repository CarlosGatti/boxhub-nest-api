import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedInvoiceWhereInput } from './defined-invoice-where.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedInvoiceRelationFilter {

    @Field(() => DefinedInvoiceWhereInput, {nullable:true})
    @Type(() => DefinedInvoiceWhereInput)
    is?: DefinedInvoiceWhereInput;

    @Field(() => DefinedInvoiceWhereInput, {nullable:true})
    @Type(() => DefinedInvoiceWhereInput)
    isNot?: DefinedInvoiceWhereInput;
}
