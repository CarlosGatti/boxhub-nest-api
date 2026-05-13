import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProposalWhereInput } from './defined-proposal-where.input';

@InputType()
export class DefinedProposalRelationFilter {

    @Field(() => DefinedProposalWhereInput, {nullable:true})
    is?: DefinedProposalWhereInput;

    @Field(() => DefinedProposalWhereInput, {nullable:true})
    isNot?: DefinedProposalWhereInput;
}
