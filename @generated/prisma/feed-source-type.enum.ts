import { registerEnumType } from '@nestjs/graphql';

export enum FeedSourceType {
    RSS = "RSS",
    YOUTUBE_CHANNEL = "YOUTUBE_CHANNEL",
    YOUTUBE_PLAYLIST = "YOUTUBE_PLAYLIST",
    GOOGLE_NEWS_RSS = "GOOGLE_NEWS_RSS",
    CUSTOM = "CUSTOM"
}


registerEnumType(FeedSourceType, { name: 'FeedSourceType', description: undefined })
