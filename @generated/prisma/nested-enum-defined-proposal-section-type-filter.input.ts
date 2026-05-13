import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProposalSectionType } from './defined-proposal-section-type.enum';

@InputType()
export class NestedEnumDefinedProposalSectionTypeFilter {

    @Field(() => DefinedProposalSectionType, {nullable:true})
    equals?: keyof typeof DefinedProposalSectionType;

    @Field(() => [DefinedProposalSectionType], {nullable:true})
    in?: Array<keyof typeof DefinedProposalSectionType>;

    @Field(() => [DefinedProposalSectionType], {nullable:true})
    notIn?: Array<keyof typeof DefinedProposalSectionType>;

    @Field(() => NestedEnumDefinedProposalSectionTypeFilter, {nullable:true})
    not?: NestedEnumDefinedProposalSectionTypeFilter;
}
