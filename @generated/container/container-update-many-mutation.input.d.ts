import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
export declare class ContainerUpdateManyMutationInput {
    name?: StringFieldUpdateOperationsInput;
    description?: StringFieldUpdateOperationsInput;
    qrCode?: StringFieldUpdateOperationsInput;
    code?: StringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
