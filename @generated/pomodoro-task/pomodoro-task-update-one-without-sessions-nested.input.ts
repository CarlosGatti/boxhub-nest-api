import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PomodoroTaskCreateWithoutSessionsInput } from './pomodoro-task-create-without-sessions.input';
import { Type } from 'class-transformer';
import { PomodoroTaskCreateOrConnectWithoutSessionsInput } from './pomodoro-task-create-or-connect-without-sessions.input';
import { PomodoroTaskUpsertWithoutSessionsInput } from './pomodoro-task-upsert-without-sessions.input';
import { PomodoroTaskWhereInput } from './pomodoro-task-where.input';
import { Prisma } from '@prisma/client';
import { PomodoroTaskWhereUniqueInput } from './pomodoro-task-where-unique.input';
import { PomodoroTaskUpdateToOneWithWhereWithoutSessionsInput } from './pomodoro-task-update-to-one-with-where-without-sessions.input';

@InputType()
export class PomodoroTaskUpdateOneWithoutSessionsNestedInput {

    @Field(() => PomodoroTaskCreateWithoutSessionsInput, {nullable:true})
    @Type(() => PomodoroTaskCreateWithoutSessionsInput)
    create?: PomodoroTaskCreateWithoutSessionsInput;

    @Field(() => PomodoroTaskCreateOrConnectWithoutSessionsInput, {nullable:true})
    @Type(() => PomodoroTaskCreateOrConnectWithoutSessionsInput)
    connectOrCreate?: PomodoroTaskCreateOrConnectWithoutSessionsInput;

    @Field(() => PomodoroTaskUpsertWithoutSessionsInput, {nullable:true})
    @Type(() => PomodoroTaskUpsertWithoutSessionsInput)
    upsert?: PomodoroTaskUpsertWithoutSessionsInput;

    @Field(() => PomodoroTaskWhereInput, {nullable:true})
    @Type(() => PomodoroTaskWhereInput)
    disconnect?: PomodoroTaskWhereInput;

    @Field(() => PomodoroTaskWhereInput, {nullable:true})
    @Type(() => PomodoroTaskWhereInput)
    delete?: PomodoroTaskWhereInput;

    @Field(() => PomodoroTaskWhereUniqueInput, {nullable:true})
    @Type(() => PomodoroTaskWhereUniqueInput)
    connect?: Prisma.AtLeast<PomodoroTaskWhereUniqueInput, 'id'>;

    @Field(() => PomodoroTaskUpdateToOneWithWhereWithoutSessionsInput, {nullable:true})
    @Type(() => PomodoroTaskUpdateToOneWithWhereWithoutSessionsInput)
    update?: PomodoroTaskUpdateToOneWithWhereWithoutSessionsInput;
}
