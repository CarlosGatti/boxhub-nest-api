import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PomodoroTaskWhereInput } from './pomodoro-task-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumPomodoroTaskStatusFilter } from '../prisma/enum-pomodoro-task-status-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { Type } from 'class-transformer';
import { DefinedProjectNullableRelationFilter } from '../defined-project/defined-project-nullable-relation-filter.input';
import { PomodoroSessionListRelationFilter } from '../pomodoro-session/pomodoro-session-list-relation-filter.input';

@InputType()
export class PomodoroTaskWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [PomodoroTaskWhereInput], {nullable:true})
    AND?: Array<PomodoroTaskWhereInput>;

    @Field(() => [PomodoroTaskWhereInput], {nullable:true})
    OR?: Array<PomodoroTaskWhereInput>;

    @Field(() => [PomodoroTaskWhereInput], {nullable:true})
    NOT?: Array<PomodoroTaskWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => EnumPomodoroTaskStatusFilter, {nullable:true})
    status?: EnumPomodoroTaskStatusFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    projectId?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    @Type(() => UserRelationFilter)
    user?: UserRelationFilter;

    @Field(() => DefinedProjectNullableRelationFilter, {nullable:true})
    @Type(() => DefinedProjectNullableRelationFilter)
    project?: DefinedProjectNullableRelationFilter;

    @Field(() => PomodoroSessionListRelationFilter, {nullable:true})
    sessions?: PomodoroSessionListRelationFilter;
}
