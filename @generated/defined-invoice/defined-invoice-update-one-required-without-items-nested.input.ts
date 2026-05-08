import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedInvoiceCreateWithoutItemsInput } from './defined-invoice-create-without-items.input';
import { Type } from 'class-transformer';
import { DefinedInvoiceCreateOrConnectWithoutItemsInput } from './defined-invoice-create-or-connect-without-items.input';
import { DefinedInvoiceUpsertWithoutItemsInput } from './defined-invoice-upsert-without-items.input';
import { Prisma } from '@prisma/client';
import { DefinedInvoiceWhereUniqueInput } from './defined-invoice-where-unique.input';
import { DefinedInvoiceUpdateToOneWithWhereWithoutItemsInput } from './defined-invoice-update-to-one-with-where-without-items.input';

@InputType()
export class DefinedInvoiceUpdateOneRequiredWithoutItemsNestedInput {

    @Field(() => DefinedInvoiceCreateWithoutItemsInput, {nullable:true})
    @Type(() => DefinedInvoiceCreateWithoutItemsInput)
    create?: DefinedInvoiceCreateWithoutItemsInput;

    @Field(() => DefinedInvoiceCreateOrConnectWithoutItemsInput, {nullable:true})
    @Type(() => DefinedInvoiceCreateOrConnectWithoutItemsInput)
    connectOrCreate?: DefinedInvoiceCreateOrConnectWithoutItemsInput;

    @Field(() => DefinedInvoiceUpsertWithoutItemsInput, {nullable:true})
    @Type(() => DefinedInvoiceUpsertWithoutItemsInput)
    upsert?: DefinedInvoiceUpsertWithoutItemsInput;

    @Field(() => DefinedInvoiceWhereUniqueInput, {nullable:true})
    @Type(() => DefinedInvoiceWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedInvoiceWhereUniqueInput, 'id' | 'invoiceNumber' | 'publicToken'>;

    @Field(() => DefinedInvoiceUpdateToOneWithWhereWithoutItemsInput, {nullable:true})
    @Type(() => DefinedInvoiceUpdateToOneWithWhereWithoutItemsInput)
    update?: DefinedInvoiceUpdateToOneWithWhereWithoutItemsInput;
}
