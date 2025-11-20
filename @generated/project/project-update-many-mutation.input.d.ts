import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumProjectStatusFieldUpdateOperationsInput } from '../prisma/enum-project-status-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
export declare class ProjectUpdateManyMutationInput {
    name?: StringFieldUpdateOperationsInput;
    client?: StringFieldUpdateOperationsInput;
    location?: StringFieldUpdateOperationsInput;
    status?: EnumProjectStatusFieldUpdateOperationsInput;
    startDate?: DateTimeFieldUpdateOperationsInput;
    endDate?: NullableDateTimeFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
