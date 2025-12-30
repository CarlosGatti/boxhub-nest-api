import { registerEnumType } from '@nestjs/graphql';

export enum AssetType {
    STOCK = "STOCK",
    ETF = "ETF",
    CRYPTO = "CRYPTO",
    CASH = "CASH",
    REAL_ESTATE = "REAL_ESTATE"
}


registerEnumType(AssetType, { name: 'AssetType', description: undefined })
