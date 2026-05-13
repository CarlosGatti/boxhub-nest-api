import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProposalStatus } from './defined-proposal-status.enum';
import { NestedEnumDefinedProposalStatusFilter } from './nested-enum-defined-proposal-status-filter.input';

@InputType()
export class EnumDefinedProposalStatusFilter {

    @Field(() => DefinedProposalStatus, {nullable:true})
    equals?: keyof typeof DefinedProposalStatus;

    @Field(() => [DefinedProposalStatus], {nullable:true})
    in?: Array<keyof typeof DefinedProposalStatus>;

    @Field(() => [DefinedProposalStatus], {nullable:true})
    notIn?: Array<keyof typeof DefinedProposalStatus>;

    @Field(() => NestedEnumDefinedProposalStatusFilter, {nullable:true})
    not?: NestedEnumDefinedProposalStatusFilter;
}
