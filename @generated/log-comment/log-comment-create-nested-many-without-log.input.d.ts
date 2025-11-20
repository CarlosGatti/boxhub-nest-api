import { LogCommentCreateWithoutLogInput } from './log-comment-create-without-log.input';
import { LogCommentCreateOrConnectWithoutLogInput } from './log-comment-create-or-connect-without-log.input';
import { LogCommentCreateManyLogInputEnvelope } from './log-comment-create-many-log-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LogCommentWhereUniqueInput } from './log-comment-where-unique.input';
export declare class LogCommentCreateNestedManyWithoutLogInput {
    create?: Array<LogCommentCreateWithoutLogInput>;
    connectOrCreate?: Array<LogCommentCreateOrConnectWithoutLogInput>;
    createMany?: LogCommentCreateManyLogInputEnvelope;
    connect?: Array<Prisma.AtLeast<LogCommentWhereUniqueInput, 'id'>>;
}
