import { registerEnumType } from '@nestjs/graphql';

export enum FeedItemScalarFieldEnum {
    id = "id",
    sourceId = "sourceId",
    type = "type",
    status = "status",
    title = "title",
    canonicalUrl = "canonicalUrl",
    publishedAt = "publishedAt",
    contentText = "contentText",
    imageUrl = "imageUrl",
    metrics = "metrics",
    contentHash = "contentHash",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(FeedItemScalarFieldEnum, { name: 'FeedItemScalarFieldEnum', description: undefined })
