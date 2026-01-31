import { registerEnumType } from '@nestjs/graphql';

export enum FeedItemSaveStatus {
    NONE = "NONE",
    SAVED = "SAVED"
}


registerEnumType(FeedItemSaveStatus, { name: 'FeedItemSaveStatus', description: undefined })
