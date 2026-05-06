import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PomodoroTaskWhereUniqueInput } from './pomodoro-task-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquePomodoroTaskArgs {

    @Field(() => PomodoroTaskWhereUniqueInput, {nullable:false})
    @Type(() => PomodoroTaskWhereUniqueInput)
    where!: Prisma.AtLeast<PomodoroTaskWhereUniqueInput, 'id'>;
}
