import { registerEnumType } from '@nestjs/graphql';

export enum FeedSourceScalarFieldEnum {
    id = "id",
    collectionId = "collectionId",
    type = "type",
    name = "name",
    url = "url",
    isActive = "isActive",
    includeShorts = "includeShorts",
    fetchEveryMin = "fetchEveryMin",
    lastFetchedAt = "lastFetchedAt",
    failureCount = "failureCount",
    metadata = "metadata",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(FeedSourceScalarFieldEnum, { name: 'FeedSourceScalarFieldEnum', description: undefined })
