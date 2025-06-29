import { registerEnumType } from '@nestjs/graphql';

export enum LogCommentReplyScalarFieldEnum {
    id = "id",
    commentId = "commentId",
    userId = "userId",
    content = "content",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(LogCommentReplyScalarFieldEnum, { name: 'LogCommentReplyScalarFieldEnum', description: undefined })
