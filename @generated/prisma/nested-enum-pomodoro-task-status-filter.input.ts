import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PomodoroTaskStatus } from './pomodoro-task-status.enum';

@InputType()
export class NestedEnumPomodoroTaskStatusFilter {

    @Field(() => PomodoroTaskStatus, {nullable:true})
    equals?: keyof typeof PomodoroTaskStatus;

    @Field(() => [PomodoroTaskStatus], {nullable:true})
    in?: Array<keyof typeof PomodoroTaskStatus>;

    @Field(() => [PomodoroTaskStatus], {nullable:true})
    notIn?: Array<keyof typeof PomodoroTaskStatus>;

    @Field(() => NestedEnumPomodoroTaskStatusFilter, {nullable:true})
    not?: NestedEnumPomodoroTaskStatusFilter;
}
