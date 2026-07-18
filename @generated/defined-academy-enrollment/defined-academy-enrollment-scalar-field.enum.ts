import { registerEnumType } from '@nestjs/graphql';

export enum DefinedAcademyEnrollmentScalarFieldEnum {
    id = "id",
    courseId = "courseId",
    userId = "userId",
    status = "status",
    enrolledAt = "enrolledAt",
    startedAt = "startedAt",
    completedAt = "completedAt",
    lastAccessedAt = "lastAccessedAt",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(DefinedAcademyEnrollmentScalarFieldEnum, { name: 'DefinedAcademyEnrollmentScalarFieldEnum', description: undefined })
