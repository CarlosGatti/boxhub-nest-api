import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedInvoiceItemCreateInput } from './defined-invoice-item-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDefinedInvoiceItemArgs {

    @Field(() => DefinedInvoiceItemCreateInput, {nullable:false})
    @Type(() => DefinedInvoiceItemCreateInput)
    data!: DefinedInvoiceItemCreateInput;
}
