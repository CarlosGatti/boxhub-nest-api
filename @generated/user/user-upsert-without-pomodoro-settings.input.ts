import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutPomodoroSettingsInput } from './user-update-without-pomodoro-settings.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPomodoroSettingsInput } from './user-create-without-pomodoro-settings.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutPomodoroSettingsInput {

    @Field(() => UserUpdateWithoutPomodoroSettingsInput, {nullable:false})
    @Type(() => UserUpdateWithoutPomodoroSettingsInput)
    update!: UserUpdateWithoutPomodoroSettingsInput;

    @Field(() => UserCreateWithoutPomodoroSettingsInput, {nullable:false})
    @Type(() => UserCreateWithoutPomodoroSettingsInput)
    create!: UserCreateWithoutPomodoroSettingsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
