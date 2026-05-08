import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedInvoiceCreateWithoutProjectInput } from './defined-invoice-create-without-project.input';
import { Type } from 'class-transformer';
import { DefinedInvoiceCreateOrConnectWithoutProjectInput } from './defined-invoice-create-or-connect-without-project.input';
import { DefinedInvoiceUpsertWithWhereUniqueWithoutProjectInput } from './defined-invoice-upsert-with-where-unique-without-project.input';
import { DefinedInvoiceCreateManyProjectInputEnvelope } from './defined-invoice-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedInvoiceWhereUniqueInput } from './defined-invoice-where-unique.input';
import { DefinedInvoiceUpdateWithWhereUniqueWithoutProjectInput } from './defined-invoice-update-with-where-unique-without-project.input';
import { DefinedInvoiceUpdateManyWithWhereWithoutProjectInput } from './defined-invoice-update-many-with-where-without-project.input';
import { DefinedInvoiceScalarWhereInput } from './defined-invoice-scalar-where.input';

@InputType()
export class DefinedInvoiceUncheckedUpdateManyWithoutProjectNestedInput {

    @Field(() => [DefinedInvoiceCreateWithoutProjectInput], {nullable:true})
    @Type(() => DefinedInvoiceCreateWithoutProjectInput)
    create?: Array<DefinedInvoiceCreateWithoutProjectInput>;

    @Field(() => [DefinedInvoiceCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => DefinedInvoiceCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<DefinedInvoiceCreateOrConnectWithoutProjectInput>;

    @Field(() => [DefinedInvoiceUpsertWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => DefinedInvoiceUpsertWithWhereUniqueWithoutProjectInput)
    upsert?: Array<DefinedInvoiceUpsertWithWhereUniqueWithoutProjectInput>;

    @Field(() => DefinedInvoiceCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => DefinedInvoiceCreateManyProjectInputEnvelope)
    createMany?: DefinedInvoiceCreateManyProjectInputEnvelope;

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

    @Field(() => [DefinedInvoiceUpdateWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => DefinedInvoiceUpdateWithWhereUniqueWithoutProjectInput)
    update?: Array<DefinedInvoiceUpdateWithWhereUniqueWithoutProjectInput>;

    @Field(() => [DefinedInvoiceUpdateManyWithWhereWithoutProjectInput], {nullable:true})
    @Type(() => DefinedInvoiceUpdateManyWithWhereWithoutProjectInput)
    updateMany?: Array<DefinedInvoiceUpdateManyWithWhereWithoutProjectInput>;

    @Field(() => [DefinedInvoiceScalarWhereInput], {nullable:true})
    @Type(() => DefinedInvoiceScalarWhereInput)
    deleteMany?: Array<DefinedInvoiceScalarWhereInput>;
}
