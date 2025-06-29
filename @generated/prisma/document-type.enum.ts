import { registerEnumType } from '@nestjs/graphql';

export enum DocumentType {
    CONTRACT = "CONTRACT",
    PERMIT = "PERMIT",
    INVOICE = "INVOICE",
    PLAN = "PLAN",
    PHOTO = "PHOTO",
    OTHER = "OTHER"
}


registerEnumType(DocumentType, { name: 'DocumentType', description: undefined })
