import { registerEnumType } from '@nestjs/graphql';

export enum LogCommentScalarFieldEnum {
    id = "id",
    logId = "logId",
    userId = "userId",
    content = "content",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(LogCommentScalarFieldEnum, { name: 'LogCommentScalarFieldEnum', description: undefined })
