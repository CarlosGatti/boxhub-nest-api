import { registerEnumType } from '@nestjs/graphql';

export enum DefinedAcademyCourseStatus {
    DRAFT = "DRAFT",
    PUBLISHED = "PUBLISHED",
    ARCHIVED = "ARCHIVED"
}


registerEnumType(DefinedAcademyCourseStatus, { name: 'DefinedAcademyCourseStatus', description: undefined })
