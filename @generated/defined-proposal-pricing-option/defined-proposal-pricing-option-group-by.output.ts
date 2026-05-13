import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedProposalPricingType } from '../prisma/defined-proposal-pricing-type.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { DefinedProposalPricingOptionCountAggregate } from './defined-proposal-pricing-option-count-aggregate.output';
import { DefinedProposalPricingOptionAvgAggregate } from './defined-proposal-pricing-option-avg-aggregate.output';
import { DefinedProposalPricingOptionSumAggregate } from './defined-proposal-pricing-option-sum-aggregate.output';
import { DefinedProposalPricingOptionMinAggregate } from './defined-proposal-pricing-option-min-aggregate.output';
import { DefinedProposalPricingOptionMaxAggregate } from './defined-proposal-pricing-option-max-aggregate.output';

@ObjectType()
export class DefinedProposalPricingOptionGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    proposalId!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => DefinedProposalPricingType, {nullable:false})
    type!: keyof typeof DefinedProposalPricingType;

    @Field(() => GraphQLDecimal, {nullable:true})
    amount?: Decimal;

    @Field(() => String, {nullable:false})
    currency!: string;

    @Field(() => String, {nullable:true})
    billingNote?: string;

    @Field(() => [String], {nullable:true})
    features?: Array<string>;

    @Field(() => Boolean, {nullable:false})
    isRecommended!: boolean;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => DefinedProposalPricingOptionCountAggregate, {nullable:true})
    _count?: DefinedProposalPricingOptionCountAggregate;

    @Field(() => DefinedProposalPricingOptionAvgAggregate, {nullable:true})
    _avg?: DefinedProposalPricingOptionAvgAggregate;

    @Field(() => DefinedProposalPricingOptionSumAggregate, {nullable:true})
    _sum?: DefinedProposalPricingOptionSumAggregate;

    @Field(() => DefinedProposalPricingOptionMinAggregate, {nullable:true})
    _min?: DefinedProposalPricingOptionMinAggregate;

    @Field(() => DefinedProposalPricingOptionMaxAggregate, {nullable:true})
    _max?: DefinedProposalPricingOptionMaxAggregate;
}
