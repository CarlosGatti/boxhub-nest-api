import { registerEnumType } from '@nestjs/graphql';

export enum DefinedIntakeFormScalarFieldEnum {
    id = "id",
    clientId = "clientId",
    projectId = "projectId",
    formType = "formType",
    status = "status",
    title = "title",
    description = "description",
    shareToken = "shareToken",
    shareTokenCreatedAt = "shareTokenCreatedAt",
    shareTokenExpiresAt = "shareTokenExpiresAt",
    shareRevokedAt = "shareRevokedAt",
    submittedAt = "submittedAt",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(DefinedIntakeFormScalarFieldEnum, { name: 'DefinedIntakeFormScalarFieldEnum', description: undefined })
