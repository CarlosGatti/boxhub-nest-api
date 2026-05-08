import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedInvoiceCreateWithoutClientInput } from './defined-invoice-create-without-client.input';
import { Type } from 'class-transformer';
import { DefinedInvoiceCreateOrConnectWithoutClientInput } from './defined-invoice-create-or-connect-without-client.input';
import { DefinedInvoiceCreateManyClientInputEnvelope } from './defined-invoice-create-many-client-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedInvoiceWhereUniqueInput } from './defined-invoice-where-unique.input';

@InputType()
export class DefinedInvoiceCreateNestedManyWithoutClientInput {

    @Field(() => [DefinedInvoiceCreateWithoutClientInput], {nullable:true})
    @Type(() => DefinedInvoiceCreateWithoutClientInput)
    create?: Array<DefinedInvoiceCreateWithoutClientInput>;

    @Field(() => [DefinedInvoiceCreateOrConnectWithoutClientInput], {nullable:true})
    @Type(() => DefinedInvoiceCreateOrConnectWithoutClientInput)
    connectOrCreate?: Array<DefinedInvoiceCreateOrConnectWithoutClientInput>;

    @Field(() => DefinedInvoiceCreateManyClientInputEnvelope, {nullable:true})
    @Type(() => DefinedInvoiceCreateManyClientInputEnvelope)
    createMany?: DefinedInvoiceCreateManyClientInputEnvelope;

    @Field(() => [DefinedInvoiceWhereUniqueInput], {nullable:true})
    @Type(() => DefinedInvoiceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedInvoiceWhereUniqueInput, 'id' | 'invoiceNumber' | 'publicToken'>>;
}
