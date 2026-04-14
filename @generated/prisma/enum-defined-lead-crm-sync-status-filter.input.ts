import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedLeadCrmSyncStatus } from './defined-lead-crm-sync-status.enum';
import { NestedEnumDefinedLeadCrmSyncStatusFilter } from './nested-enum-defined-lead-crm-sync-status-filter.input';

@InputType()
export class EnumDefinedLeadCrmSyncStatusFilter {

    @Field(() => DefinedLeadCrmSyncStatus, {nullable:true})
    equals?: keyof typeof DefinedLeadCrmSyncStatus;

    @Field(() => [DefinedLeadCrmSyncStatus], {nullable:true})
    in?: Array<keyof typeof DefinedLeadCrmSyncStatus>;

    @Field(() => [DefinedLeadCrmSyncStatus], {nullable:true})
    notIn?: Array<keyof typeof DefinedLeadCrmSyncStatus>;

    @Field(() => NestedEnumDefinedLeadCrmSyncStatusFilter, {nullable:true})
    not?: NestedEnumDefinedLeadCrmSyncStatusFilter;
}
