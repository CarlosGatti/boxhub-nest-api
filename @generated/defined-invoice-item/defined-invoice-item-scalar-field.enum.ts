import { registerEnumType } from '@nestjs/graphql';

export enum DefinedInvoiceItemScalarFieldEnum {
    id = "id",
    invoiceId = "invoiceId",
    description = "description",
    quantity = "quantity",
    unitPrice = "unitPrice",
    total = "total",
    sortOrder = "sortOrder",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(DefinedInvoiceItemScalarFieldEnum, { name: 'DefinedInvoiceItemScalarFieldEnum', description: undefined })
