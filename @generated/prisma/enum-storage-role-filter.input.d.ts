import { StorageRole } from './storage-role.enum';
import { NestedEnumStorageRoleFilter } from './nested-enum-storage-role-filter.input';
export declare class EnumStorageRoleFilter {
    equals?: keyof typeof StorageRole;
    in?: Array<keyof typeof StorageRole>;
    notIn?: Array<keyof typeof StorageRole>;
    not?: NestedEnumStorageRoleFilter;
}
