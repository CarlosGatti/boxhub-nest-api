import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProposalStatus } from './defined-proposal-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumDefinedProposalStatusFilter } from './nested-enum-defined-proposal-status-filter.input';

@InputType()
export class NestedEnumDefinedProposalStatusWithAggregatesFilter {

    @Field(() => DefinedProposalStatus, {nullable:true})
    equals?: keyof typeof DefinedProposalStatus;

    @Field(() => [DefinedProposalStatus], {nullable:true})
    in?: Array<keyof typeof DefinedProposalStatus>;

    @Field(() => [DefinedProposalStatus], {nullable:true})
    notIn?: Array<keyof typeof DefinedProposalStatus>;

    @Field(() => NestedEnumDefinedProposalStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDefinedProposalStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumDefinedProposalStatusFilter, {nullable:true})
    _min?: NestedEnumDefinedProposalStatusFilter;

    @Field(() => NestedEnumDefinedProposalStatusFilter, {nullable:true})
    _max?: NestedEnumDefinedProposalStatusFilter;
}
