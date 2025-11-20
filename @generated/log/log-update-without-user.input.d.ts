import { EnumLogActionFieldUpdateOperationsInput } from '../prisma/enum-log-action-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
export declare class LogUpdateWithoutUserInput {
    action?: EnumLogActionFieldUpdateOperationsInput;
    details?: NullableStringFieldUpdateOperationsInput;
    route?: NullableStringFieldUpdateOperationsInput;
    metadata?: any;
    ipAddress?: NullableStringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
}
