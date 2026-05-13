import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedProposalPricingType } from '../prisma/defined-proposal-pricing-type.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class DefinedProposalPricingOptionMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    proposalId?: number;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => DefinedProposalPricingType, {nullable:true})
    type?: keyof typeof DefinedProposalPricingType;

    @Field(() => GraphQLDecimal, {nullable:true})
    amount?: Decimal;

    @Field(() => String, {nullable:true})
    currency?: string;

    @Field(() => String, {nullable:true})
    billingNote?: string;

    @Field(() => Boolean, {nullable:true})
    isRecommended?: boolean;

    @Field(() => Int, {nullable:true})
    order?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
