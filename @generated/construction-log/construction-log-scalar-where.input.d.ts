import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumLogTypeFilter } from '../prisma/enum-log-type-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class ConstructionLogScalarWhereInput {
    AND?: Array<ConstructionLogScalarWhereInput>;
    OR?: Array<ConstructionLogScalarWhereInput>;
    NOT?: Array<ConstructionLogScalarWhereInput>;
    id?: IntFilter;
    projectId?: IntFilter;
    userId?: IntFilter;
    title?: StringFilter;
    description?: StringFilter;
    type?: EnumLogTypeFilter;
    images?: JsonNullableFilter;
    createdAt?: DateTimeFilter;
}
