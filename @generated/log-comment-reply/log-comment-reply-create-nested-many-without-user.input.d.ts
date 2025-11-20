import { LogCommentReplyCreateWithoutUserInput } from './log-comment-reply-create-without-user.input';
import { LogCommentReplyCreateOrConnectWithoutUserInput } from './log-comment-reply-create-or-connect-without-user.input';
import { LogCommentReplyCreateManyUserInputEnvelope } from './log-comment-reply-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LogCommentReplyWhereUniqueInput } from './log-comment-reply-where-unique.input';
export declare class LogCommentReplyCreateNestedManyWithoutUserInput {
    create?: Array<LogCommentReplyCreateWithoutUserInput>;
    connectOrCreate?: Array<LogCommentReplyCreateOrConnectWithoutUserInput>;
    createMany?: LogCommentReplyCreateManyUserInputEnvelope;
    connect?: Array<Prisma.AtLeast<LogCommentReplyWhereUniqueInput, 'id'>>;
}
