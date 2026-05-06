import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PomodoroTaskWhereUniqueInput } from './pomodoro-task-where-unique.input';
import { Type } from 'class-transformer';
import { PomodoroTaskCreateInput } from './pomodoro-task-create.input';
import { PomodoroTaskUpdateInput } from './pomodoro-task-update.input';

@ArgsType()
export class UpsertOnePomodoroTaskArgs {

    @Field(() => PomodoroTaskWhereUniqueInput, {nullable:false})
    @Type(() => PomodoroTaskWhereUniqueInput)
    where!: Prisma.AtLeast<PomodoroTaskWhereUniqueInput, 'id'>;

    @Field(() => PomodoroTaskCreateInput, {nullable:false})
    @Type(() => PomodoroTaskCreateInput)
    create!: PomodoroTaskCreateInput;

    @Field(() => PomodoroTaskUpdateInput, {nullable:false})
    @Type(() => PomodoroTaskUpdateInput)
    update!: PomodoroTaskUpdateInput;
}
