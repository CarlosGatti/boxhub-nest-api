import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { LogCommentRelationFilter } from '../log-comment/log-comment-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
export declare class LogCommentReplyWhereInput {
    AND?: Array<LogCommentReplyWhereInput>;
    OR?: Array<LogCommentReplyWhereInput>;
    NOT?: Array<LogCommentReplyWhereInput>;
    id?: IntFilter;
    commentId?: IntFilter;
    userId?: IntFilter;
    content?: StringFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    comment?: LogCommentRelationFilter;
    user?: UserRelationFilter;
}
