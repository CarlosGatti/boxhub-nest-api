import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedInvoiceItemCreateManyInvoiceInput } from './defined-invoice-item-create-many-invoice.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedInvoiceItemCreateManyInvoiceInputEnvelope {

    @Field(() => [DefinedInvoiceItemCreateManyInvoiceInput], {nullable:false})
    @Type(() => DefinedInvoiceItemCreateManyInvoiceInput)
    data!: Array<DefinedInvoiceItemCreateManyInvoiceInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
