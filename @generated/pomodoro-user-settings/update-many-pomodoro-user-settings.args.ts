import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PomodoroUserSettingsUpdateManyMutationInput } from './pomodoro-user-settings-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PomodoroUserSettingsWhereInput } from './pomodoro-user-settings-where.input';

@ArgsType()
export class UpdateManyPomodoroUserSettingsArgs {

    @Field(() => PomodoroUserSettingsUpdateManyMutationInput, {nullable:false})
    @Type(() => PomodoroUserSettingsUpdateManyMutationInput)
    data!: PomodoroUserSettingsUpdateManyMutationInput;

    @Field(() => PomodoroUserSettingsWhereInput, {nullable:true})
    @Type(() => PomodoroUserSettingsWhereInput)
    where?: PomodoroUserSettingsWhereInput;
}
