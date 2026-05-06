import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PomodoroSessionMode } from './pomodoro-session-mode.enum';

@InputType()
export class EnumPomodoroSessionModeFieldUpdateOperationsInput {

    @Field(() => PomodoroSessionMode, {nullable:true})
    set?: keyof typeof PomodoroSessionMode;
}
