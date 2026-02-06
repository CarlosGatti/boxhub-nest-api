import { registerEnumType } from '@nestjs/graphql';

export enum ReviewCardExportScalarFieldEnum {
    id = "id",
    projectId = "projectId",
    type = "type",
    format = "format",
    status = "status",
    fileUrl = "fileUrl",
    errorMessage = "errorMessage",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ReviewCardExportScalarFieldEnum, { name: 'ReviewCardExportScalarFieldEnum', description: undefined })
