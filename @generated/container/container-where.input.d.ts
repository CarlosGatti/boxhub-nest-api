import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StorageRelationFilter } from '../storage/storage-relation-filter.input';
import { CategoryListRelationFilter } from '../category/category-list-relation-filter.input';
import { ItemListRelationFilter } from '../item/item-list-relation-filter.input';
export declare class ContainerWhereInput {
    AND?: Array<ContainerWhereInput>;
    OR?: Array<ContainerWhereInput>;
    NOT?: Array<ContainerWhereInput>;
    id?: IntFilter;
    name?: StringFilter;
    description?: StringFilter;
    qrCode?: StringFilter;
    code?: StringFilter;
    storageId?: IntFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    storage?: StorageRelationFilter;
    categories?: CategoryListRelationFilter;
    items?: ItemListRelationFilter;
}
