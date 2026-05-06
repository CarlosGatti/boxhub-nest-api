import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PomodoroTaskWhereInput } from './pomodoro-task-where.input';
import { Type } from 'class-transformer';
import { PomodoroTaskOrderByWithRelationInput } from './pomodoro-task-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PomodoroTaskWhereUniqueInput } from './pomodoro-task-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PomodoroTaskCountAggregateInput } from './pomodoro-task-count-aggregate.input';
import { PomodoroTaskAvgAggregateInput } from './pomodoro-task-avg-aggregate.input';
import { PomodoroTaskSumAggregateInput } from './pomodoro-task-sum-aggregate.input';
import { PomodoroTaskMinAggregateInput } from './pomodoro-task-min-aggregate.input';
import { PomodoroTaskMaxAggregateInput } from './pomodoro-task-max-aggregate.input';

@ArgsType()
export class PomodoroTaskAggregateArgs {

    @Field(() => PomodoroTaskWhereInput, {nullable:true})
    @Type(() => PomodoroTaskWhereInput)
    where?: PomodoroTaskWhereInput;

    @Field(() => [PomodoroTaskOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PomodoroTaskOrderByWithRelationInput>;

    @Field(() => PomodoroTaskWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PomodoroTaskWhereUniqueInput, 'id'>;

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
