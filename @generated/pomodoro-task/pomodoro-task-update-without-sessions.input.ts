import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumPomodoroTaskStatusFieldUpdateOperationsInput } from '../prisma/enum-pomodoro-task-status-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutPomodoroTasksNestedInput } from '../user/user-update-one-required-without-pomodoro-tasks-nested.input';
import { Type } from 'class-transformer';
import { DefinedProjectUpdateOneWithoutPomodoroTasksNestedInput } from '../defined-project/defined-project-update-one-without-pomodoro-tasks-nested.input';

@InputType()
export class PomodoroTaskUpdateWithoutSessionsInput {

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

    @Field(() => UserUpdateOneRequiredWithoutPomodoroTasksNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutPomodoroTasksNestedInput)
    user?: UserUpdateOneRequiredWithoutPomodoroTasksNestedInput;

    @Field(() => DefinedProjectUpdateOneWithoutPomodoroTasksNestedInput, {nullable:true})
    @Type(() => DefinedProjectUpdateOneWithoutPomodoroTasksNestedInput)
    project?: DefinedProjectUpdateOneWithoutPomodoroTasksNestedInput;
}
