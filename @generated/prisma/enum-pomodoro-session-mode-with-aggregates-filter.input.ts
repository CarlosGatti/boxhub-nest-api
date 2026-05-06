import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PomodoroSessionMode } from './pomodoro-session-mode.enum';
import { NestedEnumPomodoroSessionModeWithAggregatesFilter } from './nested-enum-pomodoro-session-mode-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumPomodoroSessionModeFilter } from './nested-enum-pomodoro-session-mode-filter.input';

@InputType()
export class EnumPomodoroSessionModeWithAggregatesFilter {

    @Field(() => PomodoroSessionMode, {nullable:true})
    equals?: keyof typeof PomodoroSessionMode;

    @Field(() => [PomodoroSessionMode], {nullable:true})
    in?: Array<keyof typeof PomodoroSessionMode>;

    @Field(() => [PomodoroSessionMode], {nullable:true})
    notIn?: Array<keyof typeof PomodoroSessionMode>;

    @Field(() => NestedEnumPomodoroSessionModeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumPomodoroSessionModeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumPomodoroSessionModeFilter, {nullable:true})
    _min?: NestedEnumPomodoroSessionModeFilter;

    @Field(() => NestedEnumPomodoroSessionModeFilter, {nullable:true})
    _max?: NestedEnumPomodoroSessionModeFilter;
}
