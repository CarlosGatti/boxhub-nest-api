import { Prisma } from '@prisma/client';
import { LogCommentReplyWhereUniqueInput } from './log-comment-reply-where-unique.input';
import { LogCommentReplyUpdateWithoutUserInput } from './log-comment-reply-update-without-user.input';
export declare class LogCommentReplyUpdateWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<LogCommentReplyWhereUniqueInput, 'id'>;
    data: LogCommentReplyUpdateWithoutUserInput;
}
