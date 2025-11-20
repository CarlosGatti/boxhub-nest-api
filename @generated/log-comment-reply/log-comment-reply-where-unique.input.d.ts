import { LogCommentReplyWhereInput } from './log-comment-reply-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { LogCommentRelationFilter } from '../log-comment/log-comment-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
export declare class LogCommentReplyWhereUniqueInput {
    id?: number;
    AND?: Array<LogCommentReplyWhereInput>;
    OR?: Array<LogCommentReplyWhereInput>;
    NOT?: Array<LogCommentReplyWhereInput>;
    commentId?: IntFilter;
    userId?: IntFilter;
    content?: StringFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    comment?: LogCommentRelationFilter;
    user?: UserRelationFilter;
}
