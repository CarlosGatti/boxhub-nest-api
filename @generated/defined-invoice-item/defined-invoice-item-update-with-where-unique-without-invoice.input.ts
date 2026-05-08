import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedInvoiceItemWhereUniqueInput } from './defined-invoice-item-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedInvoiceItemUpdateWithoutInvoiceInput } from './defined-invoice-item-update-without-invoice.input';

@InputType()
export class DefinedInvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput {

    @Field(() => DefinedInvoiceItemWhereUniqueInput, {nullable:false})
    @Type(() => DefinedInvoiceItemWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedInvoiceItemWhereUniqueInput, 'id'>;

    @Field(() => DefinedInvoiceItemUpdateWithoutInvoiceInput, {nullable:false})
    @Type(() => DefinedInvoiceItemUpdateWithoutInvoiceInput)
    data!: DefinedInvoiceItemUpdateWithoutInvoiceInput;
}
