import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { InsuranceUpdateManyWithoutSubcontractorNestedInput } from '../insurance/insurance-update-many-without-subcontractor-nested.input';
export declare class SubcontractorUpdateInput {
    companyName?: StringFieldUpdateOperationsInput;
    contactName?: StringFieldUpdateOperationsInput;
    email?: StringFieldUpdateOperationsInput;
    phone?: StringFieldUpdateOperationsInput;
    trade?: StringFieldUpdateOperationsInput;
    bankAccount?: StringFieldUpdateOperationsInput;
    paymentPreference?: StringFieldUpdateOperationsInput;
    notes?: NullableStringFieldUpdateOperationsInput;
    priority?: BoolFieldUpdateOperationsInput;
    createdViaPublicForm?: BoolFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    insurances?: InsuranceUpdateManyWithoutSubcontractorNestedInput;
}
