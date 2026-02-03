import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumHomeOpsWeeklyPlanStatusFilter } from '../prisma/enum-home-ops-weekly-plan-status-filter.input';
import { HomeOpsHouseholdRelationFilter } from '../home-ops-household/home-ops-household-relation-filter.input';
import { HomeOpsTaskInstanceListRelationFilter } from '../home-ops-task-instance/home-ops-task-instance-list-relation-filter.input';

@InputType()
export class HomeOpsWeeklyPlanWhereInput {

    @Field(() => [HomeOpsWeeklyPlanWhereInput], {nullable:true})
    AND?: Array<HomeOpsWeeklyPlanWhereInput>;

    @Field(() => [HomeOpsWeeklyPlanWhereInput], {nullable:true})
    OR?: Array<HomeOpsWeeklyPlanWhereInput>;

    @Field(() => [HomeOpsWeeklyPlanWhereInput], {nullable:true})
    NOT?: Array<HomeOpsWeeklyPlanWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    householdId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    weekStartDate?: DateTimeFilter;

    @Field(() => EnumHomeOpsWeeklyPlanStatusFilter, {nullable:true})
    status?: EnumHomeOpsWeeklyPlanStatusFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => HomeOpsHouseholdRelationFilter, {nullable:true})
    household?: HomeOpsHouseholdRelationFilter;

    @Field(() => HomeOpsTaskInstanceListRelationFilter, {nullable:true})
    tasks?: HomeOpsTaskInstanceListRelationFilter;
}
