import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PomodoroUserSettingsCreateInput } from './pomodoro-user-settings-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePomodoroUserSettingsArgs {

    @Field(() => PomodoroUserSettingsCreateInput, {nullable:false})
    @Type(() => PomodoroUserSettingsCreateInput)
    data!: PomodoroUserSettingsCreateInput;
}
