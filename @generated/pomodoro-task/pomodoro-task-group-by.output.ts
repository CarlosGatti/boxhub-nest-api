import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PomodoroTaskStatus } from '../prisma/pomodoro-task-status.enum';
import { PomodoroTaskCountAggregate } from './pomodoro-task-count-aggregate.output';
import { PomodoroTaskAvgAggregate } from './pomodoro-task-avg-aggregate.output';
import { PomodoroTaskSumAggregate } from './pomodoro-task-sum-aggregate.output';
import { PomodoroTaskMinAggregate } from './pomodoro-task-min-aggregate.output';
import { PomodoroTaskMaxAggregate } from './pomodoro-task-max-aggregate.output';

@ObjectType()
export class PomodoroTaskGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => PomodoroTaskStatus, {nullable:false})
    status!: keyof typeof PomodoroTaskStatus;

    @Field(() => Int, {nullable:true})
    projectId?: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => PomodoroTaskCountAggregate, {nullable:true})
    _count?: PomodoroTaskCountAggregate;

    @Field(() => PomodoroTaskAvgAggregate, {nullable:true})
    _avg?: PomodoroTaskAvgAggregate;

    @Field(() => PomodoroTaskSumAggregate, {nullable:true})
    _sum?: PomodoroTaskSumAggregate;

    @Field(() => PomodoroTaskMinAggregate, {nullable:true})
    _min?: PomodoroTaskMinAggregate;

    @Field(() => PomodoroTaskMaxAggregate, {nullable:true})
    _max?: PomodoroTaskMaxAggregate;
}
