import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PomodoroTaskWhereInput } from './pomodoro-task-where.input';
import { Type } from 'class-transformer';
import { PomodoroTaskOrderByWithAggregationInput } from './pomodoro-task-order-by-with-aggregation.input';
import { PomodoroTaskScalarFieldEnum } from './pomodoro-task-scalar-field.enum';
import { PomodoroTaskScalarWhereWithAggregatesInput } from './pomodoro-task-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PomodoroTaskCountAggregateInput } from './pomodoro-task-count-aggregate.input';
import { PomodoroTaskAvgAggregateInput } from './pomodoro-task-avg-aggregate.input';
import { PomodoroTaskSumAggregateInput } from './pomodoro-task-sum-aggregate.input';
import { PomodoroTaskMinAggregateInput } from './pomodoro-task-min-aggregate.input';
import { PomodoroTaskMaxAggregateInput } from './pomodoro-task-max-aggregate.input';

@ArgsType()
export class PomodoroTaskGroupByArgs {

    @Field(() => PomodoroTaskWhereInput, {nullable:true})
    @Type(() => PomodoroTaskWhereInput)
    where?: PomodoroTaskWhereInput;

    @Field(() => [PomodoroTaskOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PomodoroTaskOrderByWithAggregationInput>;

    @Field(() => [PomodoroTaskScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PomodoroTaskScalarFieldEnum>;

    @Field(() => PomodoroTaskScalarWhereWithAggregatesInput, {nullable:true})
    having?: PomodoroTaskScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PomodoroTaskCountAggregateInput, {nullable:true})
    _count?: PomodoroTaskCountAggregateInput;

    @Field(() => PomodoroTaskAvgAggregateInput, {nullable:true})
    _avg?: PomodoroTaskAvgAggregateInput;

    @Field(() => PomodoroTaskSumAggregateInput, {nullable:true})
    _sum?: PomodoroTaskSumAggregateInput;

    @Field(() => PomodoroTaskMinAggregateInput, {nullable:true})
    _min?: PomodoroTaskMinAggregateInput;

    @Field(() => PomodoroTaskMaxAggregateInput, {nullable:true})
    _max?: PomodoroTaskMaxAggregateInput;
}
