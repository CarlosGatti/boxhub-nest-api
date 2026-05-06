import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { EnumPomodoroSessionModeFilter } from '../prisma/enum-pomodoro-session-mode-filter.input';
import { EnumPomodoroSessionStatusFilter } from '../prisma/enum-pomodoro-session-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class PomodoroSessionScalarWhereInput {

    @Field(() => [PomodoroSessionScalarWhereInput], {nullable:true})
    AND?: Array<PomodoroSessionScalarWhereInput>;

    @Field(() => [PomodoroSessionScalarWhereInput], {nullable:true})
    OR?: Array<PomodoroSessionScalarWhereInput>;

    @Field(() => [PomodoroSessionScalarWhereInput], {nullable:true})
    NOT?: Array<PomodoroSessionScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    taskId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    projectId?: IntNullableFilter;

    @Field(() => EnumPomodoroSessionModeFilter, {nullable:true})
    mode?: EnumPomodoroSessionModeFilter;

    @Field(() => EnumPomodoroSessionStatusFilter, {nullable:true})
    status?: EnumPomodoroSessionStatusFilter;

    @Field(() => IntFilter, {nullable:true})
    durationMinutes?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    startedAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    pausedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    resumedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    completedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    cancelledAt?: DateTimeNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
