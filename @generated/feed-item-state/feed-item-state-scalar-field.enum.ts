import { registerEnumType } from '@nestjs/graphql';

export enum FeedItemStateScalarFieldEnum {
    id = "id",
    userId = "userId",
    itemId = "itemId",
    readStatus = "readStatus",
    saveStatus = "saveStatus",
    visibility = "visibility",
    readAt = "readAt",
    savedAt = "savedAt",
    hiddenAt = "hiddenAt",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(FeedItemStateScalarFieldEnum, { name: 'FeedItemStateScalarFieldEnum', description: undefined })
