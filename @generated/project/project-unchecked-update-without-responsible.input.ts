import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumProjectStatusFieldUpdateOperationsInput } from '../prisma/enum-project-status-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { ConstructionLogUncheckedUpdateManyWithoutProjectNestedInput } from '../construction-log/construction-log-unchecked-update-many-without-project-nested.input';
import { ProjectDocumentUncheckedUpdateManyWithoutProjectNestedInput } from '../project-document/project-document-unchecked-update-many-without-project-nested.input';
import { MaterialEntryUncheckedUpdateManyWithoutProjectNestedInput } from '../material-entry/material-entry-unchecked-update-many-without-project-nested.input';
import { PermitInspectionUncheckedUpdateManyWithoutProjectNestedInput } from '../permit-inspection/permit-inspection-unchecked-update-many-without-project-nested.input';
import { ProjectPhotoUncheckedUpdateManyWithoutProjectNestedInput } from '../project-photo/project-photo-unchecked-update-many-without-project-nested.input';

@InputType()
export class ProjectUncheckedUpdateWithoutResponsibleInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    client?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    location?: StringFieldUpdateOperationsInput;

    @Field(() => EnumProjectStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumProjectStatusFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    startDate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    endDate?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ConstructionLogUncheckedUpdateManyWithoutProjectNestedInput, {nullable:true})
    logs?: ConstructionLogUncheckedUpdateManyWithoutProjectNestedInput;

    @Field(() => ProjectDocumentUncheckedUpdateManyWithoutProjectNestedInput, {nullable:true})
    documents?: ProjectDocumentUncheckedUpdateManyWithoutProjectNestedInput;

    @Field(() => MaterialEntryUncheckedUpdateManyWithoutProjectNestedInput, {nullable:true})
    materials?: MaterialEntryUncheckedUpdateManyWithoutProjectNestedInput;

    @Field(() => PermitInspectionUncheckedUpdateManyWithoutProjectNestedInput, {nullable:true})
    permits?: PermitInspectionUncheckedUpdateManyWithoutProjectNestedInput;

    @Field(() => ProjectPhotoUncheckedUpdateManyWithoutProjectNestedInput, {nullable:true})
    photos?: ProjectPhotoUncheckedUpdateManyWithoutProjectNestedInput;
}
