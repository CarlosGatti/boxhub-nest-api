import { registerEnumType } from '@nestjs/graphql';

export enum SubcontractorScalarFieldEnum {
    id = "id",
    companyName = "companyName",
    contactName = "contactName",
    email = "email",
    phone = "phone",
    trade = "trade",
    bankAccount = "bankAccount",
    paymentPreference = "paymentPreference",
    notes = "notes",
    priority = "priority",
    createdViaPublicForm = "createdViaPublicForm",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(SubcontractorScalarFieldEnum, { name: 'SubcontractorScalarFieldEnum', description: undefined })
