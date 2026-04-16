import { registerEnumType } from '@nestjs/graphql';

export enum DefinedProjectStatus {
    DRAFT = "DRAFT",
    ACTIVE = "ACTIVE",
    WAITING_ON_CLIENT = "WAITING_ON_CLIENT",
    IN_PROGRESS = "IN_PROGRESS",
    IN_REVIEW = "IN_REVIEW",
    COMPLETED = "COMPLETED",
    ARCHIVED = "ARCHIVED"
}


registerEnumType(DefinedProjectStatus, { name: 'DefinedProjectStatus', description: undefined })
