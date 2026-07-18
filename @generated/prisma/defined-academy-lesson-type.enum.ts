import { registerEnumType } from '@nestjs/graphql';

export enum DefinedAcademyLessonType {
    VIDEO = "VIDEO",
    ARTICLE = "ARTICLE",
    RESOURCE = "RESOURCE",
    MIXED = "MIXED"
}


registerEnumType(DefinedAcademyLessonType, { name: 'DefinedAcademyLessonType', description: undefined })
