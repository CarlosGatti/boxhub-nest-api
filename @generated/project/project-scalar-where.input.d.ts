import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumProjectStatusFilter } from '../prisma/enum-project-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
export declare class ProjectScalarWhereInput {
    AND?: Array<ProjectScalarWhereInput>;
    OR?: Array<ProjectScalarWhereInput>;
    NOT?: Array<ProjectScalarWhereInput>;
    id?: IntFilter;
    name?: StringFilter;
    client?: StringFilter;
    location?: StringFilter;
    status?: EnumProjectStatusFilter;
    startDate?: DateTimeFilter;
    endDate?: DateTimeNullableFilter;
    responsibleId?: IntFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
}
