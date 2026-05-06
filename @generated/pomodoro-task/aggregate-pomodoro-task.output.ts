import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PomodoroTaskCountAggregate } from './pomodoro-task-count-aggregate.output';
import { PomodoroTaskAvgAggregate } from './pomodoro-task-avg-aggregate.output';
import { PomodoroTaskSumAggregate } from './pomodoro-task-sum-aggregate.output';
import { PomodoroTaskMinAggregate } from './pomodoro-task-min-aggregate.output';
import { PomodoroTaskMaxAggregate } from './pomodoro-task-max-aggregate.output';

@ObjectType()
export class AggregatePomodoroTask {

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
