import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PomodoroTaskWhereUniqueInput } from './pomodoro-task-where-unique.input';
import { Type } from 'class-transformer';
import { PomodoroTaskUpdateWithoutProjectInput } from './pomodoro-task-update-without-project.input';

@InputType()
export class PomodoroTaskUpdateWithWhereUniqueWithoutProjectInput {

    @Field(() => PomodoroTaskWhereUniqueInput, {nullable:false})
    @Type(() => PomodoroTaskWhereUniqueInput)
    where!: Prisma.AtLeast<PomodoroTaskWhereUniqueInput, 'id'>;

    @Field(() => PomodoroTaskUpdateWithoutProjectInput, {nullable:false})
    @Type(() => PomodoroTaskUpdateWithoutProjectInput)
    data!: PomodoroTaskUpdateWithoutProjectInput;
}
