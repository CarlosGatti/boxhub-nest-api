import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedInvoiceItemUpdateInput } from './defined-invoice-item-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { DefinedInvoiceItemWhereUniqueInput } from './defined-invoice-item-where-unique.input';

@ArgsType()
export class UpdateOneDefinedInvoiceItemArgs {

    @Field(() => DefinedInvoiceItemUpdateInput, {nullable:false})
    @Type(() => DefinedInvoiceItemUpdateInput)
    data!: DefinedInvoiceItemUpdateInput;

    @Field(() => DefinedInvoiceItemWhereUniqueInput, {nullable:false})
    @Type(() => DefinedInvoiceItemWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedInvoiceItemWhereUniqueInput, 'id'>;
}
