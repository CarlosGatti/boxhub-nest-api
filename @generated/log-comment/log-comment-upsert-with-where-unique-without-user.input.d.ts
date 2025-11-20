import { Prisma } from '@prisma/client';
import { LogCommentWhereUniqueInput } from './log-comment-where-unique.input';
import { LogCommentUpdateWithoutUserInput } from './log-comment-update-without-user.input';
import { LogCommentCreateWithoutUserInput } from './log-comment-create-without-user.input';
export declare class LogCommentUpsertWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<LogCommentWhereUniqueInput, 'id'>;
    update: LogCommentUpdateWithoutUserInput;
    create: LogCommentCreateWithoutUserInput;
}
