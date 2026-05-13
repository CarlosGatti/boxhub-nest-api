import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProposalPricingType } from './defined-proposal-pricing-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumDefinedProposalPricingTypeFilter } from './nested-enum-defined-proposal-pricing-type-filter.input';

@InputType()
export class NestedEnumDefinedProposalPricingTypeWithAggregatesFilter {

    @Field(() => DefinedProposalPricingType, {nullable:true})
    equals?: keyof typeof DefinedProposalPricingType;

    @Field(() => [DefinedProposalPricingType], {nullable:true})
    in?: Array<keyof typeof DefinedProposalPricingType>;

    @Field(() => [DefinedProposalPricingType], {nullable:true})
    notIn?: Array<keyof typeof DefinedProposalPricingType>;

    @Field(() => NestedEnumDefinedProposalPricingTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDefinedProposalPricingTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumDefinedProposalPricingTypeFilter, {nullable:true})
    _min?: NestedEnumDefinedProposalPricingTypeFilter;

    @Field(() => NestedEnumDefinedProposalPricingTypeFilter, {nullable:true})
    _max?: NestedEnumDefinedProposalPricingTypeFilter;
}
