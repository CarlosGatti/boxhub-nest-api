import { registerEnumType } from '@nestjs/graphql';

export enum FeedSourceNudgeScalarFieldEnum {
    id = "id",
    userId = "userId",
    sourceId = "sourceId",
    reason = "reason",
    status = "status",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(FeedSourceNudgeScalarFieldEnum, { name: 'FeedSourceNudgeScalarFieldEnum', description: undefined })
