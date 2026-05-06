import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PomodoroUserSettingsCountAggregate } from './pomodoro-user-settings-count-aggregate.output';
import { PomodoroUserSettingsAvgAggregate } from './pomodoro-user-settings-avg-aggregate.output';
import { PomodoroUserSettingsSumAggregate } from './pomodoro-user-settings-sum-aggregate.output';
import { PomodoroUserSettingsMinAggregate } from './pomodoro-user-settings-min-aggregate.output';
import { PomodoroUserSettingsMaxAggregate } from './pomodoro-user-settings-max-aggregate.output';

@ObjectType()
export class AggregatePomodoroUserSettings {

    @Field(() => PomodoroUserSettingsCountAggregate, {nullable:true})
    _count?: PomodoroUserSettingsCountAggregate;

    @Field(() => PomodoroUserSettingsAvgAggregate, {nullable:true})
    _avg?: PomodoroUserSettingsAvgAggregate;

    @Field(() => PomodoroUserSettingsSumAggregate, {nullable:true})
    _sum?: PomodoroUserSettingsSumAggregate;

    @Field(() => PomodoroUserSettingsMinAggregate, {nullable:true})
    _min?: PomodoroUserSettingsMinAggregate;

    @Field(() => PomodoroUserSettingsMaxAggregate, {nullable:true})
    _max?: PomodoroUserSettingsMaxAggregate;
}
