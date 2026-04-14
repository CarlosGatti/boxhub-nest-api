import { registerEnumType } from '@nestjs/graphql';

export enum DefinedLeadCrmSyncStatus {
    PENDING = "PENDING",
    SYNCED = "SYNCED",
    FAILED = "FAILED",
    NOT_APPLICABLE = "NOT_APPLICABLE"
}


registerEnumType(DefinedLeadCrmSyncStatus, { name: 'DefinedLeadCrmSyncStatus', description: undefined })
