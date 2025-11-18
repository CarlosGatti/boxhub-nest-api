import { registerEnumType } from '@nestjs/graphql';

export enum DiscartItemStatus {
    ACTIVE = "ACTIVE",
    RESERVED = "RESERVED",
    SOLD = "SOLD"
}


registerEnumType(DiscartItemStatus, { name: 'DiscartItemStatus', description: undefined })
