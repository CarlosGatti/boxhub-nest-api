import { registerEnumType } from '@nestjs/graphql';

export enum DefinedAcademyPartnerStatus {
    DRAFT = "DRAFT",
    ACTIVE = "ACTIVE",
    ARCHIVED = "ARCHIVED"
}


registerEnumType(DefinedAcademyPartnerStatus, { name: 'DefinedAcademyPartnerStatus', description: undefined })
