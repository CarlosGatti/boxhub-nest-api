import { LogCommentReplyCreateWithoutCommentInput } from './log-comment-reply-create-without-comment.input';
import { LogCommentReplyCreateOrConnectWithoutCommentInput } from './log-comment-reply-create-or-connect-without-comment.input';
import { LogCommentReplyCreateManyCommentInputEnvelope } from './log-comment-reply-create-many-comment-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LogCommentReplyWhereUniqueInput } from './log-comment-reply-where-unique.input';
export declare class LogCommentReplyCreateNestedManyWithoutCommentInput {
    create?: Array<LogCommentReplyCreateWithoutCommentInput>;
    connectOrCreate?: Array<LogCommentReplyCreateOrConnectWithoutCommentInput>;
    createMany?: LogCommentReplyCreateManyCommentInputEnvelope;
    connect?: Array<Prisma.AtLeast<LogCommentReplyWhereUniqueInput, 'id'>>;
}
