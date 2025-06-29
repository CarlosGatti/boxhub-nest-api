import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumProjectStatusFieldUpdateOperationsInput } from '../prisma/enum-project-status-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutProjectResponsibleNestedInput } from '../user/user-update-one-required-without-project-responsible-nested.input';
import { ConstructionLogUpdateManyWithoutProjectNestedInput } from '../construction-log/construction-log-update-many-without-project-nested.input';
import { ProjectDocumentUpdateManyWithoutProjectNestedInput } from '../project-document/project-document-update-many-without-project-nested.input';
import { MaterialEntryUpdateManyWithoutProjectNestedInput } from '../material-entry/material-entry-update-many-without-project-nested.input';
import { ProjectPhotoUpdateManyWithoutProjectNestedInput } from '../project-photo/project-photo-update-many-without-project-nested.input';

@InputType()
export class ProjectUpdateWithoutPermitsInput {

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

    @Field(() => UserUpdateOneRequiredWithoutProjectResponsibleNestedInput, {nullable:true})
    responsible?: UserUpdateOneRequiredWithoutProjectResponsibleNestedInput;

    @Field(() => ConstructionLogUpdateManyWithoutProjectNestedInput, {nullable:true})
    logs?: ConstructionLogUpdateManyWithoutProjectNestedInput;

    @Field(() => ProjectDocumentUpdateManyWithoutProjectNestedInput, {nullable:true})
    documents?: ProjectDocumentUpdateManyWithoutProjectNestedInput;

    @Field(() => MaterialEntryUpdateManyWithoutProjectNestedInput, {nullable:true})
    materials?: MaterialEntryUpdateManyWithoutProjectNestedInput;

    @Field(() => ProjectPhotoUpdateManyWithoutProjectNestedInput, {nullable:true})
    photos?: ProjectPhotoUpdateManyWithoutProjectNestedInput;
}
