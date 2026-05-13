import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumDefinedProjectServiceTypeFieldUpdateOperationsInput } from '../prisma/enum-defined-project-service-type-field-update-operations.input';
import { EnumDefinedProjectStatusFieldUpdateOperationsInput } from '../prisma/enum-defined-project-status-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { DefinedClientUpdateOneRequiredWithoutProjectsNestedInput } from '../defined-client/defined-client-update-one-required-without-projects-nested.input';
import { Type } from 'class-transformer';
import { DefinedIntakeFormUpdateManyWithoutProjectNestedInput } from '../defined-intake-form/defined-intake-form-update-many-without-project-nested.input';
import { DefinedInvoiceUpdateManyWithoutProjectNestedInput } from '../defined-invoice/defined-invoice-update-many-without-project-nested.input';
import { DefinedProposalUpdateManyWithoutProjectNestedInput } from '../defined-proposal/defined-proposal-update-many-without-project-nested.input';
import { PomodoroTaskUpdateManyWithoutProjectNestedInput } from '../pomodoro-task/pomodoro-task-update-many-without-project-nested.input';
import { PomodoroSessionUpdateManyWithoutProjectNestedInput } from '../pomodoro-session/pomodoro-session-update-many-without-project-nested.input';

@InputType()
export class DefinedProjectUpdateWithoutInternalNotesInput {

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

    @Field(() => DefinedClientUpdateOneRequiredWithoutProjectsNestedInput, {nullable:true})
    @Type(() => DefinedClientUpdateOneRequiredWithoutProjectsNestedInput)
    client?: DefinedClientUpdateOneRequiredWithoutProjectsNestedInput;

    @Field(() => DefinedIntakeFormUpdateManyWithoutProjectNestedInput, {nullable:true})
    intakeForms?: DefinedIntakeFormUpdateManyWithoutProjectNestedInput;

    @Field(() => DefinedInvoiceUpdateManyWithoutProjectNestedInput, {nullable:true})
    @Type(() => DefinedInvoiceUpdateManyWithoutProjectNestedInput)
    invoices?: DefinedInvoiceUpdateManyWithoutProjectNestedInput;

    @Field(() => DefinedProposalUpdateManyWithoutProjectNestedInput, {nullable:true})
    @Type(() => DefinedProposalUpdateManyWithoutProjectNestedInput)
    proposals?: DefinedProposalUpdateManyWithoutProjectNestedInput;

    @Field(() => PomodoroTaskUpdateManyWithoutProjectNestedInput, {nullable:true})
    pomodoroTasks?: PomodoroTaskUpdateManyWithoutProjectNestedInput;

    @Field(() => PomodoroSessionUpdateManyWithoutProjectNestedInput, {nullable:true})
    pomodoroSessions?: PomodoroSessionUpdateManyWithoutProjectNestedInput;
}
