import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPomodoroSettingsInput } from './user-create-without-pomodoro-settings.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPomodoroSettingsInput } from './user-create-or-connect-without-pomodoro-settings.input';
import { UserUpsertWithoutPomodoroSettingsInput } from './user-upsert-without-pomodoro-settings.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutPomodoroSettingsInput } from './user-update-to-one-with-where-without-pomodoro-settings.input';

@InputType()
export class UserUpdateOneRequiredWithoutPomodoroSettingsNestedInput {

    @Field(() => UserCreateWithoutPomodoroSettingsInput, {nullable:true})
    @Type(() => UserCreateWithoutPomodoroSettingsInput)
    create?: UserCreateWithoutPomodoroSettingsInput;

    @Field(() => UserCreateOrConnectWithoutPomodoroSettingsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPomodoroSettingsInput)
    connectOrCreate?: UserCreateOrConnectWithoutPomodoroSettingsInput;

    @Field(() => UserUpsertWithoutPomodoroSettingsInput, {nullable:true})
    @Type(() => UserUpsertWithoutPomodoroSettingsInput)
    upsert?: UserUpsertWithoutPomodoroSettingsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutPomodoroSettingsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutPomodoroSettingsInput)
    update?: UserUpdateToOneWithWhereWithoutPomodoroSettingsInput;
}
