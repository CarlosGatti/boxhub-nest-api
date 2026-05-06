import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PomodoroSessionMode } from '../prisma/pomodoro-session-mode.enum';
import { PomodoroSessionStatus } from '../prisma/pomodoro-session-status.enum';
import { Int } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutPomodoroSessionsInput } from '../user/user-create-nested-one-without-pomodoro-sessions.input';
import { Type } from 'class-transformer';
import { PomodoroTaskCreateNestedOneWithoutSessionsInput } from '../pomodoro-task/pomodoro-task-create-nested-one-without-sessions.input';

@InputType()
export class PomodoroSessionCreateWithoutProjectInput {

    @Field(() => PomodoroSessionMode, {nullable:false})
    mode!: keyof typeof PomodoroSessionMode;

    @Field(() => PomodoroSessionStatus, {nullable:true})
    status?: keyof typeof PomodoroSessionStatus;

    @Field(() => Int, {nullable:false})
    durationMinutes!: number;

    @Field(() => Date, {nullable:false})
    startedAt!: Date | string;

    @Field(() => Date, {nullable:true})
    pausedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    resumedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    completedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    cancelledAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutPomodoroSessionsInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutPomodoroSessionsInput)
    user!: UserCreateNestedOneWithoutPomodoroSessionsInput;

    @Field(() => PomodoroTaskCreateNestedOneWithoutSessionsInput, {nullable:true})
    task?: PomodoroTaskCreateNestedOneWithoutSessionsInput;
}
