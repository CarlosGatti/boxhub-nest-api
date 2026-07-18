import { registerEnumType } from '@nestjs/graphql';

export enum DefinedAcademyLessonScalarFieldEnum {
    id = "id",
    moduleId = "moduleId",
    title = "title",
    slug = "slug",
    summary = "summary",
    description = "description",
    lessonType = "lessonType",
    videoUrl = "videoUrl",
    videoProvider = "videoProvider",
    videoDurationSeconds = "videoDurationSeconds",
    bodyContent = "bodyContent",
    sortOrder = "sortOrder",
    status = "status",
    visibility = "visibility",
    isPreview = "isPreview",
    publishedAt = "publishedAt",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(DefinedAcademyLessonScalarFieldEnum, { name: 'DefinedAcademyLessonScalarFieldEnum', description: undefined })
