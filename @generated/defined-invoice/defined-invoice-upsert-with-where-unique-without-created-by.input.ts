import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedInvoiceWhereUniqueInput } from './defined-invoice-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedInvoiceUpdateWithoutCreatedByInput } from './defined-invoice-update-without-created-by.input';
import { DefinedInvoiceCreateWithoutCreatedByInput } from './defined-invoice-create-without-created-by.input';

@InputType()
export class DefinedInvoiceUpsertWithWhereUniqueWithoutCreatedByInput {

    @Field(() => DefinedInvoiceWhereUniqueInput, {nullable:false})
    @Type(() => DefinedInvoiceWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedInvoiceWhereUniqueInput, 'id' | 'invoiceNumber' | 'publicToken'>;

    @Field(() => DefinedInvoiceUpdateWithoutCreatedByInput, {nullable:false})
    @Type(() => DefinedInvoiceUpdateWithoutCreatedByInput)
    update!: DefinedInvoiceUpdateWithoutCreatedByInput;

    @Field(() => DefinedInvoiceCreateWithoutCreatedByInput, {nullable:false})
    @Type(() => DefinedInvoiceCreateWithoutCreatedByInput)
    create!: DefinedInvoiceCreateWithoutCreatedByInput;
}
