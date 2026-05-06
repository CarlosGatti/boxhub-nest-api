import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PomodoroSessionCountAggregate } from './pomodoro-session-count-aggregate.output';
import { PomodoroSessionAvgAggregate } from './pomodoro-session-avg-aggregate.output';
import { PomodoroSessionSumAggregate } from './pomodoro-session-sum-aggregate.output';
import { PomodoroSessionMinAggregate } from './pomodoro-session-min-aggregate.output';
import { PomodoroSessionMaxAggregate } from './pomodoro-session-max-aggregate.output';

@ObjectType()
export class AggregatePomodoroSession {

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
