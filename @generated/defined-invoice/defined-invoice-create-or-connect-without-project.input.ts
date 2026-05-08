import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedInvoiceWhereUniqueInput } from './defined-invoice-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedInvoiceCreateWithoutProjectInput } from './defined-invoice-create-without-project.input';

@InputType()
export class DefinedInvoiceCreateOrConnectWithoutProjectInput {

    @Field(() => DefinedInvoiceWhereUniqueInput, {nullable:false})
    @Type(() => DefinedInvoiceWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedInvoiceWhereUniqueInput, 'id' | 'invoiceNumber' | 'publicToken'>;

    @Field(() => DefinedInvoiceCreateWithoutProjectInput, {nullable:false})
    @Type(() => DefinedInvoiceCreateWithoutProjectInput)
    create!: DefinedInvoiceCreateWithoutProjectInput;
}
