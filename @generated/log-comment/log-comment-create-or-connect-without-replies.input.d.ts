import { Prisma } from '@prisma/client';
import { LogCommentWhereUniqueInput } from './log-comment-where-unique.input';
import { LogCommentCreateWithoutRepliesInput } from './log-comment-create-without-replies.input';
export declare class LogCommentCreateOrConnectWithoutRepliesInput {
    where: Prisma.AtLeast<LogCommentWhereUniqueInput, 'id'>;
    create: LogCommentCreateWithoutRepliesInput;
}
