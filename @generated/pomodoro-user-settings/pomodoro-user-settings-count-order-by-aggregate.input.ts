import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PomodoroUserSettingsCountOrderByAggregateInput {

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
}
