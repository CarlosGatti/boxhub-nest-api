import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PomodoroUserSettingsCreateWithoutUserInput } from './pomodoro-user-settings-create-without-user.input';
import { Type } from 'class-transformer';
import { PomodoroUserSettingsCreateOrConnectWithoutUserInput } from './pomodoro-user-settings-create-or-connect-without-user.input';
import { PomodoroUserSettingsUpsertWithoutUserInput } from './pomodoro-user-settings-upsert-without-user.input';
import { PomodoroUserSettingsWhereInput } from './pomodoro-user-settings-where.input';
import { Prisma } from '@prisma/client';
import { PomodoroUserSettingsWhereUniqueInput } from './pomodoro-user-settings-where-unique.input';
import { PomodoroUserSettingsUpdateToOneWithWhereWithoutUserInput } from './pomodoro-user-settings-update-to-one-with-where-without-user.input';

@InputType()
export class PomodoroUserSettingsUpdateOneWithoutUserNestedInput {

    @Field(() => PomodoroUserSettingsCreateWithoutUserInput, {nullable:true})
    @Type(() => PomodoroUserSettingsCreateWithoutUserInput)
    create?: PomodoroUserSettingsCreateWithoutUserInput;

    @Field(() => PomodoroUserSettingsCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => PomodoroUserSettingsCreateOrConnectWithoutUserInput)
    connectOrCreate?: PomodoroUserSettingsCreateOrConnectWithoutUserInput;

    @Field(() => PomodoroUserSettingsUpsertWithoutUserInput, {nullable:true})
    @Type(() => PomodoroUserSettingsUpsertWithoutUserInput)
    upsert?: PomodoroUserSettingsUpsertWithoutUserInput;

    @Field(() => PomodoroUserSettingsWhereInput, {nullable:true})
    @Type(() => PomodoroUserSettingsWhereInput)
    disconnect?: PomodoroUserSettingsWhereInput;

    @Field(() => PomodoroUserSettingsWhereInput, {nullable:true})
    @Type(() => PomodoroUserSettingsWhereInput)
    delete?: PomodoroUserSettingsWhereInput;

    @Field(() => PomodoroUserSettingsWhereUniqueInput, {nullable:true})
    @Type(() => PomodoroUserSettingsWhereUniqueInput)
    connect?: Prisma.AtLeast<PomodoroUserSettingsWhereUniqueInput, 'userId'>;

    @Field(() => PomodoroUserSettingsUpdateToOneWithWhereWithoutUserInput, {nullable:true})
    @Type(() => PomodoroUserSettingsUpdateToOneWithWhereWithoutUserInput)
    update?: PomodoroUserSettingsUpdateToOneWithWhereWithoutUserInput;
}
