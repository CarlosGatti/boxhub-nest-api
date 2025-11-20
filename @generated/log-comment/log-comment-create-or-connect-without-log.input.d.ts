import { Prisma } from '@prisma/client';
import { LogCommentWhereUniqueInput } from './log-comment-where-unique.input';
import { LogCommentCreateWithoutLogInput } from './log-comment-create-without-log.input';
export declare class LogCommentCreateOrConnectWithoutLogInput {
    where: Prisma.AtLeast<LogCommentWhereUniqueInput, 'id'>;
    create: LogCommentCreateWithoutLogInput;
}
