import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HomeOpsTaskInstanceWeeklyPlanIdSourceKeyCompoundUniqueInput } from './home-ops-task-instance-weekly-plan-id-source-key-compound-unique.input';
import { HomeOpsTaskInstanceWhereInput } from './home-ops-task-instance-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumHomeOpsTaskStatusFilter } from '../prisma/enum-home-ops-task-status-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { HomeOpsHouseholdRelationFilter } from '../home-ops-household/home-ops-household-relation-filter.input';
import { HomeOpsTaskTemplateNullableRelationFilter } from '../home-ops-task-template/home-ops-task-template-nullable-relation-filter.input';
import { HomeOpsWeeklyPlanNullableRelationFilter } from '../home-ops-weekly-plan/home-ops-weekly-plan-nullable-relation-filter.input';
import { UserNullableRelationFilter } from '../user/user-nullable-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class HomeOpsTaskInstanceWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => HomeOpsTaskInstanceWeeklyPlanIdSourceKeyCompoundUniqueInput, {nullable:true})
    weeklyPlanId_sourceKey?: HomeOpsTaskInstanceWeeklyPlanIdSourceKeyCompoundUniqueInput;

    @Field(() => [HomeOpsTaskInstanceWhereInput], {nullable:true})
    AND?: Array<HomeOpsTaskInstanceWhereInput>;

    @Field(() => [HomeOpsTaskInstanceWhereInput], {nullable:true})
    OR?: Array<HomeOpsTaskInstanceWhereInput>;

    @Field(() => [HomeOpsTaskInstanceWhereInput], {nullable:true})
    NOT?: Array<HomeOpsTaskInstanceWhereInput>;

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

    @Field(() => HomeOpsHouseholdRelationFilter, {nullable:true})
    household?: HomeOpsHouseholdRelationFilter;

    @Field(() => HomeOpsTaskTemplateNullableRelationFilter, {nullable:true})
    template?: HomeOpsTaskTemplateNullableRelationFilter;

    @Field(() => HomeOpsWeeklyPlanNullableRelationFilter, {nullable:true})
    weeklyPlan?: HomeOpsWeeklyPlanNullableRelationFilter;

    @Field(() => UserNullableRelationFilter, {nullable:true})
    @Type(() => UserNullableRelationFilter)
    assignee?: UserNullableRelationFilter;

    @Field(() => UserNullableRelationFilter, {nullable:true})
    @Type(() => UserNullableRelationFilter)
    completedBy?: UserNullableRelationFilter;
}
