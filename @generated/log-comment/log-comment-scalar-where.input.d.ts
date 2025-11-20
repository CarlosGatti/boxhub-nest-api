import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class LogCommentScalarWhereInput {
    AND?: Array<LogCommentScalarWhereInput>;
    OR?: Array<LogCommentScalarWhereInput>;
    NOT?: Array<LogCommentScalarWhereInput>;
    id?: IntFilter;
    logId?: IntFilter;
    userId?: IntFilter;
    content?: StringFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
}
