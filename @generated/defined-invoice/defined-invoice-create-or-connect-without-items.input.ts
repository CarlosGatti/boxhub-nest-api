import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedInvoiceWhereUniqueInput } from './defined-invoice-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedInvoiceCreateWithoutItemsInput } from './defined-invoice-create-without-items.input';

@InputType()
export class DefinedInvoiceCreateOrConnectWithoutItemsInput {

    @Field(() => DefinedInvoiceWhereUniqueInput, {nullable:false})
    @Type(() => DefinedInvoiceWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedInvoiceWhereUniqueInput, 'id' | 'invoiceNumber' | 'publicToken'>;

    @Field(() => DefinedInvoiceCreateWithoutItemsInput, {nullable:false})
    @Type(() => DefinedInvoiceCreateWithoutItemsInput)
    create!: DefinedInvoiceCreateWithoutItemsInput;
}
