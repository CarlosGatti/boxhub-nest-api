import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PomodoroTaskWhereUniqueInput } from './pomodoro-task-where-unique.input';
import { Type } from 'class-transformer';
import { PomodoroTaskCreateWithoutProjectInput } from './pomodoro-task-create-without-project.input';

@InputType()
export class PomodoroTaskCreateOrConnectWithoutProjectInput {

    @Field(() => PomodoroTaskWhereUniqueInput, {nullable:false})
    @Type(() => PomodoroTaskWhereUniqueInput)
    where!: Prisma.AtLeast<PomodoroTaskWhereUniqueInput, 'id'>;

    @Field(() => PomodoroTaskCreateWithoutProjectInput, {nullable:false})
    @Type(() => PomodoroTaskCreateWithoutProjectInput)
    create!: PomodoroTaskCreateWithoutProjectInput;
}
