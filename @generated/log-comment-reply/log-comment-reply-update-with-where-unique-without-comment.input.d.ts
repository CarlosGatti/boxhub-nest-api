import { Prisma } from '@prisma/client';
import { LogCommentReplyWhereUniqueInput } from './log-comment-reply-where-unique.input';
import { LogCommentReplyUpdateWithoutCommentInput } from './log-comment-reply-update-without-comment.input';
export declare class LogCommentReplyUpdateWithWhereUniqueWithoutCommentInput {
    where: Prisma.AtLeast<LogCommentReplyWhereUniqueInput, 'id'>;
    data: LogCommentReplyUpdateWithoutCommentInput;
}
