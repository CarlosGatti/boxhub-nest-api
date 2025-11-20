import { LogCommentReplyCreateWithoutCommentInput } from './log-comment-reply-create-without-comment.input';
import { LogCommentReplyCreateOrConnectWithoutCommentInput } from './log-comment-reply-create-or-connect-without-comment.input';
import { LogCommentReplyUpsertWithWhereUniqueWithoutCommentInput } from './log-comment-reply-upsert-with-where-unique-without-comment.input';
import { LogCommentReplyCreateManyCommentInputEnvelope } from './log-comment-reply-create-many-comment-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LogCommentReplyWhereUniqueInput } from './log-comment-reply-where-unique.input';
import { LogCommentReplyUpdateWithWhereUniqueWithoutCommentInput } from './log-comment-reply-update-with-where-unique-without-comment.input';
import { LogCommentReplyUpdateManyWithWhereWithoutCommentInput } from './log-comment-reply-update-many-with-where-without-comment.input';
import { LogCommentReplyScalarWhereInput } from './log-comment-reply-scalar-where.input';
export declare class LogCommentReplyUpdateManyWithoutCommentNestedInput {
    create?: Array<LogCommentReplyCreateWithoutCommentInput>;
    connectOrCreate?: Array<LogCommentReplyCreateOrConnectWithoutCommentInput>;
    upsert?: Array<LogCommentReplyUpsertWithWhereUniqueWithoutCommentInput>;
    createMany?: LogCommentReplyCreateManyCommentInputEnvelope;
    set?: Array<Prisma.AtLeast<LogCommentReplyWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<LogCommentReplyWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<LogCommentReplyWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<LogCommentReplyWhereUniqueInput, 'id'>>;
    update?: Array<LogCommentReplyUpdateWithWhereUniqueWithoutCommentInput>;
    updateMany?: Array<LogCommentReplyUpdateManyWithWhereWithoutCommentInput>;
    deleteMany?: Array<LogCommentReplyScalarWhereInput>;
}
