import { registerEnumType } from '@nestjs/graphql';

export enum ReviewCardProjectStatus {
    DRAFT = "DRAFT",
    PUBLISHED = "PUBLISHED",
    ARCHIVED = "ARCHIVED"
}


registerEnumType(ReviewCardProjectStatus, { name: 'ReviewCardProjectStatus', description: undefined })
