import { LogCommentCreateWithoutRepliesInput } from './log-comment-create-without-replies.input';
import { LogCommentCreateOrConnectWithoutRepliesInput } from './log-comment-create-or-connect-without-replies.input';
import { LogCommentUpsertWithoutRepliesInput } from './log-comment-upsert-without-replies.input';
import { Prisma } from '@prisma/client';
import { LogCommentWhereUniqueInput } from './log-comment-where-unique.input';
import { LogCommentUpdateToOneWithWhereWithoutRepliesInput } from './log-comment-update-to-one-with-where-without-replies.input';
export declare class LogCommentUpdateOneRequiredWithoutRepliesNestedInput {
    create?: LogCommentCreateWithoutRepliesInput;
    connectOrCreate?: LogCommentCreateOrConnectWithoutRepliesInput;
    upsert?: LogCommentUpsertWithoutRepliesInput;
    connect?: Prisma.AtLeast<LogCommentWhereUniqueInput, 'id'>;
    update?: LogCommentUpdateToOneWithWhereWithoutRepliesInput;
}
