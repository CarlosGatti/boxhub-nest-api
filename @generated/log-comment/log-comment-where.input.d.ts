import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ConstructionLogRelationFilter } from '../construction-log/construction-log-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { LogCommentReplyListRelationFilter } from '../log-comment-reply/log-comment-reply-list-relation-filter.input';
export declare class LogCommentWhereInput {
    AND?: Array<LogCommentWhereInput>;
    OR?: Array<LogCommentWhereInput>;
    NOT?: Array<LogCommentWhereInput>;
    id?: IntFilter;
    logId?: IntFilter;
    userId?: IntFilter;
    content?: StringFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    log?: ConstructionLogRelationFilter;
    user?: UserRelationFilter;
    replies?: LogCommentReplyListRelationFilter;
}
