import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PomodoroUserSettingsCreateWithoutUserInput } from './pomodoro-user-settings-create-without-user.input';
import { Type } from 'class-transformer';
import { PomodoroUserSettingsCreateOrConnectWithoutUserInput } from './pomodoro-user-settings-create-or-connect-without-user.input';
import { Prisma } from '@prisma/client';
import { PomodoroUserSettingsWhereUniqueInput } from './pomodoro-user-settings-where-unique.input';

@InputType()
export class PomodoroUserSettingsUncheckedCreateNestedOneWithoutUserInput {

    @Field(() => PomodoroUserSettingsCreateWithoutUserInput, {nullable:true})
    @Type(() => PomodoroUserSettingsCreateWithoutUserInput)
    create?: PomodoroUserSettingsCreateWithoutUserInput;

    @Field(() => PomodoroUserSettingsCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => PomodoroUserSettingsCreateOrConnectWithoutUserInput)
    connectOrCreate?: PomodoroUserSettingsCreateOrConnectWithoutUserInput;

    @Field(() => PomodoroUserSettingsWhereUniqueInput, {nullable:true})
    @Type(() => PomodoroUserSettingsWhereUniqueInput)
    connect?: Prisma.AtLeast<PomodoroUserSettingsWhereUniqueInput, 'userId'>;
}
