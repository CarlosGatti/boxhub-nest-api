import { Prisma } from '@prisma/client';
import { LogCommentReplyWhereUniqueInput } from './log-comment-reply-where-unique.input';
import { LogCommentReplyUpdateWithoutUserInput } from './log-comment-reply-update-without-user.input';
import { LogCommentReplyCreateWithoutUserInput } from './log-comment-reply-create-without-user.input';
export declare class LogCommentReplyUpsertWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<LogCommentReplyWhereUniqueInput, 'id'>;
    update: LogCommentReplyUpdateWithoutUserInput;
    create: LogCommentReplyCreateWithoutUserInput;
}
