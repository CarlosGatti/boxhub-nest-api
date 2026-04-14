import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedLeadCrmSyncStatus } from './defined-lead-crm-sync-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumDefinedLeadCrmSyncStatusFilter } from './nested-enum-defined-lead-crm-sync-status-filter.input';

@InputType()
export class NestedEnumDefinedLeadCrmSyncStatusWithAggregatesFilter {

    @Field(() => DefinedLeadCrmSyncStatus, {nullable:true})
    equals?: keyof typeof DefinedLeadCrmSyncStatus;

    @Field(() => [DefinedLeadCrmSyncStatus], {nullable:true})
    in?: Array<keyof typeof DefinedLeadCrmSyncStatus>;

    @Field(() => [DefinedLeadCrmSyncStatus], {nullable:true})
    notIn?: Array<keyof typeof DefinedLeadCrmSyncStatus>;

    @Field(() => NestedEnumDefinedLeadCrmSyncStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDefinedLeadCrmSyncStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumDefinedLeadCrmSyncStatusFilter, {nullable:true})
    _min?: NestedEnumDefinedLeadCrmSyncStatusFilter;

    @Field(() => NestedEnumDefinedLeadCrmSyncStatusFilter, {nullable:true})
    _max?: NestedEnumDefinedLeadCrmSyncStatusFilter;
}
