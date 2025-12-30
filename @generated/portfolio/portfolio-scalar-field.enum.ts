import { registerEnumType } from '@nestjs/graphql';

export enum PortfolioScalarFieldEnum {
    id = "id",
    userId = "userId",
    name = "name",
    baseCurrency = "baseCurrency",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(PortfolioScalarFieldEnum, { name: 'PortfolioScalarFieldEnum', description: undefined })
