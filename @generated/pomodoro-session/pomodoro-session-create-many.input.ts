import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PomodoroSessionMode } from '../prisma/pomodoro-session-mode.enum';
import { PomodoroSessionStatus } from '../prisma/pomodoro-session-status.enum';

@InputType()
export class PomodoroSessionCreateManyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:true})
    taskId?: number;

    @Field(() => Int, {nullable:true})
    projectId?: number;

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
}
