import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ContainerRelationFilter } from '../container/container-relation-filter.input';
export declare class ItemWhereInput {
    AND?: Array<ItemWhereInput>;
    OR?: Array<ItemWhereInput>;
    NOT?: Array<ItemWhereInput>;
    id?: IntFilter;
    name?: StringFilter;
    description?: StringFilter;
    imageUrl?: StringFilter;
    quantity?: IntFilter;
    category?: StringFilter;
    containerId?: IntFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    container?: ContainerRelationFilter;
}
