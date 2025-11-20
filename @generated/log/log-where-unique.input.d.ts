import { LogWhereInput } from './log-where.input';
import { EnumLogActionFilter } from '../prisma/enum-log-action-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserNullableRelationFilter } from '../user/user-nullable-relation-filter.input';
export declare class LogWhereUniqueInput {
    id?: number;
    AND?: Array<LogWhereInput>;
    OR?: Array<LogWhereInput>;
    NOT?: Array<LogWhereInput>;
    action?: EnumLogActionFilter;
    userId?: IntNullableFilter;
    details?: StringNullableFilter;
    route?: StringNullableFilter;
    metadata?: JsonNullableFilter;
    ipAddress?: StringNullableFilter;
    createdAt?: DateTimeFilter;
    user?: UserNullableRelationFilter;
}
