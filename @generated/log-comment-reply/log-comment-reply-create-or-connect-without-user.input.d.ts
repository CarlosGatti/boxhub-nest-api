import { Prisma } from '@prisma/client';
import { LogCommentReplyWhereUniqueInput } from './log-comment-reply-where-unique.input';
import { LogCommentReplyCreateWithoutUserInput } from './log-comment-reply-create-without-user.input';
export declare class LogCommentReplyCreateOrConnectWithoutUserInput {
    where: Prisma.AtLeast<LogCommentReplyWhereUniqueInput, 'id'>;
    create: LogCommentReplyCreateWithoutUserInput;
}
