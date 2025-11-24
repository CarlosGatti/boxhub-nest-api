import { registerEnumType } from '@nestjs/graphql';

export enum DiscartItemCategory {
    FURNITURE = "FURNITURE",
    ELECTRONICS = "ELECTRONICS",
    KIDS = "KIDS",
    SPORTS = "SPORTS",
    OTHER = "OTHER",
    BOOK = "BOOK"
}


registerEnumType(DiscartItemCategory, { name: 'DiscartItemCategory', description: undefined })
