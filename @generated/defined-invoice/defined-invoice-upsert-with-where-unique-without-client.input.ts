import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedInvoiceWhereUniqueInput } from './defined-invoice-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedInvoiceUpdateWithoutClientInput } from './defined-invoice-update-without-client.input';
import { DefinedInvoiceCreateWithoutClientInput } from './defined-invoice-create-without-client.input';

@InputType()
export class DefinedInvoiceUpsertWithWhereUniqueWithoutClientInput {

    @Field(() => DefinedInvoiceWhereUniqueInput, {nullable:false})
    @Type(() => DefinedInvoiceWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedInvoiceWhereUniqueInput, 'id' | 'invoiceNumber' | 'publicToken'>;

    @Field(() => DefinedInvoiceUpdateWithoutClientInput, {nullable:false})
    @Type(() => DefinedInvoiceUpdateWithoutClientInput)
    update!: DefinedInvoiceUpdateWithoutClientInput;

    @Field(() => DefinedInvoiceCreateWithoutClientInput, {nullable:false})
    @Type(() => DefinedInvoiceCreateWithoutClientInput)
    create!: DefinedInvoiceCreateWithoutClientInput;
}
