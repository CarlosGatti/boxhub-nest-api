import { registerEnumType } from '@nestjs/graphql';

export enum PricePointScalarFieldEnum {
    id = "id",
    assetId = "assetId",
    price = "price",
    currency = "currency",
    asOf = "asOf",
    source = "source",
    createdAt = "createdAt"
}


registerEnumType(PricePointScalarFieldEnum, { name: 'PricePointScalarFieldEnum', description: undefined })
