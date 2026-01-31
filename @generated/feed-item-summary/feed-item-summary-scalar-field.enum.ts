import { registerEnumType } from '@nestjs/graphql';

export enum FeedItemSummaryScalarFieldEnum {
    id = "id",
    itemId = "itemId",
    summary = "summary",
    metadata = "metadata",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(FeedItemSummaryScalarFieldEnum, { name: 'FeedItemSummaryScalarFieldEnum', description: undefined })
