import { registerEnumType } from '@nestjs/graphql';

export enum AssetScalarFieldEnum {
    id = "id",
    type = "type",
    ticker = "ticker",
    name = "name",
    currency = "currency",
    exchange = "exchange",
    metadata = "metadata",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(AssetScalarFieldEnum, { name: 'AssetScalarFieldEnum', description: undefined })
