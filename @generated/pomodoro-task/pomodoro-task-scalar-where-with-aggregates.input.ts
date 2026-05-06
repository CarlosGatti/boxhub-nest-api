import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumPomodoroTaskStatusWithAggregatesFilter } from '../prisma/enum-pomodoro-task-status-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class PomodoroTaskScalarWhereWithAggregatesInput {

    @Field(() => [PomodoroTaskScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PomodoroTaskScalarWhereWithAggregatesInput>;

    @Field(() => [PomodoroTaskScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PomodoroTaskScalarWhereWithAggregatesInput>;

    @Field(() => [PomodoroTaskScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PomodoroTaskScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => EnumPomodoroTaskStatusWithAggregatesFilter, {nullable:true})
    status?: EnumPomodoroTaskStatusWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    projectId?: IntNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
