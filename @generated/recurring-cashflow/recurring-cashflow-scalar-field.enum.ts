import { registerEnumType } from '@nestjs/graphql';

export enum RecurringCashflowScalarFieldEnum {
    id = "id",
    userId = "userId",
    categoryId = "categoryId",
    type = "type",
    amount = "amount",
    source = "source",
    description = "description",
    frequency = "frequency",
    startDate = "startDate",
    endDate = "endDate",
    nextDueDate = "nextDueDate",
    notes = "notes",
    isActive = "isActive",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(RecurringCashflowScalarFieldEnum, { name: 'RecurringCashflowScalarFieldEnum', description: undefined })
