import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumPermitKindFieldUpdateOperationsInput } from '../prisma/enum-permit-kind-field-update-operations.input';
import { EnumPermitStatusFieldUpdateOperationsInput } from '../prisma/enum-permit-status-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ProjectUpdateOneRequiredWithoutPermitsNestedInput } from '../project/project-update-one-required-without-permits-nested.input';
export declare class PermitInspectionUpdateWithoutResponsibleInput {
    number?: StringFieldUpdateOperationsInput;
    kind?: EnumPermitKindFieldUpdateOperationsInput;
    status?: EnumPermitStatusFieldUpdateOperationsInput;
    requestedAt?: NullableDateTimeFieldUpdateOperationsInput;
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput;
    fileUrl?: NullableStringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    project?: ProjectUpdateOneRequiredWithoutPermitsNestedInput;
}
