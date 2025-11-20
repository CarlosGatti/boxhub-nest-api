import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class CategoryScalarWhereInput {
    AND?: Array<CategoryScalarWhereInput>;
    OR?: Array<CategoryScalarWhereInput>;
    NOT?: Array<CategoryScalarWhereInput>;
    id?: IntFilter;
    name?: StringFilter;
    description?: StringNullableFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
}
