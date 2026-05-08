import { registerEnumType } from '@nestjs/graphql';

export enum DefinedInvoiceScalarFieldEnum {
    id = "id",
    projectId = "projectId",
    clientId = "clientId",
    invoiceNumber = "invoiceNumber",
    status = "status",
    paymentStatus = "paymentStatus",
    currency = "currency",
    issueDate = "issueDate",
    dueDate = "dueDate",
    sentAt = "sentAt",
    paidAt = "paidAt",
    subtotal = "subtotal",
    discountAmount = "discountAmount",
    taxAmount = "taxAmount",
    total = "total",
    paymentInstructions = "paymentInstructions",
    notes = "notes",
    terms = "terms",
    publicToken = "publicToken",
    pdfUrl = "pdfUrl",
    createdById = "createdById",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(DefinedInvoiceScalarFieldEnum, { name: 'DefinedInvoiceScalarFieldEnum', description: undefined })
