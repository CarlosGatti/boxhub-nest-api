import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { UserUpdateOneWithoutReceivedMaterialsNestedInput } from '../user/user-update-one-without-received-materials-nested.input';
export declare class MaterialEntryUpdateWithoutProjectInput {
    name?: StringFieldUpdateOperationsInput;
    supplier?: StringFieldUpdateOperationsInput;
    quantity?: FloatFieldUpdateOperationsInput;
    receivedAt?: DateTimeFieldUpdateOperationsInput;
    note?: NullableStringFieldUpdateOperationsInput;
    imageUrls?: any;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    receivedBy?: UserUpdateOneWithoutReceivedMaterialsNestedInput;
}
