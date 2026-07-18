import { registerEnumType } from '@nestjs/graphql';

export enum DefinedAcademyCourseScalarFieldEnum {
    id = "id",
    academyId = "academyId",
    title = "title",
    slug = "slug",
    summary = "summary",
    description = "description",
    coverImageUrl = "coverImageUrl",
    status = "status",
    visibility = "visibility",
    level = "level",
    estimatedDurationMinutes = "estimatedDurationMinutes",
    sortOrder = "sortOrder",
    publishedAt = "publishedAt",
    createdById = "createdById",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(DefinedAcademyCourseScalarFieldEnum, { name: 'DefinedAcademyCourseScalarFieldEnum', description: undefined })
