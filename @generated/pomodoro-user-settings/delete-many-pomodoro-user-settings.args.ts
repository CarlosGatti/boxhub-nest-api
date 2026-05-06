import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PomodoroUserSettingsWhereInput } from './pomodoro-user-settings-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPomodoroUserSettingsArgs {

    @Field(() => PomodoroUserSettingsWhereInput, {nullable:true})
    @Type(() => PomodoroUserSettingsWhereInput)
    where?: PomodoroUserSettingsWhereInput;
}
