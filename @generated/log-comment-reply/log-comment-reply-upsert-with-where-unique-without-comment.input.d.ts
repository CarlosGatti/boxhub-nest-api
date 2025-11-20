import { Prisma } from '@prisma/client';
import { LogCommentReplyWhereUniqueInput } from './log-comment-reply-where-unique.input';
import { LogCommentReplyUpdateWithoutCommentInput } from './log-comment-reply-update-without-comment.input';
import { LogCommentReplyCreateWithoutCommentInput } from './log-comment-reply-create-without-comment.input';
export declare class LogCommentReplyUpsertWithWhereUniqueWithoutCommentInput {
    where: Prisma.AtLeast<LogCommentReplyWhereUniqueInput, 'id'>;
    update: LogCommentReplyUpdateWithoutCommentInput;
    create: LogCommentReplyCreateWithoutCommentInput;
}
