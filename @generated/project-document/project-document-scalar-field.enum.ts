import { registerEnumType } from '@nestjs/graphql';

export enum ProjectDocumentScalarFieldEnum {
    id = "id",
    projectId = "projectId",
    name = "name",
    fileUrl = "fileUrl",
    type = "type",
    createdAt = "createdAt"
}


registerEnumType(ProjectDocumentScalarFieldEnum, { name: 'ProjectDocumentScalarFieldEnum', description: undefined })
