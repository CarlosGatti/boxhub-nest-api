import { LogCommentCreateWithoutLogInput } from './log-comment-create-without-log.input';
import { LogCommentCreateOrConnectWithoutLogInput } from './log-comment-create-or-connect-without-log.input';
import { LogCommentUpsertWithWhereUniqueWithoutLogInput } from './log-comment-upsert-with-where-unique-without-log.input';
import { LogCommentCreateManyLogInputEnvelope } from './log-comment-create-many-log-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LogCommentWhereUniqueInput } from './log-comment-where-unique.input';
import { LogCommentUpdateWithWhereUniqueWithoutLogInput } from './log-comment-update-with-where-unique-without-log.input';
import { LogCommentUpdateManyWithWhereWithoutLogInput } from './log-comment-update-many-with-where-without-log.input';
import { LogCommentScalarWhereInput } from './log-comment-scalar-where.input';
export declare class LogCommentUpdateManyWithoutLogNestedInput {
    create?: Array<LogCommentCreateWithoutLogInput>;
    connectOrCreate?: Array<LogCommentCreateOrConnectWithoutLogInput>;
    upsert?: Array<LogCommentUpsertWithWhereUniqueWithoutLogInput>;
    createMany?: LogCommentCreateManyLogInputEnvelope;
    set?: Array<Prisma.AtLeast<LogCommentWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<LogCommentWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<LogCommentWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<LogCommentWhereUniqueInput, 'id'>>;
    update?: Array<LogCommentUpdateWithWhereUniqueWithoutLogInput>;
    updateMany?: Array<LogCommentUpdateManyWithWhereWithoutLogInput>;
    deleteMany?: Array<LogCommentScalarWhereInput>;
}
