import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumDefinedProjectServiceTypeFieldUpdateOperationsInput } from '../prisma/enum-defined-project-service-type-field-update-operations.input';
import { EnumDefinedProjectStatusFieldUpdateOperationsInput } from '../prisma/enum-defined-project-status-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { DefinedInternalNoteUncheckedUpdateManyWithoutProjectNestedInput } from '../defined-internal-note/defined-internal-note-unchecked-update-many-without-project-nested.input';
import { DefinedInvoiceUncheckedUpdateManyWithoutProjectNestedInput } from '../defined-invoice/defined-invoice-unchecked-update-many-without-project-nested.input';
import { Type } from 'class-transformer';
import { PomodoroTaskUncheckedUpdateManyWithoutProjectNestedInput } from '../pomodoro-task/pomodoro-task-unchecked-update-many-without-project-nested.input';
import { PomodoroSessionUncheckedUpdateManyWithoutProjectNestedInput } from '../pomodoro-session/pomodoro-session-unchecked-update-many-without-project-nested.input';

@InputType()
export class DefinedProjectUncheckedUpdateWithoutIntakeFormsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    clientId?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => EnumDefinedProjectServiceTypeFieldUpdateOperationsInput, {nullable:true})
    serviceType?: EnumDefinedProjectServiceTypeFieldUpdateOperationsInput;

    @Field(() => EnumDefinedProjectStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumDefinedProjectStatusFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    budget?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deadline?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    source?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    assignedTo?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    supplierId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    notes?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DefinedInternalNoteUncheckedUpdateManyWithoutProjectNestedInput, {nullable:true})
    internalNotes?: DefinedInternalNoteUncheckedUpdateManyWithoutProjectNestedInput;

    @Field(() => DefinedInvoiceUncheckedUpdateManyWithoutProjectNestedInput, {nullable:true})
    @Type(() => DefinedInvoiceUncheckedUpdateManyWithoutProjectNestedInput)
    invoices?: DefinedInvoiceUncheckedUpdateManyWithoutProjectNestedInput;

    @Field(() => PomodoroTaskUncheckedUpdateManyWithoutProjectNestedInput, {nullable:true})
    pomodoroTasks?: PomodoroTaskUncheckedUpdateManyWithoutProjectNestedInput;

    @Field(() => PomodoroSessionUncheckedUpdateManyWithoutProjectNestedInput, {nullable:true})
    pomodoroSessions?: PomodoroSessionUncheckedUpdateManyWithoutProjectNestedInput;
}
