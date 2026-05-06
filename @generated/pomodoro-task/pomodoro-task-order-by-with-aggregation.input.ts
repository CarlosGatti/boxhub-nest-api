import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PomodoroTaskCountOrderByAggregateInput } from './pomodoro-task-count-order-by-aggregate.input';
import { PomodoroTaskAvgOrderByAggregateInput } from './pomodoro-task-avg-order-by-aggregate.input';
import { PomodoroTaskMaxOrderByAggregateInput } from './pomodoro-task-max-order-by-aggregate.input';
import { PomodoroTaskMinOrderByAggregateInput } from './pomodoro-task-min-order-by-aggregate.input';
import { PomodoroTaskSumOrderByAggregateInput } from './pomodoro-task-sum-order-by-aggregate.input';

@InputType()
export class PomodoroTaskOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    projectId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => PomodoroTaskCountOrderByAggregateInput, {nullable:true})
    _count?: PomodoroTaskCountOrderByAggregateInput;

    @Field(() => PomodoroTaskAvgOrderByAggregateInput, {nullable:true})
    _avg?: PomodoroTaskAvgOrderByAggregateInput;

    @Field(() => PomodoroTaskMaxOrderByAggregateInput, {nullable:true})
    _max?: PomodoroTaskMaxOrderByAggregateInput;

    @Field(() => PomodoroTaskMinOrderByAggregateInput, {nullable:true})
    _min?: PomodoroTaskMinOrderByAggregateInput;

    @Field(() => PomodoroTaskSumOrderByAggregateInput, {nullable:true})
    _sum?: PomodoroTaskSumOrderByAggregateInput;
}
