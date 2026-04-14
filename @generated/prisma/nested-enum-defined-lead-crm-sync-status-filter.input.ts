import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedLeadCrmSyncStatus } from './defined-lead-crm-sync-status.enum';

@InputType()
export class NestedEnumDefinedLeadCrmSyncStatusFilter {

    @Field(() => DefinedLeadCrmSyncStatus, {nullable:true})
    equals?: keyof typeof DefinedLeadCrmSyncStatus;

    @Field(() => [DefinedLeadCrmSyncStatus], {nullable:true})
    in?: Array<keyof typeof DefinedLeadCrmSyncStatus>;

    @Field(() => [DefinedLeadCrmSyncStatus], {nullable:true})
    notIn?: Array<keyof typeof DefinedLeadCrmSyncStatus>;

    @Field(() => NestedEnumDefinedLeadCrmSyncStatusFilter, {nullable:true})
    not?: NestedEnumDefinedLeadCrmSyncStatusFilter;
}
