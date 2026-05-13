import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProposalSectionType } from './defined-proposal-section-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumDefinedProposalSectionTypeFilter } from './nested-enum-defined-proposal-section-type-filter.input';

@InputType()
export class NestedEnumDefinedProposalSectionTypeWithAggregatesFilter {

    @Field(() => DefinedProposalSectionType, {nullable:true})
    equals?: keyof typeof DefinedProposalSectionType;

    @Field(() => [DefinedProposalSectionType], {nullable:true})
    in?: Array<keyof typeof DefinedProposalSectionType>;

    @Field(() => [DefinedProposalSectionType], {nullable:true})
    notIn?: Array<keyof typeof DefinedProposalSectionType>;

    @Field(() => NestedEnumDefinedProposalSectionTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDefinedProposalSectionTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumDefinedProposalSectionTypeFilter, {nullable:true})
    _min?: NestedEnumDefinedProposalSectionTypeFilter;

    @Field(() => NestedEnumDefinedProposalSectionTypeFilter, {nullable:true})
    _max?: NestedEnumDefinedProposalSectionTypeFilter;
}
