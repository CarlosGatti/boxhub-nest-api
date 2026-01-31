import { registerEnumType } from '@nestjs/graphql';

export enum FeedItemVisibility {
    VISIBLE = "VISIBLE",
    HIDDEN = "HIDDEN"
}


registerEnumType(FeedItemVisibility, { name: 'FeedItemVisibility', description: undefined })
