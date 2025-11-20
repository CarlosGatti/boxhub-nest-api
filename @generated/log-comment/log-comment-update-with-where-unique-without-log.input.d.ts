import { Prisma } from '@prisma/client';
import { LogCommentWhereUniqueInput } from './log-comment-where-unique.input';
import { LogCommentUpdateWithoutLogInput } from './log-comment-update-without-log.input';
export declare class LogCommentUpdateWithWhereUniqueWithoutLogInput {
    where: Prisma.AtLeast<LogCommentWhereUniqueInput, 'id'>;
    data: LogCommentUpdateWithoutLogInput;
}
