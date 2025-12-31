import { registerEnumType } from '@nestjs/graphql';

export enum CashflowEntryScalarFieldEnum {
    id = "id",
    userId = "userId",
    categoryId = "categoryId",
    type = "type",
    amount = "amount",
    description = "description",
    date = "date",
    notes = "notes",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(CashflowEntryScalarFieldEnum, { name: 'CashflowEntryScalarFieldEnum', description: undefined })
