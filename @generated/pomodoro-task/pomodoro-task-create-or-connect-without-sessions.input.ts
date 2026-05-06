import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PomodoroTaskWhereUniqueInput } from './pomodoro-task-where-unique.input';
import { Type } from 'class-transformer';
import { PomodoroTaskCreateWithoutSessionsInput } from './pomodoro-task-create-without-sessions.input';

@InputType()
export class PomodoroTaskCreateOrConnectWithoutSessionsInput {

    @Field(() => PomodoroTaskWhereUniqueInput, {nullable:false})
    @Type(() => PomodoroTaskWhereUniqueInput)
    where!: Prisma.AtLeast<PomodoroTaskWhereUniqueInput, 'id'>;

    @Field(() => PomodoroTaskCreateWithoutSessionsInput, {nullable:false})
    @Type(() => PomodoroTaskCreateWithoutSessionsInput)
    create!: PomodoroTaskCreateWithoutSessionsInput;
}
