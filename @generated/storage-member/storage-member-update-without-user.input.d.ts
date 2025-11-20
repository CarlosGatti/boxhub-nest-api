import { EnumStorageRoleFieldUpdateOperationsInput } from '../prisma/enum-storage-role-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StorageUpdateOneRequiredWithoutMembersNestedInput } from '../storage/storage-update-one-required-without-members-nested.input';
export declare class StorageMemberUpdateWithoutUserInput {
    role?: EnumStorageRoleFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    storage?: StorageUpdateOneRequiredWithoutMembersNestedInput;
}
