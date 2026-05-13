import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProposalWhereInput } from './defined-proposal-where.input';

@InputType()
export class DefinedProposalListRelationFilter {

    @Field(() => DefinedProposalWhereInput, {nullable:true})
    every?: DefinedProposalWhereInput;

    @Field(() => DefinedProposalWhereInput, {nullable:true})
    some?: DefinedProposalWhereInput;

    @Field(() => DefinedProposalWhereInput, {nullable:true})
    none?: DefinedProposalWhereInput;
}
