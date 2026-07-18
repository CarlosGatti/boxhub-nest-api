import { registerEnumType } from '@nestjs/graphql';

export enum DefinedAcademyEnrollmentStatus {
    ENROLLED = "ENROLLED",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}


registerEnumType(DefinedAcademyEnrollmentStatus, { name: 'DefinedAcademyEnrollmentStatus', description: undefined })
