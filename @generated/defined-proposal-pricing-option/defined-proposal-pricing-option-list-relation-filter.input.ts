import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProposalPricingOptionWhereInput } from './defined-proposal-pricing-option-where.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedProposalPricingOptionListRelationFilter {

    @Field(() => DefinedProposalPricingOptionWhereInput, {nullable:true})
    @Type(() => DefinedProposalPricingOptionWhereInput)
    every?: DefinedProposalPricingOptionWhereInput;

    @Field(() => DefinedProposalPricingOptionWhereInput, {nullable:true})
    @Type(() => DefinedProposalPricingOptionWhereInput)
    some?: DefinedProposalPricingOptionWhereInput;

    @Field(() => DefinedProposalPricingOptionWhereInput, {nullable:true})
    @Type(() => DefinedProposalPricingOptionWhereInput)
    none?: DefinedProposalPricingOptionWhereInput;
}
