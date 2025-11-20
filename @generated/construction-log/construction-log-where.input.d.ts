import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumLogTypeFilter } from '../prisma/enum-log-type-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProjectRelationFilter } from '../project/project-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { LogCommentListRelationFilter } from '../log-comment/log-comment-list-relation-filter.input';
export declare class ConstructionLogWhereInput {
    AND?: Array<ConstructionLogWhereInput>;
    OR?: Array<ConstructionLogWhereInput>;
    NOT?: Array<ConstructionLogWhereInput>;
    id?: IntFilter;
    projectId?: IntFilter;
    userId?: IntFilter;
    title?: StringFilter;
    description?: StringFilter;
    type?: EnumLogTypeFilter;
    images?: JsonNullableFilter;
    createdAt?: DateTimeFilter;
    project?: ProjectRelationFilter;
    user?: UserRelationFilter;
    comments?: LogCommentListRelationFilter;
}
