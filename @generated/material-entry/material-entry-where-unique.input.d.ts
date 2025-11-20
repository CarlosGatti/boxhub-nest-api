import { MaterialEntryWhereInput } from './material-entry-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { UserNullableRelationFilter } from '../user/user-nullable-relation-filter.input';
import { ProjectRelationFilter } from '../project/project-relation-filter.input';
export declare class MaterialEntryWhereUniqueInput {
    id?: number;
    AND?: Array<MaterialEntryWhereInput>;
    OR?: Array<MaterialEntryWhereInput>;
    NOT?: Array<MaterialEntryWhereInput>;
    projectId?: IntFilter;
    name?: StringFilter;
    supplier?: StringFilter;
    quantity?: FloatFilter;
    receivedById?: IntNullableFilter;
    receivedAt?: DateTimeFilter;
    note?: StringNullableFilter;
    imageUrls?: JsonNullableFilter;
    createdAt?: DateTimeFilter;
    receivedBy?: UserNullableRelationFilter;
    project?: ProjectRelationFilter;
}
