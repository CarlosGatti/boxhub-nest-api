import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
export declare class ItemUpdateManyMutationInput {
    name?: StringFieldUpdateOperationsInput;
    description?: StringFieldUpdateOperationsInput;
    imageUrl?: StringFieldUpdateOperationsInput;
    quantity?: IntFieldUpdateOperationsInput;
    category?: StringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
