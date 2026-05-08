import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedInvoiceCreateWithoutProjectInput } from './defined-invoice-create-without-project.input';
import { Type } from 'class-transformer';
import { DefinedInvoiceCreateOrConnectWithoutProjectInput } from './defined-invoice-create-or-connect-without-project.input';
import { DefinedInvoiceCreateManyProjectInputEnvelope } from './defined-invoice-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedInvoiceWhereUniqueInput } from './defined-invoice-where-unique.input';

@InputType()
export class DefinedInvoiceCreateNestedManyWithoutProjectInput {

    @Field(() => [DefinedInvoiceCreateWithoutProjectInput], {nullable:true})
    @Type(() => DefinedInvoiceCreateWithoutProjectInput)
    create?: Array<DefinedInvoiceCreateWithoutProjectInput>;

    @Field(() => [DefinedInvoiceCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => DefinedInvoiceCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<DefinedInvoiceCreateOrConnectWithoutProjectInput>;

    @Field(() => DefinedInvoiceCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => DefinedInvoiceCreateManyProjectInputEnvelope)
    createMany?: DefinedInvoiceCreateManyProjectInputEnvelope;

    @Field(() => [DefinedInvoiceWhereUniqueInput], {nullable:true})
    @Type(() => DefinedInvoiceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedInvoiceWhereUniqueInput, 'id' | 'invoiceNumber' | 'publicToken'>>;
}
