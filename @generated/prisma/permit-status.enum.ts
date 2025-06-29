import { registerEnumType } from '@nestjs/graphql';

export enum PermitStatus {
    REQUIRED = "REQUIRED",
    SENT = "SENT",
    APPROVED = "APPROVED",
    REJECTED = "REJECTED"
}


registerEnumType(PermitStatus, { name: 'PermitStatus', description: undefined })
