import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { DefinedClientUpdateOneWithoutInternalNotesNestedInput } from '../defined-client/defined-client-update-one-without-internal-notes-nested.input';
import { DefinedProjectUpdateOneWithoutInternalNotesNestedInput } from '../defined-project/defined-project-update-one-without-internal-notes-nested.input';
import { UserUpdateOneRequiredWithoutDefinedInternalNotesNestedInput } from '../user/user-update-one-required-without-defined-internal-notes-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedInternalNoteUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    body?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DefinedClientUpdateOneWithoutInternalNotesNestedInput, {nullable:true})
    client?: DefinedClientUpdateOneWithoutInternalNotesNestedInput;

    @Field(() => DefinedProjectUpdateOneWithoutInternalNotesNestedInput, {nullable:true})
    project?: DefinedProjectUpdateOneWithoutInternalNotesNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutDefinedInternalNotesNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutDefinedInternalNotesNestedInput)
    author?: UserUpdateOneRequiredWithoutDefinedInternalNotesNestedInput;
}
