import { registerEnumType } from '@nestjs/graphql';

export enum CommentScalarFieldEnum {
    id = "id",
    content = "content",
    discartItemId = "discartItemId",
    userId = "userId",
    parentId = "parentId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(CommentScalarFieldEnum, { name: 'CommentScalarFieldEnum', description: undefined })
