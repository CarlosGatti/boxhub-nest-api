import { registerEnumType } from '@nestjs/graphql';

export enum DefinedAcademyCareerJourneyStatus {
    DRAFT = "DRAFT",
    ACTIVE = "ACTIVE",
    ARCHIVED = "ARCHIVED"
}


registerEnumType(DefinedAcademyCareerJourneyStatus, { name: 'DefinedAcademyCareerJourneyStatus', description: undefined })
