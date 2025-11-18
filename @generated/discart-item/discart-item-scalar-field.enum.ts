import { registerEnumType } from '@nestjs/graphql';

export enum DiscartItemScalarFieldEnum {
    id = "id",
    title = "title",
    description = "description",
    type = "type",
    price = "price",
    category = "category",
    condition = "condition",
    status = "status",
    imageUrls = "imageUrls",
    pickupAddress = "pickupAddress",
    contactPhone = "contactPhone",
    createdById = "createdById",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(DiscartItemScalarFieldEnum, { name: 'DiscartItemScalarFieldEnum', description: undefined })
