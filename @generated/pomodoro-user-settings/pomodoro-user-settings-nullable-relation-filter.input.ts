import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PomodoroUserSettingsWhereInput } from './pomodoro-user-settings-where.input';

@InputType()
export class PomodoroUserSettingsNullableRelationFilter {

    @Field(() => PomodoroUserSettingsWhereInput, {nullable:true})
    is?: PomodoroUserSettingsWhereInput;

    @Field(() => PomodoroUserSettingsWhereInput, {nullable:true})
    isNot?: PomodoroUserSettingsWhereInput;
}
