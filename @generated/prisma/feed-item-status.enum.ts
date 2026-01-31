import { registerEnumType } from '@nestjs/graphql';

export enum FeedItemStatus {
    ACTIVE = "ACTIVE",
    REMOVED = "REMOVED"
}


registerEnumType(FeedItemStatus, { name: 'FeedItemStatus', description: undefined })
