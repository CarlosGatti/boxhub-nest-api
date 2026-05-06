import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PomodoroTaskWhereUniqueInput } from './pomodoro-task-where-unique.input';
import { Type } from 'class-transformer';
import { PomodoroTaskUpdateWithoutProjectInput } from './pomodoro-task-update-without-project.input';
import { PomodoroTaskCreateWithoutProjectInput } from './pomodoro-task-create-without-project.input';

@InputType()
export class PomodoroTaskUpsertWithWhereUniqueWithoutProjectInput {

    @Field(() => PomodoroTaskWhereUniqueInput, {nullable:false})
    @Type(() => PomodoroTaskWhereUniqueInput)
    where!: Prisma.AtLeast<PomodoroTaskWhereUniqueInput, 'id'>;

    @Field(() => PomodoroTaskUpdateWithoutProjectInput, {nullable:false})
    @Type(() => PomodoroTaskUpdateWithoutProjectInput)
    update!: PomodoroTaskUpdateWithoutProjectInput;

    @Field(() => PomodoroTaskCreateWithoutProjectInput, {nullable:false})
    @Type(() => PomodoroTaskCreateWithoutProjectInput)
    create!: PomodoroTaskCreateWithoutProjectInput;
}
