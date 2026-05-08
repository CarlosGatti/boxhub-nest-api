import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedInvoiceCreateWithoutItemsInput } from './defined-invoice-create-without-items.input';
import { Type } from 'class-transformer';
import { DefinedInvoiceCreateOrConnectWithoutItemsInput } from './defined-invoice-create-or-connect-without-items.input';
import { Prisma } from '@prisma/client';
import { DefinedInvoiceWhereUniqueInput } from './defined-invoice-where-unique.input';

@InputType()
export class DefinedInvoiceCreateNestedOneWithoutItemsInput {

    @Field(() => DefinedInvoiceCreateWithoutItemsInput, {nullable:true})
    @Type(() => DefinedInvoiceCreateWithoutItemsInput)
    create?: DefinedInvoiceCreateWithoutItemsInput;

    @Field(() => DefinedInvoiceCreateOrConnectWithoutItemsInput, {nullable:true})
    @Type(() => DefinedInvoiceCreateOrConnectWithoutItemsInput)
    connectOrCreate?: DefinedInvoiceCreateOrConnectWithoutItemsInput;

    @Field(() => DefinedInvoiceWhereUniqueInput, {nullable:true})
    @Type(() => DefinedInvoiceWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedInvoiceWhereUniqueInput, 'id' | 'invoiceNumber' | 'publicToken'>;
}
