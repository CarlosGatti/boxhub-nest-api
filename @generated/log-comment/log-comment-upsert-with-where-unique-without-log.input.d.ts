import { Prisma } from '@prisma/client';
import { LogCommentWhereUniqueInput } from './log-comment-where-unique.input';
import { LogCommentUpdateWithoutLogInput } from './log-comment-update-without-log.input';
import { LogCommentCreateWithoutLogInput } from './log-comment-create-without-log.input';
export declare class LogCommentUpsertWithWhereUniqueWithoutLogInput {
    where: Prisma.AtLeast<LogCommentWhereUniqueInput, 'id'>;
    update: LogCommentUpdateWithoutLogInput;
    create: LogCommentCreateWithoutLogInput;
}
