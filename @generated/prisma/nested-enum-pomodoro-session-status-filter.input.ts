import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PomodoroSessionStatus } from './pomodoro-session-status.enum';

@InputType()
export class NestedEnumPomodoroSessionStatusFilter {

    @Field(() => PomodoroSessionStatus, {nullable:true})
    equals?: keyof typeof PomodoroSessionStatus;

    @Field(() => [PomodoroSessionStatus], {nullable:true})
    in?: Array<keyof typeof PomodoroSessionStatus>;

    @Field(() => [PomodoroSessionStatus], {nullable:true})
    notIn?: Array<keyof typeof PomodoroSessionStatus>;

    @Field(() => NestedEnumPomodoroSessionStatusFilter, {nullable:true})
    not?: NestedEnumPomodoroSessionStatusFilter;
}
