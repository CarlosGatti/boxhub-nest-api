import { registerEnumType } from '@nestjs/graphql';

export enum MaterialEntryScalarFieldEnum {
    id = "id",
    projectId = "projectId",
    name = "name",
    supplier = "supplier",
    quantity = "quantity",
    receivedById = "receivedById",
    receivedAt = "receivedAt",
    note = "note",
    imageUrls = "imageUrls",
    createdAt = "createdAt"
}


registerEnumType(MaterialEntryScalarFieldEnum, { name: 'MaterialEntryScalarFieldEnum', description: undefined })
