import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ContainerUpdateManyWithoutStorageNestedInput } from '../container/container-update-many-without-storage-nested.input';
export declare class StorageUpdateWithoutMembersInput {
    name?: StringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    containers?: ContainerUpdateManyWithoutStorageNestedInput;
}
