import { registerEnumType } from '@nestjs/graphql';

export enum DefinedAcademyCareerStageContentScalarFieldEnum {
    id = "id",
    stageId = "stageId",
    contentType = "contentType",
    courseId = "courseId",
    resourceId = "resourceId",
    label = "label",
    sortOrder = "sortOrder",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(DefinedAcademyCareerStageContentScalarFieldEnum, { name: 'DefinedAcademyCareerStageContentScalarFieldEnum', description: undefined })
