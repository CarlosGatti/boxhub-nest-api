import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumPomodoroTaskStatusFilter } from '../prisma/enum-pomodoro-task-status-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PomodoroTaskScalarWhereInput {

    @Field(() => [PomodoroTaskScalarWhereInput], {nullable:true})
    AND?: Array<PomodoroTaskScalarWhereInput>;

    @Field(() => [PomodoroTaskScalarWhereInput], {nullable:true})
    OR?: Array<PomodoroTaskScalarWhereInput>;

    @Field(() => [PomodoroTaskScalarWhereInput], {nullable:true})
    NOT?: Array<PomodoroTaskScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

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
}
