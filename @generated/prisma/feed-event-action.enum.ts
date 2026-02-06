import { registerEnumType } from '@nestjs/graphql';

export enum FeedEventAction {
    OPENED = "OPENED",
    SKIPPED = "SKIPPED"
}


registerEnumType(FeedEventAction, { name: 'FeedEventAction', description: undefined })
