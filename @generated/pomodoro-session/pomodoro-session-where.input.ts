import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { EnumPomodoroSessionModeFilter } from '../prisma/enum-pomodoro-session-mode-filter.input';
import { EnumPomodoroSessionStatusFilter } from '../prisma/enum-pomodoro-session-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { Type } from 'class-transformer';
import { PomodoroTaskNullableRelationFilter } from '../pomodoro-task/pomodoro-task-nullable-relation-filter.input';
import { DefinedProjectNullableRelationFilter } from '../defined-project/defined-project-nullable-relation-filter.input';

@InputType()
export class PomodoroSessionWhereInput {

    @Field(() => [PomodoroSessionWhereInput], {nullable:true})
    AND?: Array<PomodoroSessionWhereInput>;

    @Field(() => [PomodoroSessionWhereInput], {nullable:true})
    OR?: Array<PomodoroSessionWhereInput>;

    @Field(() => [PomodoroSessionWhereInput], {nullable:true})
    NOT?: Array<PomodoroSessionWhereInput>;

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

    @Field(() => UserRelationFilter, {nullable:true})
    @Type(() => UserRelationFilter)
    user?: UserRelationFilter;

    @Field(() => PomodoroTaskNullableRelationFilter, {nullable:true})
    task?: PomodoroTaskNullableRelationFilter;

    @Field(() => DefinedProjectNullableRelationFilter, {nullable:true})
    project?: DefinedProjectNullableRelationFilter;
}
