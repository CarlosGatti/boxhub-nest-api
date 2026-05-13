import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DefinedProposalPricingOptionCountAggregate } from './defined-proposal-pricing-option-count-aggregate.output';
import { DefinedProposalPricingOptionAvgAggregate } from './defined-proposal-pricing-option-avg-aggregate.output';
import { DefinedProposalPricingOptionSumAggregate } from './defined-proposal-pricing-option-sum-aggregate.output';
import { DefinedProposalPricingOptionMinAggregate } from './defined-proposal-pricing-option-min-aggregate.output';
import { DefinedProposalPricingOptionMaxAggregate } from './defined-proposal-pricing-option-max-aggregate.output';

@ObjectType()
export class AggregateDefinedProposalPricingOption {

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
