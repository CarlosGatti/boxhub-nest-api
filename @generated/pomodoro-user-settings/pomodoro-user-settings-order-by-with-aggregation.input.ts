import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PomodoroUserSettingsCountOrderByAggregateInput } from './pomodoro-user-settings-count-order-by-aggregate.input';
import { PomodoroUserSettingsAvgOrderByAggregateInput } from './pomodoro-user-settings-avg-order-by-aggregate.input';
import { PomodoroUserSettingsMaxOrderByAggregateInput } from './pomodoro-user-settings-max-order-by-aggregate.input';
import { PomodoroUserSettingsMinOrderByAggregateInput } from './pomodoro-user-settings-min-order-by-aggregate.input';
import { PomodoroUserSettingsSumOrderByAggregateInput } from './pomodoro-user-settings-sum-order-by-aggregate.input';

@InputType()
export class PomodoroUserSettingsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    focusMinutes?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    shortBreakMinutes?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    longBreakMinutes?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    longBreakEvery?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    autoStartBreaks?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    autoStartFocus?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    timezone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => PomodoroUserSettingsCountOrderByAggregateInput, {nullable:true})
    _count?: PomodoroUserSettingsCountOrderByAggregateInput;

    @Field(() => PomodoroUserSettingsAvgOrderByAggregateInput, {nullable:true})
    _avg?: PomodoroUserSettingsAvgOrderByAggregateInput;

    @Field(() => PomodoroUserSettingsMaxOrderByAggregateInput, {nullable:true})
    _max?: PomodoroUserSettingsMaxOrderByAggregateInput;

    @Field(() => PomodoroUserSettingsMinOrderByAggregateInput, {nullable:true})
    _min?: PomodoroUserSettingsMinOrderByAggregateInput;

    @Field(() => PomodoroUserSettingsSumOrderByAggregateInput, {nullable:true})
    _sum?: PomodoroUserSettingsSumOrderByAggregateInput;
}
