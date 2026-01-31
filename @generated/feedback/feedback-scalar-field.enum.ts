import { registerEnumType } from '@nestjs/graphql';

export enum FeedbackScalarFieldEnum {
    id = "id",
    targetAppId = "targetAppId",
    userId = "userId",
    anonymousId = "anonymousId",
    contactEmail = "contactEmail",
    rating = "rating",
    message = "message",
    tags = "tags",
    contextPath = "contextPath",
    metadata = "metadata",
    status = "status",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(FeedbackScalarFieldEnum, { name: 'FeedbackScalarFieldEnum', description: undefined })
