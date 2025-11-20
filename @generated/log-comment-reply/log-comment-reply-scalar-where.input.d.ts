import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class LogCommentReplyScalarWhereInput {
    AND?: Array<LogCommentReplyScalarWhereInput>;
    OR?: Array<LogCommentReplyScalarWhereInput>;
    NOT?: Array<LogCommentReplyScalarWhereInput>;
    id?: IntFilter;
    commentId?: IntFilter;
    userId?: IntFilter;
    content?: StringFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
}
