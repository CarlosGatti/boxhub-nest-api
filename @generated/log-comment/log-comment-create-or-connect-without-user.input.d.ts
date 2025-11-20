import { Prisma } from '@prisma/client';
import { LogCommentWhereUniqueInput } from './log-comment-where-unique.input';
import { LogCommentCreateWithoutUserInput } from './log-comment-create-without-user.input';
export declare class LogCommentCreateOrConnectWithoutUserInput {
    where: Prisma.AtLeast<LogCommentWhereUniqueInput, 'id'>;
    create: LogCommentCreateWithoutUserInput;
}
