import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumPomodoroTaskStatusFieldUpdateOperationsInput } from '../prisma/enum-pomodoro-task-status-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { DefinedProjectUpdateOneWithoutPomodoroTasksNestedInput } from '../defined-project/defined-project-update-one-without-pomodoro-tasks-nested.input';
import { PomodoroSessionUpdateManyWithoutTaskNestedInput } from '../pomodoro-session/pomodoro-session-update-many-without-task-nested.input';

@InputType()
export class PomodoroTaskUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EnumPomodoroTaskStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumPomodoroTaskStatusFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DefinedProjectUpdateOneWithoutPomodoroTasksNestedInput, {nullable:true})
    project?: DefinedProjectUpdateOneWithoutPomodoroTasksNestedInput;

    @Field(() => PomodoroSessionUpdateManyWithoutTaskNestedInput, {nullable:true})
    sessions?: PomodoroSessionUpdateManyWithoutTaskNestedInput;
}
