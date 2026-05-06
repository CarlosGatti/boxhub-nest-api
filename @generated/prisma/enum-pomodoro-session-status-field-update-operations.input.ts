import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PomodoroSessionStatus } from './pomodoro-session-status.enum';

@InputType()
export class EnumPomodoroSessionStatusFieldUpdateOperationsInput {

    @Field(() => PomodoroSessionStatus, {nullable:true})
    set?: keyof typeof PomodoroSessionStatus;
}
