import { registerEnumType } from '@nestjs/graphql';

export enum DefinedInvoicePaymentStatus {
    UNPAID = "UNPAID",
    PARTIALLY_PAID = "PARTIALLY_PAID",
    PAID = "PAID",
    REFUNDED = "REFUNDED"
}


registerEnumType(DefinedInvoicePaymentStatus, { name: 'DefinedInvoicePaymentStatus', description: undefined })
