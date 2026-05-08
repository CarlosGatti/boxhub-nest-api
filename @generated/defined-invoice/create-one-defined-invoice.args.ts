import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedInvoiceCreateInput } from './defined-invoice-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDefinedInvoiceArgs {

    @Field(() => DefinedInvoiceCreateInput, {nullable:false})
    @Type(() => DefinedInvoiceCreateInput)
    data!: DefinedInvoiceCreateInput;
}
