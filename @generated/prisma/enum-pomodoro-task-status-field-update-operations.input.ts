import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PomodoroTaskStatus } from './pomodoro-task-status.enum';

@InputType()
export class EnumPomodoroTaskStatusFieldUpdateOperationsInput {

    @Field(() => PomodoroTaskStatus, {nullable:true})
    set?: keyof typeof PomodoroTaskStatus;
}
