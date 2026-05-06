import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PomodoroTaskCreateWithoutSessionsInput } from './pomodoro-task-create-without-sessions.input';
import { Type } from 'class-transformer';
import { PomodoroTaskCreateOrConnectWithoutSessionsInput } from './pomodoro-task-create-or-connect-without-sessions.input';
import { Prisma } from '@prisma/client';
import { PomodoroTaskWhereUniqueInput } from './pomodoro-task-where-unique.input';

@InputType()
export class PomodoroTaskCreateNestedOneWithoutSessionsInput {

    @Field(() => PomodoroTaskCreateWithoutSessionsInput, {nullable:true})
    @Type(() => PomodoroTaskCreateWithoutSessionsInput)
    create?: PomodoroTaskCreateWithoutSessionsInput;

    @Field(() => PomodoroTaskCreateOrConnectWithoutSessionsInput, {nullable:true})
    @Type(() => PomodoroTaskCreateOrConnectWithoutSessionsInput)
    connectOrCreate?: PomodoroTaskCreateOrConnectWithoutSessionsInput;

    @Field(() => PomodoroTaskWhereUniqueInput, {nullable:true})
    @Type(() => PomodoroTaskWhereUniqueInput)
    connect?: Prisma.AtLeast<PomodoroTaskWhereUniqueInput, 'id'>;
}
