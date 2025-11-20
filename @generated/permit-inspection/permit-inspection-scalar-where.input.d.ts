import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumPermitKindFilter } from '../prisma/enum-permit-kind-filter.input';
import { EnumPermitStatusFilter } from '../prisma/enum-permit-status-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class PermitInspectionScalarWhereInput {
    AND?: Array<PermitInspectionScalarWhereInput>;
    OR?: Array<PermitInspectionScalarWhereInput>;
    NOT?: Array<PermitInspectionScalarWhereInput>;
    id?: IntFilter;
    projectId?: IntFilter;
    number?: StringFilter;
    kind?: EnumPermitKindFilter;
    status?: EnumPermitStatusFilter;
    requestedAt?: DateTimeNullableFilter;
    approvedAt?: DateTimeNullableFilter;
    fileUrl?: StringNullableFilter;
    responsibleId?: IntNullableFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
}
