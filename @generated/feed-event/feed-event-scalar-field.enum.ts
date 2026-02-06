import { registerEnumType } from '@nestjs/graphql';

export enum FeedEventScalarFieldEnum {
    id = "id",
    userId = "userId",
    itemId = "itemId",
    sourceId = "sourceId",
    action = "action",
    createdAt = "createdAt"
}


registerEnumType(FeedEventScalarFieldEnum, { name: 'FeedEventScalarFieldEnum', description: undefined })
