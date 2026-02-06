import { registerEnumType } from '@nestjs/graphql';

export enum FeedItemLastAction {
    OPEN = "OPEN",
    READ = "READ",
    SKIP = "SKIP",
    SAVE = "SAVE",
    HIDE = "HIDE"
}


registerEnumType(FeedItemLastAction, { name: 'FeedItemLastAction', description: undefined })
