import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ConstructionLogUpdateOneRequiredWithoutCommentsNestedInput } from '../construction-log/construction-log-update-one-required-without-comments-nested.input';
import { UserUpdateOneRequiredWithoutLogCommentsNestedInput } from '../user/user-update-one-required-without-log-comments-nested.input';
export declare class LogCommentUpdateWithoutRepliesInput {
    content?: StringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    log?: ConstructionLogUpdateOneRequiredWithoutCommentsNestedInput;
    user?: UserUpdateOneRequiredWithoutLogCommentsNestedInput;
}
