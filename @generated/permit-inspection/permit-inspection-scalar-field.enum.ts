import { registerEnumType } from '@nestjs/graphql';

export enum PermitInspectionScalarFieldEnum {
    id = "id",
    projectId = "projectId",
    number = "number",
    kind = "kind",
    status = "status",
    requestedAt = "requestedAt",
    approvedAt = "approvedAt",
    fileUrl = "fileUrl",
    responsibleId = "responsibleId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(PermitInspectionScalarFieldEnum, { name: 'PermitInspectionScalarFieldEnum', description: undefined })
