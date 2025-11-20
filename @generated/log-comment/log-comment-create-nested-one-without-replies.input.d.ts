import { LogCommentCreateWithoutRepliesInput } from './log-comment-create-without-replies.input';
import { LogCommentCreateOrConnectWithoutRepliesInput } from './log-comment-create-or-connect-without-replies.input';
import { Prisma } from '@prisma/client';
import { LogCommentWhereUniqueInput } from './log-comment-where-unique.input';
export declare class LogCommentCreateNestedOneWithoutRepliesInput {
    create?: LogCommentCreateWithoutRepliesInput;
    connectOrCreate?: LogCommentCreateOrConnectWithoutRepliesInput;
    connect?: Prisma.AtLeast<LogCommentWhereUniqueInput, 'id'>;
}
