import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedInvoiceItemCreateWithoutInvoiceInput } from './defined-invoice-item-create-without-invoice.input';
import { Type } from 'class-transformer';
import { DefinedInvoiceItemCreateOrConnectWithoutInvoiceInput } from './defined-invoice-item-create-or-connect-without-invoice.input';
import { DefinedInvoiceItemCreateManyInvoiceInputEnvelope } from './defined-invoice-item-create-many-invoice-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedInvoiceItemWhereUniqueInput } from './defined-invoice-item-where-unique.input';

@InputType()
export class DefinedInvoiceItemCreateNestedManyWithoutInvoiceInput {

    @Field(() => [DefinedInvoiceItemCreateWithoutInvoiceInput], {nullable:true})
    @Type(() => DefinedInvoiceItemCreateWithoutInvoiceInput)
    create?: Array<DefinedInvoiceItemCreateWithoutInvoiceInput>;

    @Field(() => [DefinedInvoiceItemCreateOrConnectWithoutInvoiceInput], {nullable:true})
    @Type(() => DefinedInvoiceItemCreateOrConnectWithoutInvoiceInput)
    connectOrCreate?: Array<DefinedInvoiceItemCreateOrConnectWithoutInvoiceInput>;

    @Field(() => DefinedInvoiceItemCreateManyInvoiceInputEnvelope, {nullable:true})
    @Type(() => DefinedInvoiceItemCreateManyInvoiceInputEnvelope)
    createMany?: DefinedInvoiceItemCreateManyInvoiceInputEnvelope;

    @Field(() => [DefinedInvoiceItemWhereUniqueInput], {nullable:true})
    @Type(() => DefinedInvoiceItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedInvoiceItemWhereUniqueInput, 'id'>>;
}
