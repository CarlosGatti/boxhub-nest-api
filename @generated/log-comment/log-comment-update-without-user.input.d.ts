import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ConstructionLogUpdateOneRequiredWithoutCommentsNestedInput } from '../construction-log/construction-log-update-one-required-without-comments-nested.input';
import { LogCommentReplyUpdateManyWithoutCommentNestedInput } from '../log-comment-reply/log-comment-reply-update-many-without-comment-nested.input';
export declare class LogCommentUpdateWithoutUserInput {
    content?: StringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    log?: ConstructionLogUpdateOneRequiredWithoutCommentsNestedInput;
    replies?: LogCommentReplyUpdateManyWithoutCommentNestedInput;
}
