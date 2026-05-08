import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class DefinedInvoiceItemSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    invoiceId?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    quantity?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    unitPrice?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    total?: Decimal;

    @Field(() => Int, {nullable:true})
    sortOrder?: number;
}
