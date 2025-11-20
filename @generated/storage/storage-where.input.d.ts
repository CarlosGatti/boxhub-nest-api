import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StorageMemberListRelationFilter } from '../storage-member/storage-member-list-relation-filter.input';
import { ContainerListRelationFilter } from '../container/container-list-relation-filter.input';
export declare class StorageWhereInput {
    AND?: Array<StorageWhereInput>;
    OR?: Array<StorageWhereInput>;
    NOT?: Array<StorageWhereInput>;
    id?: IntFilter;
    name?: StringFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    members?: StorageMemberListRelationFilter;
    containers?: ContainerListRelationFilter;
}
