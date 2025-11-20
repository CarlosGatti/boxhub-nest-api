import { IntFilter } from '../prisma/int-filter.input';
import { EnumStorageRoleFilter } from '../prisma/enum-storage-role-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class StorageMemberScalarWhereInput {
    AND?: Array<StorageMemberScalarWhereInput>;
    OR?: Array<StorageMemberScalarWhereInput>;
    NOT?: Array<StorageMemberScalarWhereInput>;
    id?: IntFilter;
    userId?: IntFilter;
    storageId?: IntFilter;
    role?: EnumStorageRoleFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
}
