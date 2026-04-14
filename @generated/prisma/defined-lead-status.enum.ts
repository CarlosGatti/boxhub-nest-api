import { registerEnumType } from '@nestjs/graphql';

export enum DefinedLeadStatus {
    RECEIVED = "RECEIVED",
    STORED = "STORED"
}


registerEnumType(DefinedLeadStatus, { name: 'DefinedLeadStatus', description: undefined })
