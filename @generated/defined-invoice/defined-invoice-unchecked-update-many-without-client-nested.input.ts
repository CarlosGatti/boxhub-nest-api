import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedInvoiceCreateWithoutClientInput } from './defined-invoice-create-without-client.input';
import { Type } from 'class-transformer';
import { DefinedInvoiceCreateOrConnectWithoutClientInput } from './defined-invoice-create-or-connect-without-client.input';
import { DefinedInvoiceUpsertWithWhereUniqueWithoutClientInput } from './defined-invoice-upsert-with-where-unique-without-client.input';
import { DefinedInvoiceCreateManyClientInputEnvelope } from './defined-invoice-create-many-client-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedInvoiceWhereUniqueInput } from './defined-invoice-where-unique.input';
import { DefinedInvoiceUpdateWithWhereUniqueWithoutClientInput } from './defined-invoice-update-with-where-unique-without-client.input';
import { DefinedInvoiceUpdateManyWithWhereWithoutClientInput } from './defined-invoice-update-many-with-where-without-client.input';
import { DefinedInvoiceScalarWhereInput } from './defined-invoice-scalar-where.input';

@InputType()
export class DefinedInvoiceUncheckedUpdateManyWithoutClientNestedInput {

    @Field(() => [DefinedInvoiceCreateWithoutClientInput], {nullable:true})
    @Type(() => DefinedInvoiceCreateWithoutClientInput)
    create?: Array<DefinedInvoiceCreateWithoutClientInput>;

    @Field(() => [DefinedInvoiceCreateOrConnectWithoutClientInput], {nullable:true})
    @Type(() => DefinedInvoiceCreateOrConnectWithoutClientInput)
    connectOrCreate?: Array<DefinedInvoiceCreateOrConnectWithoutClientInput>;

    @Field(() => [DefinedInvoiceUpsertWithWhereUniqueWithoutClientInput], {nullable:true})
    @Type(() => DefinedInvoiceUpsertWithWhereUniqueWithoutClientInput)
    upsert?: Array<DefinedInvoiceUpsertWithWhereUniqueWithoutClientInput>;

    @Field(() => DefinedInvoiceCreateManyClientInputEnvelope, {nullable:true})
    @Type(() => DefinedInvoiceCreateManyClientInputEnvelope)
    createMany?: DefinedInvoiceCreateManyClientInputEnvelope;

    @Field(() => [DefinedInvoiceWhereUniqueInput], {nullable:true})
    @Type(() => DefinedInvoiceWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DefinedInvoiceWhereUniqueInput, 'id' | 'invoiceNumber' | 'publicToken'>>;

    @Field(() => [DefinedInvoiceWhereUniqueInput], {nullable:true})
    @Type(() => DefinedInvoiceWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DefinedInvoiceWhereUniqueInput, 'id' | 'invoiceNumber' | 'publicToken'>>;

    @Field(() => [DefinedInvoiceWhereUniqueInput], {nullable:true})
    @Type(() => DefinedInvoiceWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DefinedInvoiceWhereUniqueInput, 'id' | 'invoiceNumber' | 'publicToken'>>;

    @Field(() => [DefinedInvoiceWhereUniqueInput], {nullable:true})
    @Type(() => DefinedInvoiceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedInvoiceWhereUniqueInput, 'id' | 'invoiceNumber' | 'publicToken'>>;

    @Field(() => [DefinedInvoiceUpdateWithWhereUniqueWithoutClientInput], {nullable:true})
    @Type(() => DefinedInvoiceUpdateWithWhereUniqueWithoutClientInput)
    update?: Array<DefinedInvoiceUpdateWithWhereUniqueWithoutClientInput>;

    @Field(() => [DefinedInvoiceUpdateManyWithWhereWithoutClientInput], {nullable:true})
    @Type(() => DefinedInvoiceUpdateManyWithWhereWithoutClientInput)
    updateMany?: Array<DefinedInvoiceUpdateManyWithWhereWithoutClientInput>;

    @Field(() => [DefinedInvoiceScalarWhereInput], {nullable:true})
    @Type(() => DefinedInvoiceScalarWhereInput)
    deleteMany?: Array<DefinedInvoiceScalarWhereInput>;
}
