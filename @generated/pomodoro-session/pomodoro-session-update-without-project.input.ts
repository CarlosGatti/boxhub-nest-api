import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumPomodoroSessionModeFieldUpdateOperationsInput } from '../prisma/enum-pomodoro-session-mode-field-update-operations.input';
import { EnumPomodoroSessionStatusFieldUpdateOperationsInput } from '../prisma/enum-pomodoro-session-status-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutPomodoroSessionsNestedInput } from '../user/user-update-one-required-without-pomodoro-sessions-nested.input';
import { Type } from 'class-transformer';
import { PomodoroTaskUpdateOneWithoutSessionsNestedInput } from '../pomodoro-task/pomodoro-task-update-one-without-sessions-nested.input';

@InputType()
export class PomodoroSessionUpdateWithoutProjectInput {

    @Field(() => EnumPomodoroSessionModeFieldUpdateOperationsInput, {nullable:true})
    mode?: EnumPomodoroSessionModeFieldUpdateOperationsInput;

    @Field(() => EnumPomodoroSessionStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumPomodoroSessionStatusFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    durationMinutes?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    startedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    pausedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    resumedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    completedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutPomodoroSessionsNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutPomodoroSessionsNestedInput)
    user?: UserUpdateOneRequiredWithoutPomodoroSessionsNestedInput;

    @Field(() => PomodoroTaskUpdateOneWithoutSessionsNestedInput, {nullable:true})
    task?: PomodoroTaskUpdateOneWithoutSessionsNestedInput;
}
