import { LogCommentCreateWithoutUserInput } from './log-comment-create-without-user.input';
import { LogCommentCreateOrConnectWithoutUserInput } from './log-comment-create-or-connect-without-user.input';
import { LogCommentCreateManyUserInputEnvelope } from './log-comment-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LogCommentWhereUniqueInput } from './log-comment-where-unique.input';
export declare class LogCommentCreateNestedManyWithoutUserInput {
    create?: Array<LogCommentCreateWithoutUserInput>;
    connectOrCreate?: Array<LogCommentCreateOrConnectWithoutUserInput>;
    createMany?: LogCommentCreateManyUserInputEnvelope;
    connect?: Array<Prisma.AtLeast<LogCommentWhereUniqueInput, 'id'>>;
}
