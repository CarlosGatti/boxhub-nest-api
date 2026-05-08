import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedInvoiceWhereUniqueInput } from './defined-invoice-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedInvoiceCreateWithoutCreatedByInput } from './defined-invoice-create-without-created-by.input';

@InputType()
export class DefinedInvoiceCreateOrConnectWithoutCreatedByInput {

    @Field(() => DefinedInvoiceWhereUniqueInput, {nullable:false})
    @Type(() => DefinedInvoiceWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedInvoiceWhereUniqueInput, 'id' | 'invoiceNumber' | 'publicToken'>;

    @Field(() => DefinedInvoiceCreateWithoutCreatedByInput, {nullable:false})
    @Type(() => DefinedInvoiceCreateWithoutCreatedByInput)
    create!: DefinedInvoiceCreateWithoutCreatedByInput;
}
