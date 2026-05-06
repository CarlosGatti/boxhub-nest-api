import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PomodoroSessionWhereInput } from './pomodoro-session-where.input';
import { Type } from 'class-transformer';
import { PomodoroSessionOrderByWithRelationInput } from './pomodoro-session-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PomodoroSessionWhereUniqueInput } from './pomodoro-session-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PomodoroSessionCountAggregateInput } from './pomodoro-session-count-aggregate.input';
import { PomodoroSessionAvgAggregateInput } from './pomodoro-session-avg-aggregate.input';
import { PomodoroSessionSumAggregateInput } from './pomodoro-session-sum-aggregate.input';
import { PomodoroSessionMinAggregateInput } from './pomodoro-session-min-aggregate.input';
import { PomodoroSessionMaxAggregateInput } from './pomodoro-session-max-aggregate.input';

@ArgsType()
export class PomodoroSessionAggregateArgs {

    @Field(() => PomodoroSessionWhereInput, {nullable:true})
    @Type(() => PomodoroSessionWhereInput)
    where?: PomodoroSessionWhereInput;

    @Field(() => [PomodoroSessionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PomodoroSessionOrderByWithRelationInput>;

    @Field(() => PomodoroSessionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PomodoroSessionWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PomodoroSessionCountAggregateInput, {nullable:true})
    _count?: PomodoroSessionCountAggregateInput;

    @Field(() => PomodoroSessionAvgAggregateInput, {nullable:true})
    _avg?: PomodoroSessionAvgAggregateInput;

    @Field(() => PomodoroSessionSumAggregateInput, {nullable:true})
    _sum?: PomodoroSessionSumAggregateInput;

    @Field(() => PomodoroSessionMinAggregateInput, {nullable:true})
    _min?: PomodoroSessionMinAggregateInput;

    @Field(() => PomodoroSessionMaxAggregateInput, {nullable:true})
    _max?: PomodoroSessionMaxAggregateInput;
}
