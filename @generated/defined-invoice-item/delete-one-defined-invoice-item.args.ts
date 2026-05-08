import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedInvoiceItemWhereUniqueInput } from './defined-invoice-item-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneDefinedInvoiceItemArgs {

    @Field(() => DefinedInvoiceItemWhereUniqueInput, {nullable:false})
    @Type(() => DefinedInvoiceItemWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedInvoiceItemWhereUniqueInput, 'id'>;
}
