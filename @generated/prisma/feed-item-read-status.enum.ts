import { registerEnumType } from '@nestjs/graphql';

export enum FeedItemReadStatus {
    UNREAD = "UNREAD",
    READ = "READ"
}


registerEnumType(FeedItemReadStatus, { name: 'FeedItemReadStatus', description: undefined })
