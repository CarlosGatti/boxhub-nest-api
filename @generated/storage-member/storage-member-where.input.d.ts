import { IntFilter } from '../prisma/int-filter.input';
import { EnumStorageRoleFilter } from '../prisma/enum-storage-role-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { StorageRelationFilter } from '../storage/storage-relation-filter.input';
export declare class StorageMemberWhereInput {
    AND?: Array<StorageMemberWhereInput>;
    OR?: Array<StorageMemberWhereInput>;
    NOT?: Array<StorageMemberWhereInput>;
    id?: IntFilter;
    userId?: IntFilter;
    storageId?: IntFilter;
    role?: EnumStorageRoleFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    user?: UserRelationFilter;
    storage?: StorageRelationFilter;
}
