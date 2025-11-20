import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumLogTypeFieldUpdateOperationsInput } from '../prisma/enum-log-type-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
export declare class ConstructionLogUpdateManyMutationInput {
    title?: StringFieldUpdateOperationsInput;
    description?: StringFieldUpdateOperationsInput;
    type?: EnumLogTypeFieldUpdateOperationsInput;
    images?: any;
    createdAt?: DateTimeFieldUpdateOperationsInput;
}
