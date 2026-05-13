import { registerEnumType } from '@nestjs/graphql';

export enum DefinedProposalScalarFieldEnum {
    id = "id",
    clientId = "clientId",
    projectId = "projectId",
    title = "title",
    subtitle = "subtitle",
    status = "status",
    summary = "summary",
    contentJson = "contentJson",
    currency = "currency",
    shareToken = "shareToken",
    shareTokenCreatedAt = "shareTokenCreatedAt",
    shareTokenExpiresAt = "shareTokenExpiresAt",
    shareRevokedAt = "shareRevokedAt",
    sentAt = "sentAt",
    viewedAt = "viewedAt",
    approvedAt = "approvedAt",
    declinedAt = "declinedAt",
    createdById = "createdById",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(DefinedProposalScalarFieldEnum, { name: 'DefinedProposalScalarFieldEnum', description: undefined })
