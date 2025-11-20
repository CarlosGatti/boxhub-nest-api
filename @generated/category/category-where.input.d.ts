import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ContainerListRelationFilter } from '../container/container-list-relation-filter.input';
export declare class CategoryWhereInput {
    AND?: Array<CategoryWhereInput>;
    OR?: Array<CategoryWhereInput>;
    NOT?: Array<CategoryWhereInput>;
    id?: IntFilter;
    name?: StringFilter;
    description?: StringNullableFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    containers?: ContainerListRelationFilter;
}
