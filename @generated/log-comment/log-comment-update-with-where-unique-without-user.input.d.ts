import { Prisma } from '@prisma/client';
import { LogCommentWhereUniqueInput } from './log-comment-where-unique.input';
import { LogCommentUpdateWithoutUserInput } from './log-comment-update-without-user.input';
export declare class LogCommentUpdateWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<LogCommentWhereUniqueInput, 'id'>;
    data: LogCommentUpdateWithoutUserInput;
}
