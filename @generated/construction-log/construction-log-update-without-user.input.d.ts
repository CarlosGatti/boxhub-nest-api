import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumLogTypeFieldUpdateOperationsInput } from '../prisma/enum-log-type-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ProjectUpdateOneRequiredWithoutLogsNestedInput } from '../project/project-update-one-required-without-logs-nested.input';
import { LogCommentUpdateManyWithoutLogNestedInput } from '../log-comment/log-comment-update-many-without-log-nested.input';
export declare class ConstructionLogUpdateWithoutUserInput {
    title?: StringFieldUpdateOperationsInput;
    description?: StringFieldUpdateOperationsInput;
    type?: EnumLogTypeFieldUpdateOperationsInput;
    images?: any;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    project?: ProjectUpdateOneRequiredWithoutLogsNestedInput;
    comments?: LogCommentUpdateManyWithoutLogNestedInput;
}
