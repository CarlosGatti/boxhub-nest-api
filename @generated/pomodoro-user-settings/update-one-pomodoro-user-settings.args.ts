import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PomodoroUserSettingsUpdateInput } from './pomodoro-user-settings-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PomodoroUserSettingsWhereUniqueInput } from './pomodoro-user-settings-where-unique.input';

@ArgsType()
export class UpdateOnePomodoroUserSettingsArgs {

    @Field(() => PomodoroUserSettingsUpdateInput, {nullable:false})
    @Type(() => PomodoroUserSettingsUpdateInput)
    data!: PomodoroUserSettingsUpdateInput;

    @Field(() => PomodoroUserSettingsWhereUniqueInput, {nullable:false})
    @Type(() => PomodoroUserSettingsWhereUniqueInput)
    where!: Prisma.AtLeast<PomodoroUserSettingsWhereUniqueInput, 'userId'>;
}
