import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PomodoroSessionMode } from './pomodoro-session-mode.enum';
import { NestedEnumPomodoroSessionModeFilter } from './nested-enum-pomodoro-session-mode-filter.input';

@InputType()
export class EnumPomodoroSessionModeFilter {

    @Field(() => PomodoroSessionMode, {nullable:true})
    equals?: keyof typeof PomodoroSessionMode;

    @Field(() => [PomodoroSessionMode], {nullable:true})
    in?: Array<keyof typeof PomodoroSessionMode>;

    @Field(() => [PomodoroSessionMode], {nullable:true})
    notIn?: Array<keyof typeof PomodoroSessionMode>;

    @Field(() => NestedEnumPomodoroSessionModeFilter, {nullable:true})
    not?: NestedEnumPomodoroSessionModeFilter;
}
