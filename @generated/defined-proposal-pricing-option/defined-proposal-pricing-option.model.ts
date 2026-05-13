import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedProposalPricingType } from '../prisma/defined-proposal-pricing-type.enum';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { DefinedProposal } from '../defined-proposal/defined-proposal.model';

@ObjectType()
export class DefinedProposalPricingOption {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    proposalId!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => DefinedProposalPricingType, {nullable:false,defaultValue:'ONE_TIME'})
    type!: keyof typeof DefinedProposalPricingType;

    @Field(() => GraphQLDecimal, {nullable:true})
    amount!: Decimal | null;

    @Field(() => String, {nullable:false,defaultValue:'USD'})
    currency!: string;

    @Field(() => String, {nullable:true})
    billingNote!: string | null;

    @Field(() => [String], {nullable:true})
    features!: Array<string>;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isRecommended!: boolean;

    @Field(() => Int, {nullable:false,defaultValue:0})
    order!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => DefinedProposal, {nullable:false})
    proposal?: DefinedProposal;
}
