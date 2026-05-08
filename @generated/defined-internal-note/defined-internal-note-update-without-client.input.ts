import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { DefinedProjectUpdateOneWithoutInternalNotesNestedInput } from '../defined-project/defined-project-update-one-without-internal-notes-nested.input';
import { Type } from 'class-transformer';
import { UserUpdateOneRequiredWithoutDefinedInternalNotesNestedInput } from '../user/user-update-one-required-without-defined-internal-notes-nested.input';

@InputType()
export class DefinedInternalNoteUpdateWithoutClientInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    body?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DefinedProjectUpdateOneWithoutInternalNotesNestedInput, {nullable:true})
    @Type(() => DefinedProjectUpdateOneWithoutInternalNotesNestedInput)
    project?: DefinedProjectUpdateOneWithoutInternalNotesNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutDefinedInternalNotesNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutDefinedInternalNotesNestedInput)
    author?: UserUpdateOneRequiredWithoutDefinedInternalNotesNestedInput;
}
