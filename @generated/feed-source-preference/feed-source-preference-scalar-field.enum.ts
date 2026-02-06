import { registerEnumType } from '@nestjs/graphql';

export enum FeedSourcePreferenceScalarFieldEnum {
    id = "id",
    userId = "userId",
    sourceId = "sourceId",
    notifyOnNew = "notifyOnNew",
    isMuted = "isMuted",
    mutedUntil = "mutedUntil",
    consecutiveSkips = "consecutiveSkips",
    lastInteractedAt = "lastInteractedAt",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(FeedSourcePreferenceScalarFieldEnum, { name: 'FeedSourcePreferenceScalarFieldEnum', description: undefined })
