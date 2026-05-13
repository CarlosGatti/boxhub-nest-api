import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProposalSectionType } from './defined-proposal-section-type.enum';
import { NestedEnumDefinedProposalSectionTypeFilter } from './nested-enum-defined-proposal-section-type-filter.input';

@InputType()
export class EnumDefinedProposalSectionTypeFilter {

    @Field(() => DefinedProposalSectionType, {nullable:true})
    equals?: keyof typeof DefinedProposalSectionType;

    @Field(() => [DefinedProposalSectionType], {nullable:true})
    in?: Array<keyof typeof DefinedProposalSectionType>;

    @Field(() => [DefinedProposalSectionType], {nullable:true})
    notIn?: Array<keyof typeof DefinedProposalSectionType>;

    @Field(() => NestedEnumDefinedProposalSectionTypeFilter, {nullable:true})
    not?: NestedEnumDefinedProposalSectionTypeFilter;
}
