import { registerEnumType } from '@nestjs/graphql';

export enum FeedItemType {
    ARTICLE = "ARTICLE",
    VIDEO = "VIDEO",
    POST = "POST"
}


registerEnumType(FeedItemType, { name: 'FeedItemType', description: undefined })
