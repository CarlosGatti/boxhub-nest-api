import { registerEnumType } from '@nestjs/graphql';

export enum DefinedAcademyLessonProgressStatus {
    NOT_STARTED = "NOT_STARTED",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED"
}


registerEnumType(DefinedAcademyLessonProgressStatus, { name: 'DefinedAcademyLessonProgressStatus', description: undefined })
