import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutLogCommentsNestedInput } from '../user/user-update-one-required-without-log-comments-nested.input';
import { LogCommentReplyUpdateManyWithoutCommentNestedInput } from '../log-comment-reply/log-comment-reply-update-many-without-comment-nested.input';
export declare class LogCommentUpdateWithoutLogInput {
    content?: StringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    user?: UserUpdateOneRequiredWithoutLogCommentsNestedInput;
    replies?: LogCommentReplyUpdateManyWithoutCommentNestedInput;
}
