import { registerEnumType } from '@nestjs/graphql';

export enum CashflowType {
    INCOME = "INCOME",
    EXPENSE = "EXPENSE"
}


registerEnumType(CashflowType, { name: 'CashflowType', description: undefined })
