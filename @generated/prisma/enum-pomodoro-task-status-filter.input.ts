import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PomodoroTaskStatus } from './pomodoro-task-status.enum';
import { NestedEnumPomodoroTaskStatusFilter } from './nested-enum-pomodoro-task-status-filter.input';

@InputType()
export class EnumPomodoroTaskStatusFilter {

    @Field(() => PomodoroTaskStatus, {nullable:true})
    equals?: keyof typeof PomodoroTaskStatus;

    @Field(() => [PomodoroTaskStatus], {nullable:true})
    in?: Array<keyof typeof PomodoroTaskStatus>;

    @Field(() => [PomodoroTaskStatus], {nullable:true})
    notIn?: Array<keyof typeof PomodoroTaskStatus>;

    @Field(() => NestedEnumPomodoroTaskStatusFilter, {nullable:true})
    not?: NestedEnumPomodoroTaskStatusFilter;
}
