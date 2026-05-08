import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { DefinedInvoice } from '../defined-invoice/defined-invoice.model';

@ObjectType()
export class DefinedInvoiceItem {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    invoiceId!: number;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => GraphQLDecimal, {nullable:false,defaultValue:1})
    quantity!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    unitPrice!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    total!: Decimal;

    @Field(() => Int, {nullable:false,defaultValue:0})
    sortOrder!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => DefinedInvoice, {nullable:false})
    invoice?: DefinedInvoice;
}
