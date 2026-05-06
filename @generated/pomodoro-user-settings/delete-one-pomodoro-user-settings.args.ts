import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PomodoroUserSettingsWhereUniqueInput } from './pomodoro-user-settings-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnePomodoroUserSettingsArgs {

    @Field(() => PomodoroUserSettingsWhereUniqueInput, {nullable:false})
    @Type(() => PomodoroUserSettingsWhereUniqueInput)
    where!: Prisma.AtLeast<PomodoroUserSettingsWhereUniqueInput, 'userId'>;
}
