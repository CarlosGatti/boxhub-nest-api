import { StorageRole } from './storage-role.enum';
export declare class NestedEnumStorageRoleFilter {
    equals?: keyof typeof StorageRole;
    in?: Array<keyof typeof StorageRole>;
    notIn?: Array<keyof typeof StorageRole>;
    not?: NestedEnumStorageRoleFilter;
}
