import { registerEnumType } from '@nestjs/graphql';

export enum BucketVisionItemScalarFieldEnum {
    id = "id",
    boardId = "boardId",
    type = "type",
    text = "text",
    url = "url",
    color = "color",
    metadata = "metadata",
    order = "order",
    layout = "layout",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(BucketVisionItemScalarFieldEnum, { name: 'BucketVisionItemScalarFieldEnum', description: undefined })
