import { registerEnumType } from '@nestjs/graphql';

export enum DiscartItemType {
    SELL = "SELL",
    DONATE = "DONATE"
}


registerEnumType(DiscartItemType, { name: 'DiscartItemType', description: undefined })
