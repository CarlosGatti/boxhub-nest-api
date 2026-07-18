import { registerEnumType } from '@nestjs/graphql';

export enum DefinedAcademyStatus {
    DRAFT = "DRAFT",
    ACTIVE = "ACTIVE",
    ARCHIVED = "ARCHIVED"
}


registerEnumType(DefinedAcademyStatus, { name: 'DefinedAcademyStatus', description: undefined })
