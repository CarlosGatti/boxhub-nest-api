import { PermitInspectionWhereInput } from './permit-inspection-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumPermitKindFilter } from '../prisma/enum-permit-kind-filter.input';
import { EnumPermitStatusFilter } from '../prisma/enum-permit-status-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserNullableRelationFilter } from '../user/user-nullable-relation-filter.input';
import { ProjectRelationFilter } from '../project/project-relation-filter.input';
export declare class PermitInspectionWhereUniqueInput {
    id?: number;
    AND?: Array<PermitInspectionWhereInput>;
    OR?: Array<PermitInspectionWhereInput>;
    NOT?: Array<PermitInspectionWhereInput>;
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
    responsible?: UserNullableRelationFilter;
    project?: ProjectRelationFilter;
}
