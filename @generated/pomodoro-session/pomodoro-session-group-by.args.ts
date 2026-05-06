import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PomodoroSessionWhereInput } from './pomodoro-session-where.input';
import { Type } from 'class-transformer';
import { PomodoroSessionOrderByWithAggregationInput } from './pomodoro-session-order-by-with-aggregation.input';
import { PomodoroSessionScalarFieldEnum } from './pomodoro-session-scalar-field.enum';
import { PomodoroSessionScalarWhereWithAggregatesInput } from './pomodoro-session-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PomodoroSessionCountAggregateInput } from './pomodoro-session-count-aggregate.input';
import { PomodoroSessionAvgAggregateInput } from './pomodoro-session-avg-aggregate.input';
import { PomodoroSessionSumAggregateInput } from './pomodoro-session-sum-aggregate.input';
import { PomodoroSessionMinAggregateInput } from './pomodoro-session-min-aggregate.input';
import { PomodoroSessionMaxAggregateInput } from './pomodoro-session-max-aggregate.input';

@ArgsType()
export class PomodoroSessionGroupByArgs {

    @Field(() => PomodoroSessionWhereInput, {nullable:true})
    @Type(() => PomodoroSessionWhereInput)
    where?: PomodoroSessionWhereInput;

    @Field(() => [PomodoroSessionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PomodoroSessionOrderByWithAggregationInput>;

    @Field(() => [PomodoroSessionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PomodoroSessionScalarFieldEnum>;

    @Field(() => PomodoroSessionScalarWhereWithAggregatesInput, {nullable:true})
    having?: PomodoroSessionScalarWhereWithAggregatesInput;

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
