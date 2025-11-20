import { StorageMemberUserIdStorageIdCompoundUniqueInput } from './storage-member-user-id-storage-id-compound-unique.input';
import { StorageMemberWhereInput } from './storage-member-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumStorageRoleFilter } from '../prisma/enum-storage-role-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { StorageRelationFilter } from '../storage/storage-relation-filter.input';
export declare class StorageMemberWhereUniqueInput {
    id?: number;
    userId_storageId?: StorageMemberUserIdStorageIdCompoundUniqueInput;
    AND?: Array<StorageMemberWhereInput>;
    OR?: Array<StorageMemberWhereInput>;
    NOT?: Array<StorageMemberWhereInput>;
    userId?: IntFilter;
    storageId?: IntFilter;
    role?: EnumStorageRoleFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    user?: UserRelationFilter;
    storage?: StorageRelationFilter;
}
