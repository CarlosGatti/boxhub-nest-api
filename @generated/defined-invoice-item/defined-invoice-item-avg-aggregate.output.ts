import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class DefinedInvoiceItemAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    invoiceId?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    quantity?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    unitPrice?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    total?: Decimal;

    @Field(() => Float, {nullable:true})
    sortOrder?: number;
}
