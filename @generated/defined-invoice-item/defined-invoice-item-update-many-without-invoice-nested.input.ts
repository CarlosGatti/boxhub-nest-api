import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedInvoiceItemCreateWithoutInvoiceInput } from './defined-invoice-item-create-without-invoice.input';
import { Type } from 'class-transformer';
import { DefinedInvoiceItemCreateOrConnectWithoutInvoiceInput } from './defined-invoice-item-create-or-connect-without-invoice.input';
import { DefinedInvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput } from './defined-invoice-item-upsert-with-where-unique-without-invoice.input';
import { DefinedInvoiceItemCreateManyInvoiceInputEnvelope } from './defined-invoice-item-create-many-invoice-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedInvoiceItemWhereUniqueInput } from './defined-invoice-item-where-unique.input';
import { DefinedInvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput } from './defined-invoice-item-update-with-where-unique-without-invoice.input';
import { DefinedInvoiceItemUpdateManyWithWhereWithoutInvoiceInput } from './defined-invoice-item-update-many-with-where-without-invoice.input';
import { DefinedInvoiceItemScalarWhereInput } from './defined-invoice-item-scalar-where.input';

@InputType()
export class DefinedInvoiceItemUpdateManyWithoutInvoiceNestedInput {

    @Field(() => [DefinedInvoiceItemCreateWithoutInvoiceInput], {nullable:true})
    @Type(() => DefinedInvoiceItemCreateWithoutInvoiceInput)
    create?: Array<DefinedInvoiceItemCreateWithoutInvoiceInput>;

    @Field(() => [DefinedInvoiceItemCreateOrConnectWithoutInvoiceInput], {nullable:true})
    @Type(() => DefinedInvoiceItemCreateOrConnectWithoutInvoiceInput)
    connectOrCreate?: Array<DefinedInvoiceItemCreateOrConnectWithoutInvoiceInput>;

    @Field(() => [DefinedInvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput], {nullable:true})
    @Type(() => DefinedInvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput)
    upsert?: Array<DefinedInvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput>;

    @Field(() => DefinedInvoiceItemCreateManyInvoiceInputEnvelope, {nullable:true})
    @Type(() => DefinedInvoiceItemCreateManyInvoiceInputEnvelope)
    createMany?: DefinedInvoiceItemCreateManyInvoiceInputEnvelope;

    @Field(() => [DefinedInvoiceItemWhereUniqueInput], {nullable:true})
    @Type(() => DefinedInvoiceItemWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DefinedInvoiceItemWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedInvoiceItemWhereUniqueInput], {nullable:true})
    @Type(() => DefinedInvoiceItemWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DefinedInvoiceItemWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedInvoiceItemWhereUniqueInput], {nullable:true})
    @Type(() => DefinedInvoiceItemWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DefinedInvoiceItemWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedInvoiceItemWhereUniqueInput], {nullable:true})
    @Type(() => DefinedInvoiceItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedInvoiceItemWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedInvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput], {nullable:true})
    @Type(() => DefinedInvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput)
    update?: Array<DefinedInvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput>;

    @Field(() => [DefinedInvoiceItemUpdateManyWithWhereWithoutInvoiceInput], {nullable:true})
    @Type(() => DefinedInvoiceItemUpdateManyWithWhereWithoutInvoiceInput)
    updateMany?: Array<DefinedInvoiceItemUpdateManyWithWhereWithoutInvoiceInput>;

    @Field(() => [DefinedInvoiceItemScalarWhereInput], {nullable:true})
    @Type(() => DefinedInvoiceItemScalarWhereInput)
    deleteMany?: Array<DefinedInvoiceItemScalarWhereInput>;
}
