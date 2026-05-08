import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedInvoiceWhereInput } from './defined-invoice-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyDefinedInvoiceArgs {

    @Field(() => DefinedInvoiceWhereInput, {nullable:true})
    @Type(() => DefinedInvoiceWhereInput)
    where?: DefinedInvoiceWhereInput;
}
