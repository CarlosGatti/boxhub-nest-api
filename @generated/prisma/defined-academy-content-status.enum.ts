import { registerEnumType } from '@nestjs/graphql';

export enum DefinedAcademyContentStatus {
    DRAFT = "DRAFT",
    PUBLISHED = "PUBLISHED",
    ARCHIVED = "ARCHIVED"
}


registerEnumType(DefinedAcademyContentStatus, { name: 'DefinedAcademyContentStatus', description: undefined })
