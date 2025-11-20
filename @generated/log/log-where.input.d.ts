import { IntFilter } from '../prisma/int-filter.input';
import { EnumLogActionFilter } from '../prisma/enum-log-action-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserNullableRelationFilter } from '../user/user-nullable-relation-filter.input';
export declare class LogWhereInput {
    AND?: Array<LogWhereInput>;
    OR?: Array<LogWhereInput>;
    NOT?: Array<LogWhereInput>;
    id?: IntFilter;
    action?: EnumLogActionFilter;
    userId?: IntNullableFilter;
    details?: StringNullableFilter;
    route?: StringNullableFilter;
    metadata?: JsonNullableFilter;
    ipAddress?: StringNullableFilter;
    createdAt?: DateTimeFilter;
    user?: UserNullableRelationFilter;
}
