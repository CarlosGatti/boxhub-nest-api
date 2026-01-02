import { registerEnumType } from '@nestjs/graphql';

export enum CashflowCategoryScalarFieldEnum {
    id = "id",
    userId = "userId",
    name = "name",
    type = "type",
    description = "description",
    color = "color",
    icon = "icon",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(CashflowCategoryScalarFieldEnum, { name: 'CashflowCategoryScalarFieldEnum', description: undefined })
