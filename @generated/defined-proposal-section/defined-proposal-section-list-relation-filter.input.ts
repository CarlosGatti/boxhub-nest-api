import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProposalSectionWhereInput } from './defined-proposal-section-where.input';

@InputType()
export class DefinedProposalSectionListRelationFilter {

    @Field(() => DefinedProposalSectionWhereInput, {nullable:true})
    every?: DefinedProposalSectionWhereInput;

    @Field(() => DefinedProposalSectionWhereInput, {nullable:true})
    some?: DefinedProposalSectionWhereInput;

    @Field(() => DefinedProposalSectionWhereInput, {nullable:true})
    none?: DefinedProposalSectionWhereInput;
}
