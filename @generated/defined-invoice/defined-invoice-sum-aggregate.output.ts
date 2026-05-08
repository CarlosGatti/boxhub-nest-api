import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class DefinedInvoiceSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    projectId?: number;

    @Field(() => Int, {nullable:true})
    clientId?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    subtotal?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    discountAmount?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    taxAmount?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    total?: Decimal;

    @Field(() => Int, {nullable:true})
    createdById?: number;
}
