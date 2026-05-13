import { registerEnumType } from '@nestjs/graphql';

export enum DefinedProposalStatus {
    DRAFT = "DRAFT",
    SENT = "SENT",
    VIEWED = "VIEWED",
    APPROVED = "APPROVED",
    DECLINED = "DECLINED",
    ARCHIVED = "ARCHIVED"
}


registerEnumType(DefinedProposalStatus, { name: 'DefinedProposalStatus', description: undefined })
