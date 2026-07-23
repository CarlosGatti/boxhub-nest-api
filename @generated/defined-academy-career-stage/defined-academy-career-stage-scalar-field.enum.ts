import { registerEnumType } from '@nestjs/graphql';

export enum DefinedAcademyCareerStageScalarFieldEnum {
    id = "id",
    journeyId = "journeyId",
    title = "title",
    slug = "slug",
    description = "description",
    summary = "summary",
    iconKey = "iconKey",
    sortOrder = "sortOrder",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(DefinedAcademyCareerStageScalarFieldEnum, { name: 'DefinedAcademyCareerStageScalarFieldEnum', description: undefined })
