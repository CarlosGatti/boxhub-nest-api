import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PomodoroSessionMode } from '../prisma/pomodoro-session-mode.enum';
import { PomodoroSessionStatus } from '../prisma/pomodoro-session-status.enum';
import { PomodoroSessionCountAggregate } from './pomodoro-session-count-aggregate.output';
import { PomodoroSessionAvgAggregate } from './pomodoro-session-avg-aggregate.output';
import { PomodoroSessionSumAggregate } from './pomodoro-session-sum-aggregate.output';
import { PomodoroSessionMinAggregate } from './pomodoro-session-min-aggregate.output';
import { PomodoroSessionMaxAggregate } from './pomodoro-session-max-aggregate.output';

@ObjectType()
export class PomodoroSessionGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:true})
    taskId?: number;

    @Field(() => Int, {nullable:true})
    projectId?: number;

    @Field(() => PomodoroSessionMode, {nullable:false})
    mode!: keyof typeof PomodoroSessionMode;

    @Field(() => PomodoroSessionStatus, {nullable:false})
    status!: keyof typeof PomodoroSessionStatus;

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

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => PomodoroSessionCountAggregate, {nullable:true})
    _count?: PomodoroSessionCountAggregate;

    @Field(() => PomodoroSessionAvgAggregate, {nullable:true})
    _avg?: PomodoroSessionAvgAggregate;

    @Field(() => PomodoroSessionSumAggregate, {nullable:true})
    _sum?: PomodoroSessionSumAggregate;

    @Field(() => PomodoroSessionMinAggregate, {nullable:true})
    _min?: PomodoroSessionMinAggregate;

    @Field(() => PomodoroSessionMaxAggregate, {nullable:true})
    _max?: PomodoroSessionMaxAggregate;
}
