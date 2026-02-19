import { registerEnumType } from '@nestjs/graphql';

export enum BucketVisionSectionScalarFieldEnum {
    id = "id",
    boardId = "boardId",
    type = "type",
    title = "title",
    content = "content",
    order = "order",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(BucketVisionSectionScalarFieldEnum, { name: 'BucketVisionSectionScalarFieldEnum', description: undefined })
