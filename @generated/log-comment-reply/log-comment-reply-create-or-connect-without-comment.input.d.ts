import { Prisma } from '@prisma/client';
import { LogCommentReplyWhereUniqueInput } from './log-comment-reply-where-unique.input';
import { LogCommentReplyCreateWithoutCommentInput } from './log-comment-reply-create-without-comment.input';
export declare class LogCommentReplyCreateOrConnectWithoutCommentInput {
    where: Prisma.AtLeast<LogCommentReplyWhereUniqueInput, 'id'>;
    create: LogCommentReplyCreateWithoutCommentInput;
}
