import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutPomodoroSettingsInput } from '../user/user-create-nested-one-without-pomodoro-settings.input';
import { Type } from 'class-transformer';

@InputType()
export class PomodoroUserSettingsCreateInput {

    @Field(() => Int, {nullable:true})
    focusMinutes?: number;

    @Field(() => Int, {nullable:true})
    shortBreakMinutes?: number;

    @Field(() => Int, {nullable:true})
    longBreakMinutes?: number;

    @Field(() => Int, {nullable:true})
    longBreakEvery?: number;

    @Field(() => Boolean, {nullable:true})
    autoStartBreaks?: boolean;

    @Field(() => Boolean, {nullable:true})
    autoStartFocus?: boolean;

    @Field(() => String, {nullable:true})
    timezone?: string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutPomodoroSettingsInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutPomodoroSettingsInput)
    user!: UserCreateNestedOneWithoutPomodoroSettingsInput;
}
