import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PomodoroSessionCountOrderByAggregateInput } from './pomodoro-session-count-order-by-aggregate.input';
import { PomodoroSessionAvgOrderByAggregateInput } from './pomodoro-session-avg-order-by-aggregate.input';
import { PomodoroSessionMaxOrderByAggregateInput } from './pomodoro-session-max-order-by-aggregate.input';
import { PomodoroSessionMinOrderByAggregateInput } from './pomodoro-session-min-order-by-aggregate.input';
import { PomodoroSessionSumOrderByAggregateInput } from './pomodoro-session-sum-order-by-aggregate.input';

@InputType()
export class PomodoroSessionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    taskId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    projectId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    mode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    durationMinutes?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    startedAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    pausedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    resumedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    completedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    cancelledAt?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => PomodoroSessionCountOrderByAggregateInput, {nullable:true})
    _count?: PomodoroSessionCountOrderByAggregateInput;

    @Field(() => PomodoroSessionAvgOrderByAggregateInput, {nullable:true})
    _avg?: PomodoroSessionAvgOrderByAggregateInput;

    @Field(() => PomodoroSessionMaxOrderByAggregateInput, {nullable:true})
    _max?: PomodoroSessionMaxOrderByAggregateInput;

    @Field(() => PomodoroSessionMinOrderByAggregateInput, {nullable:true})
    _min?: PomodoroSessionMinOrderByAggregateInput;

    @Field(() => PomodoroSessionSumOrderByAggregateInput, {nullable:true})
    _sum?: PomodoroSessionSumOrderByAggregateInput;
}
