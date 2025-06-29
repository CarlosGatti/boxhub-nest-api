import { registerEnumType } from '@nestjs/graphql';

export enum PhotoCategory {
    BEFORE = "BEFORE",
    DURING = "DURING",
    AFTER = "AFTER",
    ISSUE = "ISSUE",
    INSPECTION = "INSPECTION"
}


registerEnumType(PhotoCategory, { name: 'PhotoCategory', description: undefined })
