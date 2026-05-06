import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PomodoroTaskUpdateInput } from './pomodoro-task-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PomodoroTaskWhereUniqueInput } from './pomodoro-task-where-unique.input';

@ArgsType()
export class UpdateOnePomodoroTaskArgs {

    @Field(() => PomodoroTaskUpdateInput, {nullable:false})
    @Type(() => PomodoroTaskUpdateInput)
    data!: PomodoroTaskUpdateInput;

    @Field(() => PomodoroTaskWhereUniqueInput, {nullable:false})
    @Type(() => PomodoroTaskWhereUniqueInput)
    where!: Prisma.AtLeast<PomodoroTaskWhereUniqueInput, 'id'>;
}
