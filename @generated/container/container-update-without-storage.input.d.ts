import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { CategoryUpdateManyWithoutContainersNestedInput } from '../category/category-update-many-without-containers-nested.input';
import { ItemUpdateManyWithoutContainerNestedInput } from '../item/item-update-many-without-container-nested.input';
export declare class ContainerUpdateWithoutStorageInput {
    name?: StringFieldUpdateOperationsInput;
    description?: StringFieldUpdateOperationsInput;
    qrCode?: StringFieldUpdateOperationsInput;
    code?: StringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    categories?: CategoryUpdateManyWithoutContainersNestedInput;
    items?: ItemUpdateManyWithoutContainerNestedInput;
}
