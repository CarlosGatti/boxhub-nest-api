import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumDiscartItemTypeFilter } from '../prisma/enum-discart-item-type-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { EnumDiscartItemConditionFilter } from '../prisma/enum-discart-item-condition-filter.input';
import { EnumDiscartItemStatusFilter } from '../prisma/enum-discart-item-status-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class DiscartItemScalarWhereInput {
    AND?: Array<DiscartItemScalarWhereInput>;
    OR?: Array<DiscartItemScalarWhereInput>;
    NOT?: Array<DiscartItemScalarWhereInput>;
    id?: IntFilter;
    title?: StringFilter;
    description?: StringFilter;
    type?: EnumDiscartItemTypeFilter;
    price?: FloatNullableFilter;
    category?: StringFilter;
    condition?: EnumDiscartItemConditionFilter;
    status?: EnumDiscartItemStatusFilter;
    imageUrls?: StringNullableListFilter;
    pickupAddress?: JsonNullableFilter;
    contactPhone?: StringFilter;
    createdById?: IntFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
}
