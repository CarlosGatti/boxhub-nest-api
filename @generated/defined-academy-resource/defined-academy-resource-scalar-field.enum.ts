import { registerEnumType } from '@nestjs/graphql';

export enum DefinedAcademyResourceScalarFieldEnum {
    id = "id",
    academyId = "academyId",
    lessonId = "lessonId",
    title = "title",
    description = "description",
    type = "type",
    fileUrl = "fileUrl",
    externalUrl = "externalUrl",
    textContent = "textContent",
    mimeType = "mimeType",
    fileName = "fileName",
    fileSize = "fileSize",
    sortOrder = "sortOrder",
    visibility = "visibility",
    status = "status",
    downloadable = "downloadable",
    createdById = "createdById",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(DefinedAcademyResourceScalarFieldEnum, { name: 'DefinedAcademyResourceScalarFieldEnum', description: undefined })
