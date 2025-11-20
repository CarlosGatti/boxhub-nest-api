import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
export declare class MaterialEntryScalarWhereInput {
    AND?: Array<MaterialEntryScalarWhereInput>;
    OR?: Array<MaterialEntryScalarWhereInput>;
    NOT?: Array<MaterialEntryScalarWhereInput>;
    id?: IntFilter;
    projectId?: IntFilter;
    name?: StringFilter;
    supplier?: StringFilter;
    quantity?: FloatFilter;
    receivedById?: IntNullableFilter;
    receivedAt?: DateTimeFilter;
    note?: StringNullableFilter;
    imageUrls?: JsonNullableFilter;
    createdAt?: DateTimeFilter;
}
