import { registerEnumType } from '@nestjs/graphql';

export enum HoldingScalarFieldEnum {
    id = "id",
    portfolioId = "portfolioId",
    assetId = "assetId",
    quantity = "quantity",
    averageCost = "averageCost",
    notes = "notes",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(HoldingScalarFieldEnum, { name: 'HoldingScalarFieldEnum', description: undefined })
