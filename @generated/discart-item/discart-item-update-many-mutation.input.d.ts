import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumDiscartItemTypeFieldUpdateOperationsInput } from '../prisma/enum-discart-item-type-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { EnumDiscartItemConditionFieldUpdateOperationsInput } from '../prisma/enum-discart-item-condition-field-update-operations.input';
import { EnumDiscartItemStatusFieldUpdateOperationsInput } from '../prisma/enum-discart-item-status-field-update-operations.input';
import { DiscartItemUpdateimageUrlsInput } from './discart-item-updateimage-urls.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
export declare class DiscartItemUpdateManyMutationInput {
    title?: StringFieldUpdateOperationsInput;
    description?: StringFieldUpdateOperationsInput;
    type?: EnumDiscartItemTypeFieldUpdateOperationsInput;
    price?: NullableFloatFieldUpdateOperationsInput;
    category?: StringFieldUpdateOperationsInput;
    condition?: EnumDiscartItemConditionFieldUpdateOperationsInput;
    status?: EnumDiscartItemStatusFieldUpdateOperationsInput;
    imageUrls?: DiscartItemUpdateimageUrlsInput;
    pickupAddress?: any;
    contactPhone?: StringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
