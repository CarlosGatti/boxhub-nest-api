import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedLeadStatus } from './defined-lead-status.enum';
import { NestedEnumDefinedLeadStatusFilter } from './nested-enum-defined-lead-status-filter.input';

@InputType()
export class EnumDefinedLeadStatusFilter {

    @Field(() => DefinedLeadStatus, {nullable:true})
    equals?: keyof typeof DefinedLeadStatus;

    @Field(() => [DefinedLeadStatus], {nullable:true})
    in?: Array<keyof typeof DefinedLeadStatus>;

    @Field(() => [DefinedLeadStatus], {nullable:true})
    notIn?: Array<keyof typeof DefinedLeadStatus>;

    @Field(() => NestedEnumDefinedLeadStatusFilter, {nullable:true})
    not?: NestedEnumDefinedLeadStatusFilter;
}
