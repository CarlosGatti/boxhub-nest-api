import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumPhotoCategoryFieldUpdateOperationsInput } from '../prisma/enum-photo-category-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
export declare class ProjectPhotoUpdateManyMutationInput {
    caption?: NullableStringFieldUpdateOperationsInput;
    category?: EnumPhotoCategoryFieldUpdateOperationsInput;
    stage?: NullableStringFieldUpdateOperationsInput;
    imageUrl?: StringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
}
