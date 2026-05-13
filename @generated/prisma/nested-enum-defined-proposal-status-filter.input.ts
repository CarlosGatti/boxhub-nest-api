import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProposalStatus } from './defined-proposal-status.enum';

@InputType()
export class NestedEnumDefinedProposalStatusFilter {

    @Field(() => DefinedProposalStatus, {nullable:true})
    equals?: keyof typeof DefinedProposalStatus;

    @Field(() => [DefinedProposalStatus], {nullable:true})
    in?: Array<keyof typeof DefinedProposalStatus>;

    @Field(() => [DefinedProposalStatus], {nullable:true})
    notIn?: Array<keyof typeof DefinedProposalStatus>;

    @Field(() => NestedEnumDefinedProposalStatusFilter, {nullable:true})
    not?: NestedEnumDefinedProposalStatusFilter;
}
