import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
export declare class MaterialEntryUpdateManyMutationInput {
    name?: StringFieldUpdateOperationsInput;
    supplier?: StringFieldUpdateOperationsInput;
    quantity?: FloatFieldUpdateOperationsInput;
    receivedAt?: DateTimeFieldUpdateOperationsInput;
    note?: NullableStringFieldUpdateOperationsInput;
    imageUrls?: any;
    createdAt?: DateTimeFieldUpdateOperationsInput;
}
