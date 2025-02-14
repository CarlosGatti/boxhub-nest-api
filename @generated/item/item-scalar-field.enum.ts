import { registerEnumType } from '@nestjs/graphql';

export enum ItemScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    imageUrl = "imageUrl",
    quantity = "quantity",
    category = "category",
    containerId = "containerId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ItemScalarFieldEnum, { name: 'ItemScalarFieldEnum', description: undefined })
