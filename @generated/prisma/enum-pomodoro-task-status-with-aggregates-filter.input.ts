import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PomodoroTaskStatus } from './pomodoro-task-status.enum';
import { NestedEnumPomodoroTaskStatusWithAggregatesFilter } from './nested-enum-pomodoro-task-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumPomodoroTaskStatusFilter } from './nested-enum-pomodoro-task-status-filter.input';

@InputType()
export class EnumPomodoroTaskStatusWithAggregatesFilter {

    @Field(() => PomodoroTaskStatus, {nullable:true})
    equals?: keyof typeof PomodoroTaskStatus;

    @Field(() => [PomodoroTaskStatus], {nullable:true})
    in?: Array<keyof typeof PomodoroTaskStatus>;

    @Field(() => [PomodoroTaskStatus], {nullable:true})
    notIn?: Array<keyof typeof PomodoroTaskStatus>;

    @Field(() => NestedEnumPomodoroTaskStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumPomodoroTaskStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumPomodoroTaskStatusFilter, {nullable:true})
    _min?: NestedEnumPomodoroTaskStatusFilter;

    @Field(() => NestedEnumPomodoroTaskStatusFilter, {nullable:true})
    _max?: NestedEnumPomodoroTaskStatusFilter;
}
