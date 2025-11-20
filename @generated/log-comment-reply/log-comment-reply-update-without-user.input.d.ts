import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { LogCommentUpdateOneRequiredWithoutRepliesNestedInput } from '../log-comment/log-comment-update-one-required-without-replies-nested.input';
export declare class LogCommentReplyUpdateWithoutUserInput {
    content?: StringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    comment?: LogCommentUpdateOneRequiredWithoutRepliesNestedInput;
}
