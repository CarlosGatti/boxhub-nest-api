import { registerEnumType } from '@nestjs/graphql';

export enum DiscartItemCategory {
    GENERAL = "GENERAL",
    BOOK = "BOOK"
}


registerEnumType(DiscartItemCategory, { name: 'DiscartItemCategory', description: undefined })
