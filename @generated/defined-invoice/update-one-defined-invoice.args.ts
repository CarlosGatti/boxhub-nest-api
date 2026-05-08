import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedInvoiceUpdateInput } from './defined-invoice-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { DefinedInvoiceWhereUniqueInput } from './defined-invoice-where-unique.input';

@ArgsType()
export class UpdateOneDefinedInvoiceArgs {

    @Field(() => DefinedInvoiceUpdateInput, {nullable:false})
    @Type(() => DefinedInvoiceUpdateInput)
    data!: DefinedInvoiceUpdateInput;

    @Field(() => DefinedInvoiceWhereUniqueInput, {nullable:false})
    @Type(() => DefinedInvoiceWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedInvoiceWhereUniqueInput, 'id' | 'invoiceNumber' | 'publicToken'>;
}
