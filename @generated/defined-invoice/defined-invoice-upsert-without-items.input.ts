import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedInvoiceUpdateWithoutItemsInput } from './defined-invoice-update-without-items.input';
import { Type } from 'class-transformer';
import { DefinedInvoiceCreateWithoutItemsInput } from './defined-invoice-create-without-items.input';
import { DefinedInvoiceWhereInput } from './defined-invoice-where.input';

@InputType()
export class DefinedInvoiceUpsertWithoutItemsInput {

    @Field(() => DefinedInvoiceUpdateWithoutItemsInput, {nullable:false})
    @Type(() => DefinedInvoiceUpdateWithoutItemsInput)
    update!: DefinedInvoiceUpdateWithoutItemsInput;

    @Field(() => DefinedInvoiceCreateWithoutItemsInput, {nullable:false})
    @Type(() => DefinedInvoiceCreateWithoutItemsInput)
    create!: DefinedInvoiceCreateWithoutItemsInput;

    @Field(() => DefinedInvoiceWhereInput, {nullable:true})
    @Type(() => DefinedInvoiceWhereInput)
    where?: DefinedInvoiceWhereInput;
}
