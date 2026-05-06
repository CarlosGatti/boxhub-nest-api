import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PomodoroSessionStatus } from './pomodoro-session-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumPomodoroSessionStatusFilter } from './nested-enum-pomodoro-session-status-filter.input';

@InputType()
export class NestedEnumPomodoroSessionStatusWithAggregatesFilter {

    @Field(() => PomodoroSessionStatus, {nullable:true})
    equals?: keyof typeof PomodoroSessionStatus;

    @Field(() => [PomodoroSessionStatus], {nullable:true})
    in?: Array<keyof typeof PomodoroSessionStatus>;

    @Field(() => [PomodoroSessionStatus], {nullable:true})
    notIn?: Array<keyof typeof PomodoroSessionStatus>;

    @Field(() => NestedEnumPomodoroSessionStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumPomodoroSessionStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumPomodoroSessionStatusFilter, {nullable:true})
    _min?: NestedEnumPomodoroSessionStatusFilter;

    @Field(() => NestedEnumPomodoroSessionStatusFilter, {nullable:true})
    _max?: NestedEnumPomodoroSessionStatusFilter;
}
