import { CategoryWhereInput } from './category-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ContainerListRelationFilter } from '../container/container-list-relation-filter.input';
export declare class CategoryWhereUniqueInput {
    id?: number;
    AND?: Array<CategoryWhereInput>;
    OR?: Array<CategoryWhereInput>;
    NOT?: Array<CategoryWhereInput>;
    name?: StringFilter;
    description?: StringNullableFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    containers?: ContainerListRelationFilter;
}
