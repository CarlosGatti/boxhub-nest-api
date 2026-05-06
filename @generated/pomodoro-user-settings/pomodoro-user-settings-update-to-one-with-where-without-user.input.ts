import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PomodoroUserSettingsWhereInput } from './pomodoro-user-settings-where.input';
import { Type } from 'class-transformer';
import { PomodoroUserSettingsUpdateWithoutUserInput } from './pomodoro-user-settings-update-without-user.input';

@InputType()
export class PomodoroUserSettingsUpdateToOneWithWhereWithoutUserInput {

    @Field(() => PomodoroUserSettingsWhereInput, {nullable:true})
    @Type(() => PomodoroUserSettingsWhereInput)
    where?: PomodoroUserSettingsWhereInput;

    @Field(() => PomodoroUserSettingsUpdateWithoutUserInput, {nullable:false})
    @Type(() => PomodoroUserSettingsUpdateWithoutUserInput)
    data!: PomodoroUserSettingsUpdateWithoutUserInput;
}
