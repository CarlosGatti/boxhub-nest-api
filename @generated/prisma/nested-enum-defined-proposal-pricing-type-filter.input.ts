import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProposalPricingType } from './defined-proposal-pricing-type.enum';

@InputType()
export class NestedEnumDefinedProposalPricingTypeFilter {

    @Field(() => DefinedProposalPricingType, {nullable:true})
    equals?: keyof typeof DefinedProposalPricingType;

    @Field(() => [DefinedProposalPricingType], {nullable:true})
    in?: Array<keyof typeof DefinedProposalPricingType>;

    @Field(() => [DefinedProposalPricingType], {nullable:true})
    notIn?: Array<keyof typeof DefinedProposalPricingType>;

    @Field(() => NestedEnumDefinedProposalPricingTypeFilter, {nullable:true})
    not?: NestedEnumDefinedProposalPricingTypeFilter;
}
