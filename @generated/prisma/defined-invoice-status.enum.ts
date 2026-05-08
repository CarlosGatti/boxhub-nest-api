import { registerEnumType } from '@nestjs/graphql';

export enum DefinedInvoiceStatus {
    DRAFT = "DRAFT",
    SENT = "SENT",
    PAID = "PAID",
    OVERDUE = "OVERDUE",
    CANCELLED = "CANCELLED"
}


registerEnumType(DefinedInvoiceStatus, { name: 'DefinedInvoiceStatus', description: undefined })
