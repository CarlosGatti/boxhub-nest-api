import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedInvoiceWhereInput } from './defined-invoice-where.input';
import { Type } from 'class-transformer';
import { DefinedInvoiceUpdateWithoutItemsInput } from './defined-invoice-update-without-items.input';

@InputType()
export class DefinedInvoiceUpdateToOneWithWhereWithoutItemsInput {

    @Field(() => DefinedInvoiceWhereInput, {nullable:true})
    @Type(() => DefinedInvoiceWhereInput)
    where?: DefinedInvoiceWhereInput;

    @Field(() => DefinedInvoiceUpdateWithoutItemsInput, {nullable:false})
    @Type(() => DefinedInvoiceUpdateWithoutItemsInput)
    data!: DefinedInvoiceUpdateWithoutItemsInput;
}
