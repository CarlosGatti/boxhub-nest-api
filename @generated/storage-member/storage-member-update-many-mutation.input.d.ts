import { EnumStorageRoleFieldUpdateOperationsInput } from '../prisma/enum-storage-role-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
export declare class StorageMemberUpdateManyMutationInput {
    role?: EnumStorageRoleFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
