import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedInvoiceCreateWithoutCreatedByInput } from './defined-invoice-create-without-created-by.input';
import { Type } from 'class-transformer';
import { DefinedInvoiceCreateOrConnectWithoutCreatedByInput } from './defined-invoice-create-or-connect-without-created-by.input';
import { DefinedInvoiceCreateManyCreatedByInputEnvelope } from './defined-invoice-create-many-created-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedInvoiceWhereUniqueInput } from './defined-invoice-where-unique.input';

@InputType()
export class DefinedInvoiceCreateNestedManyWithoutCreatedByInput {

    @Field(() => [DefinedInvoiceCreateWithoutCreatedByInput], {nullable:true})
    @Type(() => DefinedInvoiceCreateWithoutCreatedByInput)
    create?: Array<DefinedInvoiceCreateWithoutCreatedByInput>;

    @Field(() => [DefinedInvoiceCreateOrConnectWithoutCreatedByInput], {nullable:true})
    @Type(() => DefinedInvoiceCreateOrConnectWithoutCreatedByInput)
    connectOrCreate?: Array<DefinedInvoiceCreateOrConnectWithoutCreatedByInput>;

    @Field(() => DefinedInvoiceCreateManyCreatedByInputEnvelope, {nullable:true})
    @Type(() => DefinedInvoiceCreateManyCreatedByInputEnvelope)
    createMany?: DefinedInvoiceCreateManyCreatedByInputEnvelope;

    @Field(() => [DefinedInvoiceWhereUniqueInput], {nullable:true})
    @Type(() => DefinedInvoiceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedInvoiceWhereUniqueInput, 'id' | 'invoiceNumber' | 'publicToken'>>;
}
