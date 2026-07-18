import { registerEnumType } from '@nestjs/graphql';

export enum DefinedAcademyResourceStatus {
    DRAFT = "DRAFT",
    PUBLISHED = "PUBLISHED",
    ARCHIVED = "ARCHIVED"
}


registerEnumType(DefinedAcademyResourceStatus, { name: 'DefinedAcademyResourceStatus', description: undefined })
