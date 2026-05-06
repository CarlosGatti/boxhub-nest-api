import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class PomodoroUserSettingsScalarWhereWithAggregatesInput {

    @Field(() => [PomodoroUserSettingsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PomodoroUserSettingsScalarWhereWithAggregatesInput>;

    @Field(() => [PomodoroUserSettingsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PomodoroUserSettingsScalarWhereWithAggregatesInput>;

    @Field(() => [PomodoroUserSettingsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PomodoroUserSettingsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    focusMinutes?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    shortBreakMinutes?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    longBreakMinutes?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    longBreakEvery?: IntWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    autoStartBreaks?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    autoStartFocus?: BoolWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    timezone?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
