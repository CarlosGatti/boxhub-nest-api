import { LogCommentCreateWithoutUserInput } from './log-comment-create-without-user.input';
import { LogCommentCreateOrConnectWithoutUserInput } from './log-comment-create-or-connect-without-user.input';
import { LogCommentUpsertWithWhereUniqueWithoutUserInput } from './log-comment-upsert-with-where-unique-without-user.input';
import { LogCommentCreateManyUserInputEnvelope } from './log-comment-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LogCommentWhereUniqueInput } from './log-comment-where-unique.input';
import { LogCommentUpdateWithWhereUniqueWithoutUserInput } from './log-comment-update-with-where-unique-without-user.input';
import { LogCommentUpdateManyWithWhereWithoutUserInput } from './log-comment-update-many-with-where-without-user.input';
import { LogCommentScalarWhereInput } from './log-comment-scalar-where.input';
export declare class LogCommentUpdateManyWithoutUserNestedInput {
    create?: Array<LogCommentCreateWithoutUserInput>;
    connectOrCreate?: Array<LogCommentCreateOrConnectWithoutUserInput>;
    upsert?: Array<LogCommentUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: LogCommentCreateManyUserInputEnvelope;
    set?: Array<Prisma.AtLeast<LogCommentWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<LogCommentWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<LogCommentWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<LogCommentWhereUniqueInput, 'id'>>;
    update?: Array<LogCommentUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<LogCommentUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<LogCommentScalarWhereInput>;
}
