import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumLogTypeFieldUpdateOperationsInput } from '../prisma/enum-log-type-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutConstructionLogsNestedInput } from '../user/user-update-one-required-without-construction-logs-nested.input';
import { LogCommentUpdateManyWithoutLogNestedInput } from '../log-comment/log-comment-update-many-without-log-nested.input';
export declare class ConstructionLogUpdateWithoutProjectInput {
    title?: StringFieldUpdateOperationsInput;
    description?: StringFieldUpdateOperationsInput;
    type?: EnumLogTypeFieldUpdateOperationsInput;
    images?: any;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    user?: UserUpdateOneRequiredWithoutConstructionLogsNestedInput;
    comments?: LogCommentUpdateManyWithoutLogNestedInput;
}
