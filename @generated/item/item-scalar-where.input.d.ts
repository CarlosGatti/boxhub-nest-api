import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class ItemScalarWhereInput {
    AND?: Array<ItemScalarWhereInput>;
    OR?: Array<ItemScalarWhereInput>;
    NOT?: Array<ItemScalarWhereInput>;
    id?: IntFilter;
    name?: StringFilter;
    description?: StringFilter;
    imageUrl?: StringFilter;
    quantity?: IntFilter;
    category?: StringFilter;
    containerId?: IntFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
}
