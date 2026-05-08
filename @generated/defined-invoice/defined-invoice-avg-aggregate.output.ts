import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class DefinedInvoiceAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    projectId?: number;

    @Field(() => Float, {nullable:true})
    clientId?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    subtotal?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    discountAmount?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    taxAmount?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    total?: Decimal;

    @Field(() => Float, {nullable:true})
    createdById?: number;
}
