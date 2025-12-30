import { registerEnumType } from '@nestjs/graphql';

export enum TransactionScalarFieldEnum {
    id = "id",
    portfolioId = "portfolioId",
    assetId = "assetId",
    type = "type",
    quantity = "quantity",
    price = "price",
    fees = "fees",
    notes = "notes",
    executedAt = "executedAt",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(TransactionScalarFieldEnum, { name: 'TransactionScalarFieldEnum', description: undefined })
