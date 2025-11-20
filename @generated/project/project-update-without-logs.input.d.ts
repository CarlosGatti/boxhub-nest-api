import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumProjectStatusFieldUpdateOperationsInput } from '../prisma/enum-project-status-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutProjectResponsibleNestedInput } from '../user/user-update-one-required-without-project-responsible-nested.input';
import { ProjectDocumentUpdateManyWithoutProjectNestedInput } from '../project-document/project-document-update-many-without-project-nested.input';
import { MaterialEntryUpdateManyWithoutProjectNestedInput } from '../material-entry/material-entry-update-many-without-project-nested.input';
import { PermitInspectionUpdateManyWithoutProjectNestedInput } from '../permit-inspection/permit-inspection-update-many-without-project-nested.input';
import { ProjectPhotoUpdateManyWithoutProjectNestedInput } from '../project-photo/project-photo-update-many-without-project-nested.input';
export declare class ProjectUpdateWithoutLogsInput {
    name?: StringFieldUpdateOperationsInput;
    client?: StringFieldUpdateOperationsInput;
    location?: StringFieldUpdateOperationsInput;
    status?: EnumProjectStatusFieldUpdateOperationsInput;
    startDate?: DateTimeFieldUpdateOperationsInput;
    endDate?: NullableDateTimeFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    responsible?: UserUpdateOneRequiredWithoutProjectResponsibleNestedInput;
    documents?: ProjectDocumentUpdateManyWithoutProjectNestedInput;
    materials?: MaterialEntryUpdateManyWithoutProjectNestedInput;
    permits?: PermitInspectionUpdateManyWithoutProjectNestedInput;
    photos?: ProjectPhotoUpdateManyWithoutProjectNestedInput;
}
