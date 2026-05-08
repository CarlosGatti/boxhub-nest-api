import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedInvoiceItemWhereUniqueInput } from './defined-invoice-item-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedInvoiceItemCreateInput } from './defined-invoice-item-create.input';
import { DefinedInvoiceItemUpdateInput } from './defined-invoice-item-update.input';

@ArgsType()
export class UpsertOneDefinedInvoiceItemArgs {

    @Field(() => DefinedInvoiceItemWhereUniqueInput, {nullable:false})
    @Type(() => DefinedInvoiceItemWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedInvoiceItemWhereUniqueInput, 'id'>;

    @Field(() => DefinedInvoiceItemCreateInput, {nullable:false})
    @Type(() => DefinedInvoiceItemCreateInput)
    create!: DefinedInvoiceItemCreateInput;

    @Field(() => DefinedInvoiceItemUpdateInput, {nullable:false})
    @Type(() => DefinedInvoiceItemUpdateInput)
    update!: DefinedInvoiceItemUpdateInput;
}
