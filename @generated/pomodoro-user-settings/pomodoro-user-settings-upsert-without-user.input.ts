import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PomodoroUserSettingsUpdateWithoutUserInput } from './pomodoro-user-settings-update-without-user.input';
import { Type } from 'class-transformer';
import { PomodoroUserSettingsCreateWithoutUserInput } from './pomodoro-user-settings-create-without-user.input';
import { PomodoroUserSettingsWhereInput } from './pomodoro-user-settings-where.input';

@InputType()
export class PomodoroUserSettingsUpsertWithoutUserInput {

    @Field(() => PomodoroUserSettingsUpdateWithoutUserInput, {nullable:false})
    @Type(() => PomodoroUserSettingsUpdateWithoutUserInput)
    update!: PomodoroUserSettingsUpdateWithoutUserInput;

    @Field(() => PomodoroUserSettingsCreateWithoutUserInput, {nullable:false})
    @Type(() => PomodoroUserSettingsCreateWithoutUserInput)
    create!: PomodoroUserSettingsCreateWithoutUserInput;

    @Field(() => PomodoroUserSettingsWhereInput, {nullable:true})
    @Type(() => PomodoroUserSettingsWhereInput)
    where?: PomodoroUserSettingsWhereInput;
}
