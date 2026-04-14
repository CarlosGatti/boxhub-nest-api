import { registerEnumType } from '@nestjs/graphql';

export enum DefinedLeadNotificationStatus {
    PENDING = "PENDING",
    SENT = "SENT",
    FAILED = "FAILED"
}


registerEnumType(DefinedLeadNotificationStatus, { name: 'DefinedLeadNotificationStatus', description: undefined })
