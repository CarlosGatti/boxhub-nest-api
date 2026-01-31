import { registerEnumType } from '@nestjs/graphql';

export enum FeedbackStatus {
    PENDING = "PENDING",
    PUBLISHED = "PUBLISHED",
    HIDDEN = "HIDDEN",
    SPAM = "SPAM"
}


registerEnumType(FeedbackStatus, { name: 'FeedbackStatus', description: undefined })
