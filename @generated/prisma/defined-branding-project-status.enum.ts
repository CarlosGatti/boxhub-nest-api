import { registerEnumType } from '@nestjs/graphql';

export enum DefinedBrandingProjectStatus {
    DRAFT = "DRAFT",
    ACTIVE = "ACTIVE",
    IN_REVIEW = "IN_REVIEW",
    COMPLETED = "COMPLETED",
    ARCHIVED = "ARCHIVED"
}


registerEnumType(DefinedBrandingProjectStatus, { name: 'DefinedBrandingProjectStatus', description: undefined })
