import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PomodoroUserSettingsWhereUniqueInput } from './pomodoro-user-settings-where-unique.input';
import { Type } from 'class-transformer';
import { PomodoroUserSettingsCreateInput } from './pomodoro-user-settings-create.input';
import { PomodoroUserSettingsUpdateInput } from './pomodoro-user-settings-update.input';

@ArgsType()
export class UpsertOnePomodoroUserSettingsArgs {

    @Field(() => PomodoroUserSettingsWhereUniqueInput, {nullable:false})
    @Type(() => PomodoroUserSettingsWhereUniqueInput)
    where!: Prisma.AtLeast<PomodoroUserSettingsWhereUniqueInput, 'userId'>;

    @Field(() => PomodoroUserSettingsCreateInput, {nullable:false})
    @Type(() => PomodoroUserSettingsCreateInput)
    create!: PomodoroUserSettingsCreateInput;

    @Field(() => PomodoroUserSettingsUpdateInput, {nullable:false})
    @Type(() => PomodoroUserSettingsUpdateInput)
    update!: PomodoroUserSettingsUpdateInput;
}
