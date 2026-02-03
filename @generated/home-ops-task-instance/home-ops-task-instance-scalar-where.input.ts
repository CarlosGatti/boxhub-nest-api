import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumHomeOpsTaskStatusFilter } from '../prisma/enum-home-ops-task-status-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class HomeOpsTaskInstanceScalarWhereInput {

    @Field(() => [HomeOpsTaskInstanceScalarWhereInput], {nullable:true})
    AND?: Array<HomeOpsTaskInstanceScalarWhereInput>;

    @Field(() => [HomeOpsTaskInstanceScalarWhereInput], {nullable:true})
    OR?: Array<HomeOpsTaskInstanceScalarWhereInput>;

    @Field(() => [HomeOpsTaskInstanceScalarWhereInput], {nullable:true})
    NOT?: Array<HomeOpsTaskInstanceScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    householdId?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    templateId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    weeklyPlanId?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    sourceKey?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    category?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    points?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    effortWeight?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    estimatedMinutes?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    dueDate?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    slotLabel?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    windowStart?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    windowEnd?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    assigneeId?: IntNullableFilter;

    @Field(() => EnumHomeOpsTaskStatusFilter, {nullable:true})
    status?: EnumHomeOpsTaskStatusFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    completedAt?: DateTimeNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    completedById?: IntNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    skippedAt?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    skipReason?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
