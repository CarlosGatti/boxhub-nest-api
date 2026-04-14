import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedLeadStatus } from './defined-lead-status.enum';
import { NestedEnumDefinedLeadStatusWithAggregatesFilter } from './nested-enum-defined-lead-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumDefinedLeadStatusFilter } from './nested-enum-defined-lead-status-filter.input';

@InputType()
export class EnumDefinedLeadStatusWithAggregatesFilter {

    @Field(() => DefinedLeadStatus, {nullable:true})
    equals?: keyof typeof DefinedLeadStatus;

    @Field(() => [DefinedLeadStatus], {nullable:true})
    in?: Array<keyof typeof DefinedLeadStatus>;

    @Field(() => [DefinedLeadStatus], {nullable:true})
    notIn?: Array<keyof typeof DefinedLeadStatus>;

    @Field(() => NestedEnumDefinedLeadStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDefinedLeadStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumDefinedLeadStatusFilter, {nullable:true})
    _min?: NestedEnumDefinedLeadStatusFilter;

    @Field(() => NestedEnumDefinedLeadStatusFilter, {nullable:true})
    _max?: NestedEnumDefinedLeadStatusFilter;
}
