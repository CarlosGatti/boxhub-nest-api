import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedInvoiceCreateWithoutCreatedByInput } from './defined-invoice-create-without-created-by.input';
import { Type } from 'class-transformer';
import { DefinedInvoiceCreateOrConnectWithoutCreatedByInput } from './defined-invoice-create-or-connect-without-created-by.input';
import { DefinedInvoiceUpsertWithWhereUniqueWithoutCreatedByInput } from './defined-invoice-upsert-with-where-unique-without-created-by.input';
import { DefinedInvoiceCreateManyCreatedByInputEnvelope } from './defined-invoice-create-many-created-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedInvoiceWhereUniqueInput } from './defined-invoice-where-unique.input';
import { DefinedInvoiceUpdateWithWhereUniqueWithoutCreatedByInput } from './defined-invoice-update-with-where-unique-without-created-by.input';
import { DefinedInvoiceUpdateManyWithWhereWithoutCreatedByInput } from './defined-invoice-update-many-with-where-without-created-by.input';
import { DefinedInvoiceScalarWhereInput } from './defined-invoice-scalar-where.input';

@InputType()
export class DefinedInvoiceUncheckedUpdateManyWithoutCreatedByNestedInput {

    @Field(() => [DefinedInvoiceCreateWithoutCreatedByInput], {nullable:true})
    @Type(() => DefinedInvoiceCreateWithoutCreatedByInput)
    create?: Array<DefinedInvoiceCreateWithoutCreatedByInput>;

    @Field(() => [DefinedInvoiceCreateOrConnectWithoutCreatedByInput], {nullable:true})
    @Type(() => DefinedInvoiceCreateOrConnectWithoutCreatedByInput)
    connectOrCreate?: Array<DefinedInvoiceCreateOrConnectWithoutCreatedByInput>;

    @Field(() => [DefinedInvoiceUpsertWithWhereUniqueWithoutCreatedByInput], {nullable:true})
    @Type(() => DefinedInvoiceUpsertWithWhereUniqueWithoutCreatedByInput)
    upsert?: Array<DefinedInvoiceUpsertWithWhereUniqueWithoutCreatedByInput>;

    @Field(() => DefinedInvoiceCreateManyCreatedByInputEnvelope, {nullable:true})
    @Type(() => DefinedInvoiceCreateManyCreatedByInputEnvelope)
    createMany?: DefinedInvoiceCreateManyCreatedByInputEnvelope;

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

    @Field(() => [DefinedInvoiceUpdateWithWhereUniqueWithoutCreatedByInput], {nullable:true})
    @Type(() => DefinedInvoiceUpdateWithWhereUniqueWithoutCreatedByInput)
    update?: Array<DefinedInvoiceUpdateWithWhereUniqueWithoutCreatedByInput>;

    @Field(() => [DefinedInvoiceUpdateManyWithWhereWithoutCreatedByInput], {nullable:true})
    @Type(() => DefinedInvoiceUpdateManyWithWhereWithoutCreatedByInput)
    updateMany?: Array<DefinedInvoiceUpdateManyWithWhereWithoutCreatedByInput>;

    @Field(() => [DefinedInvoiceScalarWhereInput], {nullable:true})
    @Type(() => DefinedInvoiceScalarWhereInput)
    deleteMany?: Array<DefinedInvoiceScalarWhereInput>;
}
