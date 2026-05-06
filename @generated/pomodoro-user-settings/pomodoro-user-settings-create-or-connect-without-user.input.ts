import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PomodoroUserSettingsWhereUniqueInput } from './pomodoro-user-settings-where-unique.input';
import { Type } from 'class-transformer';
import { PomodoroUserSettingsCreateWithoutUserInput } from './pomodoro-user-settings-create-without-user.input';

@InputType()
export class PomodoroUserSettingsCreateOrConnectWithoutUserInput {

    @Field(() => PomodoroUserSettingsWhereUniqueInput, {nullable:false})
    @Type(() => PomodoroUserSettingsWhereUniqueInput)
    where!: Prisma.AtLeast<PomodoroUserSettingsWhereUniqueInput, 'userId'>;

    @Field(() => PomodoroUserSettingsCreateWithoutUserInput, {nullable:false})
    @Type(() => PomodoroUserSettingsCreateWithoutUserInput)
    create!: PomodoroUserSettingsCreateWithoutUserInput;
}
