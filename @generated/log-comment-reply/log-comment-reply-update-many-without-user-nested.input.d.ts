import { LogCommentReplyCreateWithoutUserInput } from './log-comment-reply-create-without-user.input';
import { LogCommentReplyCreateOrConnectWithoutUserInput } from './log-comment-reply-create-or-connect-without-user.input';
import { LogCommentReplyUpsertWithWhereUniqueWithoutUserInput } from './log-comment-reply-upsert-with-where-unique-without-user.input';
import { LogCommentReplyCreateManyUserInputEnvelope } from './log-comment-reply-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LogCommentReplyWhereUniqueInput } from './log-comment-reply-where-unique.input';
import { LogCommentReplyUpdateWithWhereUniqueWithoutUserInput } from './log-comment-reply-update-with-where-unique-without-user.input';
import { LogCommentReplyUpdateManyWithWhereWithoutUserInput } from './log-comment-reply-update-many-with-where-without-user.input';
import { LogCommentReplyScalarWhereInput } from './log-comment-reply-scalar-where.input';
export declare class LogCommentReplyUpdateManyWithoutUserNestedInput {
    create?: Array<LogCommentReplyCreateWithoutUserInput>;
    connectOrCreate?: Array<LogCommentReplyCreateOrConnectWithoutUserInput>;
    upsert?: Array<LogCommentReplyUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: LogCommentReplyCreateManyUserInputEnvelope;
    set?: Array<Prisma.AtLeast<LogCommentReplyWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<LogCommentReplyWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<LogCommentReplyWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<LogCommentReplyWhereUniqueInput, 'id'>>;
    update?: Array<LogCommentReplyUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<LogCommentReplyUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<LogCommentReplyScalarWhereInput>;
}
