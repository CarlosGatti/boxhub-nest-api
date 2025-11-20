import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutLogCommentRepliesNestedInput } from '../user/user-update-one-required-without-log-comment-replies-nested.input';
export declare class LogCommentReplyUpdateWithoutCommentInput {
    content?: StringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    user?: UserUpdateOneRequiredWithoutLogCommentRepliesNestedInput;
}
