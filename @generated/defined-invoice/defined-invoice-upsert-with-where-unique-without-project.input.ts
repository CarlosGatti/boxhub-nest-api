import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedInvoiceWhereUniqueInput } from './defined-invoice-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedInvoiceUpdateWithoutProjectInput } from './defined-invoice-update-without-project.input';
import { DefinedInvoiceCreateWithoutProjectInput } from './defined-invoice-create-without-project.input';

@InputType()
export class DefinedInvoiceUpsertWithWhereUniqueWithoutProjectInput {

    @Field(() => DefinedInvoiceWhereUniqueInput, {nullable:false})
    @Type(() => DefinedInvoiceWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedInvoiceWhereUniqueInput, 'id' | 'invoiceNumber' | 'publicToken'>;

    @Field(() => DefinedInvoiceUpdateWithoutProjectInput, {nullable:false})
    @Type(() => DefinedInvoiceUpdateWithoutProjectInput)
    update!: DefinedInvoiceUpdateWithoutProjectInput;

    @Field(() => DefinedInvoiceCreateWithoutProjectInput, {nullable:false})
    @Type(() => DefinedInvoiceCreateWithoutProjectInput)
    create!: DefinedInvoiceCreateWithoutProjectInput;
}
