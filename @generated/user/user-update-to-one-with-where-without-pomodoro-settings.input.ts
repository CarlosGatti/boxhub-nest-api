import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutPomodoroSettingsInput } from './user-update-without-pomodoro-settings.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutPomodoroSettingsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutPomodoroSettingsInput, {nullable:false})
    @Type(() => UserUpdateWithoutPomodoroSettingsInput)
    data!: UserUpdateWithoutPomodoroSettingsInput;
}
