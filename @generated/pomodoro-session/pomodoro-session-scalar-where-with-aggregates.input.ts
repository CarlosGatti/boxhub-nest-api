import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { EnumPomodoroSessionModeWithAggregatesFilter } from '../prisma/enum-pomodoro-session-mode-with-aggregates-filter.input';
import { EnumPomodoroSessionStatusWithAggregatesFilter } from '../prisma/enum-pomodoro-session-status-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class PomodoroSessionScalarWhereWithAggregatesInput {

    @Field(() => [PomodoroSessionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PomodoroSessionScalarWhereWithAggregatesInput>;

    @Field(() => [PomodoroSessionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PomodoroSessionScalarWhereWithAggregatesInput>;

    @Field(() => [PomodoroSessionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PomodoroSessionScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    taskId?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    projectId?: IntNullableWithAggregatesFilter;

    @Field(() => EnumPomodoroSessionModeWithAggregatesFilter, {nullable:true})
    mode?: EnumPomodoroSessionModeWithAggregatesFilter;

    @Field(() => EnumPomodoroSessionStatusWithAggregatesFilter, {nullable:true})
    status?: EnumPomodoroSessionStatusWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    durationMinutes?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    startedAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    pausedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    resumedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    completedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    cancelledAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
