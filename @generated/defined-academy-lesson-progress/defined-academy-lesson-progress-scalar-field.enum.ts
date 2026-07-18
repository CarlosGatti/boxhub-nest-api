import { registerEnumType } from '@nestjs/graphql';

export enum DefinedAcademyLessonProgressScalarFieldEnum {
    id = "id",
    enrollmentId = "enrollmentId",
    lessonId = "lessonId",
    userId = "userId",
    status = "status",
    progressPercentage = "progressPercentage",
    lastPositionSeconds = "lastPositionSeconds",
    startedAt = "startedAt",
    completedAt = "completedAt",
    lastAccessedAt = "lastAccessedAt",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(DefinedAcademyLessonProgressScalarFieldEnum, { name: 'DefinedAcademyLessonProgressScalarFieldEnum', description: undefined })
