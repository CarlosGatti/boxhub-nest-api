import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PomodoroSessionWhereUniqueInput } from './pomodoro-session-where-unique.input';
import { Type } from 'class-transformer';
import { PomodoroSessionCreateInput } from './pomodoro-session-create.input';
import { PomodoroSessionUpdateInput } from './pomodoro-session-update.input';

@ArgsType()
export class UpsertOnePomodoroSessionArgs {

    @Field(() => PomodoroSessionWhereUniqueInput, {nullable:false})
    @Type(() => PomodoroSessionWhereUniqueInput)
    where!: Prisma.AtLeast<PomodoroSessionWhereUniqueInput, 'id'>;

    @Field(() => PomodoroSessionCreateInput, {nullable:false})
    @Type(() => PomodoroSessionCreateInput)
    create!: PomodoroSessionCreateInput;

    @Field(() => PomodoroSessionUpdateInput, {nullable:false})
    @Type(() => PomodoroSessionUpdateInput)
    update!: PomodoroSessionUpdateInput;
}
