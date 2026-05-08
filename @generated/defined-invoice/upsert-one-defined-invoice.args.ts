import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedInvoiceWhereUniqueInput } from './defined-invoice-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedInvoiceCreateInput } from './defined-invoice-create.input';
import { DefinedInvoiceUpdateInput } from './defined-invoice-update.input';

@ArgsType()
export class UpsertOneDefinedInvoiceArgs {

    @Field(() => DefinedInvoiceWhereUniqueInput, {nullable:false})
    @Type(() => DefinedInvoiceWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedInvoiceWhereUniqueInput, 'id' | 'invoiceNumber' | 'publicToken'>;

    @Field(() => DefinedInvoiceCreateInput, {nullable:false})
    @Type(() => DefinedInvoiceCreateInput)
    create!: DefinedInvoiceCreateInput;

    @Field(() => DefinedInvoiceUpdateInput, {nullable:false})
    @Type(() => DefinedInvoiceUpdateInput)
    update!: DefinedInvoiceUpdateInput;
}
